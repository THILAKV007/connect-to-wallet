import React from 'react'
import { Modal, Typography, IconButton, Box, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

function CreateWalletModal({ open, onClose, isDarkMode }) {
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
      icon: '🔗',
      network: null,
    },
  ]

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex',
        alignItems: { xs: 'center', sm: 'flex-start' },
        justifyContent: { xs: 'center', sm: 'flex-end' },
        pt: { xs: 2, sm: 9 }, // Top padding to position below header
        pr: { xs: 2, sm: 35 }, // Right padding
        pl: { xs: 2, sm: 0 }, // Left padding for mobile
        pb: { xs: 2, sm: 0 }, // Bottom padding for mobile
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', sm: 400, md: 450 },
          maxWidth: { xs: '100%', sm: 500 },
          maxHeight: { xs: '90vh', sm: 'auto' },
          backgroundColor: isDarkMode ? '#10254A' : '#FFFFFF',
          color: isDarkMode ? '#ffffff' : '#000000',
          borderRadius: { xs: 2, sm: 3 },
          boxShadow: isDarkMode
            ? '0 8px 32px rgba(0, 0, 0, 0.3)'
            : '0 8px 32px rgba(0, 0, 0, 0.1)',
          border: isDarkMode
            ? '1px solid rgba(255, 255, 255, 0.1)'
            : '1px solid rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            p: { xs: 2, sm: 3 },
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
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
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                color: isDarkMode ? '#ffffff' : '#000000',
              }}
            >
              Create Wallet
            </Typography>
            <IconButton
              onClick={onClose}
              sx={{
                color: isDarkMode ? '#ffffff' : '#000000',
                '&:hover': {
                  backgroundColor: isDarkMode
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'rgba(0, 0, 0, 0.1)',
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
              color: isDarkMode
                ? 'rgba(255, 255, 255, 0.7)'
                : 'rgba(0, 0, 0, 0.7)',
              mb: { xs: 2, sm: 3 },
              fontSize: { xs: '0.85rem', sm: '0.9rem' },
            }}
          >
            Connect a wallet to your Unidex account
          </Typography>

          {/* Wallet Options */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 1, sm: 1.5 },
              maxHeight: { xs: '60vh', sm: '500px' },
              overflowY: 'auto',
              flex: 1,
              '&::-webkit-scrollbar': {
                width: '4px',
              },
              '&::-webkit-scrollbar-track': {
                background: isDarkMode
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(0, 0, 0, 0.1)',
                borderRadius: '2px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: isDarkMode
                  ? 'rgba(255, 255, 255, 0.3)'
                  : 'rgba(0, 0, 0, 0.3)',
                borderRadius: '2px',
                '&:hover': {
                  background: isDarkMode
                    ? 'rgba(255, 255, 255, 0.5)'
                    : 'rgba(0, 0, 0, 0.5)',
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
                  p: { xs: 1.5, sm: 2 },
                  minHeight: { xs: 56, sm: 64 },
                  backgroundColor: isDarkMode
                    ? '#10254A'
                    : 'rgba(0, 0, 0, 0.05)',
                  border: isDarkMode
                    ? '1px solid rgba(255, 255, 255, 0.1)'
                    : '1px solid rgba(0, 0, 0, 0.1)',
                  borderRadius: 2,
                  color: isDarkMode ? '#ffffff' : '#000000',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: isDarkMode
                      ? 'rgba(255, 255, 255, 0.1)'
                      : 'rgba(0, 0, 0, 0.1)',
                    borderColor: isDarkMode
                      ? 'rgba(255, 255, 255, 0.2)'
                      : 'rgba(0, 0, 0, 0.2)',
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
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      color: isDarkMode ? '#ffffff' : '#000000',
                    }}
                  >
                    {wallet.name}
                  </Typography>
                </Box>
                {wallet.network && (
                  <Typography
                    sx={{
                      fontSize: { xs: '0.8rem', sm: '0.875rem' },
                      color: isDarkMode
                        ? 'rgba(255, 255, 255, 0.6)'
                        : 'rgba(0, 0, 0, 0.6)',
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
              color: isDarkMode
                ? 'rgba(255, 255, 255, 0.5)'
                : 'rgba(0, 0, 0, 0.5)',
              mt: { xs: 2, sm: 3 },
              fontSize: { xs: '0.7rem', sm: '0.75rem' },
              lineHeight: 1.4,
              px: { xs: 1, sm: 0 },
            }}
          >
            By Login in I Agree to the Terms and Privacy Policy
          </Typography>
        </Box>
      </Box>
    </Modal>
  )
}

export default CreateWalletModal
