import React from 'react';
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
  
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useState } from "react";
import { Link } from "react-router-dom";




function Header({ toggleTheme, isDarkMode }) {
      
      const [setAge] = useState('');

      const handleChange = (event) => {
        setAge(event.target.value);
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
            <Link to={'/title6'} style={{ textDecoration: 'none'}} >Features</Link>
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
           <Link to={'/title7'} style={{ textDecoration: 'none'}}>Company</Link> 
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
             <Link to={'/title8'} style={{ textDecoration: 'none'}}>Blog</Link>
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
             <Link to={'/title9'} style={{ textDecoration: 'none'}}>Trade History</Link>
          </Button>
        </Box>

        {/* Right Side Buttons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Theme Toggle */}
          <IconButton onClick={toggleTheme} sx={{ color: isDarkMode ? '#EFF8FF' : '#061536' }}>
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          {/* Create Wallet Button */}
          <Button
            variant="outlined"
            sx={{
              display: { xs: 'none', sm: 'block' },
              color: isDarkMode ? '#EFF8FF' : '#061536',
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
            
          <FormControl>
       
             <InputLabel id="demo"></InputLabel>
             <Select
                     labelId="demo"
                     id=""
                     label=""
                     onChange={handleChange}
                    
                    
              >
                {/* first */}
             <Link to={'/title1'} style={{ textDecoration: 'none'}}> <MenuItem value={10}><Box component="img"
        src="assets/images/Header/hello.svg"
        alt="Ethereum" sx={{ width: 50, height:50,Top:58, left:58 }}/><Box component="span" sx={{ color: "text.primary"}}>Swap Token<Typography sx={{color:"text.primary",fontSize:"14px",padding:"5px",}}>
                  Connect a wallet to your Unidex account
                </Typography>
                </Box></MenuItem> 
        </Link>  
        {/* second */}
             <Link to={'/title2'} style={{ textDecoration: 'none' }}> <MenuItem value={20}><Box component="img"
        src="assets/images/Header/gas.svg"
        alt="Ethereum" sx={{ width: 50, height:50,Top:58, left:58 }}/><Box component="span" sx={{ color: "text.primary"}}>Gasless Swaps<Typography sx={{color:"text.primary",fontSize:"14px",padding:"5px",}}>
                  Connect a wallet to your Unidex account
                </Typography>
                </Box></MenuItem> </Link>

             {/* third */}
             <Link to={'/title3'} style={{ textDecoration: 'none' }}>  <MenuItem value={30}><Box component="img"
        src="assets/images/Header/firelist.svg"
        alt="Ethereum" sx={{ width: 50, height:50,Top:58, left:58 }}/><Box component="span" sx={{ color: "text.primary"}}>Liquidity Source<Typography sx={{color:"text.primary",fontSize:"14px",padding:"5px",}}>
                  Connect a wallet to your Unidex account
                </Typography>
                </Box></MenuItem> </Link>
             
             {/* fourth */}
             <Link to={'/title4'} style={{ textDecoration: 'none' }}>  <MenuItem value={30}><Box component="img"
        src="assets/images/Header/limit.svg"
        alt="Ethereum" sx={{ width: 50, height:50,Top:58, left:58 }}/><Box component="span" sx={{ color: "text.primary"}}>Limit Orders<Typography sx={{color:"text.primary",fontSize:"14px",padding:"5px",}}>
                  Connect a wallet to your Unidex account
                </Typography>
                </Box></MenuItem> </Link>
             
             {/* fifth */}
             <Link to={'/title5'} style={{ textDecoration: 'none' }}> <MenuItem value={30}><Box component="img"
        src="assets/images/Header/cross.svg"
        alt="Ethereum" sx={{ width: 50, height:50,Top:58, left:58 }}/><Box component="span" sx={{ color: "text.primary"}}>Cross Chains<Typography sx={{color:"text.primary",fontSize:"14px",padding:"5px",}}>
                  Connect a wallet to your Unidex account
                </Typography>
                </Box></MenuItem> </Link>
        </Select>
          </FormControl>
        
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;