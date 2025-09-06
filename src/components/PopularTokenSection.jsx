import React, { useState } from 'react'
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  Button,
} from '@mui/material'

const PopularTokenSection = ({ isDarkMode }) => {
  const [selectedFilter, setSelectedFilter] = useState('All')

  const filters = ['All', 'Matic', 'Solana', 'Matic', 'Solana', 'Matic']

  const mainToken = {
    name: 'Bedrock',
    symbol: 'Be',
    price: '$9209.00',
    change: '8.0%',
    period: 'Last 24 Hours',
    icon: '💎', // You can replace with actual icon
  }

  const tokens = Array(10)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      name: 'Bedrock',
      symbol: 'Be',
      price: '$9209.00',
      change: '8.0%',
      icon: '💎',
    }))

  return (
    <Box
      sx={{
        py: 6,
        px: { xs: 2, md: 3 },
        background: isDarkMode ? '#F8FAFF' : '#CCEBFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          zIndex: 0,
          position: 'absolute',
          top: -1300,
          left: -190,
          width: '160%',
          overflow: 'hidden',
        }}
      >
        <img
          src='/assets/images/WhyUNIDEX/bg.svg'
          alt=''
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </Box>
      <Box sx={{ maxWidth: 1400, mx: 'auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant='h3'
            sx={{
              fontWeight: 700,
              mb: 2,
              color: isDarkMode ? '#000' : '#1a1a1a',
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Popular{' '}
            <Box component='span' sx={{ color: '#2196f3' }}>
              Token
            </Box>
          </Typography>
          <Typography
            variant='h6'
            sx={{
              color: isDarkMode ? '#000' : '#666666',
              fontWeight: 400,
            }}
          >
            The Power of True Decentralization
          </Typography>
        </Box>

        {/* Main Content Grid */}
        <Grid container spacing={2} sx={{ alignItems: 'flex-start' }}>
          {/* Main Token Card */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                background: isDarkMode ? '#fff' : '#F0F8FF',
                borderRadius: '16px',

                height: 'fit-content',
              }}
            >
              <CardContent sx={{ p: 2.5 }}>
                {/* Token Header */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <img
                    src='/assets/images/PopularToken/place-holder.png'
                    alt='Token'
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: '50%',
                      marginRight: 16,
                    }}
                  />
                  <Box>
                    <Typography
                      variant='h5'
                      sx={{
                        fontWeight: 700,
                        color: isDarkMode ? '#ffffff' : '#1a1a1a',
                        mb: 0.5,
                        fontSize: '1.2rem',
                      }}
                    >
                      {mainToken.name}
                    </Typography>
                    <Typography
                      variant='body2'
                      sx={{
                        color: isDarkMode ? '#94a3b8' : '#64748b',
                        fontSize: '0.9rem',
                      }}
                    >
                      {mainToken.symbol}
                    </Typography>
                  </Box>
                </Box>

                {/* Price */}
                <Typography
                  variant='h4'
                  sx={{
                    fontWeight: 700,
                    color: isDarkMode ? '#ffffff' : '#1a1a1a',
                    mb: 1,
                    fontSize: '1.8rem',
                  }}
                >
                  {mainToken.price}
                </Typography>

                {/* Change */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Chip
                    label={`+${mainToken.change}`}
                    sx={{
                      backgroundColor: '#10b981',
                      color: '#ffffff',
                      fontWeight: 600,
                      mr: 1,
                    }}
                  />
                  <Typography
                    variant='body2'
                    sx={{
                      color: isDarkMode ? '#94a3b8' : '#64748b',
                    }}
                  >
                    {mainToken.period}
                  </Typography>
                </Box>

                {/* Chart Placeholder */}
                <Box
                  sx={{
                    height: 100,
                    background: isDarkMode
                      ? 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)'
                      : 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Simple chart visualization */}
                  <svg width='100%' height='100%' viewBox='0 0 300 100'>
                    <path
                      d='M20,80 Q50,65 80,55 T140,45 T200,35 T260,25 L280,20'
                      stroke='#10b981'
                      strokeWidth='2'
                      fill='none'
                    />
                    <path
                      d='M20,80 Q50,65 80,55 T140,45 T200,35 T260,25 L280,20 L280,100 L20,100 Z'
                      fill='url(#gradient)'
                      opacity='0.3'
                    />
                    <defs>
                      <linearGradient
                        id='gradient'
                        x1='0%'
                        y1='0%'
                        x2='0%'
                        y2='100%'
                      >
                        <stop offset='0%' stopColor='#10b981' />
                        <stop offset='100%' stopColor='transparent' />
                      </linearGradient>
                    </defs>
                  </svg>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Token Grid */}

          <Grid item xs={12} md={8}>
            {/* Filter Tabs */}
            <Box
              sx={{
                display: 'flex',
                mb: 4,
                flexWrap: 'wrap',
                gap: 1,
              }}
            >
              {filters.map((filter, index) => (
                <Button
                  key={index}
                  variant={selectedFilter === filter ? 'contained' : 'outlined'}
                  onClick={() => setSelectedFilter(filter)}
                  sx={{
                    borderRadius: '5px',
                    px: 3,
                    py: 1,
                    textTransform: 'none',
                    fontWeight: 500,

                    backgroundColor:
                      selectedFilter === filter ? '#2196f3' : '#fff',
                    color:
                      selectedFilter === filter
                        ? '#fff'
                        : isDarkMode
                        ? '#000'
                        : '#666',
                    '&:hover': {
                      backgroundColor:
                        selectedFilter === filter
                          ? '#1976d2'
                          : isDarkMode
                          ? 'rgba(255,255,255,0.1)'
                          : 'rgba(0,0,0,0.05)',
                    },
                  }}
                >
                  {filter}
                </Button>
              ))}
            </Box>
            <Grid container spacing={1.5} sx={{ height: 'fit-content' }}>
              {tokens.map((token) => (
                <Grid item xs={6} sm={4} md={2} lg={2} key={token.id}>
                  <Card
                    sx={{
                      background: isDarkMode
                        ? '#fff'
                        : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                      borderRadius: '12px',

                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: isDarkMode
                          ? '0 12px 30px rgba(0,0,0,0.4)'
                          : '0 12px 30px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        paddingX: 2,
                        textAlign: 'center',
                        '&:last-child': { pb: 1.5 },
                      }}
                    >
                      <img
                        src='/assets/images/PopularToken/place-holder.png'
                        alt='Token'
                        style={{
                          width: 35,
                          height: 35,
                          borderRadius: '50%',
                          margin: '0 auto 8px auto',
                          display: 'block',
                        }}
                      />
                      <Typography
                        variant='subtitle2'
                        sx={{
                          fontWeight: 600,
                          color: isDarkMode ? '#000' : '#1a1a1a',
                          fontSize: '0.85rem',
                        }}
                      >
                        {token.name}
                      </Typography>
                      <Typography
                        variant='caption'
                        sx={{
                          color: isDarkMode ? '#595959' : '#64748b',
                          display: 'block',
                          fontSize: '0.6rem',
                        }}
                      >
                        {token.symbol}
                      </Typography>
                      <Typography
                        variant='body2'
                        sx={{
                          fontWeight: 400,
                          color: isDarkMode ? '#000' : '#1a1a1a',
                          fontSize: '0.8rem',
                        }}
                      >
                        {token.price}
                      </Typography>
                      <Chip
                        label={`+${token.change}`}
                        size='small'
                        sx={{
                          color: '#10b981',
                          fontWeight: 400,
                          fontSize: '0.6rem',
                          height: '20px',
                        }}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default PopularTokenSection
