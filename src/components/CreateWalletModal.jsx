import React from 'react'
import {
  Modal,
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  IconButton,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation'
import OpacityIcon from '@mui/icons-material/Opacity'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import LinkIcon from '@mui/icons-material/Link'

const CreateWalletModal = ({ open, onClose, isDarkMode }) => {
  const features = [
    {
      icon: <SwapHorizIcon sx={{ fontSize: 24, color: '#ffffff' }} />,
      title: 'Swap Token',
      description: 'Connect a wallet to your Unidex account',
      bgColor: '#4FC3F7',
    },
    {
      icon: <LocalGasStationIcon sx={{ fontSize: 24, color: '#ffffff' }} />,
      title: 'Gasless Swaps',
      description: 'Connect a wallet to your Unidex account',
      bgColor: '#29B6F6',
    },
    {
      icon: <OpacityIcon sx={{ fontSize: 24, color: '#ffffff' }} />,
      title: 'Liquidity Source',
      description: 'Connect a wallet to your Unidex account',
      bgColor: '#42A5F5',
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 24, color: '#ffffff' }} />,
      title: 'Limit Orders',
      description: 'Connect a wallet to your Unidex account',
      bgColor: '#1E88E5',
    },
    {
      icon: <LinkIcon sx={{ fontSize: 24, color: '#ffffff' }} />,
      title: 'Cross Chains',
      description: 'Connect a wallet to your Unidex account',
      bgColor: '#1976D2',
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
        p: 2,
        pt: 8,
        pr: 30,
      }}
    >
      <Box
        sx={{
          width: 450,
          maxWidth: '90vw',
          backgroundColor: isDarkMode ? '#10254A' : '#FFFFFF',
          border: isDarkMode
            ? '1px solid rgba(255, 255, 255, 0.1)'
            : '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: 3,
          boxShadow: isDarkMode
            ? '0 8px 32px rgba(0, 0, 0, 0.3)'
            : '0 8px 32px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box sx={{ p: 3 }}>
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
              variant='h6'
              sx={{
                color: isDarkMode ? '#ffffff' : '#000000',
                fontWeight: 600,
                fontSize: '18px',
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

          {/* Features List */}
          <Box
            sx={{
              maxHeight: '400px',
              overflowY: 'auto',
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
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  p: 2,
                  mb: 1.5,
                  backgroundColor: isDarkMode
                    ? 'rgba(255, 255, 255, 0.05)'
                    : '#fff',

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
                      fontSize: '16px',
                      mb: 0.5,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{
                      color: isDarkMode ? '#ffff' : 'rgba(0, 0, 0, 0.7)',
                      fontSize: '14px',
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
