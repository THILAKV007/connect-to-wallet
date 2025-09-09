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
  // IconButton,
  // Tabs,
  // Tab,
  Select,
  MenuItem,
  FormControl,
  // Avatar,
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
// import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
// import TrendingUpIcon from '@mui/icons-material/TrendingUp'
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

  // const handleTabChange = (event, newValue) => {
  //   setActiveTab(newValue)
  // }

  // // Mock data for demonstration
  // const currentPrice = 9209.0
  // const priceChange = 2.45
  // const volume24h = '1.2B'
  // const marketCap = '180.5B'

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
                background: isDarkMode ? '#10254A' : '#E5F3FE',
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
                background: isDarkMode ? '#10254A' : '#E5F3FE',
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
                          color: isDarkMode
                            ? 'rgba(255, 255, 255, 0.7)'
                            : 'rgba(0, 0, 0, 0.7)',
                          fontSize: '1rem',
                        }}
                      />
                      <BarChartIcon
                        sx={{
                          color: isDarkMode
                            ? 'rgba(255, 255, 255, 0.7)'
                            : 'rgba(0, 0, 0, 0.7)',
                          fontSize: '1rem',
                        }}
                      />
                      <TimelineIcon
                        sx={{
                          color: isDarkMode
                            ? 'rgba(255, 255, 255, 0.7)'
                            : 'rgba(0, 0, 0, 0.7)',
                          fontSize: '1rem',
                        }}
                      />
                      <KeyboardArrowDownIcon
                        sx={{
                          color: isDarkMode
                            ? 'rgba(255, 255, 255, 0.6)'
                            : 'rgba(0, 0, 0, 0.6)',
                          fontSize: '1rem',
                        }}
                      />
                    </Box>
                    <Typography
                      sx={{
                        color: isDarkMode
                          ? 'rgba(255, 255, 255, 0.7)'
                          : 'rgba(0, 0, 0, 0.7)',
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
                    background: isDarkMode
                      ? 'rgba(0, 0, 0, 0.1)'
                      : 'rgba(255, 255, 255, 0.3)',
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
                        stroke={
                          isDarkMode
                            ? 'rgba(255, 255, 255, 0.1)'
                            : 'rgba(0, 0, 0, 0.1)'
                        }
                        horizontal={true}
                        vertical={true}
                      />

                      <XAxis
                        dataKey='time'
                        axisLine={false}
                        tickLine={false}
                        tick={{
                          fill: isDarkMode
                            ? 'rgba(255, 255, 255, 0.6)'
                            : 'rgba(0, 0, 0, 0.6)',
                          fontSize: 11,
                        }}
                        interval='preserveStartEnd'
                      />

                      <YAxis
                        domain={['dataMin - 10', 'dataMax + 10']}
                        axisLine={false}
                        tickLine={false}
                        tick={{
                          fill: isDarkMode
                            ? 'rgba(255, 255, 255, 0.6)'
                            : 'rgba(0, 0, 0, 0.6)',
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
                background: isDarkMode ? 'rgba(16, 37, 74, 0.95)' : '#E5F3FE',
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
                      background: '#E5F3FE',
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
                          ♦
                        </Box>
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
                          ETH
                        </Typography>
                        <KeyboardArrowDownIcon
                          sx={{
                            color: '#666666',
                            fontSize: '1.2rem',
                          }}
                        />
                      </Box>
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
                      background: '#E5F3FE',
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
                          ♦
                        </Box>
                        <Typography
                          sx={{
                            color: '#000000',
                            fontSize: '1.1rem',
                            fontWeight: 600,
                          }}
                        >
                          ETH
                        </Typography>
                        <KeyboardArrowDownIcon
                          sx={{
                            color: '#666666',
                            fontSize: '1.2rem',
                          }}
                        />
                      </Box>
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

                {/* Connect Wallet Button */}
                <Button
                  fullWidth
                  variant='contained'
                  size='large'
                  sx={{
                    mt: { xs: 3, sm: 4 },
                    py: { xs: 2, sm: 2.5 },
                    borderRadius: { xs: 2.5, sm: 3 },
                    background:
                      'linear-gradient(135deg, #2196F3 0%, #21CBF3 100%)',
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    fontWeight: 700,
                    textTransform: 'none',
                    boxShadow: '0 8px 32px rgba(33, 150, 243, 0.3)',
                    minHeight: { xs: '48px', sm: 'auto' },
                    '&:hover': {
                      background:
                        'linear-gradient(135deg, #1976D2 0%, #1CB5E0 100%)',
                      boxShadow: '0 12px 40px rgba(33, 150, 243, 0.4)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  Connect Ethereum Wallet
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
