import React, { useState } from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,

} from '@mui/material';
import Header from './components/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SwapTokenLanding from './components/SwapTokenLanding';
import GasSwapSection from './components/GasSwapSection';
import LimitOrderSection from './components/LimitOrderSection';
import CrossChainSection from './components/CrossChainSection';
import LiquiditySection from './components/LiquiditySection';

function Dot() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    
      const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
      };
    
      const theme = createTheme({
        palette: {
          mode: isDarkMode ? 'dark' : 'light',
          primary: {
            main: '#2196f3',
          },
          background: {
            default: isDarkMode ? '#0a0e1a' : '#f5f5f5',
            paper: isDarkMode ? '#1a1f2e' : '#ffffff',
          },
        },
      });
  return (
    <>
          <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Box
        sx={{
          minHeight: '100vh',
          background: isDarkMode 
            ? 'linear-gradient(135deg, #0a0e1a 0%, #1a1f2e 50%, #2a2f3e 100%)'
            : 'linear-gradient(135deg, #f5f5f5 0%, #e3f2fd 50%, #bbdefb 100%)',
          display: 'flex',
          flexDirection: 'column',
          paddingTop: 8,
        }}
      >
        
         <BrowserRouter>
         <Header/>
    <Routes>
      <Route path ='/' element = {<Header/>} isDarkMode = {isDarkMode}/>
      <Route path='/title1' element={<SwapTokenLanding/>} isDarkMode={isDarkMode} />
      <Route path='/title2' element={<GasSwapSection/>} isDarkMode={isDarkMode} />
      <Route path='/title3' element={<LiquiditySection/>} isDarkMode={isDarkMode}/>
      <Route path='/title4' element={<LimitOrderSection/>} isDarkMode={isDarkMode}/>
      <Route path='/title5' element={<CrossChainSection/>} isDarkMode={isDarkMode}/>
    </Routes>
    </BrowserRouter>
      </Box>
    </ThemeProvider>
    </>
  )
}

export default Dot;
