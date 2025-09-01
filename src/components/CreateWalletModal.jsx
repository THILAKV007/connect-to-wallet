import React from 'react'
import { Modal, Box, Typography, Button, IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation'
import OpacityIcon from '@mui/icons-material/Opacity'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import LinkIcon from '@mui/icons-material/Link'

const CreateWalletModal = ({ open, onClose, isDarkMode }) => {
  const navigate = useNavigate()

  const handleFeatureClick = (url) => {
    navigate(url)
    onClose()
  }
  const features = [
    {
      icon: <SwapHorizIcon sx={{ fontSize: 24, color: '#ffffff' }} />,
      title: 'Swap Token',
      description: 'Connect a wallet to your Unidex account',
      bgColor: '#4FC3F7',
      url: '/swap-token',
    },
    {
      icon: <LocalGasStationIcon sx={{ fontSize: 24, color: '#ffffff' }} />,
      title: 'Gasless Swaps',
      description: 'Connect a wallet to your Unidex account',
      bgColor: '#29B6F6',
      url: '/gasless-swaps',
    },
    {
      icon: <OpacityIcon sx={{ fontSize: 24, color: '#ffffff' }} />,
      title: 'Liquidity Source',
      description: 'Connect a wallet to your Unidex account',
      bgColor: '#42A5F5',
      url: '/liquidity-source',
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 24, color: '#ffffff' }} />,
      title: 'Limit Orders',
      description: 'Connect a wallet to your Unidex account',
      bgColor: '#1E88E5',
      url: '/limit-orders',
    },
    {
      icon: <LinkIcon sx={{ fontSize: 24, color: '#ffffff' }} />,
      title: 'Cross Chains',
      description: 'Connect a wallet to your Unidex account',
      bgColor: '#1976D2',
      url: '/cross-chains',
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
        pr: { xs: 2, sm: 30 },
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
              Create Wallet
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
            {features.map((feature, index) => (
              <Button
                key={index}
                fullWidth
                onClick={() => handleFeatureClick(feature.url)}
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
                    borderRadius: '50%',
                    backgroundColor: feature.bgColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                    flexShrink: 0,
                  }}
                >
                  {feature.icon}
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
                    {feature.title}
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{
                      color: isDarkMode ? '#B0BEC5' : 'rgba(0, 0, 0, 0.7)',
                      fontSize: { xs: '12px', sm: '14px' },
                      lineHeight: 1.4,
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}

export default CreateWalletModal
