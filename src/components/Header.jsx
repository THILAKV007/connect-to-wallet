import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useState } from "react";
import { Link } from "react-router-dom";
// import SelectOption from "./SelectOption";



function Header({ toggleTheme, isDarkMode }) {
      const [click, setClick] = useState(false)
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: isDarkMode ? '#1a2332' : '#ffffff',
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
            Features
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
            Company
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
          <IconButton onClick={toggleTheme} sx={{ color: isDarkMode ? '#ffffff' : '#000000' }}>
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          {/* Create Wallet Button */}
          <Button
            variant="outlined"
            sx={{
              display: { xs: 'none', sm: 'block' },
              color: isDarkMode ? '#ffffff' : '#000000',
              borderColor: isDarkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
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
          <button onClick={()=>setClick(!click)}><span className="rotate-180">...</span></button>
        { click && ( <div className="w-44  border absolute right-1 top-20">
            <ul className="">
             <Link to={'/title1'}> <li className="px-3 py-4" textdecoration="none" >Swap Token</li></Link>  
             <Link to={'/title2'}> <li className="px-3 py-4">Gasless Swap</li></Link>  
             <Link to={'/title3'}> <li className="px-3 py-4">Liquidity Source</li></Link>  
             <Link to={'/title4'}> <li className="px-3 py-4">Limit Source</li></Link>  
             <Link to={'/title5'}> <li className="px-3 py-4">Cross Chain</li></Link>  
            </ul>
        </div> ) }
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;