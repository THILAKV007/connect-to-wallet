const express = require('express')
const cors = require('cors')
const fetch = require('node-fetch')
const path = require('path')
const fs = require('fs')
const dotenv = require('dotenv')

// Load env from .env.local if present, fall back to .env
const envLocalPath = path.join(process.cwd(), '.env.local')
if (fs.existsSync(envLocalPath)) {
  dotenv.config({ path: envLocalPath })
} else {
  dotenv.config()
}

// Ensure outbound calls to 0x bypass any system HTTP proxy that may hijack DNS
// This helps avoid corporate/VPN proxies rewriting api.0x.org to reserved IPs
process.env.NO_PROXY =
  process.env.NO_PROXY ||
  [
    'api.0x.org',
    '.0x.org',
    'polygon.api.0x.org',
    'bsc.api.0x.org',
    'base.api.0x.org',
    'optimism.api.0x.org',
    'arbitrum.api.0x.org',
    'avalanche.api.0x.org',
  ].join(',')

const API_KEY = process.env.OX_API_KEY || process.env.REACT_APP_OX_API_KEY
if (!API_KEY) {
  console.warn('Warning: OX_API_KEY or REACT_APP_OX_API_KEY not set.')
}

const app = express()
app.use(cors())

// Helper: map common network errors to actionable hints
function hintForError(err) {
  const code = String(err?.code || err?.type || '').toUpperCase()
  if (code.includes('ECONNREFUSED')) {
    return 'Backend or upstream refused connection. Verify server is running and firewall allows localhost.'
  }
  if (code.includes('ETIMEDOUT') || code.includes('REQUEST-TIMEOUT')) {
    return 'Timeout to 0x API. Check DNS resolution for api.0x.org, disable VPN/proxy/ad-blockers, or set NO_PROXY.'
  }
  if (code.includes('ENOTFOUND')) {
    return 'DNS resolution failed. Change DNS to 1.1.1.1/8.8.8.8 and flush DNS cache.'
  }
  return 'Unexpected network error. See server logs for details.'
}

// Map chain name/id to correct 0x API base URL
function get0xBaseUrl(chain) {
  const key = String(chain || 'ethereum').toLowerCase()
  switch (key) {
    case '1':
    case 'mainnet':
    case 'ethereum':
      return 'https://api.0x.org'
    case '137':
    case 'polygon':
      return 'https://polygon.api.0x.org'
    case '56':
    case 'bsc':
    case 'binance':
      return 'https://bsc.api.0x.org'
    case '8453':
    case 'base':
      return 'https://base.api.0x.org'
    case '10':
    case 'optimism':
      return 'https://optimism.api.0x.org'
    case '42161':
    case 'arbitrum':
      return 'https://arbitrum.api.0x.org'
    case '43114':
    case 'avalanche':
      return 'https://avalanche.api.0x.org'
    default:
      return 'https://api.0x.org'
  }
}

// Health check
app.get('/api/health', (req, res) => {
  res.json({ ok: true })
})

// Proxy: 0x tokens
app.get('/api/tokens', async (req, res) => {
  try {
    const base = get0xBaseUrl(req.query.chain)
    const url = `${base}/swap/v1/tokens`
    console.log('[proxy] /api/tokens chain=', req.query.chain || 'ethereum', '→', url)
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        '0x-api-key': API_KEY || '',
        Accept: 'application/json',
      },
      // Guard against hanging connections
      timeout: 10000,
    })
    const contentType = response.headers.get('content-type') || ''
    const body = contentType.includes('application/json')
      ? await response.json()
      : await response.text()
    res.status(response.status).send(body)
  } catch (err) {
    console.error('Proxy /api/tokens error:', err)
    const code = String(err?.code || err?.type || '').toUpperCase()
    const status = code.includes('ECONNREFUSED')
      ? 502
      : code.includes('ETIMEDOUT') || code.includes('REQUEST-TIMEOUT')
      ? 504
      : code.includes('ENOTFOUND')
      ? 502
      : 500
    res.status(status).json({ error: 'Failed to fetch 0x tokens', code, hint: hintForError(err) })
  }
})

// Proxy: 0x quote
app.get('/api/quote', async (req, res) => {
  try {
    const params = new URLSearchParams(req.query)
    const chain = params.get('chain')
    // Do not forward the helper param "chain" to 0x
    params.delete('chain')
    const base = get0xBaseUrl(chain)
    const url = `${base}/swap/v1/quote?${params.toString()}`
    console.log('[proxy] /api/quote chain=', chain || 'ethereum', '→', url)
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        '0x-api-key': API_KEY || '',
        Accept: 'application/json',
      },
      timeout: 10000,
    })
    const contentType = response.headers.get('content-type') || ''
    const body = contentType.includes('application/json')
      ? await response.json()
      : await response.text()
    if (!response.ok) {
      console.warn('[proxy] /api/quote error', response.status, body)
    } else {
      console.log('[proxy] /api/quote ok', response.status)
    }
    res.status(response.status).send(body)
  } catch (err) {
    console.error('Proxy /api/quote error:', err)
    const code = String(err?.code || err?.type || '').toUpperCase()
    const status = code.includes('ECONNREFUSED')
      ? 502
      : code.includes('ETIMEDOUT') || code.includes('REQUEST-TIMEOUT')
      ? 504
      : code.includes('ENOTFOUND')
      ? 502
      : 500
    res.status(status).json({ error: 'Failed to fetch 0x quote', code, hint: hintForError(err) })
  }
})

// Proxy: 0x gasless price (v2 API)
app.get('/api/gasless/price', async (req, res) => {
  try {
    const params = new URLSearchParams(req.query)
    const chain = params.get('chain') || '1'
    // Do not forward the helper param "chain" to 0x
    params.delete('chain')
    const base = get0xBaseUrl(chain)
    const url = `${base}/gasless/price?${params.toString()}`
    console.log('[proxy] /api/gasless/price chain=', chain, '→', url)
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        '0x-api-key': API_KEY || '',
        '0x-version': 'v2',
        '0x-chain-id': chain,
        Accept: 'application/json',
      },
      timeout: 10000,
    })
    
    const contentType = response.headers.get('content-type') || ''
    const body = contentType.includes('application/json')
      ? await response.json()
      : await response.text()
    
    if (!response.ok) {
      console.warn('[proxy] /api/gasless/price error', response.status, body)
    } else {
      console.log('[proxy] /api/gasless/price ok', response.status)
    }
    
    res.status(response.status).send(body)
  } catch (err) {
    console.error('Proxy /api/gasless/price error:', err)
    const code = String(err?.code || err?.type || '').toUpperCase()
    const status = code.includes('ECONNREFUSED')
      ? 502
      : code.includes('ETIMEDOUT') || code.includes('REQUEST-TIMEOUT')
      ? 504
      : code.includes('ENOTFOUND')
      ? 502
      : 500
    res.status(status).json({ error: 'Failed to fetch gasless price', code, hint: hintForError(err) })
  }
})

// Proxy: 0x gasless quote (v2 API)
app.get('/api/gasless/quote', async (req, res) => {
  try {
    const params = new URLSearchParams(req.query)
    const chain = params.get('chain') || '1'
    // Do not forward the helper param "chain" to 0x
    params.delete('chain')
    const base = get0xBaseUrl(chain)
    const url = `${base}/gasless/quote?${params.toString()}`
    console.log('[proxy] /api/gasless/quote chain=', chain, '→', url)
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        '0x-api-key': API_KEY || '',
        '0x-version': 'v2',
        '0x-chain-id': chain,
        Accept: 'application/json',
      },
      timeout: 10000,
    })
    
    const contentType = response.headers.get('content-type') || ''
    const body = contentType.includes('application/json')
      ? await response.json()
      : await response.text()
    
    if (!response.ok) {
      console.warn('[proxy] /api/gasless/quote error', response.status, body)
    } else {
      console.log('[proxy] /api/gasless/quote ok', response.status)
    }
    
    res.status(response.status).send(body)
  } catch (err) {
    console.error('Proxy /api/gasless/quote error:', err)
    const code = String(err?.code || err?.type || '').toUpperCase()
    const status = code.includes('ECONNREFUSED')
      ? 502
      : code.includes('ETIMEDOUT') || code.includes('REQUEST-TIMEOUT')
      ? 504
      : code.includes('ENOTFOUND')
      ? 502
      : 500
    res.status(status).json({ error: 'Failed to fetch gasless quote', code, hint: hintForError(err) })
  }
})

// Proxy: 0x gasless submit (v2 API)
app.post('/api/gasless/submit', async (req, res) => {
  try {
    const { signature, approval, trade, chain = '1' } = req.body
    
    if (!signature) {
      return res.status(400).json({ error: 'Signature is required' })
    }
    
    const base = get0xBaseUrl(chain)
    const url = `${base}/gasless/submit`
    console.log('[proxy] /api/gasless/submit chain=', chain, '→', url)
    
    const payload = {
      signature,
      ...(approval && { approval }),
      ...(trade && { trade }),
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        '0x-api-key': API_KEY || '',
        '0x-version': 'v2',
        '0x-chain-id': chain,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
      timeout: 10000,
    })
    
    const contentType = response.headers.get('content-type') || ''
    const body = contentType.includes('application/json')
      ? await response.json()
      : await response.text()
    
    if (!response.ok) {
      console.warn('[proxy] /api/gasless/submit error', response.status, body)
    } else {
      console.log('[proxy] /api/gasless/submit ok', response.status)
    }
    
    res.status(response.status).send(body)
  } catch (err) {
    console.error('Proxy /api/gasless/submit error:', err)
    const code = String(err?.code || err?.type || '').toUpperCase()
    const status = code.includes('ECONNREFUSED')
      ? 502
      : code.includes('ETIMEDOUT') || code.includes('REQUEST-TIMEOUT')
      ? 504
      : code.includes('ENOTFOUND')
      ? 502
      : 500
    res.status(status).json({ error: 'Failed to submit gasless transaction', code, hint: hintForError(err) })
  }
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Proxy running on port ${PORT}`)
})