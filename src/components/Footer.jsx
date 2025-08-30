import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Link,
} from '@mui/material';

function Footer({ isDarkMode }) {
  const footerLinks = {
    Learn: ['Swap', 'Pool', 'Vote'],
    Support: ['Swap', 'Pool', 'Vote'],
    Legal: ['Terms', 'Privacy']
  };

  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: 6,
        backgroundColor: isDarkMode ? '#061536' : '#EFF8FF',
        borderTop: isDarkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        {/* Main CTA Section */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)',
            borderRadius: 4,
            p: 6,
            mb: 6,
            textAlign: 'center',
            color: '#ffffff',
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Ready to Start Trading
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              mb: 4,
              maxWidth: '600px',
              mx: 'auto',
              opacity: 0.9,
            }}
          >
            Your crypto stays in your wallet — always. Our non-custodial design ensures that you have complete control over your funds,
            with no third-party access or risk of centralized failure.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#ffffff',
                color: '#2196f3',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                },
              }}
            >
              Launch App
            </Button>
            
            <Button
              variant="outlined"
              sx={{
                borderColor: '#ffffff',
                color: '#ffffff',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: 2,
                '&:hover': {
                  borderColor: '#ffffff',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Launch App
            </Button>
          </Box>
        </Box>

        {/* Footer Links */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 4 }}>
          {/* Logo */}
          <Box>
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
          </Box>

          {/* Navigation Links */}
          <Box sx={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {Object.entries(footerLinks).map(([category, links]) => (
              <Box key={category}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: isDarkMode ? '#ffffff' : '#000000',
                    fontSize: '1rem',
                  }}
                >
                  {category}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {links.map((link) => (
                    <Link
                      key={link}
                      href="#"
                      sx={{
                        color: isDarkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        '&:hover': {
                          color: '#2196f3',
                          textDecoration: 'none',
                        },
                      }}
                    >
                      {link}
                    </Link>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;