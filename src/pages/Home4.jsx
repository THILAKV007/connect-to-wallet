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
  Accordion,
  AccordionSummary,
  CardMedia,
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

const Home4 = ({ isDarkMode }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Mock data for demonstration
  const currentPrice = 9209.0
  const priceChange = 2.45
  const volume24h = '1.2B'
  const marketCap = '180.5B'

  const blogPosts = [
    {
      id: 1,
      title: 'Swap on Solana',
      description:
        'The Power of True Decentralization the Dummy Content on the visionary crypto and documentation',
      image: '/assets/images/BlogsUNIDEX/blog-1.png',
    },
    {
      id: 2,
      title: 'Swap on Solana',
      description:
        'The Power of True Decentralization the Dummy Content on the visionary crypto and documentation',
      image: '/assets/images/BlogsUNIDEX/blog-2.png',
    },
    {
      id: 3,
      title: 'Swap on Solana',
      description:
        'The Power of True Decentralization the Dummy Content on the visionary crypto and documentation',
      image: '/assets/images/BlogsUNIDEX/blog-3.png',
    },
    {
      id: 4,
      title: 'Swap on Solana',
      description:
        'The Power of True Decentralization the Dummy Content on the visionary crypto and documentation',
      image: '/assets/images/BlogsUNIDEX/blog-4.png',
    },
    {
      id: 5,
      title: 'Swap on Solana',
      description:
        'The Power of True Decentralization the Dummy Content on the visionary crypto and documentation',
      image: '/assets/images/BlogsUNIDEX/blog-5.png',
    },
    {
      id: 6,
      title: 'Swap on Solana',
      description:
        'The Power of True Decentralization the Dummy Content on the visionary crypto and documentation',
      image: '/assets/images/BlogsUNIDEX/blog-1.png',
    },
    {
      id: 7,
      title: 'Swap on Solana',
      description:
        'The Power of True Decentralization the Dummy Content on the visionary crypto and documentation',
      image: '/assets/images/BlogsUNIDEX/blog-2.png',
    },
    {
      id: 8,
      title: 'Swap on Solana',
      description:
        'The Power of True Decentralization the Dummy Content on the visionary crypto and documentation',
      image: '/assets/images/BlogsUNIDEX/blog-3.png',
    },
    {
      id: 9,
      title: 'Swap on Solana',
      description:
        'The Power of True Decentralization the Dummy Content on the visionary crypto and documentation',
      image: '/assets/images/BlogsUNIDEX/blog-4.png',
    },
    {
      id: 10,
      title: 'Swap on Solana',
      description:
        'The Power of True Decentralization the Dummy Content on the visionary crypto and documentation',
      image: '/assets/images/BlogsUNIDEX/blog-5.png',
    },
  ]

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
        {/* Related Tokens */}
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
              Related Tokens
            </Typography>
            <Typography
              sx={{
                color: isDarkMode
                  ? 'rgba(255,255,255,0.85)'
                  : 'rgba(0,0,0,0.85)',
                fontSize: { xs: '13px', md: '14px' },
                mb: { xs: 2.5, md: 3 },
              }}
            >
              Ether (ETH) is the native currency of the Ethereum blockchain and
              the second largest cryptocurrency by market cap.
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr 1fr',
                  sm: 'repeat(3, 1fr)',
                  md: 'repeat(3, 1fr)',
                },
                gap: { xs: 2, md: 3 },
              }}
            >
              {Array(6)
                .fill({
                  title: 'ETH',
                  network: 'on Arbitrum one',
                  icon: 'assets/images/Home/eth.svg',
                })
                .map((item, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      backgroundColor: isDarkMode ? '#183B73' : '#D2E9FF',
                      borderRadius: 3,
                      p: 2,
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      component='img'
                      src={item.icon}
                      alt='ETH'
                      sx={{ width: 36, height: 36, mb: 1 }}
                    />
                    <Typography
                      sx={{
                        color: isDarkMode ? '#fff' : '#061536',
                        fontWeight: 600,
                        fontSize: { xs: '13px', md: '14px' },
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: isDarkMode
                          ? 'rgba(255,255,255,0.7)'
                          : 'rgba(0,0,0,0.6)',
                        fontSize: { xs: '12px', md: '13px' },
                      }}
                    >
                      {item.network}
                    </Typography>
                  </Box>
                ))}
            </Box>
          </CardContent>
        </Card>

        {/* FAQ Section */}
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
              FAQ
            </Typography>

            {[
              'How Does Ether ETH Work ?',
              'What chain is ETH used on ?',
              'Who is Team Behind Ethereum ?',
              'When was Ether ETH Launched ?',
              'What is The tokenomics ?',
              'What is The tokenomics ?',
            ].map((question, i) => (
              <Accordion
                key={i}
                sx={{
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                  borderBottom: isDarkMode
                    ? '1px solid rgba(255,255,255,0.1)'
                    : '1px solid rgba(0,0,0,0.1)',
                  '&:before': { display: 'none' },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <Typography
                      sx={{
                        color: isDarkMode
                          ? 'rgba(255,255,255,0.7)'
                          : 'rgba(0,0,0,0.6)',
                        fontSize: '20px',
                        lineHeight: 0,
                      }}
                    >
                      ˅
                    </Typography>
                  }
                >
                  <Typography
                    sx={{
                      color: isDarkMode ? '#fff' : '#061536',
                      fontSize: { xs: '13px', md: '14px' },
                    }}
                  >
                    {i + 1}. {question}
                  </Typography>
                </AccordionSummary>
              </Accordion>
            ))}
          </CardContent>
        </Card>

        <Box
          sx={{
            py: 8,

            minHeight: '500px',
          }}
        >
          <Container maxWidth='lg'>
            {/* Header */}
            <Box sx={{ textAlign: 'left', mb: 6 }}>
              <Typography
                variant='h6'
                sx={{
                  color: isDarkMode
                    ? 'rgba(255, 255, 255, 0.7)'
                    : 'rgba(0, 0, 0, 0.7)',
                  fontWeight: 400,
                  fontSize: '1.1rem',
                }}
              >
                The Power of True Decentralization
              </Typography>
            </Box>

            {/* Blog Cards Slider */}
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '16px',
                maxWidth: { lg: 'calc(4.2 * 220px + 4 * 16px)' },
                mx: 'auto',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  gap: { xs: 3, lg: 2 },
                  transition: 'transform 0.5s ease-in-out',
                  transform: `translateX(-${currentSlide * 20}%)`,
                  width: 'calc(100% + 50px)',
                }}
              >
                {blogPosts.map((blog, index) => (
                  <Card
                    key={blog.id}
                    sx={{
                      minWidth: { xs: '280px', lg: '220px' },
                      maxWidth: { xs: '280px', lg: '220px' },
                      borderRadius: '16px',
                      background: isDarkMode
                        ? 'rgba(255, 255, 255, 0.05)'
                        : 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      border: isDarkMode
                        ? '1px solid rgba(255, 255, 255, 0.1)'
                        : '1px solid rgba(0, 0, 0, 0.1)',
                      boxShadow: isDarkMode
                        ? '0 8px 32px rgba(0, 0, 0, 0.3)'
                        : '0 8px 32px rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: isDarkMode
                          ? '0 12px 40px rgba(0, 0, 0, 0.4)'
                          : '0 12px 40px rgba(0, 0, 0, 0.15)',
                      },
                    }}
                  >
                    <CardMedia
                      component='img'
                      image={blog.image}
                      alt={blog.title}
                      sx={{
                        height: { xs: 200, lg: 160 },
                        objectFit: 'cover',
                        borderRadius: '16px',
                      }}
                    />
                    <CardContent sx={{ p: 1.5 }}>
                      <Typography
                        variant='h6'
                        sx={{
                          fontWeight: 600,
                          mb: 0.5,
                          color: isDarkMode ? '#ffffff' : '#000000',
                          fontSize: '1.1rem',
                        }}
                      >
                        {blog.title}
                      </Typography>
                      <Typography
                        variant='body2'
                        sx={{
                          color: isDarkMode
                            ? 'rgba(255, 255, 255, 0.7)'
                            : 'rgba(0, 0, 0, 0.7)',
                          lineHeight: 1.6,
                          fontSize: '0.9rem',
                        }}
                      >
                        {blog.description}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Box>

            {/* Slide Indicators */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 1,
                mt: 4,
              }}
            >
              {Array.from({ length: Math.max(1, blogPosts.length - 4) }).map(
                (_, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      background:
                        currentSlide === index
                          ? '#2196f3'
                          : 'rgba(128, 128, 128, 0.3)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    onClick={() => setCurrentSlide(index)}
                  />
                )
              )}
            </Box>
          </Container>
        </Box>
      </Container>
    </Box>
  )
}

export default Home4
