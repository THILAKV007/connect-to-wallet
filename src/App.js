import React, { useState } from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
} from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogsSection from './components/BlogsSection';
import PopularTokenSection from './components/PopularTokenSection';
import WhyUnidexSection from './components/WhyUnidexSection';




function App() {
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
        {/* Main content area */}
        <Box sx={{ flex: 1 }}>
          <WhyUnidexSection isDarkMode={isDarkMode} />
          <PopularTokenSection isDarkMode={isDarkMode} />
          <BlogsSection isDarkMode={isDarkMode} />
        </Box>
        
      

{/* Footer */}
        <Footer isDarkMode={isDarkMode} />
      </Box>
    </ThemeProvider>
  )
}

export default App;
