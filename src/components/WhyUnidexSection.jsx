import React from 'react'
import {
  Box,
  Typography,
  Card,
  CardContent,
  Container,
} from '@mui/material'
import LockIcon from '@mui/icons-material/Lock'
import WaterDropIcon from '@mui/icons-material/WaterDrop'
import FlashOnIcon from '@mui/icons-material/FlashOn'
import SecurityIcon from '@mui/icons-material/Security'

const WhyUnidexSection = ({ isDarkMode }) => {
  const features = [
    {
      id: 1,
      title: 'Non-Custodial',
      description:
        'Your crypto stays in your wallet — always. Our non-custodial design ensures that you have complete control over your funds, with no third-party access or risk of centralized failure.',
      icon: <LockIcon sx={{ fontSize: 24, color: 'white' }} />,
    },
    {
      id: 2,
      title: 'Deep Liquidity',
      description:
        'Your crypto stays in your wallet — always. Our non-custodial design ensures that you have complete control over your funds, with no third-party access or risk of centralized failure.',
      icon: <WaterDropIcon sx={{ fontSize: 24, color: 'white' }} />,
    },
    {
      id: 3,
      title: 'Ultra-Fast Swaps',
      description:
        'Your crypto stays in your wallet — always. Our non-custodial design ensures that you have complete control over your funds, with no third-party access or risk of centralized failure.',
      icon: <FlashOnIcon sx={{ fontSize: 24, color: 'white' }} />,
    },
    {
      id: 4,
      title: 'Secure & Audited',
      description:
        'Your crypto stays in your wallet — always. Our non-custodial design ensures that you have complete control over your funds, with no third-party access or risk of centralized failure.',
      icon: <SecurityIcon sx={{ fontSize: 24, color: 'white' }} />,
    },
  ]

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, md: 3 },
        background: isDarkMode ? '#061536' : '#E8F6FF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          zIndex: 0,
          position: 'absolute',
          bottom: -900,
          left: -700,
          width: '160%',
        }}
      >
        <img
          src='/assets/images/WhyUNIDEX/bg.svg'
          alt=''
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </Box>
      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 2 }}>
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant='h3'
            sx={{
              fontWeight: 700,
              mb: 2,
              color: isDarkMode ? '#ffffff' : '#1a1a1a',
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Why{' '}
            <Box component='span' sx={{ color: '#3b82f6' }}>
              UNIDEX
            </Box>{' '}
            ?
          </Typography>
          <Typography
            variant='h6'
            sx={{
              color: isDarkMode ? '#E3E3E3' : '#64748b',
              fontWeight: 400,
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            The Power of True Decentralization
          </Typography>
        </Box>

        {/* Features Grid */}
        <Box
          sx={{
            maxWidth: 1200,
            mx: 'auto',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
          }}
        >
          {features.map((feature) => (
            <Box
              key={feature.id}
              sx={{
                flex: '1 1 calc(50% - 12px)',
                minWidth: '280px',
              }}
            >
              <Card
                sx={{
                  height: '100%',
                  background: isDarkMode ? '#10254A' : '#F5FBFF',
                  borderRadius: '20px',
                  border: isDarkMode
                    ? '1px solid rgba(51, 65, 85, 0.3)'
                    : '1px solid rgba(226, 232, 240, 0.5)',

                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: isDarkMode
                      ? '0 8px 30px rgba(0,0,0,0.3)'
                      : '0 8px 30px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        background: isDarkMode ? '#1F3B6B' : '#E4F2FF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2.5,
                      }}
                    ></Box>

                    {/* Title */}
                    <Typography
                      variant='h6'
                      sx={{
                        fontWeight: 600,
                        mb: 1.5,
                        color: isDarkMode ? '#0C9FE3' : '#0EA5E9',
                        fontSize: '1.1rem',
                      }}
                    >
                      {feature.title}
                    </Typography>
                  </Box>

                  {/* Description */}
                  <Typography
                    variant='body2'
                    sx={{
                      color: isDarkMode ? '#E3E3E3' : '#64748b',
                      lineHeight: 1.5,
                      fontSize: '0.875rem',
                      flex: 1,
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default WhyUnidexSection
