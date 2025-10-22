import React, { useState, useEffect } from 'react'
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Button,
  TextField,
  Chip,
  IconButton,
  Tabs,
  Tab,
  Select,
  Menu,
  MenuItem,
  FormControl,
  Avatar,
  Switch,
} from '@mui/material'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import ShowChartIcon from '@mui/icons-material/ShowChart'
import BarChartIcon from '@mui/icons-material/BarChart'
import TimelineIcon from '@mui/icons-material/Timeline'
import SwapVertIcon from '@mui/icons-material/SwapVert'

const Swap1 = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState(0)
  const [sellAmount, setSellAmount] = useState('')
  const [buyAmount, setBuyAmount] = useState('')
  const [slippage, setSlippage] = useState('0.5')
  const [limitPrice, setLimitPrice] = useState('')
  const [expiry, setExpiry] = useState('1h')

  // 0x integration state
  const OX_API_KEY = process.env.REACT_APP_OX_API_KEY
  const [sellTokenSymbol, setSellTokenSymbol] = useState('ETH')
  const [buyTokenSymbol, setBuyTokenSymbol] = useState('USDC')
  const [quote, setQuote] = useState(null)
  const [isFetchingQuote, setIsFetchingQuote] = useState(false)
  const [swapError, setSwapError] = useState('')
  const [account, setAccount] = useState(null)
  const [tokens, setTokens] = useState([])
  const [isLoadingTokens, setIsLoadingTokens] = useState(false)
  const [sellTokenAnchorEl, setSellTokenAnchorEl] = useState(null)
  const [buyTokenAnchorEl, setBuyTokenAnchorEl] = useState(null)
  
  // Gasless swap state
  const [isGaslessMode, setIsGaslessMode] = useState(false)
  const [gaslessQuote, setGaslessQuote] = useState(null)
  const [isFetchingGaslessQuote, setIsFetchingGaslessQuote] = useState(false)
  const [gaslessPrice, setGaslessPrice] = useState(null)

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue)
  }

  // Generate realistic trading chart data
  const generateChartData = () => {
    const data = []
    const basePrice = 2500
    let currentValue = basePrice

    const timeLabels = [
      '14',
      '15 Jan 25',
      '05:00',
      '16',
      '17',
      '18',
      '19',
      '20',
    ]

    for (let i = 0; i < 100; i++) {
      const volatility = Math.random() * 40 - 20
      currentValue += volatility

      // Ensure price stays within reasonable bounds
      currentValue = Math.max(2450, Math.min(2675, currentValue))

      data.push({
        time:
          timeLabels[Math.floor(i / 12.5)] || `${20 + Math.floor(i / 12.5)}`,
        price: parseFloat(currentValue.toFixed(2)),
        volume: Math.random() * 1000000,
      })
    }
    return data
  }

  const chartData = generateChartData()

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <Box
          sx={{
            background: isDarkMode ? '#10254A' : '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 1,
            p: 1.5,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
          }}
        >
          <Typography
            sx={{
              color: isDarkMode ? '#ffffff' : '#000000',
              fontSize: '0.8rem',
            }}
          >
            Time: {label}
          </Typography>
          <Typography
            sx={{ color: '#4FC3F7', fontSize: '0.8rem', fontWeight: 'bold' }}
          >
            Price: ${payload[0].value}
          </Typography>
        </Box>
      )
    }
    return null
  }

  // Helper: truncate address
  const truncateAddress = (addr) =>
    addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : ''

  // Connect MetaMask (page-level convenience)
  const connectMetaMask = async () => {
    try {
      const { ethereum } = window
      if (!ethereum) {
        setSwapError('MetaMask not detected')
        return
      }
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      if (accounts && accounts.length > 0) {
        setAccount(accounts[0])
      }
    } catch (err) {
      console.error('MetaMask connection failed:', err)
      setSwapError('Failed to connect wallet')
    }
  }

  // Fetch supported tokens via backend proxy (avoids browser CORS)
  useEffect(() => {
    const fetchTokens = async () => {
      try {
        setIsLoadingTokens(true)
        const res = await fetch('/api/tokens', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        })
        if (!res.ok) {
          const txt = await res.text()
          throw new Error(txt || `0x tokens error: ${res.status}`)
        }
        const data = await res.json()
        // Dedupe by symbol and sort alphabetically
        const seen = new Set()
        const list = []
        ;(data?.records || []).forEach((t) => {
          const sym = t.symbol?.trim()
          if (!sym || seen.has(sym)) return
          seen.add(sym)
          list.push({
            symbol: sym,
            address: t.address,
            decimals: t.decimals,
            name: t.name,
            logoURI: t.logoURI,
          })
        })
        list.sort((a, b) => a.symbol.localeCompare(b.symbol))
        setTokens(list)
      } catch (err) {
        console.error('fetch tokens error:', err)

        setTokens([
          {
            symbol: 'ETH',
            address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
            decimals: 18,
          },
          {
            symbol: 'USDC',
            address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
            decimals: 6,
          },
          {
            symbol: 'DAI',
            address: '0x6b175474e89094c44da98b954eedeac495271d0f',
            decimals: 18,
          },
          {
            symbol: 'WETH',
            address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            decimals: 18,
          },
          {
            symbol: 'BNB',
            address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
            decimals: 18,
          },
          {
            symbol: 'WBNB',
            address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
            decimals: 18,
          },
          {
            symbol: 'BUSD',
            address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
            decimals: 18,
          },
          {
            symbol: 'USDT',
            address: '0x55d398326f99059fF775485246999027B3197955',
            decimals: 18,
          },
          {
            symbol: 'CAKE',
            address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
            decimals: 18,
          },
        ])
      } finally {
        setIsLoadingTokens(false)
      }
    }
    fetchTokens()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Token dropdown handlers
  const openSellMenu = (e) => setSellTokenAnchorEl(e.currentTarget)
  const closeSellMenu = () => setSellTokenAnchorEl(null)
  const openBuyMenu = (e) => setBuyTokenAnchorEl(e.currentTarget)
  const closeBuyMenu = () => setBuyTokenAnchorEl(null)
  const handleSelectSellToken = (sym) => {
    setSellTokenSymbol(sym)
    closeSellMenu()
  }
  const handleSelectBuyToken = (sym) => {
    setBuyTokenSymbol(sym)
    closeBuyMenu()
  }

  // Render token icon with logo if available, else stylized initial
  const renderTokenIcon = (symbol) => {
    const meta = tokens.find((t) => t.symbol === symbol)
    const logo = meta?.logoURI
    if (logo) {
      return (
        <Avatar
          src={logo}
          alt={symbol}
          sx={{ width: 24, height: 24, borderRadius: '50%' }}
        />
      )
    }
    return (
      <Box
        sx={{
          width: 24,
          height: 24,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          fontSize: '0.7rem',
          fontWeight: 700,
        }}
      >
        {symbol?.slice(0, 1) || '?'}
      </Box>
    )
  }

  useEffect(() => {
    const { ethereum } = window
    if (!ethereum) return
    const handler = (accs) => setAccount(accs && accs.length ? accs[0] : null)
    ethereum.on('accountsChanged', handler)
    return () => {
      try {
        ethereum.removeListener('accountsChanged', handler)
      } catch {}
    }
  }, [])

  // Convert human amount to base units (simplified)
  const toBaseUnit = (amount, decimals = 18) => {
    if (!amount || isNaN(parseFloat(amount))) return '0'
    const [whole, fraction = ''] = amount.split('.')
    const fracPadded = (fraction + '0'.repeat(decimals)).slice(0, decimals)
    const baseStr = `${whole}${fracPadded}`.replace(/^0+/, '')
    return baseStr.length ? baseStr : '0'
  }

  // Convert base units to human display (simplified)
  const fromBaseUnit = (baseStr, decimals = 18) => {
    if (!baseStr) return '0'
    const str = baseStr.toString()
    const pad = decimals - str.length
    const padded = pad > 0 ? '0'.repeat(pad) + str : str
    const i = padded.length - decimals
    const whole = i > 0 ? padded.slice(0, i) : '0'
    const frac = i > 0 ? padded.slice(i) : padded
    const trimmedFrac = frac.replace(/0+$/, '')
    return trimmedFrac ? `${whole}.${trimmedFrac}` : whole
  }

  // Fetch 0x quote
  const fetch0xQuote = async () => {
    try {
      setSwapError('')
      setIsFetchingQuote(true)
      // Backend proxy supplies API key; no client-side guard needed
      const sellTokenMeta = tokens.find((t) => t.symbol === sellTokenSymbol)
      const buyTokenMeta = tokens.find((t) => t.symbol === buyTokenSymbol)
      const sellTokenDecimals =
        sellTokenMeta?.decimals ?? (sellTokenSymbol === 'ETH' ? 18 : 18)
      const sellAmountWei = toBaseUnit(sellAmount || '0', sellTokenDecimals)
      // Guard against empty/zero amounts
      if (!sellAmountWei || String(sellAmountWei) === '0') {
        setIsFetchingQuote(false)
        setSwapError('Enter a positive amount in base units')
        setQuote(null)
        return
      }
      // Detect chain and prefer native symbol for that chain when selling the native token
      let chainName = 'ethereum'
      try {
        const { ethereum } = window
        if (ethereum) {
          const cid = await ethereum.request({ method: 'eth_chainId' })
          const id = parseInt(cid, 16)
          chainName =
            id === 1
              ? 'ethereum'
              : id === 137
              ? 'polygon'
              : id === 56
              ? 'bsc'
              : id === 8453
              ? 'base'
              : id === 10
              ? 'optimism'
              : id === 42161
              ? 'arbitrum'
              : id === 43114
              ? 'avalanche'
              : 'ethereum'
        }
      } catch {}
      const nativeSym =
        chainName === 'polygon'
          ? 'MATIC'
          : chainName === 'bsc'
          ? 'BNB'
          : chainName === 'avalanche'
          ? 'AVAX'
          : 'ETH'

      const wrappedAddressForChain = (name) => {
        switch (name) {
          case 'polygon':
            return '0x0d500B1d8E8e0bD1Dbc0CeaBef6f2F44b7dBfB7e' // WMATIC
          case 'bsc':
            return '0xBB4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c' // WBNB
          case 'avalanche':
            return '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7' // WAVAX
          case 'base':
          case 'optimism':
          case 'arbitrum':
          case 'ethereum':
          default:
            return '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2' // WETH
        }
      }
      const sellTokenParam =
        sellTokenSymbol === nativeSym
          ? nativeSym
          : sellTokenMeta?.address || sellTokenSymbol
      const buyTokenParam = buyTokenMeta?.address || buyTokenSymbol
      const params = new URLSearchParams({
        sellToken: sellTokenParam,
        buyToken: buyTokenParam,
        sellAmount: sellAmountWei,
      })
      // apply slippage if numeric
      const slippageNum =
        typeof slippage === 'number' ? slippage : parseFloat(slippage)
      if (!isNaN(slippageNum)) {
        params.append('slippagePercentage', (slippageNum / 100).toString())
      }
      if (account) params.append('takerAddress', account)
      // Include chain for proxy routing
      try {
        const { ethereum } = window
        if (ethereum) {
          const cid = await ethereum.request({ method: 'eth_chainId' })
          const id = parseInt(cid, 16)
          const name =
            id === 1
              ? 'ethereum'
              : id === 137
              ? 'polygon'
              : id === 56
              ? 'bsc'
              : id === 8453
              ? 'base'
              : id === 10
              ? 'optimism'
              : id === 42161
              ? 'arbitrum'
              : id === 43114
              ? 'avalanche'
              : 'ethereum'
          params.append('chain', name)
        }
      } catch {}
      // const requestUrl = `/api/quote?${params.toString()}`
      const requestUrl = `/api/quote?${params.toString()}`
      console.log('Requesting quote from 0x via proxy:', requestUrl)
      const res = await fetch(requestUrl, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      })
      if (!res.ok) {
        const txt = await res.text()
        // Attempt a fallback using the wrapped native token ADDRESS if route not found
        let parsed
        try {
          parsed = JSON.parse(txt)
        } catch {}
        const message = parsed?.message || txt || ''
        const noRoute = /no\s*route\s*matched/i.test(message)
        const isSellingNative = sellTokenSymbol === nativeSym
        if (noRoute && isSellingNative) {
          const wrappedSym =
            chainName === 'polygon'
              ? 'WMATIC'
              : chainName === 'bsc'
              ? 'WBNB'
              : chainName === 'avalanche'
              ? 'WAVAX'
              : 'WETH'

          // Prefer address from our token list for the wrapped token
          const wrappedMeta = tokens.find((t) => t.symbol === wrappedSym)
          const wrappedParam = wrappedMeta?.address || wrappedAddressForChain(chainName)

          const retryParams = new URLSearchParams(params)
          retryParams.set('sellToken', wrappedParam)
          const retryUrl = `/api/quote?${retryParams.toString()}`
          console.log('No route for native token; retrying with wrapped:', retryUrl)
          const retryRes = await fetch(retryUrl, {
            method: 'GET',
            headers: { Accept: 'application/json' },
          })
          if (retryRes.ok) {
            const retryData = await retryRes.json()
            setQuote(retryData)
            return
          }
          const retryTxt = await retryRes.text()
          throw new Error(retryTxt || `0x quote error: ${retryRes.status}`)
        }
        throw new Error(message || `0x quote error: ${res.status}`)
      }
      const data = await res.json()
      setQuote(data)
    } catch (err) {
      console.error('fetch0xQuote error:', err)
      setQuote(null)
      let msg = err?.message || 'Failed to fetch quote'

      console.log('fetch_result: ', msg)
      // Try to extract JSON error message from 0x
      try {
        const parsed = JSON.parse(msg)
        if (parsed && parsed.message) msg = parsed.message
      } catch {}
      // Clarify common causes
      if (msg.includes('Failed to fetch')) {
        setSwapError(
          'Network/CORS error: request blocked. Disable ad-block/VPN or check firewall.'
        )
      } else if (msg.toLowerCase().includes('no route matched')) {
        setSwapError(
          'No route found for these values. Check token pair, chain, and amount (try larger or smaller).'
        )
      } else {
        setSwapError(msg)
      }
    } finally {
      setIsFetchingQuote(false)
    }
  }

  // Auto-fetch quote on sell amount changes (debounced)
  useEffect(() => {
    if (
      !sellAmount ||
      isNaN(parseFloat(sellAmount)) ||
      Number(sellAmount) <= 0
    ) {
      setQuote(null)
      setGaslessPrice(null)
      return
    }
    const id = setTimeout(() => {
      if (isGaslessMode) {
        fetchGaslessPrice()
      } else {
        fetch0xQuote()
      }
    }, 500)
    return () => clearTimeout(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sellAmount, account, sellTokenSymbol, buyTokenSymbol, slippage, isGaslessMode])

  // Reflect quote into Buy amount display (USDC assumed 6 decimals when selected)
  useEffect(() => {
    const activeQuote = isGaslessMode ? gaslessPrice || gaslessQuote : quote
    if (!activeQuote) return
    
    const buyDecimals =
      tokens.find((t) => t.symbol === buyTokenSymbol)?.decimals ??
      (buyTokenSymbol === 'USDC' ? 6 : 18)
    const estBuy = fromBaseUnit(activeQuote.buyAmount, buyDecimals)
    setBuyAmount(estBuy)
  }, [quote, gaslessPrice, gaslessQuote, buyTokenSymbol, tokens, isGaslessMode])

  // Fetch gasless price (indicative pricing)
  const fetchGaslessPrice = async () => {
    try {
      const sellTokenMeta = tokens.find((t) => t.symbol === sellTokenSymbol)
      const buyTokenMeta = tokens.find((t) => t.symbol === buyTokenSymbol)
      const sellTokenDecimals = sellTokenMeta?.decimals ?? 18
      const sellAmountWei = toBaseUnit(sellAmount || '0', sellTokenDecimals)
      
      if (!sellAmountWei || String(sellAmountWei) === '0') {
        setGaslessPrice(null)
        return
      }

      // Check if user is trying to sell ETH (not supported in gasless mode)
      const isSellingETH = sellTokenSymbol === 'ETH' || 
                          (sellTokenMeta?.address && sellTokenMeta.address.toLowerCase() === '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
      
      if (isSellingETH) {
        setSwapError('Gasless swaps cannot sell ETH. Please use regular swap mode or swap ETH for WETH first.')
        setGaslessPrice(null)
        return
      }

      // Check if user has connected wallet (required for gasless)
      if (!account) {
        setSwapError('Please connect your wallet to use gasless swaps.')
        setGaslessPrice(null)
        return
      }

      // Get chain info
      let chainId = '1'
      try {
        const { ethereum } = window
        if (ethereum) {
          const cid = await ethereum.request({ method: 'eth_chainId' })
          chainId = parseInt(cid, 16).toString()
        }
      } catch {}

      // Use correct token addresses
      let sellTokenParam = sellTokenMeta?.address || sellTokenSymbol
      let buyTokenParam = buyTokenMeta?.address || buyTokenSymbol
      
      // Use correct ETH address format for gasless API
      if (buyTokenSymbol === 'ETH') {
        buyTokenParam = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
      }
      
      const params = new URLSearchParams({
        sellToken: sellTokenParam,
        buyToken: buyTokenParam,
        sellAmount: sellAmountWei,
        takerAddress: account, // Required parameter for gasless API
        chain: chainId,
      })

      const res = await fetch(`/api/gasless/price?${params.toString()}`, {
        method: 'GET',
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        const data = await res.json()
        setGaslessPrice(data)
      } else {
        console.warn('Gasless price fetch failed:', res.status)
        setGaslessPrice(null)
      }
    } catch (err) {
      console.error('fetchGaslessPrice error:', err)
      setGaslessPrice(null)
    }
  }

  // Fetch gasless quote (firm quote for execution)
  const fetchGaslessQuote = async () => {
    try {
      setSwapError('')
      setIsFetchingGaslessQuote(true)
      
      const sellTokenMeta = tokens.find((t) => t.symbol === sellTokenSymbol)
      const buyTokenMeta = tokens.find((t) => t.symbol === buyTokenSymbol)
      const sellTokenDecimals = sellTokenMeta?.decimals ?? 18
      const sellAmountWei = toBaseUnit(sellAmount || '0', sellTokenDecimals)
      
      if (!sellAmountWei || String(sellAmountWei) === '0') {
        setIsFetchingGaslessQuote(false)
        setSwapError('Enter a positive amount')
        setGaslessQuote(null)
        return
      }

      // Check if user is trying to sell ETH (not supported in gasless mode)
      const isSellingETH = sellTokenSymbol === 'ETH' || 
                          (sellTokenMeta?.address && sellTokenMeta.address.toLowerCase() === '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
      
      if (isSellingETH) {
        setIsFetchingGaslessQuote(false)
        setSwapError('Gasless swaps cannot sell ETH. Please use regular swap mode or swap ETH for WETH first.')
        setGaslessQuote(null)
        return
      }

      if (!account) {
        setIsFetchingGaslessQuote(false)
        setSwapError('Connect wallet to get gasless quote')
        setGaslessQuote(null)
        return
      }

      // Get chain info
      let chainId = '1'
      try {
        const { ethereum } = window
        if (ethereum) {
          const cid = await ethereum.request({ method: 'eth_chainId' })
          chainId = parseInt(cid, 16).toString()
        }
      } catch {}

      // Use correct token addresses
      let sellTokenParam = sellTokenMeta?.address || sellTokenSymbol
      let buyTokenParam = buyTokenMeta?.address || buyTokenSymbol
      
      // Use correct ETH address format for gasless API
      if (buyTokenSymbol === 'ETH') {
        buyTokenParam = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
      }
      
      const params = new URLSearchParams({
        sellToken: sellTokenParam,
        buyToken: buyTokenParam,
        sellAmount: sellAmountWei,
        takerAddress: account,
        chain: chainId,
      })

      // Note: Gasless API has built-in slippage protection, no manual slippage parameter needed

      const res = await fetch(`/api/gasless/quote?${params.toString()}`, {
        method: 'GET',
        headers: { Accept: 'application/json' },
      })

      if (!res.ok) {
        const txt = await res.text()
        let parsed
        try {
          parsed = JSON.parse(txt)
        } catch {}
        const message = parsed?.message || txt || `Gasless quote error: ${res.status}`
        throw new Error(message)
      }

      const data = await res.json()
      setGaslessQuote(data)
    } catch (err) {
      console.error('fetchGaslessQuote error:', err)
      setGaslessQuote(null)
      setSwapError(err?.message || 'Failed to fetch gasless quote')
    } finally {
      setIsFetchingGaslessQuote(false)
    }
  }

  // Execute gasless swap with EIP-712 signature
  const executeGaslessSwap = async () => {
    try {
      setSwapError('')
      if (!gaslessQuote) throw new Error('No gasless quote available')
      
      const { ethereum } = window
      if (!ethereum) throw new Error('MetaMask not detected')
      
      const from = account || (await ethereum.request({ method: 'eth_requestAccounts' }))[0]

      // Handle approval if needed
      if (gaslessQuote.approval) {
        console.log('Gasless approval required:', gaslessQuote.approval)
        
        // Sign the approval EIP-712 message
        const approvalSignature = await ethereum.request({
          method: 'eth_signTypedData_v4',
          params: [from, JSON.stringify(gaslessQuote.approval.eip712)],
        })
        
        console.log('Approval signature:', approvalSignature)
        
        // Submit approval to 0x
        // Note: In a real implementation, you'd submit this to 0x's gasless approval endpoint
        // For now, we'll log it and proceed with the trade
      }

      // Sign the trade EIP-712 message
      if (!gaslessQuote.trade?.eip712) {
        throw new Error('No EIP-712 trade data in gasless quote')
      }

      const tradeSignature = await ethereum.request({
        method: 'eth_signTypedData_v4',
        params: [from, JSON.stringify(gaslessQuote.trade.eip712)],
      })

      console.log('Trade signature:', tradeSignature)
      
      // Submit the trade signature to 0x gasless endpoint
      // Get current chain ID
      let chainId = '1'
      if (window.ethereum) {
        const cid = await ethereum.request({ method: 'eth_chainId' })
        chainId = parseInt(cid, 16).toString()
      }

      const submitResponse = await fetch('/api/gasless/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          signature: tradeSignature,
          trade: gaslessQuote.trade,
          chain: chainId,
        }),
      })

      if (!submitResponse.ok) {
        const errorData = await submitResponse.json()
        throw new Error(errorData.error || 'Failed to submit gasless trade')
      }

      const result = await submitResponse.json()
      console.log('Gasless swap executed successfully:', result)
      
      // Reset state after successful swap
      setGaslessQuote(null)
      setGaslessPrice(null)
      setSellAmount('')
      setBuyAmount('')
      
    } catch (err) {
      console.error('executeGaslessSwap error:', err)
      setSwapError(err?.message || 'Gasless swap failed')
    }
  }

  // Execute 0x swap via MetaMask
  const execute0xSwap = async () => {
    try {
      setSwapError('')
      if (!quote) throw new Error('No quote available')
      const { ethereum } = window
      if (!ethereum) throw new Error('MetaMask not detected')
      const from =
        account ||
        (await ethereum.request({ method: 'eth_requestAccounts' }))[0]
      const txParams = {
        from,
        to: quote.to,
        data: quote.data,
        value: quote.value || '0x0',
      }
      const txHash = await ethereum.request({
        method: 'eth_sendTransaction',
        params: [txParams],
      })
      console.log('0x swap:', txHash)
    } catch (err) {
      console.error('execute0xSwap error:', err)
      setSwapError(err?.message || 'Swap failed')
    }
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: isDarkMode ? '#061536' : '#f8f9fa',
        pt: { xs: 10 },
        pb: { xs: 2, sm: 3, md: 4 },
        px: { xs: 1, sm: 2 },
      }}
    >
      <Container maxWidth='xl' sx={{ px: { xs: 0, sm: 2 } }}>
        {/* Main Trading Interface */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            gap: { xs: 2, sm: 2.5, md: 3 },
          }}
        >
          {/* Left Side - Unified Chart Interface */}
          <Box sx={{ flex: 1 }}>
            {/* Header Section */}
            <Card
              sx={{
                background: isDarkMode ? '#10254A' : '#ffffff',
                backdropFilter: 'blur(10px)',
                mb: { xs: 1.5, sm: 2 },
                borderRadius: { xs: 1.5, sm: 2 },
              }}
            >
              <CardContent sx={{ p: { xs: 2, sm: 2.5, md: 3 } }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: { xs: 1, sm: 0.5 },
                    flexDirection: { xs: 'row', sm: 'row' },
                  }}
                >
                  {/* Left side - Bedrock branding */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: { xs: 1.5, sm: 2 },
                    }}
                  >
                    <Box>
                      <img
                        src='/assets/images/Trading/bedrock.png'
                        alt=''
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                        }}
                      />
                    </Box>
                    <Typography
                      variant='h5'
                      sx={{
                        fontWeight: 700,
                        color: isDarkMode ? '#ffffff' : '#1a1a1a',
                        fontSize: { xs: '1.25rem', sm: '1.5rem' },
                      }}
                    >
                      Bedrock
                      <Typography
                        component='span'
                        sx={{
                          fontSize: '0.7em',
                          color: isDarkMode ? '#94a3b8' : '#64748b',
                          ml: 0.5,
                        }}
                      >
                        Be
                      </Typography>
                    </Typography>
                  </Box>

                  {/* Right side - Login icon */}
                  <img
                    src='/assets/images/Trading/icon.svg'
                    alt=''
                    style={{
                      height: 'auto',
                      maxWidth: '24px',
                    }}
                  />
                </Box>

                {/* Navigation tabs */}
                <Box
                  sx={{
                    display: 'flex',
                    gap: { xs: 0.5, sm: 1 },
                    overflowX: 'auto',
                    pb: { xs: 1, sm: 0 },
                    '&::-webkit-scrollbar': {
                      height: '4px',
                    },
                    '&::-webkit-scrollbar-track': {
                      background: 'transparent',
                    },
                    '&::-webkit-scrollbar-thumb': {
                      background: isDarkMode
                        ? 'rgba(255,255,255,0.2)'
                        : 'rgba(0,0,0,0.2)',
                      borderRadius: '2px',
                    },
                  }}
                >
                  {[
                    { label: 'Security audit', value: '0' },
                    { label: 'Liquidity', value: '10' },
                    { label: 'Official Links', value: ' ' },
                    { label: 'Trackers', value: ' ' },
                    { label: 'Exchange', value: ' ' },
                  ].map((tab, index) => (
                    <Box
                      sx={{
                        mr: { xs: 2, sm: 3, md: 5 },
                        minWidth: 'fit-content',
                        flexShrink: 0,
                      }}
                      key={index}
                    >
                      <Typography
                        sx={{
                          color: isDarkMode ? '#D2D2D2' : '#1a1a1a',
                          fontSize: { xs: '0.8rem', sm: '0.875rem' },
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {tab.label}
                      </Typography>
                      <Chip
                        label={tab.value}
                        sx={{
                          backgroundColor:
                            tab.value === '10' ? '#1EF65552' : '#1F365D',
                          color: '#fff',
                          minWidth: '32px',
                          mt: 1,
                          height: { xs: '20px', sm: '24px' },
                          fontSize: { xs: '0.7rem', sm: '0.75rem' },
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
            {/* Main Chart Card */}
            <Card
              sx={{
                background: isDarkMode ? '#10254A' : '#ffffff',
                backdropFilter: 'blur(10px)',
                height: {
                  xs: 'auto',
                  sm: 'calc(100vh - 200px)',
                  md: 'calc(100vh - 180px)',
                  lg: 'calc(100vh - 170px)',
                },
                minHeight: {
                  xs: '400px',
                  sm: '500px',
                  md: '550px',
                },
                borderRadius: { xs: 1.5, sm: 2 },
              }}
            >
              <CardContent sx={{ p: 0, height: '100%' }}>
                {/* Price and Stats Section */}
                <Box sx={{ p: { xs: 1.5, sm: 2 }, pb: 1 }}>
                  <Typography
                    variant='h3'
                    sx={{
                      fontWeight: 300,
                      color: isDarkMode ? '#ffffff' : '#1a1a1a',
                      mb: 1,
                      fontSize: { xs: '1.8rem', sm: '2rem', md: '2.2rem' },
                    }}
                  >
                    $9209.00
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: { xs: 1, sm: 1.5, md: 2 },
                      mb: 2,
                      flexWrap: 'wrap',
                    }}
                  >
                    <Box
                      sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                    >
                      <Typography
                        sx={{
                          color: '#12CA41',
                          fontWeight: 400,
                          fontSize: '0.8rem',
                        }}
                      >
                        0.07%
                      </Typography>
                      <Typography
                        sx={{
                          color: isDarkMode
                            ? 'rgba(255, 255, 255, 0.6)'
                            : 'rgba(0, 0, 0, 0.6)',
                          fontSize: '0.75rem',
                        }}
                      >
                        (5m)
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                    >
                      <Typography
                        sx={{
                          color: '#12CA41',
                          fontWeight: 400,
                          fontSize: '0.8rem',
                        }}
                      >
                        0.07%
                      </Typography>
                      <Typography
                        sx={{
                          color: isDarkMode
                            ? 'rgba(255, 255, 255, 0.6)'
                            : 'rgba(0, 0, 0, 0.6)',
                          fontSize: '0.75rem',
                        }}
                      >
                        (1h)
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                    >
                      <Typography
                        sx={{
                          color: '#12CA41',
                          fontWeight: 400,
                          fontSize: '0.8rem',
                        }}
                      >
                        0.34%
                      </Typography>
                      <Typography
                        sx={{
                          color: isDarkMode
                            ? 'rgba(255, 255, 255, 0.6)'
                            : 'rgba(0, 0, 0, 0.6)',
                          fontSize: '0.75rem',
                        }}
                      >
                        (6h)
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                    >
                      <Typography
                        sx={{
                          color: '#12CA41',
                          fontWeight: 400,
                          fontSize: '0.8rem',
                        }}
                      >
                        0.41%
                      </Typography>
                      <Typography
                        sx={{
                          color: isDarkMode
                            ? 'rgba(255, 255, 255, 0.6)'
                            : 'rgba(0, 0, 0, 0.6)',
                          fontSize: '0.75rem',
                        }}
                      >
                        (24h)
                      </Typography>
                    </Box>
                  </Box>

                  {/* Chart Controls */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                      <Button
                        variant='text'
                        size='small'
                        sx={{
                          color: isDarkMode
                            ? 'rgba(255, 255, 255, 0.8)'
                            : 'rgba(0, 0, 0, 0.8)',
                          fontSize: '0.75rem',
                          textTransform: 'none',
                          minWidth: 'auto',
                          px: 1,
                          py: 0.5,
                        }}
                      >
                        5m
                      </Button>
                      <Button
                        variant='text'
                        size='small'
                        sx={{
                          color: isDarkMode
                            ? 'rgba(255, 255, 255, 0.8)'
                            : 'rgba(0, 0, 0, 0.8)',
                          fontSize: '0.75rem',
                          textTransform: 'none',
                          minWidth: 'auto',
                          px: 1,
                          py: 0.5,
                        }}
                      >
                        1h
                      </Button>
                      <Button
                        variant='text'
                        size='small'
                        sx={{
                          color: isDarkMode
                            ? 'rgba(255, 255, 255, 0.8)'
                            : 'rgba(0, 0, 0, 0.8)',
                          fontSize: '0.75rem',
                          textTransform: 'none',
                          minWidth: 'auto',
                          px: 1,
                          py: 0.5,
                        }}
                      >
                        D
                      </Button>
                      <KeyboardArrowDownIcon
                        sx={{
                          color: isDarkMode
                            ? 'rgba(255, 255, 255, 0.6)'
                            : 'rgba(0, 0, 0, 0.6)',
                          fontSize: '1rem',
                          ml: 0.5,
                        }}
                      />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <ShowChartIcon
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          fontSize: '1rem',
                        }}
                      />
                      <BarChartIcon
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          fontSize: '1rem',
                        }}
                      />
                      <TimelineIcon
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          fontSize: '1rem',
                        }}
                      />
                      <KeyboardArrowDownIcon
                        sx={{
                          color: 'rgba(255, 255, 255, 0.6)',
                          fontSize: '1rem',
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '0.8rem',
                      }}
                    >
                      Fx indicator
                    </Typography>
                  </Box>
                </Box>

                {/* Main Chart Area */}
                <Box
                  sx={{
                    flex: 1,
                    position: 'relative',
                    background: 'rgba(0, 0, 0, 0.1)',
                    mx: { xs: 1.5, sm: 2, md: 3 },
                    mb: { xs: 2, sm: 2.5, md: 3 },
                    borderRadius: 1,
                    height: {
                      xs: '300px',
                      sm: '350px',
                      md: '400px',
                    },
                    overflow: 'hidden',
                    p: { xs: 1, sm: 1.5, md: 2 },
                  }}
                >
                  <ResponsiveContainer width='100%' height='100%'>
                    <LineChart
                      data={chartData}
                      margin={{
                        top: 20,
                        right: 60,
                        left: 20,
                        bottom: 20,
                      }}
                    >
                      <defs>
                        <linearGradient
                          id='colorPrice'
                          x1='0'
                          y1='0'
                          x2='0'
                          y2='1'
                        >
                          <stop
                            offset='5%'
                            stopColor='#4FC3F7'
                            stopOpacity={0.3}
                          />
                          <stop
                            offset='95%'
                            stopColor='#4FC3F7'
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>

                      <CartesianGrid
                        strokeDasharray='3 3'
                        stroke='rgba(255, 255, 255, 0.1)'
                        horizontal={true}
                        vertical={true}
                      />

                      <XAxis
                        dataKey='time'
                        axisLine={false}
                        tickLine={false}
                        tick={{
                          fill: 'rgba(255, 255, 255, 0.6)',
                          fontSize: 11,
                        }}
                        interval='preserveStartEnd'
                      />

                      <YAxis
                        domain={['dataMin - 10', 'dataMax + 10']}
                        axisLine={false}
                        tickLine={false}
                        tick={{
                          fill: 'rgba(255, 255, 255, 0.6)',
                          fontSize: 11,
                        }}
                        tickFormatter={(value) => `${value.toFixed(0)}.00`}
                        orientation='right'
                      />

                      <Tooltip
                        content={<CustomTooltip />}
                        cursor={{
                          stroke: '#4FC3F7',
                          strokeWidth: 1,
                          strokeDasharray: '3 3',
                        }}
                      />

                      {/* Reference line for current price */}
                      <ReferenceLine
                        y={2532.23}
                        stroke='#4FC3F7'
                        strokeDasharray='5 5'
                        strokeWidth={1}
                      />

                      <Line
                        type='monotone'
                        dataKey='price'
                        stroke='#4FC3F7'
                        strokeWidth={2}
                        dot={false}
                        fill='url(#colorPrice)'
                        activeDot={{
                          r: 4,
                          fill: '#4FC3F7',
                          stroke: '#ffffff',
                          strokeWidth: 2,
                        }}
                      />
                    </LineChart>
                  </ResponsiveContainer>

                  {/* Price indicator overlay */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      right: 20,
                      transform: 'translateY(-50%)',
                      background: 'rgba(79, 195, 247, 0.1)',
                      border: '1px solid #4FC3F7',
                      borderRadius: 1,
                      px: 1,
                      py: 0.5,
                    }}
                  >
                    <Typography
                      sx={{
                        color: '#4FC3F7',
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                      }}
                    >
                      2532.23
                    </Typography>
                  </Box>
                </Box>

                {/* Bottom Time Period Buttons */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 0.5,
                    pb: 3,
                    mt: 1.5,
                  }}
                >
                  {['1D', '7D', '1M', '3M', '6M', '1Y', '5Y', 'ALL'].map(
                    (period) => (
                      <Button
                        key={period}
                        variant={period === '1D' ? 'contained' : 'text'}
                        size='small'
                        sx={{
                          color:
                            period === '1D'
                              ? '#ffffff'
                              : 'rgba(255, 255, 255, 0.6)',
                          background:
                            period === '1D' ? '#4FC3F7' : 'transparent',
                          fontSize: '0.7rem',
                          textTransform: 'none',
                          minWidth: 'auto',
                          px: 1.5,
                          py: 0.3,
                          borderRadius: 1,
                          '&:hover': {
                            background:
                              period === '1D'
                                ? '#29B6F6'
                                : 'rgba(255, 255, 255, 0.05)',
                          },
                        }}
                      >
                        {period}
                      </Button>
                    )
                  )}
                </Box>
              </CardContent>
            </Card>
          </Box>

          {/* Right Side - Trading Panel */}
          <Box
            sx={{
              width: { xs: '100%', lg: '400px' },
              maxWidth: { xs: '100%', sm: '500px', md: '450px', lg: '400px' },
              mx: { xs: 0, sm: 'auto', lg: 0 },
            }}
          >
            <Card
              sx={{
                background: isDarkMode ? 'rgba(16, 37, 74, 0.95)' : '#ffffff',
                backdropFilter: 'blur(20px)',
                border: isDarkMode
                  ? '1px solid rgba(255, 255, 255, 0.1)'
                  : '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: { xs: 2, sm: 2.5, md: 3 },
                boxShadow: isDarkMode
                  ? '0 8px 32px rgba(0, 0, 0, 0.3)'
                  : '0 8px 32px rgba(0, 0, 0, 0.1)',
              }}
            >
              <CardContent sx={{ p: { xs: 2, sm: 2.5, md: 3 } }}>
                {/* Trading Tabs */}
                <Box
                  sx={{
                    display: 'flex',
                    gap: { xs: 0.5, sm: 1 },
                    mb: { xs: 2, sm: 2.5, md: 3 },
                    p: 0.5,
                  }}
                >
                  {['Market', 'Limit', 'Crosschain'].map((tab, index) => (
                    <Button
                      key={tab}
                      onClick={() => setActiveTab(index)}
                      variant='text'
                      sx={{
                        flex: 1,
                        py: { xs: 1.2, sm: 1 },
                        fontSize: { xs: '0.8rem', sm: '0.85rem' },
                        fontWeight: activeTab === index ? 600 : 500,
                        textTransform: 'none',
                        borderRadius: 1.5,
                        backgroundColor: 'transparent',
                        minHeight: { xs: '44px', sm: 'auto' },
                        color:
                          activeTab === index
                            ? isDarkMode
                              ? '#ffffff'
                              : '#1a1a1a'
                            : isDarkMode
                            ? 'rgba(255, 255, 255, 0.7)'
                            : 'rgba(0, 0, 0, 0.7)',
                        '&:hover': {
                          backgroundColor: 'transparent',
                        },
                      }}
                    >
                      {tab}
                    </Button>
                  ))}
                </Box>

                {/* Sell Section */}
                <Box>
                  <Box
                    sx={{
                      background: '#ffffff',
                      borderRadius: { xs: 2, sm: 2.5, md: 3 },
                      p: { xs: 2, sm: 2.5, md: 3 },
                      // mb: 1.5,
                      border: '1px solid rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 2,
                      }}
                    >
                      <Typography
                        variant='body1'
                        sx={{
                          fontWeight: 600,
                          color: '#1a1a1a',
                          fontSize: '0.9rem',
                        }}
                      >
                        Sell
                      </Typography>
                      <Button
                        variant='text'
                        size='small'
                        sx={{
                          color: '#4FC3F7',
                          textTransform: 'none',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          minWidth: 'auto',
                          p: 0,
                          '&:hover': {
                            background: 'rgba(79, 195, 247, 0.1)',
                          },
                        }}
                      >
                        Use Max
                      </Button>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <TextField
                        placeholder='0'
                        value={sellAmount}
                        onChange={(e) => setSellAmount(e.target.value)}
                        variant='standard'
                        sx={{
                          flex: 1,
                          '& .MuiInput-underline:before': {
                            borderBottom: 'none',
                          },
                          '& .MuiInput-underline:after': {
                            borderBottom: 'none',
                          },
                          '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                            {
                              borderBottom: 'none',
                            },
                          '& .MuiInputBase-input': {
                            color: '#000000',
                            fontSize: {
                              xs: '1.5rem',
                              sm: '1.75rem',
                              md: '2rem',
                            },
                            fontWeight: 700,
                            padding: 0,
                          },
                        }}
                      />
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          cursor: 'pointer',
                          p: 1,
                          borderRadius: 2,
                          '&:hover': {
                            background: 'rgba(0, 0, 0, 0.05)',
                          },
                        }}
                        onClick={openSellMenu}
                      >
                        {renderTokenIcon(sellTokenSymbol)}
                        <Typography
                          sx={{
                            color: '#000000',
                            fontSize: {
                              xs: '1rem',
                              sm: '1.05rem',
                              md: '1.1rem',
                            },
                            fontWeight: 600,
                          }}
                        >
                          {sellTokenSymbol}
                        </Typography>
                        <KeyboardArrowDownIcon
                          sx={{
                            color: '#666666',
                            fontSize: '1.2rem',
                          }}
                        />
                      </Box>
                      <Menu
                        anchorEl={sellTokenAnchorEl}
                        open={Boolean(sellTokenAnchorEl)}
                        onClose={closeSellMenu}
                        PaperProps={{ sx: { maxHeight: 300 } }}
                      >
                        {isLoadingTokens && (
                          <MenuItem disabled>Loading…</MenuItem>
                        )}
                        {tokens.map((t) => (
                          <MenuItem
                            key={`sell-${t.symbol}`}
                            onClick={() => handleSelectSellToken(t.symbol)}
                          >
                            {t.symbol}
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                    <Typography
                      variant='caption'
                      sx={{
                        color: 'rgba(0, 0, 0, 0.6)',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                      }}
                    >
                      Balance: 0.00
                    </Typography>
                  </Box>
                </Box>

                {/* Swap Icon */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    position: 'relative',
                    my: -2,
                    zIndex: 10,
                  }}
                >
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: 2,
                      background: isDarkMode ? '#2A3441' : '#334155',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      border: '2px solid',
                      borderColor: isDarkMode ? '#1e293b' : '#475569',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        background: isDarkMode ? '#374151' : '#475569',
                      },
                    }}
                  >
                    <SwapVertIcon
                      sx={{
                        color: '#94a3b8',
                        fontSize: '1rem',
                      }}
                    />
                  </Box>
                </Box>

                {/* Buy Section */}
                <Box sx={{ mb: { xs: 2, sm: 2.5, md: 3 } }}>
                  <Box
                    sx={{
                      background: '#ffffff',
                      borderRadius: { xs: 2, sm: 2.5, md: 3 },
                      p: { xs: 2, sm: 2.5, md: 3 },
                      mb: 1.5,
                      border: '1px solid rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 2,
                      }}
                    >
                      <Typography
                        variant='body1'
                        sx={{
                          fontWeight: 600,
                          color: '#1a1a1a',
                          fontSize: '0.9rem',
                        }}
                      >
                        Buy
                      </Typography>
                      <Button
                        variant='text'
                        size='small'
                        sx={{
                          color: '#4FC3F7',
                          textTransform: 'none',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          minWidth: 'auto',
                          p: 0,
                          '&:hover': {
                            background: 'rgba(79, 195, 247, 0.1)',
                          },
                        }}
                      >
                        Use Max
                      </Button>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <TextField
                        placeholder='0'
                        value={buyAmount}
                        onChange={(e) => setBuyAmount(e.target.value)}
                        variant='standard'
                        sx={{
                          flex: 1,
                          '& .MuiInput-underline:before': {
                            borderBottom: 'none',
                          },
                          '& .MuiInput-underline:after': {
                            borderBottom: 'none',
                          },
                          '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                            {
                              borderBottom: 'none',
                            },
                          '& .MuiInputBase-input': {
                            color: '#000000',
                            fontSize: '2rem',
                            fontWeight: 700,
                            padding: 0,
                          },
                        }}
                      />
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          cursor: 'pointer',
                          p: 1,
                          borderRadius: 2,
                          '&:hover': {
                            background: 'rgba(0, 0, 0, 0.05)',
                          },
                        }}
                        onClick={openBuyMenu}
                      >
                        {renderTokenIcon(buyTokenSymbol)}
                        <Typography
                          sx={{
                            color: '#000000',
                            fontSize: '1.1rem',
                            fontWeight: 600,
                          }}
                        >
                          {buyTokenSymbol}
                        </Typography>
                        <KeyboardArrowDownIcon
                          sx={{
                            color: '#666666',
                            fontSize: '1.2rem',
                          }}
                        />
                      </Box>
                      <Menu
                        anchorEl={buyTokenAnchorEl}
                        open={Boolean(buyTokenAnchorEl)}
                        onClose={closeBuyMenu}
                        PaperProps={{ sx: { maxHeight: 300 } }}
                      >
                        {isLoadingTokens && (
                          <MenuItem disabled>Loading…</MenuItem>
                        )}
                        {tokens.map((t) => (
                          <MenuItem
                            key={`buy-${t.symbol}`}
                            onClick={() => handleSelectBuyToken(t.symbol)}
                          >
                            {t.symbol}
                          </MenuItem>
                        ))}
                      </Menu>
                    </Box>
                    <Typography
                      variant='caption'
                      sx={{
                        color: 'rgba(0, 0, 0, 0.6)',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                      }}
                    >
                      Balance: 0.00
                    </Typography>
                  </Box>
                </Box>
                {/* Background 0x logic wired without changing UI */}
                {swapError && (
                  <Typography
                    sx={{ mt: 1, color: '#ef4444', fontSize: '0.85rem' }}
                  >
                    {swapError}
                  </Typography>
                )}

                {/* Gasless Mode Toggle */}
                <Box sx={{ mb: { xs: 2, sm: 2.5, md: 3 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography
                      sx={{
                        color: isDarkMode
                          ? 'rgba(255, 255, 255, 0.8)'
                          : 'rgba(0, 0, 0, 0.8)',
                        fontSize: { xs: '0.85rem', sm: '0.9rem' },
                        fontWeight: 600,
                      }}
                    >
                      Gasless Mode
                    </Typography>
                    <Switch
                      checked={isGaslessMode}
                      onChange={(e) => setIsGaslessMode(e.target.checked)}
                      sx={{
                        '& .MuiSwitch-switchBase.Mui-checked': {
                          color: '#4FC3F7',
                        },
                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                          backgroundColor: '#4FC3F7',
                        },
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      color: isDarkMode
                        ? 'rgba(255, 255, 255, 0.6)'
                        : 'rgba(0, 0, 0, 0.6)',
                      fontSize: { xs: '0.75rem', sm: '0.8rem' },
                      mt: 0.5,
                    }}
                  >
                    {isGaslessMode 
                      ? 'Gas fees paid by 0x Protocol (ERC-20 tokens only)'
                      : 'You pay gas fees with ETH'
                    }
                  </Typography>
                </Box>

                {/* Slippage Tolerance */}
                <Box sx={{ mb: { xs: 2, sm: 2.5, md: 3 } }}>
                  <Typography
                    sx={{
                      color: isDarkMode
                        ? 'rgba(255, 255, 255, 0.8)'
                        : 'rgba(0, 0, 0, 0.8)',
                      fontSize: { xs: '0.85rem', sm: '0.9rem' },
                      fontWeight: 600,
                      mb: 1.5,
                    }}
                  >
                    Slippage Tolerance
                  </Typography>
                  <TextField
                    fullWidth
                    placeholder='0.00'
                    value={slippage}
                    onChange={(e) =>
                      setSlippage(parseFloat(e.target.value) || 0)
                    }
                    sx={{
                      mb: 2,
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: isDarkMode
                          ? 'rgba(255, 255, 255, 0.05)'
                          : 'rgba(0, 0, 0, 0.05)',
                        borderRadius: 2,
                        '& fieldset': {
                          borderColor: isDarkMode
                            ? 'rgba(255, 255, 255, 0.1)'
                            : 'rgba(0, 0, 0, 0.1)',
                        },
                        '&:hover fieldset': {
                          borderColor: isDarkMode
                            ? 'rgba(255, 255, 255, 0.2)'
                            : 'rgba(0, 0, 0, 0.2)',
                        },
                      },
                      '& .MuiInputBase-input': {
                        color: isDarkMode ? '#ffffff' : '#1a1a1a',
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                        fontWeight: 600,
                      },
                    }}
                  />
                  <Box
                    sx={{
                      display: 'flex',
                      gap: { xs: 0.5, sm: 1 },
                      flexWrap: 'wrap',
                    }}
                  >
                    {['Market', '1 %', '2 %', '5 %', '10 %'].map(
                      (label, index) => {
                        const value = index === 0 ? 'market' : parseFloat(label)
                        const isSelected =
                          (index === 0 && slippage === 'market') ||
                          slippage === value
                        return (
                          <Button
                            key={label}
                            variant={isSelected ? 'contained' : 'outlined'}
                            size='small'
                            onClick={() => setSlippage(value)}
                            sx={{
                              flex: 1,
                              minWidth: { xs: '60px', sm: 'auto' },
                              color: isSelected
                                ? '#ffffff'
                                : isDarkMode
                                ? 'rgba(255, 255, 255, 0.7)'
                                : 'rgba(0, 0, 0, 0.7)',
                              borderColor: isDarkMode
                                ? 'rgba(255, 255, 255, 0.2)'
                                : 'rgba(0, 0, 0, 0.2)',
                              background: isSelected
                                ? '#4FC3F7'
                                : 'transparent',
                              fontSize: { xs: '0.75rem', sm: '0.8rem' },
                              fontWeight: 600,
                              textTransform: 'none',
                              py: { xs: 1, sm: 0.8 },
                              borderRadius: 1.5,
                              '&:hover': {
                                background: isSelected
                                  ? '#29B6F6'
                                  : isDarkMode
                                  ? 'rgba(255, 255, 255, 0.1)'
                                  : 'rgba(0, 0, 0, 0.1)',
                              },
                            }}
                          >
                            {label}
                          </Button>
                        )
                      }
                    )}
                  </Box>
                </Box>

                {/* Limit Price (for Limit orders) */}
                {activeTab === 1 && (
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant='body2'
                      sx={{
                        color: isDarkMode
                          ? 'rgba(255, 255, 255, 0.8)'
                          : 'rgba(0, 0, 0, 0.8)',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        mb: 1.5,
                      }}
                    >
                      Limit Price
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder='0.00'
                      value={limitPrice}
                      onChange={(e) => setLimitPrice(e.target.value)}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: isDarkMode
                            ? 'rgba(255, 255, 255, 0.05)'
                            : 'rgba(0, 0, 0, 0.05)',
                          borderRadius: 2,
                          '& fieldset': {
                            borderColor: isDarkMode
                              ? 'rgba(255, 255, 255, 0.1)'
                              : 'rgba(0, 0, 0, 0.1)',
                          },
                          '&:hover fieldset': {
                            borderColor: isDarkMode
                              ? 'rgba(255, 255, 255, 0.2)'
                              : 'rgba(0, 0, 0, 0.2)',
                          },
                        },
                        '& .MuiInputBase-input': {
                          color: isDarkMode ? '#ffffff' : '#1a1a1a',
                          fontSize: '1rem',
                          fontWeight: 600,
                        },
                      }}
                    />
                  </Box>
                )}

                {/* Expiry (for Limit orders) */}
                {activeTab === 1 && (
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant='body2'
                      sx={{
                        color: isDarkMode
                          ? 'rgba(255, 255, 255, 0.8)'
                          : 'rgba(0, 0, 0, 0.8)',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        mb: 1.5,
                      }}
                    >
                      Expiry
                    </Typography>
                    <FormControl fullWidth>
                      <Select
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        sx={{
                          backgroundColor: isDarkMode
                            ? 'rgba(255, 255, 255, 0.05)'
                            : 'rgba(0, 0, 0, 0.05)',
                          borderRadius: 2,
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: isDarkMode
                              ? 'rgba(255, 255, 255, 0.1)'
                              : 'rgba(0, 0, 0, 0.1)',
                          },
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: isDarkMode
                              ? 'rgba(255, 255, 255, 0.2)'
                              : 'rgba(0, 0, 0, 0.2)',
                          },
                          '& .MuiSelect-select': {
                            color: isDarkMode ? '#ffffff' : '#1a1a1a',
                            fontSize: '1rem',
                            fontWeight: 600,
                          },
                          '& .MuiSelect-icon': {
                            color: isDarkMode
                              ? 'rgba(255, 255, 255, 0.7)'
                              : 'rgba(0, 0, 0, 0.7)',
                          },
                        }}
                      >
                        <MenuItem value='1h'>1 Hour</MenuItem>
                        <MenuItem value='1d'>1 Day</MenuItem>
                        <MenuItem value='1w'>1 Week</MenuItem>
                        <MenuItem value='1m'>1 Month</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                )}

                {/* Swap Button */}
                <Button
                  fullWidth
                  variant='contained'
                  size='large'
                  onClick={() => {
                    if (!account) {
                      connectMetaMask()
                    } else if (isGaslessMode) {
                      if (gaslessQuote) {
                        executeGaslessSwap()
                      } else {
                        fetchGaslessQuote()
                      }
                    } else {
                      execute0xSwap()
                    }
                  }}
                  disabled={
                    (account && isGaslessMode && isFetchingGaslessQuote) ||
                    (!sellAmount || parseFloat(sellAmount) <= 0)
                  }
                  sx={{
                    mt: { xs: 3, sm: 4 },
                    py: { xs: 2, sm: 2.5 },
                    borderRadius: { xs: 2.5, sm: 3 },
                    background: isGaslessMode
                      ? 'linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%)'
                      : 'linear-gradient(135deg, #2196F3 0%, #21CBF3 100%)',
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    fontWeight: 700,
                    textTransform: 'none',
                    boxShadow: isGaslessMode
                      ? '0 8px 32px rgba(76, 175, 80, 0.3)'
                      : '0 8px 32px rgba(33, 150, 243, 0.3)',
                    minHeight: { xs: '48px', sm: 'auto' },
                    '&:hover': {
                      background: isGaslessMode
                        ? 'linear-gradient(135deg, #388E3C 0%, #4CAF50 100%)'
                        : 'linear-gradient(135deg, #1976D2 0%, #1CB5E0 100%)',
                      boxShadow: isGaslessMode
                        ? '0 12px 40px rgba(76, 175, 80, 0.4)'
                        : '0 12px 40px rgba(33, 150, 243, 0.4)',
                      transform: 'translateY(-2px)',
                    },
                    '&:disabled': {
                      background: 'rgba(0, 0, 0, 0.12)',
                      color: 'rgba(0, 0, 0, 0.26)',
                      boxShadow: 'none',
                    },
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  {!account
                    ? 'Connect Ethereum Wallet'
                    : isGaslessMode
                    ? isFetchingGaslessQuote
                      ? 'Getting Gasless Quote...'
                      : gaslessQuote
                      ? 'Execute Gasless Swap'
                      : 'Get Gasless Quote'
                    : `Swap (Connected: ${truncateAddress(account)})`
                  }
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Swap1
