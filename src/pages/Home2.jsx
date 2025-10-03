import React, { useState } from 'react'
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
  MenuItem,
  FormControl,
  Avatar,
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
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import ShowChartIcon from '@mui/icons-material/ShowChart'
import BarChartIcon from '@mui/icons-material/BarChart'
import TimelineIcon from '@mui/icons-material/Timeline'
import SwapVertIcon from '@mui/icons-material/SwapVert'

const Home2 = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState(0)
  const [sellAmount, setSellAmount] = useState('')
  const [buyAmount, setBuyAmount] = useState('')
  const [slippage, setSlippage] = useState('0.5')
  const [limitPrice, setLimitPrice] = useState('')
  const [expiry, setExpiry] = useState('1h')

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue)
  }

  // Mock data for demonstration
  const currentPrice = 9209.0
  const priceChange = 2.45
  const volume24h = '1.2B'
  const marketCap = '180.5B'

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
            background: isDarkMode ? '#10254A' : '#E5F3FE',
            border: isDarkMode
              ? '1px solid rgba(255, 255, 255, 0.1)'
              : '1px solid rgba(0, 0, 0, 0.1)',
            borderRadius: 1,
            p: 1.5,
            boxShadow: isDarkMode
              ? '0 4px 12px rgba(0, 0, 0, 0.3)'
              : '0 4px 12px rgba(0, 0, 0, 0.1)',
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

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: isDarkMode ? '#061536' : '#f0f9ff',
        pt: { xs: 10 },
        pb: { xs: 2, sm: 3, md: 4 },
        px: { xs: 1, sm: 2 },
      }}
    >
      <Container maxWidth='md' sx={{ px: { xs: 0, sm: 2 } }}>
        {/* Main Trading Interface */}
        {/* Market Stats */}
        <Card
          sx={{
            backgroundColor: isDarkMode ? '#10254A' : '#E5F3FE',

            borderRadius: 4,
            mb: { xs: 3, md: 4 },
          }}
        >
          <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
            <Typography
              sx={{
                color: isDarkMode ? '#ffffff' : '#061536',
                fontWeight: 700,
                fontSize: { xs: '16px', md: '18px' },
                mb: { xs: 2, md: 3 },
              }}
            >
              Market Stats
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(4, 1fr)',
                },
                gap: { xs: 2, md: 3 },
              }}
            >
              {[
                { label: 'Volume(24h)', value: '$ 11.6B' },
                { label: 'Market Cap', value: '$ 305 .35 B' },
                { label: 'FDV', value: '$ 305 .35 B' },
                { label: 'Holders', value: '-' },
              ].map((item, idx) => (
                <Box key={`top-${idx}`}>
                  <Typography
                    sx={{
                      color: isDarkMode
                        ? 'rgba(255, 255, 255, 0.8)'
                        : 'rgba(0, 0, 0, 0.7)',
                      fontSize: { xs: '12px', md: '13px' },
                      mb: 1,
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    sx={{
                      color: isDarkMode ? '#ffffff' : '#061536',
                      fontWeight: 700,
                      fontSize: { xs: '14px', md: '16px' },
                    }}
                  >
                    {item.value}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(4, 1fr)',
                },
                gap: { xs: 2, md: 3 },
                mt: { xs: 2, md: 3 },
              }}
            >
              {[
                { label: 'Liquidity', value: '$ 112.1M' },
                { label: 'Circulation Supply', value: '$ 305 .35 B' },
                { label: 'Total Supply', value: '120.72 M' },
                { label: 'Age', value: '9 Years' },
              ].map((item, idx) => (
                <Box key={`bottom-${idx}`}>
                  <Typography
                    sx={{
                      color: isDarkMode
                        ? 'rgba(255, 255, 255, 0.8)'
                        : 'rgba(0, 0, 0, 0.7)',
                      fontSize: { xs: '12px', md: '13px' },
                      mb: 1,
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    sx={{
                      color: isDarkMode ? '#ffffff' : '#061536',
                      fontWeight: 700,
                      fontSize: { xs: '14px', md: '16px' },
                    }}
                  >
                    {item.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>

        {/* About Ethereum */}
        <Card
          sx={{
            backgroundColor: isDarkMode ? '#10254A' : '#E5F3FE',

            borderRadius: 4,
          }}
        >
          <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
            <Typography
              sx={{
                color: isDarkMode ? '#ffffff' : '#061536',
                fontWeight: 700,
                fontSize: { xs: '16px', md: '18px' },
                mb: { xs: 2, md: 3 },
              }}
            >
              About Ethereum
            </Typography>
            <Typography
              sx={{
                color: isDarkMode
                  ? 'rgba(255,255,255,0.85)'
                  : 'rgba(0,0,0,0.85)',
                fontSize: { xs: '13px', md: '14px' },
                lineHeight: 1.7,
                mb: 2,
              }}
            >
              Ether (ETH) is the native currency of the Ethereum blockchain and
              the second largest cryptocurrency by market cap.
            </Typography>
            <Typography
              sx={{
                color: isDarkMode
                  ? 'rgba(255,255,255,0.85)'
                  : 'rgba(0,0,0,0.85)',
                fontSize: { xs: '13px', md: '14px' },
                lineHeight: 1.7,
                mb: 2,
              }}
            >
              It is used in many ways and widely accepted across crypto apps:
            </Typography>
            {[
              'ETH is used to pay gas costs for processing transactions, trading tokens, and using or deploying smart contracts on Ethereum and several other EVM networks, where gas cost is proportional to the computational effort needed.',
              'To incentivize validators with block rewards for staking ETH to propose and validate new blocks.',
              'As collateral for DeFi, where ETH can be borrowed against in lending protocols and used in creating liquidity pools.',
            ].map((text, i) => (
              <Box key={i} sx={{ display: 'flex', gap: 1, mb: 1.2 }}>
                <Typography
                  sx={{ color: isDarkMode ? '#B0BEC5' : 'rgba(0,0,0,0.6)' }}
                >
                  •
                </Typography>
                <Typography
                  sx={{
                    color: isDarkMode
                      ? 'rgba(255,255,255,0.85)'
                      : 'rgba(0,0,0,0.85)',
                    fontSize: { xs: '13px', md: '14px' },
                    lineHeight: 1.7,
                  }}
                >
                  {text}
                </Typography>
              </Box>
            ))}
            <Typography
              sx={{
                color: isDarkMode
                  ? 'rgba(255,255,255,0.85)'
                  : 'rgba(0,0,0,0.85)',
                fontSize: { xs: '13px', md: '14px' },
                lineHeight: 1.7,
                mb: 2,
              }}
            >
              ETH is a fungible asset, meaning each unit is equivalent to
              another, and it is fundamental to the ongoing operation of the
              Ethereum network.
            </Typography>
            <Typography
              sx={{
                color: isDarkMode
                  ? 'rgba(255,255,255,0.85)'
                  : 'rgba(0,0,0,0.85)',
                fontSize: { xs: '13px', md: '14px' },
                lineHeight: 1.7,
              }}
            >
              Ether is considered a store of value, a medium of exchange, and a
              collateral asset. ETH does not follow to the ERC-20 token
              standard, making it incompatible with some apps, to make ETH more
              cross-compatible, you can wrap it into WETH (Wrapped Ether) which
              is an ERC-20 token that represents ETH. Ether and its tokenized
              equivalent WETH are the primary assets associated with DeFi.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}

export default Home2
