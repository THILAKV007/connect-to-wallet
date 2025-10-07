import React, { useState, useEffect } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
} from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import ConnectWalletModal from './ConnectWalletModal'

function Header({ toggleTheme, isDarkMode }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [connectModalOpen, setConnectModalOpen] = useState(false)
  const [account, setAccount] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open)
  }

  // Attempt MetaMask connection
  const connectMetaMask = async () => {
    try {
      const { ethereum } = window
      if (!ethereum) {
        // Fallback: open existing modal if MetaMask is not available
        setConnectModalOpen(true)
        return
      }
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      if (accounts && accounts.length > 0) {
        setAccount(accounts[0])
      }
    } catch (err) {
      console.error('MetaMask connection failed:', err)
    }
  }

  useEffect(() => {
    const { ethereum } = window
    if (!ethereum) return
    const handleAccountsChanged = (accounts) => {
      setAccount(accounts && accounts.length ? accounts[0] : null)
    }
    ethereum.on('accountsChanged', handleAccountsChanged)
    return () => {
      try {
        ethereum.removeListener('accountsChanged', handleAccountsChanged)
      } catch (_) {}
    }
  }, [])

  const truncateAddress = (addr) =>
    addr ? `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}` : ''

  const navLinks = [
    { name: 'Features', to: '/title6' },
    { name: 'Company', to: '/title7' },
    { name: 'Blog', to: '/title8' },
    { name: 'Trade History', to: '/title9' },
  ]

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
          }}
        >
          UNIDEX
        </Typography>

        {/* Navigation Items (Desktop) */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
          {navLinks.map((link) => (
            <Button
              key={link.name}
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
              <Link to={link.to} style={{ textDecoration: 'none' }}>
                <Typography
                  sx={{
                    color: 'text.primary',
                    '&:hover': { color: '#2196f3' },
                  }}
                >
                  {link.name}
                </Typography>
              </Link>
            </Button>
          ))}
        </Box>

        {/* Right Side Buttons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { xs: 'block', md: 'none' } }}
            onClick={toggleDrawer(true)}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon sx={{ color: isDarkMode ? '#EFF8FF' : '#061536' }} />
          </IconButton>

          {/* Theme Toggle */}
          <IconButton
            onClick={toggleTheme}
            sx={{ color: isDarkMode ? '#EFF8FF' : '#061536' }}
          >
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          {/* Create Wallet Button (Desktop only) */}
          <Button
            variant='outlined'
            onClick={handleClick}
            sx={{
              display: { xs: 'none', sm: 'flex' }, // Use "flex" to align with parent Box
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

          {/* Connect to Wallet Button (Desktop only) */}
          <Button
            variant='contained'
            onClick={connectMetaMask}
            sx={{
              display: { xs: 'none', sm: 'block' }, // Hide on small screens to place in drawer
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
            {account ? truncateAddress(account) : 'Connect to Wallet'}
          </Button>
        </Box>
      </Toolbar>

      {/* Dropdown Menu for "Create Wallet" */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: { width: 390, borderRadius: 2 },
        }}
      >
        {/* All your MenuItem components here */}
        <MenuItem onClick={handleClose} component={Link} to='/swap-token'>
          <Box
            component='img'
            src='assets/images/Header/hello.svg'
            alt='Ethereum'
            sx={{ width: 50, height: 50, mr: 1 }}
          />
          <Box>
            <Typography sx={{ color: 'text.primary' }}>Swap Token</Typography>
            <Typography
              sx={{ color: 'text.primary', fontSize: '14px', padding: '5px' }}
            >
              Connect a wallet to your Unidex account
            </Typography>
          </Box>
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to='/gasless-swaps'>
          <Box
            component='img'
            src='assets/images/Header/gas.svg'
            alt='Ethereum'
            sx={{ width: 50, height: 50, mr: 1 }}
          />
          <Box>
            <Typography sx={{ color: 'text.primary' }}>
              Gasless Swaps
            </Typography>
            <Typography
              sx={{ color: 'text.primary', fontSize: '14px', padding: '5px' }}
            >
              Connect a wallet to your Unidex account
            </Typography>
          </Box>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={Link}
          to='/liquidity-sources'
        >
          <Box
            component='img'
            src='assets/images/Header/liquidity.svg'
            alt='Ethereum'
            sx={{ width: 50, height: 50, mr: 1 }}
          />
          <Box>
            <Typography sx={{ color: 'text.primary' }}>
              Liquidity Source
            </Typography>
            <Typography
              sx={{ color: 'text.primary', fontSize: '14px', padding: '5px' }}
            >
              Connect a wallet to your Unidex account
            </Typography>
          </Box>
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to='/limit-orders'>
          <Box
            component='img'
            src='assets/images/Header/limit.svg'
            alt='Ethereum'
            sx={{ width: 50, height: 50, mr: 1 }}
          />
          <Box>
            <Typography sx={{ color: 'text.primary' }}>Limit Orders</Typography>
            <Typography
              sx={{ color: 'text.primary', fontSize: '14px', padding: '5px' }}
            >
              Connect a wallet to your Unidex account
            </Typography>
          </Box>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={Link}
          to='/cross-chain-swaps'
        >
          <Box
            component='img'
            src='assets/images/Header/cross.svg'
            alt='Ethereum'
            sx={{ width: 50, height: 50, mr: 1 }}
          />
          <Box>
            <Typography sx={{ color: 'text.primary' }}>Cross Chains</Typography>
            <Typography
              sx={{ color: 'text.primary', fontSize: '14px', padding: '5px' }}
            >
              Connect a wallet to your Unidex account
            </Typography>
          </Box>
        </MenuItem>
      </Menu>

      {/* Mobile Drawer */}
      <Drawer
        anchor='right'
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
            backgroundColor: isDarkMode ? '#121A2D' : '#F0F9FF',
          },
        }}
      >
        <Box
          role='presentation'
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          sx={{ mt: 2 }}
        >
          {/* Main Nav Links */}
          {navLinks.map((link) => (
            <MenuItem
              key={link.name}
              component={Link}
              to={link.to}
              sx={{
                color: isDarkMode ? '#EFF8FF' : '#061536',
                fontWeight: 500,
              }}
            >
              {link.name}
            </MenuItem>
          ))}
          {/* Mobile-specific buttons */}
          <Box
            sx={{
              display: { xs: 'flex', sm: 'none' }, // Show on mobile only
              flexDirection: 'column',
              gap: 2,
              p: 2,
            }}
          >
            <Button
              variant='contained'
              onClick={connectMetaMask}
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
              {account ? truncateAddress(account) : 'Connect to Wallet'}
            </Button>
            <Button
              variant='outlined'
              onClick={handleClick}
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
          </Box>
        </Box>
      </Drawer>
      <ConnectWalletModal
        open={connectModalOpen}
        onClose={() => setConnectModalOpen(false)}
        isDarkMode={isDarkMode}
      />
    </AppBar>
  )
}

export default Header
