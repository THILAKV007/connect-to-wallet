import React, { useState } from 'react'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './Menu/HomePage'
import TradingPage from './pages/TradingPage'
import Swap1 from './pages/Swap1'
import Swap2 from './pages/Swap2'
import Swap3 from './pages/Swap3'
import GasSwapSection from './Menu/GasSwapSection'
import LimitOrderSection from './Menu/LimitOrderSection'
import LiquiditySection from './Menu/LiquiditySection'
import SwapTokenLanding from './Menu/SwapTokenLanding'
import MenuDot from './Menu/MenuDot'
import CrossChainSection from './Menu/CrossChainSection'

function AppContent({ isDarkMode, toggleTheme }) {
  const location = useLocation()
  const hiddenFooterRoutes = ['/trading', '/swap1', '/swap2', '/swap3']
  const shouldHideFooter = hiddenFooterRoutes.includes(location.pathname)

  return (
    <>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Routes>
        <Route path='/' element={<HomePage isDarkMode={isDarkMode} />} />
        <Route
          path='/trading'
          element={<TradingPage isDarkMode={isDarkMode} />}
        />
        <Route path='/swap1' element={<Swap1 isDarkMode={isDarkMode} />} />
        <Route path='/swap2' element={<Swap2 isDarkMode={isDarkMode} />} />
        <Route path='/swap3' element={<Swap3 isDarkMode={isDarkMode} />} />
        <Route path='/src/Menu/Menu.jsx' element={<MenuDot />} />
        <Route
          path='/swap-token'
          element={<SwapTokenLanding isDarkMode={isDarkMode} />}
        />
        <Route
          path='/gasless-swaps'
          element={<GasSwapSection isDarkMode={isDarkMode} />}
        />
        <Route
          path='/liquidity-source'
          element={<LiquiditySection isDarkMode={isDarkMode} />}
        />
        <Route
          path='/limit-orders'
          element={<LimitOrderSection isDarkMode={isDarkMode} />}
        />
        <Route
          path='/cross-chains'
          element={<CrossChainSection isDarkMode={isDarkMode} />}
        />
      </Routes>
      {!shouldHideFooter && <Footer isDarkMode={isDarkMode} />}
    </>
  )
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: {
        main: '#2196f3',
      },

      background: {
        default: isDarkMode ? '#061536' : '#EFF8FF',
        paper: isDarkMode ? '#122A53' : '#F8FCFF',
      },
      color: {
        default: isDarkMode ? 'white' : 'black',
        paper: isDarkMode ? '#122A53' : '#6D6D6D',
      },
    },
  })
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
