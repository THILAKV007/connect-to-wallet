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
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isDarkMode
            ? 'radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
            : 'radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 1 }}>
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
              color: isDarkMode ? '#94a3b8' : '#64748b',
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
                  minHeight: 250,
                  background: isDarkMode
                    ? '#10254A'
                    : 'rgba(255, 255, 255, 0.9)',
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
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      background: '#1F3B6B',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2.5,
                    }}
                  >
                    I
                  </Box>

                  {/* Title */}
                  <Typography
                    variant='h6'
                    sx={{
                      fontWeight: 600,
                      mb: 1.5,
                      color: isDarkMode ? '#ffffff' : '#1a1a1a',
                      fontSize: '1.1rem',
                    }}
                  >
                    {feature.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant='body2'
                    sx={{
                      color: isDarkMode ? '#94a3b8' : '#64748b',
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
