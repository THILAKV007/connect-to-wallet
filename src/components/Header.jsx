import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import MenuIcon from '@mui/icons-material/Menu'
import ShareModal from './ShareModal'
import ConnectWalletModal from './ConnectWalletModal'
import CreateWalletModal from './CreateWalletModal'

function Header({ toggleTheme, isDarkMode }) {
  const location = useLocation()
  const [shareModalOpen, setShareModalOpen] = useState(false)
  const [connectWalletModalOpen, setConnectWalletModalOpen] = useState(false)
  const [createWalletModalOpen, setCreateWalletModalOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [age, setAge] = useState('')

  const handleShareModalOpen = () => {
    setShareModalOpen(true)
  }

  const handleShareModalClose = () => {
    setShareModalOpen(false)
  }

  const handleCreateWalletModalOpen = () => {
    setCreateWalletModalOpen(true)
  }

  const handleCreateWalletModalClose = () => {
    setCreateWalletModalOpen(false)
  }

  const handleConnectWalletModalOpen = () => {
    setConnectWalletModalOpen(true)
  }

  const handleConnectWalletModalClose = () => {
    setConnectWalletModalOpen(false)
  }

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false)
  }

  const handleChange = (event) => {
    setAge(event.target.value)
  }

  return (
    <AppBar
      position='fixed'
      elevation={0}
      sx={{
        backgroundColor: isDarkMode ? '#121A2D' : '#F0F9FF',
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
          component={Link}
          to='/'
          sx={{
            fontWeight: 700,
            color: '#2196f3',
            fontSize: '1.5rem',
            textDecoration: 'none',
            '&:hover': {
              color: '#1976d2',
            },
          }}
        >
          UNIDEX
        </Typography>

        {/* Mobile Controls (Theme Toggle + Hamburger Menu) */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
          {/* Theme Toggle (Mobile) */}
          <IconButton
            onClick={toggleTheme}
            sx={{ color: isDarkMode ? '#EFF8FF' : '#061536' }}
          >
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          
          {/* Hamburger Menu */}
          <IconButton
            sx={{ color: isDarkMode ? '#EFF8FF' : '#061536' }}
            onClick={handleMobileMenuToggle}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Navigation Items (Desktop) */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
          <Button
            component={Link}
            to='/'
            sx={{
              color:
                location.pathname === '/'
                  ? '#2196f3'
                  : isDarkMode
                  ? '#EFF8FF'
                  : '#061536',
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
                  ? '#EFF8FF'
                  : '#061536',
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
              color: isDarkMode ? '#EFF8FF' : '#061536',
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

        {/* Right Side Buttons (Desktop) */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
          {/* Theme Toggle */}
          <IconButton
            onClick={toggleTheme}
            sx={{ color: isDarkMode ? '#EFF8FF' : '#061536' }}
          >
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          {/* Create Wallet Button */}
          <Button
            variant='outlined'
            onClick={handleCreateWalletModalOpen}
            sx={{
              color: isDarkMode ? '#EFF8FF' : '#061536',
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
            onClick={handleConnectWalletModalOpen}
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
              color: isDarkMode ? '#EFF8FF' : '#061536',
            }}
          >
            <MoreHorizIcon />
          </IconButton>

          {/* Share Options (Desktop) */}
          <IconButton
            onClick={handleShareModalOpen}
            sx={{
              display: { xs: 'none', md: 'block' },
              color: isDarkMode ? '#EFF8FF' : '#061536',
            }}
          >
            <MoreHorizIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor='left'
        open={mobileMenuOpen}
        onClose={handleMobileMenuClose}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: 280,
            backgroundColor: isDarkMode ? '#121A2D' : '#F0F9FF',
            color: isDarkMode ? '#EFF8FF' : '#061536',
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography
            variant='h6'
            sx={{
              fontWeight: 700,
              color: '#2196f3',
              mb: 2,
            }}
          >
            UNIDEX
          </Typography>
          <Divider sx={{ mb: 2, borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' }} />
          
          <List>
            <ListItem
              component={Link}
              to='/'
              onClick={handleMobileMenuClose}
              sx={{
                color: location.pathname === '/' ? '#2196f3' : 'inherit',
                fontWeight: location.pathname === '/' ? 600 : 400,
                '&:hover': {
                  backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <ListItemText primary='Home' />
            </ListItem>
            <ListItem
              component={Link}
              to='/trading'
              onClick={handleMobileMenuClose}
              sx={{
                color: location.pathname === '/trading' ? '#2196f3' : 'inherit',
                fontWeight: location.pathname === '/trading' ? 600 : 400,
                '&:hover': {
                  backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <ListItemText primary='Trading' />
            </ListItem>
            <ListItem
              sx={{
                '&:hover': {
                  backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <ListItemText primary='Blog' />
            </ListItem>
          </List>
          
          <Divider sx={{ my: 2, borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' }} />
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              variant='outlined'
              onClick={() => {
                handleCreateWalletModalOpen()
                handleMobileMenuClose()
              }}
              sx={{
                color: isDarkMode ? '#EFF8FF' : '#061536',
                borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
                textTransform: 'none',
                borderRadius: 2,
                '&:hover': {
                  borderColor: '#2196f3',
                  color: '#2196f3',
                  backgroundColor: 'transparent',
                },
              }}
            >
              Create Wallet
            </Button>
            <Button
              variant='contained'
              onClick={() => {
                handleConnectWalletModalOpen()
                handleMobileMenuClose()
              }}
              sx={{
                backgroundColor: '#2196f3',
                color: '#ffffff',
                textTransform: 'none',
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: '#1976d2',
                },
              }}
            >
              Connect to Wallet
            </Button>

          </Box>
        </Box>
      </Drawer>

      {/* Share Modal */}
      <ShareModal
        open={shareModalOpen}
        onClose={handleShareModalClose}
        isDarkMode={isDarkMode}
      />

      {/* Create Wallet Modal */}
      <CreateWalletModal
        open={createWalletModalOpen}
        onClose={handleCreateWalletModalClose}
        isDarkMode={isDarkMode}
      />

      {/* Connect Wallet Modal */}
      <ConnectWalletModal
        open={connectWalletModalOpen}
        onClose={handleConnectWalletModalClose}
        isDarkMode={isDarkMode}
      />
    </AppBar>
  )
}

export default Header
