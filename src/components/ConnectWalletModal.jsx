import React from 'react'
import {
  Modal,
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  Button,
  Divider,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

function ConnectWalletModal({ open, onClose, isDarkMode }) {
  const walletOptions = [
    {
      name: 'Crypto.com onchain',
      icon: '🔷', // Blue diamond placeholder
      network: null,
    },
    {
      name: 'Crypto.com onchain',
      icon: '🔷', // Blue diamond placeholder
      network: 'Solana',
    },
    {
      name: 'Crypto.com onchain',
      icon: '🦊', // Fox placeholder for MetaMask-like
      network: 'Solana',
    },
    {
      name: 'Crypto.com onchain',
      icon: '🦊', // Fox placeholder
      network: null,
    },
    {
      name: 'Coinbase',
      icon: '🔵', // Blue circle placeholder
      network: null,
    },
    {
      name: 'Coinbase',
      icon: '🌈', // Rainbow placeholder
      network: null,
    },
    {
      name: 'Wallet Connect',
      icon: '🔗', // Link placeholder
      network: null,
    },
  ]

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        pt: 9, // Top padding to position below header
        pr: 12, // Right padding
      }}
    >
      <Box
        sx={{
          width: { xs: '90%', sm: 400, md: 450 },
          maxWidth: 500,
          backgroundColor: '#10254A',
          color: '#ffffff',
          borderRadius: 3,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Box sx={{ p: 3 }}>
          {/* Header */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2,
            }}
          >
            <Typography
              variant='h6'
              sx={{
                fontWeight: 600,
                fontSize: '1.25rem',
                color: '#ffffff',
              }}
            >
              Connect Wallet
            </Typography>
            <IconButton
              onClick={onClose}
              sx={{
                color: '#ffffff',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Subtitle */}
          <Typography
            variant='body2'
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              mb: 3,
              fontSize: '0.9rem',
            }}
          >
            Connect a wallet to your Unidex account
          </Typography>

          {/* Wallet Options */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1.5,
              maxHeight: '500px',
              overflowY: 'auto',
              '&::-webkit-scrollbar': {
                width: '4px',
              },
              '&::-webkit-scrollbar-track': {
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '2px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'rgba(255, 255, 255, 0.3)',
                borderRadius: '2px',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.5)',
                },
              },
            }}
          >
            {walletOptions.map((wallet, index) => (
              <Button
                key={index}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  p: 2,
                  backgroundColor: '#10254A',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 2,
                  color: '#ffffff',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={
                      wallet.icon === '🔷'
                        ? {
                            width: 32,
                            height: 32,
                            backgroundColor: '#2196f3',
                            borderRadius: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '16px',
                            color: '#ffffff',
                          }
                        : wallet.icon === '🦊'
                        ? {
                            width: 32,
                            height: 32,
                            backgroundColor: '#f6851b',
                            borderRadius: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '16px',
                          }
                        : wallet.icon === '🔵'
                        ? {
                            width: 32,
                            height: 32,
                            backgroundColor: '#0052ff',
                            borderRadius: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '16px',
                            color: '#ffffff',
                          }
                        : wallet.icon === '🌈'
                        ? {
                            width: 32,
                            height: 32,
                            background:
                              'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)',
                            borderRadius: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '16px',
                          }
                        : {
                            width: 32,
                            height: 32,
                            backgroundColor: '#3b82f6',
                            borderRadius: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '16px',
                            color: '#ffffff',
                          }
                    }
                  >
                    {wallet.icon === '🔷' && '◆'}
                    {wallet.icon === '🦊' && '🦊'}
                    {wallet.icon === '🔵' && '●'}
                    {wallet.icon === '🌈' && '🌈'}
                    {wallet.icon === '🔗' && '🔗'}
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: '1rem',
                      color: '#ffffff',
                    }}
                  >
                    {wallet.name}
                  </Typography>
                </Box>
                {wallet.network && (
                  <Typography
                    sx={{
                      fontSize: '0.875rem',
                      color: 'rgba(255, 255, 255, 0.6)',
                      fontWeight: 400,
                    }}
                  >
                    {wallet.network}
                  </Typography>
                )}
              </Button>
            ))}
          </Box>

          {/* Footer */}
          <Typography
            variant='caption'
            sx={{
              display: 'block',
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.5)',
              mt: 3,
              fontSize: '0.75rem',
            }}
          >
            By Login in I Agree to the Terms and Privacy Policy
          </Typography>
        </Box>
      </Box>
    </Modal>
  )
}

export default ConnectWalletModal
