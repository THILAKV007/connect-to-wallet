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

const API_KEY = process.env.OX_API_KEY || process.env.REACT_APP_OX_API_KEY
if (!API_KEY) {
  console.warn('Warning: OX_API_KEY or REACT_APP_OX_API_KEY not set.')
}

const app = express()
app.use(cors())

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
    })
    const contentType = response.headers.get('content-type') || ''
    const body = contentType.includes('application/json')
      ? await response.json()
      : await response.text()
    res.status(response.status).send(body)
  } catch (err) {
    console.error('Proxy /api/tokens error:', err)
    res.status(500).json({ error: 'Failed to fetch 0x tokens' })
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
    res.status(500).json({ error: 'Failed to fetch 0x quote' })
  }
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Proxy running on port ${PORT}`)
})