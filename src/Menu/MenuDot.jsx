import React from 'react';
import {
  Box,
} from '@mui/material';
import GasSwapSection from './GasSwapSection';
import LimitOrderSection from './LimitOrderSection';
import CrossChainSection from './CrossChainSection';
import LiquiditySection from './LiquiditySection';
import SwapTokenLanding from './SwapTokenLanding';



const MenuDot= ({ isDarkMode }) => {
  return (
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
      {/* Main content area */}
      <Box sx={{ flex: 1 }}>
       {<SwapTokenLanding/>} isDarkMode={isDarkMode} 
       {<GasSwapSection/>} isDarkMode={isDarkMode} 
       {<LiquiditySection/>} isDarkMode={isDarkMode}
       {<LimitOrderSection/>} isDarkMode={isDarkMode}
       {<CrossChainSection/>} isDarkMode={isDarkMode}
      </Box>
    </Box>
  );
};

export default MenuDot;