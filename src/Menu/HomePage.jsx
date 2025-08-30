import React from 'react'
import { Box } from '@mui/material'

import WhyUnidexSection from '../components/WhyUnidexSection'
import PopularTokenSection from '../components/PopularTokenSection'
import BlogsSection from '../components/BlogsSection'
import BannerSection from '../components/BannerSection'

const HomePage = ({ isDarkMode }) => {
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
        <BannerSection isDarkMode={isDarkMode} />
        <WhyUnidexSection isDarkMode={isDarkMode} />
        <PopularTokenSection isDarkMode={isDarkMode} />
        <BlogsSection isDarkMode={isDarkMode} />
      </Box>
    </Box>
  )
}

export default HomePage
