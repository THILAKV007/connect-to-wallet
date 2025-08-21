import React, { useState } from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TradingPage from './pages/TradingPage';

function AppContent({ isDarkMode, toggleTheme }) {
  const location = useLocation();
  const hiddenFooterRoutes = ['/trading'];
  const shouldHideFooter = hiddenFooterRoutes.includes(location.pathname);

  return (
    <>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Routes>
        <Route path="/" element={<HomePage isDarkMode={isDarkMode} />} />
        <Route path="/trading" element={<TradingPage isDarkMode={isDarkMode} />} />
      </Routes>
      {!shouldHideFooter && <Footer isDarkMode={isDarkMode} />}
    </>
  );
}

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
      <Router>
        <AppContent isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </Router>
    </ThemeProvider>
  )
}

export default App
