import React, { useState } from 'react'
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  TextField,
  IconButton,
  Select,
  MenuItem,
  FormControl,
} from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import SwapVertIcon from '@mui/icons-material/SwapVert'

const BannerSection = ({ isDarkMode }) => {
  const [fromAmount, setFromAmount] = useState('0')
  const [toAmount, setToAmount] = useState('0')
  const [fromToken, setFromToken] = useState('ETH')
  const [toToken, setToToken] = useState('BNB')
  const [slippage, setSlippage] = useState('1%')

  const handleSwapTokens = () => {
    setFromToken(toToken)
    setToToken(fromToken)
    setFromAmount(toAmount)
    setToAmount(fromAmount)
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        px: { xs: 2, md: 4 },
        py: { xs: 4, md: 6 },
        background: isDarkMode ? '#061536' : '#F0F9FF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Circles */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          border: isDarkMode
            ? '2px solid rgba(255,255,255,0.1)'
            : '2px solid rgba(0,0,0,0.05)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '15%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          border: isDarkMode
            ? '2px solid rgba(255,255,255,0.05)'
            : '2px solid rgba(0,0,0,0.03)',
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          maxWidth: '1400px',
          width: '100%',
          mx: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: { xs: 4, md: 8 },
          flexDirection: { xs: 'column', lg: 'row' },
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Left Content */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: '100%', lg: '600px' },
            textAlign: { xs: 'center', lg: 'left' },
          }}
        >
          <Typography
            variant='h2'
            sx={{
              fontWeight: 700,
              mb: 3,
              color: isDarkMode ? '#ffffff' : '#1a1a1a',
              fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
              lineHeight: 1.1,
            }}
          >
            <Box component='span' sx={{ color: '#2196f3' }}>
              Trade
            </Box>{' '}
            with confidence on the most secure DEX
          </Typography>
          <Typography
            variant='h6'
            sx={{
              color: isDarkMode ? '#94a3b8' : '#64748b',
              mb: 4,
              fontSize: { xs: '1rem', md: '1.25rem' },
              lineHeight: 1.6,
              maxWidth: '500px',
              mx: { xs: 'auto', lg: 0 },
            }}
          >
            Experience lightning-fast trades, minimal fees, and maximum security
            on our next-generation decentralized exchange platform
          </Typography>
        </Box>

        {/* Right Swap Widget */}
        <Box
          sx={{
            flex: '0 0 auto',
            width: { xs: '100%', sm: '400px', md: '450px' },
            maxWidth: '450px',
          }}
        >
          <Card
            sx={{
              background: isDarkMode ? '#1D283B' : '#F0F8FF',
              borderRadius: '5px',
              border: isDarkMode
                ? '1px solid rgba(51, 65, 85, 0.3)'
                : '15px solid #fff',
              boxShadow: '0 8px 24px rgba(33, 150, 243, 0.3)',
              '&:hover': {
                boxShadow: '0 12px 32px rgba(33, 150, 243, 0.4)',
              },

              backdropFilter: 'blur(20px)',
            }}
          >
            <CardContent sx={{ p: 3 }}>
              {/* Header */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 3,
                }}
              >
                <Typography
                  variant='h5'
                  sx={{
                    fontWeight: 600,
                    color: isDarkMode ? '#ffffff' : '#1a1a1a',
                  }}
                >
                  Swap
                </Typography>
                <IconButton
                  sx={{
                    color: isDarkMode ? '#94a3b8' : '#64748b',
                  }}
                >
                  <SettingsIcon />
                </IconButton>
              </Box>
              {/* From Section */}
              <Box sx={{ position: 'relative' }}>
                <Box sx={{ mb: 1, p: 2, bgcolor: '#fff', borderRadius: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mb: 1,
                    }}
                  >
                    <Typography
                      variant='body2'
                      sx={{ color: isDarkMode ? '#94a3b8' : '#64748b' }}
                    >
                      From
                    </Typography>
                    <Typography
                      variant='body2'
                      sx={{
                        color: isDarkMode ? '#94a3b8' : '#ffffff',
                        cursor: 'pointer',
                      }}
                    >
                      Use Max
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      background: isDarkMode
                        ? '#fff'
                        : 'rgba(248, 250, 252, 0.8)',
                      borderRadius: '16px',
                      p: 0,
                    }}
                  >
                    <TextField
                      value={fromAmount}
                      onChange={(e) => setFromAmount(e.target.value)}
                      placeholder='0'
                      variant='standard'
                      InputProps={{
                        disableUnderline: true,
                        sx: {
                          fontSize: '1.5rem',
                          fontWeight: 600,
                          color: isDarkMode ? '#000' : '#1a1a1a',
                          '& input': {
                            padding: 0,
                          },
                        },
                      }}
                      sx={{ flex: 1 }}
                    />
                    <FormControl sx={{ minWidth: 80 }}>
                      <Select
                        value={fromToken}
                        onChange={(e) => setFromToken(e.target.value)}
                        variant='standard'
                        disableUnderline
                        sx={{
                          color: isDarkMode ? '#94a3b8' : '#1a1a1a',
                          fontWeight: 600,
                          '& .MuiSelect-icon': {
                            color: isDarkMode ? '#94a3b8' : '#64748b',
                          },
                        }}
                      >
                        <MenuItem value='ETH'>🔸 ETH</MenuItem>
                        <MenuItem value='BTC'>₿ BTC</MenuItem>
                        <MenuItem value='USDT'>💰 USDT</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Typography
                    variant='caption'
                    sx={{
                      color: isDarkMode ? '#94a3b8' : '#ffffff',
                      mt: 0.5,
                      display: 'block',
                    }}
                  >
                    Balance: 0.00
                  </Typography>
                </Box>

                {/* Swap Button */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <IconButton
                    onClick={handleSwapTokens}
                    sx={{
                      background: isDarkMode ? '#1e293b' : '#f1f5f9',
                      border: isDarkMode
                        ? '2px solid rgba(51, 65, 85, 0.5)'
                        : '2px solid rgba(226, 232, 240, 0.8)',
                      color: isDarkMode ? '#94a3b8' : '#64748b',
                      '&:hover': {
                        background: isDarkMode ? '#334155' : '#e2e8f0',
                      },
                    }}
                  >
                    <SwapVertIcon />
                  </IconButton>
                </Box>

                {/* To Section */}
                <Box sx={{ mt: 1, p: 2, bgcolor: '#fff', borderRadius: 2 }}>
                  <Typography
                    variant='body2'
                    sx={{
                      color: isDarkMode ? '#94a3b8' : '#64748b',
                      mb: 1,
                    }}
                  >
                    To
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      background: isDarkMode
                        ? '#fff'
                        : 'rgba(248, 250, 252, 0.8)',
                      borderRadius: '16px',

                      // border: isDarkMode
                      //   ? '1px solid rgba(71, 85, 105, 0.3)'
                      //   : '1px solid rgba(226, 232, 240, 0.5)',
                    }}
                  >
                    <TextField
                      value={toAmount}
                      onChange={(e) => setToAmount(e.target.value)}
                      placeholder='0'
                      variant='standard'
                      InputProps={{
                        disableUnderline: true,
                        sx: {
                          fontSize: '1.5rem',
                          fontWeight: 600,
                          color: isDarkMode ? '#000' : '#1a1a1a',
                          '& input': {
                            padding: 0,
                          },
                        },
                      }}
                      sx={{ flex: 1 }}
                    />
                    <FormControl sx={{ minWidth: 80 }}>
                      <Select
                        value={toToken}
                        onChange={(e) => setToToken(e.target.value)}
                        variant='standard'
                        disableUnderline
                        sx={{
                          color: isDarkMode ? '#94a3b8' : '#1a1a1a',
                          fontWeight: 600,
                          '& .MuiSelect-icon': {
                            color: isDarkMode ? '#94a3b8' : '#64748b',
                          },
                        }}
                      >
                        <MenuItem value='BNB'>🟡 BNB</MenuItem>
                        <MenuItem value='ETH'>🔸 ETH</MenuItem>
                        <MenuItem value='USDT'>💰 USDT</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Typography
                    variant='caption'
                    sx={{
                      color: isDarkMode ? '#94a3b8' : '#ffffff',
                      mt: 0.5,
                      display: 'block',
                    }}
                  >
                    Balance: 0.00
                  </Typography>
                </Box>
              </Box>
              {/* Slippage Tolerance */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  my: 1,
                }}
              >
                <Typography
                  variant='body2'
                  sx={{ color: isDarkMode ? '#94a3b8' : '#64748b' }}
                >
                  Slippage Tolerance
                </Typography>
                <Typography
                  variant='body2'
                  sx={{
                    color: isDarkMode ? '#ffffff' : '#1a1a1a',
                    fontWeight: 600,
                  }}
                >
                  {slippage}
                </Typography>
              </Box>
              {/* Swap Button */}
              <Button
                fullWidth
                variant='contained'
                sx={{
                  background:
                    'linear-gradient(135deg, #2196f3 0%, #1976d2 100%)',
                  borderRadius: '16px',
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  boxShadow: isDarkMode
                    ? '0 20px 40px rgba(0,0,0,0.3)'
                    : '0 20px 40px rgba(0,0,0,0.1)',
                  '&:hover': {
                    background:
                      'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                  },
                }}
              >
                Swap Now
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  )
}

export default BannerSection
