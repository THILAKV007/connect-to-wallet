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

const Home3 = ({ isDarkMode }) => {
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
        {/* Security Audit */}
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
              Security Audit
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: { xs: 2, md: 3 },
              }}
            >
              {/* Risk panel */}
              <Box
                sx={{
                  background: isDarkMode ? '#0F2F67' : '#D6ECFF',
                  borderRadius: 3,
                  p: { xs: 3, md: 4 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: { xs: 140, md: 160 },
                }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,

                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {/* Shield + check icon */}
                    <Box
                      component='img'
                      src='assets/images/Home/shield-tick.png'
                      alt='hero background decor'
                      sx={{
                        width: '60px',
                        height: '60px',
                        opacity: 1,
                        zIndex: 0,
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      color: isDarkMode ? '#ffffff' : '#061536',
                      fontWeight: 600,
                      fontSize: { xs: '14px', md: '15px' },
                    }}
                  >
                    0 Risk Detected
                  </Typography>
                </Box>
              </Box>

              {/* Go+ Security list */}
              <Box
                sx={{
                  p: { xs: 2, md: 3 },
                }}
              >
                <Typography
                  sx={{
                    color: isDarkMode ? '#ffffff' : '#061536',
                    fontWeight: 700,
                    fontSize: { xs: '14px', md: '15px' },
                    mb: { xs: 1.5, md: 2 },
                  }}
                >
                  Go+ Security
                </Typography>
                {[
                  {
                    label: 'Verified Source Code',
                    value: 'Yes',
                    color: '#12CA41',
                  },
                  { label: 'Proxy Contract', value: 'No', color: '#F44336' },
                  { label: 'Mintable', value: 'No', color: '#F44336' },
                  { label: 'Buy Tax', value: '0%', color: '#12CA41' },
                  { label: 'Sell Tax', value: '0%', color: '#12CA41' },
                  { label: 'Honeypot', value: 'No', color: '#12CA41' },
                ].map((item) => (
                  <Box
                    key={item.label}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      py: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        color: isDarkMode
                          ? 'rgba(255,255,255,0.85)'
                          : 'rgba(0,0,0,0.75)',
                        fontSize: { xs: '13px', md: '14px' },
                      }}
                    >
                      {item.label}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography
                        sx={{
                          color: isDarkMode ? '#fff' : '#6E6262',
                          fontWeight: 600,
                          fontSize: { xs: '13px', md: '14px' },
                        }}
                      >
                        {item.value}
                      </Typography>
                      <Box
                        sx={{
                          width: 18,
                          height: 18,
                          borderRadius: '50%',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: isDarkMode
                            ? 'rgba(255,255,255,0.1)'
                            : 'rgba(0,0,0,0.08)',
                          border: isDarkMode
                            ? '1px solid rgba(255,255,255,0.12)'
                            : '1px solid rgba(0,0,0,0.12)',
                        }}
                      >
                        {/* info icon */}
                        <svg
                          width='10'
                          height='10'
                          viewBox='0 0 24 24'
                          fill='none'
                        >
                          <circle
                            cx='12'
                            cy='12'
                            r='9'
                            stroke={isDarkMode ? '#9AD1FF' : '#1E3A8A'}
                            strokeWidth='1.5'
                          />
                          <line
                            x1='12'
                            y1='8'
                            x2='12'
                            y2='13'
                            stroke={isDarkMode ? '#9AD1FF' : '#1E3A8A'}
                            strokeWidth='1.5'
                            strokeLinecap='round'
                          />
                          <circle
                            cx='12'
                            cy='16'
                            r='1'
                            fill={isDarkMode ? '#9AD1FF' : '#1E3A8A'}
                          />
                        </svg>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* Liquidity Score */}
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
              Liquidity Score
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '380px 1fr' },
                gap: { xs: 2, md: 3 },
              }}
            >
              {/* Left – Gauge */}
              <Box
                sx={{
                  background: isDarkMode
                    ? 'radial-gradient(100% 100% at 50% 50%, #0E2B5A 0%, #0C2146 100%)'
                    : 'radial-gradient(100% 100% at 50% 50%, #E6F4FF 0%, #D6ECFF 100%)',
                  borderRadius: 3,
                  p: { xs: 3, md: 4 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: { xs: 180, md: 200 },
                }}
              >
                <Box sx={{ textAlign: 'center', position: 'relative' }}>
                  <Box
                    component='img'
                    src='assets/images/Home/extreme_liquidity_bg.svg'
                    alt='hero background decor'
                    sx={{
                      position: 'absolute',
                      left: '50%',
                      bottom: -45,
                      transform: {
                        xs: 'translate(-50%, 0)',
                        md: 'translateX(-50%)',
                      },
                      width: '250px',
                      height: '250px',
                      opacity: 1,
                      zIndex: 0,
                    }}
                  />
                  <svg width='220' height='120' viewBox='0 0 220 120'>
                    <path
                      d='M 30 110 A 80 80 0 0 1 190 110'
                      stroke='#1EF655'
                      strokeWidth='12'
                      fill='none'
                      strokeLinecap='round'
                    />
                  </svg>
                  <Box sx={{ mt: -6.5 }}>
                    <Typography
                      sx={{
                        color: isDarkMode ? '#ffffff' : '#061536',
                        fontWeight: 700,
                        fontSize: { xs: '20px', md: '22px' },
                        mt: 1,
                      }}
                    >
                      10/10
                    </Typography>
                    <Typography
                      sx={{
                        color: '#1EF655',
                        fontWeight: 600,
                        fontSize: { xs: '13px', md: '14px' },
                        mt: 2.5,
                      }}
                    >
                      Extreme Liquidity
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Right – Pool table */}
              <Box
                sx={{
                  p: { xs: 1, md: 2 },
                }}
              >
                {/* Header */}
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    mb: { xs: 1.5, md: 2 },
                  }}
                >
                  {['Pool', 'Pair', 'Liquidity'].map((h) => (
                    <Typography
                      key={h}
                      sx={{
                        color: isDarkMode
                          ? 'rgba(255,255,255,0.7)'
                          : 'rgba(0,0,0,0.7)',
                        fontWeight: 600,
                        fontSize: { xs: '12px', md: '13px' },
                      }}
                    >
                      {h}
                    </Typography>
                  ))}
                </Box>

                {/* Rows */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr 1fr',
                      py: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        color: isDarkMode ? '#ffffff' : '#061536',
                        fontWeight: 600,
                        fontSize: { xs: '13px', md: '14px' },
                      }}
                    >
                      Curve
                    </Typography>
                    <Typography
                      sx={{
                        color: isDarkMode ? '#ffffff' : '#061536',
                        fontWeight: 600,
                        fontSize: { xs: '13px', md: '14px' },
                      }}
                    >
                      STH/ETH
                    </Typography>
                    <Typography
                      sx={{
                        color: isDarkMode ? '#ffffff' : '#061536',
                        fontWeight: 600,
                        fontSize: { xs: '13px', md: '14px' },
                      }}
                    >
                      $122.9M
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}

export default Home3
