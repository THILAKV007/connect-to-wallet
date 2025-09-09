import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  
  MenuItem,
  
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Link } from "react-router-dom";




function Header({ toggleTheme, isDarkMode }) {
      
      
      const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: isDarkMode ? '#121A2D' : '#F0F9FF',
        borderBottom: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
        {/* Logo */}
        <Typography
          variant="h5"
          component="div"
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
            sx={{
              color: isDarkMode ? '#EFF8FF' : '#061536',
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: 'transparent',
                color: 'text.primary',
              },
            }}
          >
            <Link to={'/title6'} style={{ textDecoration: 'none'}}><Typography sx={{color:"text.primary",'&:hover': {
                borderColor: '#0000',
                color: '#2196f3',
                backgroundColor: 'transparent',
              },}}>Features</Typography></Link>
          </Button>
          <Button
            sx={{
              color: isDarkMode ? '#EFF8FF' : '#061536',
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: 'transparent',
               color: 'text.primary',
              },
            }}
          >
           <Link to={'/title7'} style={{ textDecoration: 'none'}}><Typography sx={{color:"text.primary",'&:hover': {
                borderColor: '#0000',
                color: '#2196f3',
                backgroundColor: 'transparent',
              },}}>Company</Typography></Link> 
          </Button>
          <Button
            sx={{
              color: isDarkMode ? '#EFF8FF' : '#061536',
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: 'transparent',
                color: 'text.primary',
              },
            }}
          >
             <Link to={'/title8'} style={{ textDecoration: 'none'}}><Typography sx={{color:"text.primary",'&:hover': {
                borderColor: '#0000',
                color: '#2196f3',
                backgroundColor: 'transparent',
              },}}>Blog</Typography></Link>
          </Button>
          <Button
            sx={{
              
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: 'transparent',
                color: 'text.primary',
              },
            }}
          >
             <Link to={'/title9'} style={{ textDecoration: 'none'}}><Typography sx={{color:"text.primary",'&:hover': {
                borderColor: '#0000',
                color: '#2196f3',
                backgroundColor: 'transparent',
              },}}>Trade History</Typography></Link>
          </Button>
        </Box>

        {/* Right Side Buttons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Theme Toggle */}
          <IconButton onClick={toggleTheme} sx={{ color: isDarkMode ? '#EFF8FF' : '#061536' }}>
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
<Button
        variant="outlined"
        onClick={handleClick}
        sx={{
          display: { xs: "none", sm: "block" },
          color: isDarkMode ? "#EFF8FF" : "#061536",
          borderColor: isDarkMode
            ? "rgba(255, 255, 255, 0.3)"
            : "rgba(0, 0, 0, 0.3)",
          textTransform: "none",
          borderRadius: 2,
          px: 3,
          "&:hover": {
            borderColor: "#2196f3",
            color: "#2196f3",
            backgroundColor: "transparent"
          }
        }}
      >
        Create Wallet
      </Button>

      {/* Dropdown Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: { width: 390, borderRadius: 2 }
        }}
      >
        {/* first */}
        <MenuItem onClick={handleClose} component={Link} to="/title1">
          <Box
            component="img"
            src="assets/images/Header/hello.svg"
            alt="Ethereum"
            sx={{ width: 50, height: 50, mr: 1 }}
          />
          <Box>
            <Typography sx={{ color: "text.primary" }}>Swap Token</Typography>
            <Typography
              sx={{
                color: "text.primary",
                fontSize: "14px",
                padding: "5px"
              }}
            >
              Connect a wallet to your Unidex account
            </Typography>
          </Box>
        </MenuItem>

        {/* second */}
        <MenuItem onClick={handleClose} component={Link} to="/title2">
          <Box
            component="img"
            src="assets/images/Header/gas.svg"
            alt="Ethereum"
            sx={{ width: 50, height: 50, mr: 1 }}
          />
          <Box>
            <Typography sx={{ color: "text.primary" }}>Gasless Swaps</Typography>
            <Typography
              sx={{
                color: "text.primary",
                fontSize: "14px",
                padding: "5px"
              }}
            >
              Connect a wallet to your Unidex account
            </Typography>
          </Box>
        </MenuItem>

        {/* third */}
        <MenuItem onClick={handleClose} component={Link} to="/title3">
          <Box
            component="img"
            src="assets/images/Header/liquidity.svg"
            alt="Ethereum"
            sx={{ width: 50, height: 50, mr: 1 }}
          />
          <Box>
            <Typography sx={{ color: "text.primary" }}>Liquidity Source</Typography>
            <Typography
              sx={{
                color: "text.primary",
                fontSize: "14px",
                padding: "5px"
              }}
            >
              Connect a wallet to your Unidex account
            </Typography>
          </Box>
        </MenuItem>

        {/* fourth */}
        <MenuItem onClick={handleClose} component={Link} to="/title4">
          <Box
            component="img"
            src="assets/images/Header/limit.svg"
            alt="Ethereum"
            sx={{ width: 50, height: 50, mr: 1 }}
          />
          <Box>
            <Typography sx={{ color: "text.primary" }}>Limit Orders</Typography>
            <Typography
              sx={{
                color: "text.primary",
                fontSize: "14px",
                padding: "5px"
              }}
            >
              Connect a wallet to your Unidex account
            </Typography>
          </Box>
        </MenuItem>

        {/* fifth */}
        <MenuItem onClick={handleClose} component={Link} to="/title5">
          <Box
            component="img"
            src="assets/images/Header/cross.svg"
            alt="Ethereum"
            sx={{ width: 50, height: 50, mr: 1 }}
          />
          <Box>
            <Typography sx={{ color: "text.primary" }}>Cross Chains</Typography>
            <Typography
              sx={{
                color: "text.primary",
                fontSize: "14px",
                padding: "5px"
              }}
            >
              Connect a wallet to your Unidex account
            </Typography>
          </Box>
        </MenuItem>
      </Menu>
         

          {/* Connect to Wallet Button */}
          <Button
            variant="contained"
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
            
        
          
        
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;