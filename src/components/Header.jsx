import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ShareModal from './ShareModal'

function Header({ toggleTheme, isDarkMode }) {
  const location = useLocation()
  const [shareModalOpen, setShareModalOpen] = useState(false)

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
      <ShareModal
        open={shareModalOpen}
        onClose={handleShareModalClose}
        isDarkMode={isDarkMode}
      />
    </AppBar>
  )
}

export default Header
