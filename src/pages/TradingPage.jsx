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
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import ShowChartIcon from '@mui/icons-material/ShowChart'
import BarChartIcon from '@mui/icons-material/BarChart'
import TimelineIcon from '@mui/icons-material/Timeline'
import SwapVertIcon from '@mui/icons-material/SwapVert'

const TradingPage = ({ isDarkMode }) => {
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

  // Generate mock chart data
  const generateChartData = () => {
    const data = []
    for (let i = 0; i < 50; i++) {
      data.push({
        time: Date.now() - (50 - i) * 60000,
        value: currentPrice + Math.random() * 200 - 100,
      })
    }
    return data
  }

  const chartData = generateChartData()

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: isDarkMode ? '#061536' : '#f8f9fa',
        pt: { xs: 2, md: 15 },
        pb: 4,
      }}
    >
      <Container maxWidth='xl'>
        {/* Main Trading Interface */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            gap: 3,
          }}
        >
          {/* Left Side - Unified Chart Interface */}
          <Box sx={{ flex: 1 }}>
            {/* Header Section */}
            <Card
              sx={{
                background: isDarkMode ? '#10254A' : '#ffffff',
                backdropFilter: 'blur(10px)',
                border: isDarkMode
                  ? '1px solid rgba(255, 255, 255, 0.1)'
                  : '1px solid rgba(0, 0, 0, 0.1)',
                mb: 3,
                borderRadius: 2,
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 3,
                  }}
                >
                  {/* Left side - Bedrock branding */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar
                      sx={{
                        background:
                          'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        width: 40,
                        height: 40,
                      }}
                    >
                      <Typography sx={{ fontWeight: 'bold', color: 'white' }}>
                        B
                      </Typography>
                    </Avatar>
                    <Typography
                      variant='h5'
                      sx={{
                        fontWeight: 700,
                        color: isDarkMode ? '#ffffff' : '#1a1a1a',
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
                  <IconButton
                    sx={{
                      color: isDarkMode ? '#ffffff' : '#1a1a1a',
                    }}
                  >
                    <SwapVertIcon sx={{ transform: 'rotate(90deg)' }} />
                  </IconButton>
                </Box>

                {/* Navigation tabs */}
                <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                  {[
                    'Security audit',
                    'Liquidity',
                    'Official Links',
                    'Trackers',
                    'Exchange',
                  ].map((tab, index) => (
                    <Chip
                      key={tab}
                      label={tab}
                      sx={{
                        backgroundColor:
                          index === 1
                            ? '#4ade80'
                            : isDarkMode
                            ? 'rgba(255, 255, 255, 0.1)'
                            : 'rgba(0, 0, 0, 0.1)',
                        color:
                          index === 1
                            ? '#000000'
                            : isDarkMode
                            ? '#ffffff'
                            : '#1a1a1a',
                        '&:hover': {
                          backgroundColor:
                            index === 1
                              ? '#22c55e'
                              : isDarkMode
                              ? 'rgba(255, 255, 255, 0.2)'
                              : 'rgba(0, 0, 0, 0.2)',
                        },
                      }}
                    />
                  ))}
                </Box>

                {/* Status indicators */}
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Chip
                    label='0'
                    sx={{
                      backgroundColor: isDarkMode
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'rgba(0, 0, 0, 0.1)',
                      color: isDarkMode ? '#ffffff' : '#1a1a1a',
                      minWidth: '60px',
                    }}
                  />
                  <Chip
                    label='10'
                    sx={{
                      backgroundColor: '#4ade80',
                      color: '#000000',
                      minWidth: '60px',
                    }}
                  />
                  {[1, 2, 3, 4].map((item) => (
                    <Chip
                      key={item}
                      label=''
                      sx={{
                        backgroundColor: isDarkMode
                          ? 'rgba(255, 255, 255, 0.1)'
                          : 'rgba(0, 0, 0, 0.1)',
                        minWidth: '40px',
                        height: '32px',
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
            {/* Main Chart Card */}
            <Card
              sx={{
                background: isDarkMode ? '#10254A' : '#ffffff',
                backdropFilter: 'blur(10px)',
                border: isDarkMode
                  ? '1px solid rgba(255, 255, 255, 0.1)'
                  : '1px solid rgba(0, 0, 0, 0.1)',
                height: 'calc(100vh - 200px)',
                minHeight: '600px',
              }}
            >
              <CardContent sx={{ p: 0, height: '100%' }}>
                {/* Price and Stats Section */}
                <Box sx={{ p: 2, pb: 1 }}>
                  <Typography
                    variant='h3'
                    sx={{
                      fontWeight: 700,
                      color: isDarkMode ? '#ffffff' : '#1a1a1a',
                      mb: 1,
                      fontSize: '2.2rem',
                    }}
                  >
                    $9209.00
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                    <Box
                      sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                    >
                      <Typography
                        sx={{
                          color: '#4FC3F7',
                          fontWeight: 500,
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
                          color: '#4FC3F7',
                          fontWeight: 500,
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
                          color: '#4FC3F7',
                          fontWeight: 500,
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
                          color: '#4FC3F7',
                          fontWeight: 500,
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
                    mx: 3,
                    mb: 3,
                    borderRadius: 1,
                    height: '350px',
                    overflow: 'hidden',
                  }}
                >
                  {/* Chart Grid */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundImage: `
                        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                      `,
                      backgroundSize: '50px 35px',
                    }}
                  />

                  {/* Price Lines */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      height: '100%',
                      width: '60px',
                      borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      py: 2,
                    }}
                  >
                    {[
                      2675, 2650, 2625, 2600, 2577, 2550, 2525, 2500, 2475,
                      2450,
                    ].map((price, index) => (
                      <Typography
                        key={price}
                        sx={{
                          color:
                            index === 6
                              ? '#4FC3F7'
                              : 'rgba(255, 255, 255, 0.5)',
                          fontSize: '0.7rem',
                          textAlign: 'right',
                          pr: 1,
                          background:
                            index === 6
                              ? 'rgba(79, 195, 247, 0.1)'
                              : 'transparent',
                          px: 0.8,
                          py: 0.2,
                          borderRadius: 0.5,
                        }}
                      >
                        {price}.00
                      </Typography>
                    ))}
                  </Box>

                  {/* Chart SVG */}
                  <svg
                    width='100%'
                    height='100%'
                    viewBox='0 0 600 350'
                    style={{ position: 'absolute', top: 0, left: 0 }}
                    preserveAspectRatio='none'
                  >
                    <defs>
                      <linearGradient
                        id='chartGradient'
                        x1='0%'
                        y1='0%'
                        x2='0%'
                        y2='100%'
                      >
                        <stop
                          offset='0%'
                          stopColor='#4FC3F7'
                          stopOpacity='0.2'
                        />
                        <stop
                          offset='100%'
                          stopColor='#4FC3F7'
                          stopOpacity='0'
                        />
                      </linearGradient>
                    </defs>
                    {/* Chart Fill */}
                    <path
                      d='M40,250 L80,240 L120,245 L160,235 L200,220 L240,210 L280,200 L320,180 L360,160 L400,140 L440,120 L480,100 L520,80 L560,60 L560,350 L40,350 Z'
                      fill='url(#chartGradient)'
                    />
                    {/* Chart Line */}
                    <path
                      d='M40,250 L80,240 L120,245 L160,235 L200,220 L240,210 L280,200 L320,180 L360,160 L400,140 L440,120 L480,100 L520,80 L560,60'
                      stroke='#4FC3F7'
                      strokeWidth='1.5'
                      fill='none'
                    />
                  </svg>

                  {/* Bottom Time Labels */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: '60px',
                      height: '25px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      px: 2,
                      background:
                        'linear-gradient(180deg, transparent 0%, rgba(16, 37, 74, 0.6) 100%)',
                    }}
                  >
                    {[
                      '14',
                      '15 Jan 25',
                      '05:00',
                      '16',
                      '17',
                      '18',
                      '19',
                      '20',
                    ].map((time) => (
                      <Typography
                        key={time}
                        sx={{
                          color: 'rgba(255, 255, 255, 0.5)',
                          fontSize: '0.65rem',
                        }}
                      >
                        {time}
                      </Typography>
                    ))}
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
          <Box sx={{ width: { xs: '100%', lg: '400px' } }}>
            <Card
              sx={{
                background: isDarkMode ? '#10254A' : '#ffffff',
                backdropFilter: 'blur(10px)',
                border: isDarkMode
                  ? '1px solid rgba(255, 255, 255, 0.1)'
                  : '1px solid rgba(0, 0, 0, 0.1)',
              }}
            >
              <CardContent sx={{ p: 3 }}>
                {/* Trading Tabs */}
                <Tabs
                  value={activeTab}
                  onChange={handleTabChange}
                  sx={{
                    mb: 3,
                    '& .MuiTab-root': {
                      color: isDarkMode
                        ? 'rgba(255, 255, 255, 0.7)'
                        : 'rgba(0, 0, 0, 0.7)',
                      fontWeight: 500,
                      textTransform: 'none',
                    },
                    '& .Mui-selected': {
                      color: isDarkMode ? '#ffffff' : '#1a1a1a',
                      fontWeight: 600,
                    },
                  }}
                >
                  <Tab label='Market' />
                  <Tab label='Limit' />
                  <Tab label='Crosschain' />
                </Tabs>

                {/* Sell Section */}
                <Box sx={{ mb: 3 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mb: 1,
                    }}
                  >
                    <Typography
                      variant='body1'
                      sx={{
                        fontWeight: 500,
                        color: isDarkMode ? '#ffffff' : '#1a1a1a',
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
                        fontWeight: 500,
                        minWidth: 'auto',
                        p: 0,
                      }}
                    >
                      Use Max
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      background: isDarkMode ? '#ffffff' : '#f8f9fa',
                      borderRadius: 2,
                      p: 2,
                      mb: 1,
                    }}
                  >
                    <TextField
                      fullWidth
                      placeholder='0'
                      value={sellAmount}
                      onChange={(e) => setSellAmount(e.target.value)}
                      variant='standard'
                      sx={{
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
                          fontSize: '1.5rem',
                          fontWeight: 600,
                        },
                      }}
                      InputProps={{
                        endAdornment: (
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1,
                            }}
                          >
                            <Box
                              sx={{
                                width: 24,
                                height: 24,
                                borderRadius: '50%',
                                background:
                                  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#ffffff',
                                fontSize: '0.7rem',
                                fontWeight: 700,
                              }}
                            >
                              ETH
                            </Box>
                            <Typography
                              sx={{
                                color: '#000000',
                                fontSize: '1rem',
                                fontWeight: 600,
                              }}
                            >
                              ETH
                            </Typography>
                            <KeyboardArrowDownIcon
                              sx={{
                                color: '#666666',
                              }}
                            />
                          </Box>
                        ),
                      }}
                    />
                  </Box>
                  <Typography
                    variant='caption'
                    sx={{
                      color: isDarkMode
                        ? 'rgba(255, 255, 255, 0.6)'
                        : 'rgba(0, 0, 0, 0.6)',
                      fontSize: '0.8rem',
                    }}
                  >
                    Balance: 0.00
                  </Typography>
                </Box>

                {/* Swap Icon */}
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                  <IconButton
                    sx={{
                      background:
                        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: '#ffffff',
                      '&:hover': {
                        background:
                          'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
                      },
                    }}
                  >
                    <SwapHorizIcon />
                  </IconButton>
                </Box>

                {/* Swap Icon */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    my: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: '#4FC3F7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        transform: 'scale(1.1)',
                        background: '#29B6F6',
                      },
                    }}
                  >
                    <SwapVertIcon
                      sx={{
                        color: '#ffffff',
                        fontSize: '1.2rem',
                      }}
                    />
                  </Box>
                </Box>

                {/* Buy Section */}
                <Box sx={{ mb: 3 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mb: 1,
                    }}
                  >
                    <Typography
                      variant='body1'
                      sx={{
                        fontWeight: 500,
                        color: '#ffffff',
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
                        fontWeight: 500,
                        minWidth: 'auto',
                        p: 0,
                      }}
                    >
                      Use Max
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      background: '#ffffff',
                      borderRadius: 2,
                      p: 2,
                      mb: 1,
                    }}
                  >
                    <TextField
                      fullWidth
                      placeholder='0'
                      value={buyAmount}
                      onChange={(e) => setBuyAmount(e.target.value)}
                      variant='standard'
                      sx={{
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
                          fontSize: '1.5rem',
                          fontWeight: 600,
                        },
                      }}
                      InputProps={{
                        endAdornment: (
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1,
                            }}
                          >
                            <Box
                              sx={{
                                width: 24,
                                height: 24,
                                borderRadius: '50%',
                                background:
                                  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#ffffff',
                                fontSize: '0.7rem',
                                fontWeight: 700,
                              }}
                            >
                              ETH
                            </Box>
                            <Typography
                              sx={{
                                color: '#000000',
                                fontSize: '1rem',
                                fontWeight: 600,
                              }}
                            >
                              ETH
                            </Typography>
                            <KeyboardArrowDownIcon
                              sx={{
                                color: '#666666',
                              }}
                            />
                          </Box>
                        ),
                      }}
                    />
                  </Box>
                  <Typography
                    variant='caption'
                    sx={{
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontSize: '0.8rem',
                    }}
                  >
                    Balance: 0.00
                  </Typography>
                </Box>

                {/* Slippage Tolerance */}
                <Box sx={{ mb: 2 }}>
                  <Typography
                    sx={{
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontSize: '0.75rem',
                      mb: 0.8,
                    }}
                  >
                    Slippage Tolerance: {slippage}%
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 0.5 }}>
                    {[0.1, 0.5, 1.0].map((value) => (
                      <Button
                        key={value}
                        variant={slippage === value ? 'contained' : 'outlined'}
                        size='small'
                        onClick={() => setSlippage(value)}
                        sx={{
                          color:
                            slippage === value
                              ? '#ffffff'
                              : 'rgba(255, 255, 255, 0.6)',
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                          background:
                            slippage === value ? '#4FC3F7' : 'transparent',
                          fontSize: '0.7rem',
                          textTransform: 'none',
                          minWidth: 'auto',
                          px: 1.2,
                          py: 0.4,
                        }}
                      >
                        {value}%
                      </Button>
                    ))}
                  </Box>
                </Box>

                {/* Limit Price (for Limit orders) */}
                {activeTab === 1 && (
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant='body2'
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        mb: 1,
                      }}
                    >
                      Limit Price
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder='Enter limit price'
                      value={limitPrice}
                      onChange={(e) => setLimitPrice(e.target.value)}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          '& fieldset': {
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                          },
                        },
                        '& .MuiInputBase-input': {
                          color: '#ffffff',
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
                        color: 'rgba(255, 255, 255, 0.7)',
                        mb: 1,
                      }}
                    >
                      Expiry
                    </Typography>
                    <FormControl fullWidth>
                      <Select
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        sx={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'rgba(255, 255, 255, 0.2)',
                          },
                          '& .MuiSelect-select': {
                            color: '#ffffff',
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

                {/* Connect Wallet Button */}
                <Button
                  fullWidth
                  variant='contained'
                  size='large'
                  sx={{
                    background: '#4FC3F7',
                    color: '#ffffff',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    py: 1.2,
                    borderRadius: 1.5,
                    textTransform: 'none',
                    '&:hover': {
                      background: '#29B6F6',
                    },
                  }}
                >
                  Connect Wallet
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default TradingPage
