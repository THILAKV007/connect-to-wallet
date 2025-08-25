import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Modal,
  Card,
  CardContent,
  Divider,
} from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import CloseIcon from '@mui/icons-material/Close'
import { LineChart, Line, ResponsiveContainer } from 'recharts'

function Header({ toggleTheme, isDarkMode }) {
  const location = useLocation()
  const [shareModalOpen, setShareModalOpen] = useState(false)

  // Sample chart data for Bedrock
  const chartData = [
    { value: 9180 },
    { value: 9190 },
    { value: 9185 },
    { value: 9195 },
    { value: 9200 },
    { value: 9205 },
    { value: 9209 },
  ]

  const handleShareModalOpen = () => {
    setShareModalOpen(true)
  }

  const handleShareModalClose = () => {
    setShareModalOpen(false)
  }

  return (
    <AppBar
      position='fixed'
      elevation={0}
      sx={{
        backgroundColor: isDarkMode ? '#1a2332' : '#ffffff',
        borderBottom: isDarkMode
          ? '1px solid rgba(255, 255, 255, 0.1)'
          : '1px solid rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
        {/* Logo */}
        <Typography
          variant='h5'
          component='div'
          sx={{
            fontWeight: 700,
            color: '#2196f3',
            fontSize: '1.5rem',
          }}
        >
          UNIDEX
        </Typography>

        {/* Navigation Items */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
          <Button
            component={Link}
            to='/'
            sx={{
              color:
                location.pathname === '/'
                  ? '#2196f3'
                  : isDarkMode
                  ? '#ffffff'
                  : '#000000',
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: location.pathname === '/' ? 600 : 500,
              '&:hover': {
                backgroundColor: 'transparent',
                color: '#2196f3',
              },
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to='/trading'
            sx={{
              color:
                location.pathname === '/trading'
                  ? '#2196f3'
                  : isDarkMode
                  ? '#ffffff'
                  : '#000000',
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: location.pathname === '/trading' ? 600 : 500,
              '&:hover': {
                backgroundColor: 'transparent',
                color: '#2196f3',
              },
            }}
          >
            Trading
          </Button>
          <Button
            sx={{
              color: isDarkMode ? '#ffffff' : '#000000',
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: 'transparent',
                color: '#2196f3',
              },
            }}
          >
            Blog
          </Button>
        </Box>

        {/* Right Side Buttons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Theme Toggle */}
          <IconButton
            onClick={toggleTheme}
            sx={{ color: isDarkMode ? '#ffffff' : '#000000' }}
          >
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          {/* Create Wallet Button */}
          <Button
            variant='outlined'
            sx={{
              display: { xs: 'none', sm: 'block' },
              color: isDarkMode ? '#ffffff' : '#000000',
              borderColor: isDarkMode
                ? 'rgba(255, 255, 255, 0.3)'
                : 'rgba(0, 0, 0, 0.3)',
              textTransform: 'none',
              borderRadius: 2,
              px: 3,
              '&:hover': {
                borderColor: '#2196f3',
                color: '#2196f3',
                backgroundColor: 'transparent',
              },
            }}
          >
            Create Wallet
          </Button>

          {/* Connect to Wallet Button */}
          <Button
            variant='contained'
            sx={{
              backgroundColor: '#2196f3',
              color: '#ffffff',
              textTransform: 'none',
              borderRadius: 2,
              px: 3,
              '&:hover': {
                backgroundColor: '#1976d2',
              },
            }}
          >
            Connect to Wallet
          </Button>

          {/* More Options (Mobile) */}
          <IconButton
            onClick={handleShareModalOpen}
            sx={{
              display: { xs: 'block', md: 'none' },
              color: isDarkMode ? '#ffffff' : '#000000',
            }}
          >
            <MoreHorizIcon />
          </IconButton>

          {/* Share Options (Desktop) */}
          <IconButton
            onClick={handleShareModalOpen}
            sx={{
              display: { xs: 'none', md: 'block' },
              color: isDarkMode ? '#ffffff' : '#000000',
            }}
          >
            <MoreHorizIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Share Modal */}
      <Modal
        open={shareModalOpen}
        onClose={handleShareModalClose}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1300,
        }}
      >
        <Card
          sx={{
            width: { xs: '90%', sm: 500, md: 600 },
            maxWidth: 700,
            backgroundColor: isDarkMode ? '#10254A' : '#ffffff',
            borderRadius: 3,
            outline: 'none',
            position: 'relative',
          }}
        >
          {/* Modal Header */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 2,
              pb: 1,
            }}
          >
            <Typography
              variant='h6'
              sx={{
                color: isDarkMode ? '#ffffff' : '#000000',
                fontWeight: 600,
              }}
            >
              Share
            </Typography>
            <IconButton
              onClick={handleShareModalClose}
              sx={{
                color: isDarkMode ? '#ffffff' : '#000000',
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <CardContent sx={{ p: 2, pt: 0 }}>
            {/* Token Info Card */}
            <Card
              sx={{
                backgroundColor: isDarkMode ? '#f8f9fa' : '#f8f9fa',
                borderRadius: 2,
                p: 2,
                mb: 2,
              }}
            >
              {/* Token Header */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: '#2d1b69',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                  }}
                >
                  <Typography
                    sx={{
                      color: '#8b5cf6',
                      fontWeight: 'bold',
                      fontSize: '1.2rem',
                    }}
                  >
                    ≋
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant='h6'
                    sx={{
                      color: '#000000',
                      fontWeight: 600,
                      fontSize: '1.1rem',
                    }}
                  >
                    Bedrock
                  </Typography>
                  <Typography
                    sx={{
                      color: '#666666',
                      fontSize: '0.9rem',
                    }}
                  >
                    Be
                  </Typography>
                </Box>
              </Box>

              {/* Price */}
              <Typography
                variant='h4'
                sx={{
                  color: '#000000',
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                $9209.00
              </Typography>

              {/* Price Change */}
              <Typography
                sx={{
                  color: '#4caf50',
                  fontSize: '0.9rem',
                  mb: 2,
                }}
              >
                0.07% (5m)
              </Typography>

              {/* Chart */}
              <Box sx={{ height: 80, mb: 2 }}>
                <ResponsiveContainer width='100%' height='100%'>
                  <LineChart data={chartData}>
                    <Line
                      type='monotone'
                      dataKey='value'
                      stroke='#4caf50'
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </Card>

            {/* Share Buttons */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button
                variant='contained'
                sx={{
                  flex: 1,
                  backgroundColor: isDarkMode ? '#3D5174' : '#4a5568',
                  color: '#ffffff',
                  textTransform: 'none',
                  borderRadius: 2,
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: isDarkMode ? '#2d3748' : '#2d3748',
                  },
                }}
              >
                X.com
              </Button>
              <Button
                variant='contained'
                sx={{
                  flex: 1,
                  backgroundColor: isDarkMode ? '#3D5174' : '#4a5568',
                  color: '#ffffff',
                  textTransform: 'none',
                  borderRadius: 2,
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: isDarkMode ? '#2d3748' : '#2d3748',
                  },
                }}
              >
                Warpcast
              </Button>
              <Button
                variant='contained'
                sx={{
                  flex: 1,
                  backgroundColor: isDarkMode ? '#3D5174' : '#4a5568',
                  color: '#ffffff',
                  textTransform: 'none',
                  borderRadius: 2,
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: isDarkMode ? '#2d3748' : '#2d3748',
                  },
                }}
              >
                Copy Link
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Modal>
    </AppBar>
  )
}

export default Header
