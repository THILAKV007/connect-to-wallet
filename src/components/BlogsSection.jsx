import React, { useState, useEffect } from 'react'
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
} from '@mui/material'

const BlogsSection = ({ isDarkMode }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const blogPosts = [
    {
      id: 1,
      title: 'Swap on Solana',
      description:
        'The Power of True Decentralization the Dummy Content on the visionary crypto and documentation',
      image: '/assets/images/BlogsUNIDEX/blog-1.png',
    },
    {
      id: 2,
      title: 'Swap on Solana',
      description:
        'The Power of True Decentralization the Dummy Content on the visionary crypto and documentation',
      image: '/assets/images/BlogsUNIDEX/blog-2.png',
    },
    {
      id: 3,
      title: 'Swap on Solana',
      description:
        'The Power of True Decentralization the Dummy Content on the visionary crypto and documentation',
      image: '/assets/images/BlogsUNIDEX/blog-3.png',
    },
    {
      id: 4,
      title: 'Swap on Solana',
      description:
        'The Power of True Decentralization the Dummy Content on the visionary crypto and documentation',
      image: '/assets/images/BlogsUNIDEX/blog-4.png',
    },
    {
      id: 5,
      title: 'Swap on Solana',
      description:
        'The Power of True Decentralization the Dummy Content on the visionary crypto and documentation',
      image: '/assets/images/BlogsUNIDEX/blog-5.png',
    },
    {
      id: 6,
      title: 'Swap on Solana',
      description:
        'The Power of True Decentralization the Dummy Content on the visionary crypto and documentation',
      image: '/assets/images/BlogsUNIDEX/blog-1.png',
    },
    {
      id: 7,
      title: 'Swap on Solana',
      description:
        'The Power of True Decentralization the Dummy Content on the visionary crypto and documentation',
      image: '/assets/images/BlogsUNIDEX/blog-2.png',
    },
    {
      id: 8,
      title: 'Swap on Solana',
      description:
        'The Power of True Decentralization the Dummy Content on the visionary crypto and documentation',
      image: '/assets/images/BlogsUNIDEX/blog-3.png',
    },
    {
      id: 9,
      title: 'Swap on Solana',
      description:
        'The Power of True Decentralization the Dummy Content on the visionary crypto and documentation',
      image: '/assets/images/BlogsUNIDEX/blog-4.png',
    },
    {
      id: 10,
      title: 'Swap on Solana',
      description:
        'The Power of True Decentralization the Dummy Content on the visionary crypto and documentation',
      image: '/assets/images/BlogsUNIDEX/blog-5.png',
    },
  ]

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.max(1, blogPosts.length - 4))
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [blogPosts.length])

 

  return (
    <Box
      sx={{
        py: 8,
        background: isDarkMode
          ? 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #2d3561 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
        minHeight: '500px',
      }}
    >
      <Container maxWidth='lg'>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant='h3'
            sx={{
              fontWeight: 700,
              mb: 2,
              color: isDarkMode ? '#ffffff' : '#000000',
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Blogs{' '}
            <Box
              component='span'
              sx={{
                color: '#2196f3',
                position: 'relative',
              }}
            >
              UNIDEX
            </Box>{' '}
            ?
          </Typography>
          <Typography
            variant='h6'
            sx={{
              color: isDarkMode
                ? 'rgba(255, 255, 255, 0.7)'
                : 'rgba(0, 0, 0, 0.7)',
              fontWeight: 400,
              fontSize: '1.1rem',
            }}
          >
            The Power of True Decentralization
          </Typography>
        </Box>

        {/* Blog Cards Slider */}
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '16px',
            maxWidth: { lg: 'calc(4.2 * 220px + 4 * 16px)' },
            mx: 'auto',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: { xs: 3, lg: 2 },
              transition: 'transform 0.5s ease-in-out',
              transform: `translateX(-${currentSlide * 20}%)`,
              width: 'calc(100% + 50px)',
            }}
          >
            {blogPosts.map((blog, index) => (
              <Card
                key={blog.id}
                sx={{
                  minWidth: { xs: '280px', lg: '220px' },
                  maxWidth: { xs: '280px', lg: '220px' },
                  borderRadius: '16px',
                  background: isDarkMode
                    ? 'rgba(255, 255, 255, 0.05)'
                    : 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: isDarkMode
                    ? '1px solid rgba(255, 255, 255, 0.1)'
                    : '1px solid rgba(0, 0, 0, 0.1)',
                  boxShadow: isDarkMode
                    ? '0 8px 32px rgba(0, 0, 0, 0.3)'
                    : '0 8px 32px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: isDarkMode
                      ? '0 12px 40px rgba(0, 0, 0, 0.4)'
                      : '0 12px 40px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <CardMedia
                  component='img'
                  image={blog.image}
                  alt={blog.title}
                  sx={{
                    height: { xs: 200, lg: 160 },
                    objectFit: 'cover',
                    borderRadius: '16px',
                  }}
                />
                <CardContent sx={{ p: 1.5 }}>
                  <Typography
                    variant='h6'
                    sx={{
                      fontWeight: 600,
                      mb: 0.5,
                      color: isDarkMode ? '#ffffff' : '#000000',
                      fontSize: '1.1rem',
                    }}
                  >
                    {blog.title}
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{
                      color: isDarkMode
                        ? 'rgba(255, 255, 255, 0.7)'
                        : 'rgba(0, 0, 0, 0.7)',
                      lineHeight: 1.6,
                      fontSize: '0.9rem',
                    }}
                  >
                    {blog.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Slide Indicators */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 1,
            mt: 4,
          }}
        >
          {Array.from({ length: Math.max(1, blogPosts.length - 4) }).map(
            (_, index) => (
              <Box
                key={index}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background:
                    currentSlide === index
                      ? '#2196f3'
                      : 'rgba(128, 128, 128, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                onClick={() => setCurrentSlide(index)}
              />
            )
          )}
        </Box>
      </Container>
      <Divider/>
    </Box>
    
  )
}

export default BlogsSection;
