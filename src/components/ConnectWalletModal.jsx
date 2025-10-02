import React from 'react'
import { Modal, Box, Typography, Button, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const ConnectWalletModal = ({ open, onClose, isDarkMode }) => {
  const wallets = [
    {
      iconSrc: 'assets/images/common/crypto-com-onchain.png',
      title: 'Crypto.com onchain',
    },
    {
      iconSrc: 'assets/images/common/crypto-com-onchain.png',
      title: 'Crypto.com onchain',
      tag: 'Solana',
    },
    {
      iconSrc: 'assets/images/common/crypto-com-2.png',

      title: 'Crypto.com onchain',
      tag: 'Solana',
    },
    {
      iconSrc: 'assets/images/common/crypto-com-2.png',

      title: 'Crypto.com onchain',
    },
    {
      iconSrc: 'assets/images/common/Coinbase.png',

      title: 'Coinbase',
    },
    {
      iconSrc: 'assets/images/common/Coinbase-2.png',

      title: 'Coinbase',
    },
    {
      iconSrc: 'assets/images/common/Wallet-Connect.png',

      title: 'Wallet Connect',
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
        p: { xs: 2, sm: 2 },
        pt: { xs: 2, sm: 8 },
        pr: { xs: 2, sm: 13 },
        pl: { xs: 2, sm: 0 },
        pb: { xs: 2, sm: 0 },
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', sm: 450 },
          maxWidth: { xs: '100%', sm: '90vw' },
          maxHeight: { xs: '90vh', sm: 'auto' },
          backgroundColor: isDarkMode ? '#10254A' : '#FFFFFF',
          border: isDarkMode
            ? '1px solid rgba(255, 255, 255, 0.1)'
            : '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: { xs: 2, sm: 3 },
          boxShadow: isDarkMode
            ? '0 8px 32px rgba(0, 0, 0, 0.3)'
            : '0 8px 32px rgba(0, 0, 0, 0.1)',
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
              mb: { xs: 2, sm: 3 },
            }}
          >
            <Typography
              variant='h6'
              sx={{
                color: isDarkMode ? '#ffffff' : '#000000',
                fontWeight: 600,
                fontSize: { xs: '18px', sm: '20px' },
              }}
            >
              Connect Wallet
            </Typography>
            <IconButton
              onClick={onClose}
              sx={{
                color: isDarkMode
                  ? 'rgba(255, 255, 255, 0.7)'
                  : 'rgba(0, 0, 0, 0.7)',
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
            sx={{
              color: isDarkMode ? '#B0BEC5' : 'rgba(0, 0, 0, 0.7)',
              fontSize: { xs: '14px', sm: '16px' },
              mb: { xs: 2, sm: 3 },
            }}
          >
            Connect a wallet to your Unidex account
          </Typography>

          {/* Features List */}
          <Box
            sx={{
              maxHeight: { xs: '60vh', sm: '400px' },
              overflowY: 'auto',
              flex: 1,
              '&::-webkit-scrollbar': {
                width: '4px',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: isDarkMode
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(0, 0, 0, 0.1)',
                borderRadius: '2px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: isDarkMode ? '#fff' : 'rgba(0, 0, 0, 0.3)',
                borderRadius: '2px',
                '&:hover': {
                  backgroundColor: isDarkMode
                    ? 'rgba(255, 255, 255, 0.5)'
                    : 'rgba(0, 0, 0, 0.5)',
                },
              },
            }}
          >
            {wallets.map((w, index) => (
              <Button
                key={index}
                fullWidth
                onClick={onClose}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  p: { xs: 1.5, sm: 2 },
                  mb: { xs: 1, sm: 1.5 },
                  minHeight: { xs: 64, sm: 72 },
                  backgroundColor: isDarkMode
                    ? 'rgba(255, 255, 255, 0.05)'
                    : '#fff',
                  border: isDarkMode
                    ? '1px solid rgba(255, 255, 255, 0.1)'
                    : '1px solid rgba(0, 0, 0, 0.1)',
                  borderRadius: 2,
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: isDarkMode
                      ? 'rgba(255, 255, 255, 0.1)'
                      : 'rgba(0, 0, 0, 0.1)',
                    border: isDarkMode
                      ? '1px solid rgba(255, 255, 255, 0.2)'
                      : '1px solid rgba(0, 0, 0, 0.2)',
                  },
                  '&:last-child': {
                    mb: 0,
                  },
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '8px',
                    backgroundColor: isDarkMode ? '#0c356a' : '#e3f2fd',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                    flexShrink: 0,
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    component='img'
                    src={w.iconSrc}
                    alt='wallet icon'
                    sx={{ width: '100%', height: '100%' }}
                  />
                </Box>

                {/* Content */}
                <Box sx={{ textAlign: 'left', flex: 1 }}>
                  <Typography
                    variant='subtitle1'
                    sx={{
                      color: isDarkMode ? '#ffffff' : '#000000',
                      fontWeight: 600,
                      fontSize: { xs: '14px', sm: '16px' },
                      mb: 0.5,
                    }}
                  >
                    {w.title}
                  </Typography>
                </Box>
                {w.tag && (
                  <Typography
                    variant='body2'
                    sx={{
                      color: isDarkMode ? '#B0BEC5' : 'rgba(0, 0, 0, 0.7)',
                      fontSize: { xs: '12px', sm: '14px' },
                    }}
                  >
                    {w.tag}
                  </Typography>
                )}
              </Button>
            ))}
          </Box>

          {/* Footer Disclaimer */}
          <Box sx={{ mt: { xs: 2, sm: 3 } }}>
            <Typography
              sx={{
                textAlign: 'center',
                color: isDarkMode ? '#B0BEC5' : 'rgba(0, 0, 0, 0.6)',
                fontSize: { xs: '12px', sm: '13px' },
              }}
            >
              By Login in I Agree to the Terms and Privacy Policy
            </Typography>
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}

export default ConnectWalletModal
