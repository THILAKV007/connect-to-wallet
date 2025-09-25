import React, { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  List,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
  CardContent,
  Stack,
  Link,
  Paper,
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
// import { styled } from '@mui/material/styles';

// const SubTitle = styled(Typography)(({ theme }) => ({
//   fontFamily: 'Manrope',
//   fontWeight: 400,
//   fontSize: '16px',
//   lineHeight: '54.64px',
//   color: '#B3B3B3',
//   textAlign: 'center',
//   marginBottom: theme.spacing(2),
// }));

// const StyledContainer = styled(Container)(({ theme }) => ({
//   minHeight: '90vh',
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   paddingTop: theme.spacing(8),
//   paddingBottom: theme.spacing(8),
//   position: 'relative',
// }));

// const MainTitle = styled(Typography)(({ theme }) => ({
//   fontFamily: 'Manrope',
//   fontWeight: 700,
//   fontSize: '40px',
//   lineHeight: '54.64px',
//   color: 'text.primary',
//   textAlign: 'center',
//   marginBottom: theme.spacing(4),
// }));

// const ChainListContainer = styled(Box)(({ theme }) => ({
//   position: 'relative',
//   zIndex: 1,
//   width: '100%',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   marginTop: theme.spacing(4),
// }));

// Placeholder for SVG imports
// import { ReactComponent as ShieldIcon } from 'assets/images/GaslessSwap/mevx.svg';
// import { ReactComponent as DollarIcon } from 'assets/images/GaslessSwap/dollar.svg';
// import { ReactComponent as ThunderboltIcon } from 'assets/images/GaslessSwap/thu.svg';
// const FeatureText = styled(Typography)(({ theme }) => ({
//   fontFamily: 'Manrope',
//   fontWeight: 700,
//   fontSize: '23px',
//   lineHeight: '31.42px',
//   color: 'text.primary',
//   textAlign: 'center',
//   position: 'absolute',
//   zIndex: 2,
// }));

// const HighVolumeText = styled(FeatureText)({
//   top: '220px',
//   right: '164px',
//   width: '201px',
// });

// const TrendingPairsText = styled(FeatureText)({
//   bottom: '30px',
//   left: '100px',
//   width: '201px',
// });

export default function GasSwapSection() {
  const [toggle, setToggle] = useState('on')
  const handleToggle = (_event, newValue) => {
    if (newValue !== null) setToggle(newValue)
  }

  const swap = [
    {
      title: 'MEV protection',
      description:
        'Say goodbye to sandwich attacks and frontrunning.Protect from MEV without a second thought.',
      img: 'assets/images/GaslessSwap/core-1.svg', // replace with your actual image path
      link: 'Learn more.',
    },
    {
      title: 'Get more than you pay for',
      description:
        'Save on slippage and cut down opportunity cost.                ',
      img: 'assets/images/GaslessSwap/core-2.svg', // replace with your actual image path
      link: null,
    },
    {
      title: 'MEV protection',
      description:
        'Say goodbye to sandwich attacks and frontrunning. Protect from MEV without a second thought.',
      img: 'assets/images/GaslessSwap/core-3.svg', // replace with your actual image path
      link: 'Learn more.',
    },
  ]

  return (
    <Box
      sx={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          fontFamily: "'Manrope', sans-serif",
          color: 'text.primary',
        }}
      >
        <Box
          id='hero'
          sx={{
            position: 'relative',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: { xs: '100vh', md: '95vh' },
            overflow: 'hidden',
            padding: { xs: '20px', md: '0' },
            boxSizing: 'border-box',
          }}
        >
          {/* Background Decoration */}

          <Box
            component='img'
            src='assets/images/Common/bg-blue-top.svg'
            alt='hero background decor'
            sx={{
              position: 'absolute',
              right: 0,
              top: 0,
              zIndex: 0,
              width: { xs: '60%', sm: '40%' },
            }}
          />
          <Box
            component='img'
            src='assets/images/Common/bg-blue-bottom.svg'
            alt='hero background decor'
            sx={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              zIndex: 0,
              width: { xs: '60%', sm: '40%' },
            }}
          />
          <Box
            component='img'
            src='assets/images/GaslessSwap/03.png'
            alt='hero background decor'
            sx={{
              position: 'absolute',
              left: '50%',
              bottom: 0,
              transform: {
                xs: 'translate(-50%, 0)',
                md: 'translateX(-50%)',
              },
              width: '650px',
              height: '60vh',
              opacity: 1,
              zIndex: 0,
            }}
          />

          {/* Content */}
          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: { xs: '12px', md: '22px' },
              maxWidth: '582px',
              width: '100%',
            }}
          >
            <Typography
              sx={{
                color: '#0c9fe3',
                fontWeight: 700,
                fontSize: { xs: '16px', md: '24px' },
                lineHeight: '32.78px',
              }}
            >
              Go gasless with Unidex..
            </Typography>

            <Typography
              sx={{
                color: 'text.primary',
                fontWeight: 700,
                fontSize: { xs: '36px', md: '62px' },
                lineHeight: { xs: 1.2, md: 1.1 },
              }}
            >
              Gasless swaps
            </Typography>

            <Typography
              sx={{
                color: 'text.primary',
                fontWeight: 700,
                fontSize: { xs: '12px', md: '14px' },
                lineHeight: '24px',
                textAlign: 'center',
                paddingX: { xs: '20px', md: '0' },
              }}
            >
              Swap crypto without native tokens. Matcha handles the gas for{' '}
              <br />
              swaps and approvals so you can focus on trading.
            </Typography>

            <Button
              variant='contained'
              sx={{
                borderRadius: '8px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '24px',
                background: 'linear-gradient(90deg, #0da2e5 0%, #0488cb 100%)',
                color: 'white',
                textTransform: 'none',
                padding: '12px 24px',
                marginTop: { xs: '16px', md: '40' },
              }}
            >
              Start Trading
            </Button>
          </Box>
        </Box>
      </Box>

      <Divider />
      {/* Instant gas-free swaps */}

      <Container sx={{ py: 8 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* Left side - Tokens grid */}
          <Box
            sx={{
              flex: { xs: '1', md: '1' },
              width: { xs: '100%', md: '50%' },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'nowrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: { xs: 0.5, sm: 1, md: 1.5 },
                mb: { xs: 4, md: 0 },
                maxWidth: '500px',
                margin: '0 auto',
              }}
            >
              {/* Left 3 tokens - Low to High Opacity */}
              {[1, 2, 3].map((tokenNumber, index) => {
                const opacity = index === 0 ? 0.3 : index === 1 ? 0.6 : 1
                return (
                  <Box
                    key={`left-${tokenNumber}`}
                    component='img'
                    src={`assets/images/GaslessSwap/line${tokenNumber}.png`}
                    alt={`token ${tokenNumber}`}
                    sx={{
                      width: { xs: '50px', sm: '70px', md: '80px' },
                      height: 'auto',
                      opacity: opacity,
                      transition: 'opacity 0.3s ease',
                      flexShrink: 0,
                    }}
                  />
                )
              })}

              {/* Center circular arrow button */}
              <IconButton
                sx={{
                  width: { xs: 35, sm: 45, md: 50 },
                  height: { xs: 35, sm: 45, md: 50 },

                  borderRadius: '20%',
                  backgroundColor: 'white',
                  boxShadow: 3,
                  flexShrink: 0,
                  mx: { xs: 0.5, sm: 1 },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 14, sm: 18, md: 20 },
                    fontWeight: 'bold',
                    color: '#666',
                  }}
                >
                  &gt;
                </Typography>
              </IconButton>

              {/* Right 3 tokens - High to Low Opacity */}
              {[4, 5, 6].map((tokenNumber, index) => {
                const opacity = index === 0 ? 1 : index === 1 ? 0.6 : 0.3
                return (
                  <Box
                    key={`right-${tokenNumber}`}
                    component='img'
                    src={`assets/images/GaslessSwap/line${tokenNumber}.png`}
                    alt={`token ${tokenNumber}`}
                    sx={{
                      width: { xs: '50px', sm: '70px', md: '80px' },
                      height: 'auto',
                      opacity: opacity,
                      transition: 'opacity 0.3s ease',
                      flexShrink: 0,
                    }}
                  />
                )
              })}
            </Box>
          </Box>

          {/* Right side - Content */}
          <Box
            sx={{
              flex: { xs: '1', md: '1' },
              width: { xs: '100%', md: '50%' },
            }}
          >
            <Box>
              {/* Heading */}
              <Typography
                variant='h2'
                sx={{
                  fontSize: {
                    xs: '1.8rem',
                    sm: '2.2rem',
                    md: '2.5rem',
                    lg: '3rem',
                  },
                  textAlign: { xs: 'center', md: 'left' },
                  mb: { xs: 2, md: 3 },
                }}
              >
                Instant gas-free swaps
              </Typography>

              {/* Checklist */}
              <List sx={{ pl: 0 }}>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckCircleIcon color='success' />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        variant='body1'
                        sx={{
                          maxWidth: { xs: '100%', sm: '90%', md: '500px' },
                          fontSize: { xs: 14, sm: 15, md: 16 },
                        }}
                      >
                        <Link
                          href='#'
                          underline='none'
                          sx={{
                            color: 'primary.main',
                            fontWeight: 700,
                            fontStyle: 'bold',
                            fontSize: 14,
                          }}
                        >
                          Scans multiple
                        </Link>{' '}
                        <Link
                          href='#'
                          underline='none'
                          sx={{
                            color: 'text.primary',
                            fontWeight: 700,
                            fontStyle: 'bold',
                            fontSize: 14,
                          }}
                        >
                          sources to find the best possible trade rates
                        </Link>{' '}
                      </Typography>
                    }
                  />
                </ListItem>

                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckCircleIcon color='success' />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        variant='body1'
                        sx={{
                          maxWidth: { xs: '100%', sm: '90%', md: '500px' },
                          fontSize: { xs: 14, sm: 15, md: 16 },
                        }}
                      >
                        <Link
                          href='#'
                          underline='none'
                          sx={{
                            color: 'primary.main',
                            fontWeight: 700,
                            fontStyle: 'bold',
                            fontSize: 14,
                          }}
                        >
                          Smart routing
                        </Link>{' '}
                        <Link
                          href='#'
                          underline='none'
                          sx={{
                            color: 'text.primary',
                            fontWeight: 700,
                            fontStyle: 'bold',
                            fontSize: 14,
                          }}
                        >
                          ensures maximum value across liquidity pools
                        </Link>{' '}
                      </Typography>
                    }
                  />
                </ListItem>

                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckCircleIcon color='success' />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        variant='body1'
                        sx={{
                          maxWidth: { xs: '100%', sm: '90%', md: '500px' },
                          fontSize: { xs: 14, sm: 15, md: 16 },
                        }}
                      >
                        <Link
                          href='#'
                          underline='none'
                          sx={{
                            color: 'primary.main',
                            fontWeight: 700,
                            fontStyle: 'bold',
                            fontSize: 14,
                          }}
                        >
                          Protects against front-running
                        </Link>{' '}
                        <Link
                          href='#'
                          underline='none'
                          sx={{
                            color: 'text.primary',
                            fontWeight: 700,
                            fontStyle: 'bold',
                            fontSize: 14,
                          }}
                        >
                          and sandwich attacks
                        </Link>{' '}
                      </Typography>
                    }
                  />
                </ListItem>

                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckCircleIcon color='success' />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        variant='body1'
                        sx={{
                          maxWidth: { xs: '100%', sm: '90%', md: '500px' },
                          fontSize: { xs: 14, sm: 15, md: 16 },
                        }}
                      >
                        <Link
                          href='#'
                          underline='none'
                          sx={{
                            color: 'primary.main',
                            fontWeight: 700,
                            fontStyle: 'bold',
                            fontSize: 14,
                          }}
                        >
                          Alerts you to slippage
                        </Link>{' '}
                        <Link
                          href='#'
                          underline='none'
                          sx={{
                            color: 'text.primary',
                            fontWeight: 700,
                            fontStyle: 'bold',
                            fontSize: 14,
                          }}
                        >
                          and potential price impact before you trade
                        </Link>{' '}
                      </Typography>
                    }
                  />
                </ListItem>

                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckCircleIcon color='success' />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        variant='body1'
                        sx={{
                          maxWidth: { xs: '100%', sm: '90%', md: '500px' },
                          fontSize: { xs: 14, sm: 15, md: 16 },
                        }}
                      >
                        <Link
                          href='#'
                          underline='none'
                          sx={{
                            color: 'primary.main',
                            fontWeight: 700,
                            fontStyle: 'bold',
                            fontSize: 14,
                          }}
                        >
                          Optimized for smarter
                        </Link>{' '}
                        <Link
                          href='#'
                          underline='none'
                          sx={{
                            color: 'text.primary',
                            fontWeight: 700,
                            fontStyle: 'bold',
                            fontSize: 14,
                          }}
                        >
                          trading with safety, transparency in every swap
                        </Link>{' '}
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>
      </Container>
      <Divider />

      {/* Core Swap Functions */}
      <Box sx={{ py: { xs: 4, md: 6 } }}>
        <Container sx={{ maxWidth: { xs: '100%', sm: '600px', md: '1200px' } }}>
          <Typography
            variant='h4'
            align='center'
            sx={{
              mb: 2,
              fontWeight: '700',
              fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' },
              px: { xs: 2, sm: 0 },
            }}
          >
            Our Core Swap Functions
          </Typography>
          <Typography
            variant='body1'
            align='center'
            sx={{
              maxWidth: '600px',
              mx: 'auto',
              mb: { xs: 4, md: 6 },
              color: 'text.secondary',
              fontWeight: '700',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              px: { xs: 2, sm: 0 },
            }}
          >
            Swap crypto without native tokens. Matcha handles the gas for swaps
            and approvals so you can focus on trading.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: { xs: 2, sm: 3, md: 4 },
            }}
          >
            {swap.map((swap, index) => (
              <Box
                key={index}
                sx={{
                  flex: {
                    xs: '1 1 100%',
                    sm: '1 1 calc(50% - 12px)',
                    md: '1 1 calc(33.333% - 16px)',
                  },
                  maxWidth: { xs: '100%', sm: '320px', md: '320px' },
                  // bgcolor: getBgColor(),
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    maxWidth: { xs: '100%', sm: '320px' },
                    height: { xs: 'auto', md: '310px' },
                    p: { xs: 2, sm: 3 },
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    component='img'
                    src={swap.img}
                    sx={{
                      width: { xs: 80, sm: 90, md: 100 },
                      height: { xs: 80, sm: 90, md: 100 },
                      mb: { xs: 2, md: 3 },
                    }}
                  />
                  <Typography
                    variant='h6'
                    sx={{
                      fontWeight: '700',
                      mb: { xs: 1.5, md: 2 },
                      fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.25rem' },
                    }}
                  >
                    {swap.title}
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{
                      color: '#555555',
                      fontWeight: '400',
                      fontSize: { xs: 13, sm: 14 },
                      lineHeight: 1.5,
                      textAlign: 'center',
                    }}
                  >
                    {swap.description}{' '}
                    {swap.link && (
                      <Link
                        href='#'
                        underline='always'
                        color='text.primary'
                        sx={{
                          fontWeight: 700,
                          fontSize: { xs: 13, sm: 14 },
                        }}
                      >
                        {swap.link}
                      </Link>
                    )}
                  </Typography>
                </Paper>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Divider />
      {/* fourth section */}
      <Box
        sx={{
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          alignItems: 'center',
          textAlign: 'center',
          py: 8,
          maxHeight: '100vh',
        }}
      >
        {/* Section Title */}
        <Typography variant='h4' fontWeight='bold' gutterBottom>
          Available Supporting Chains
        </Typography>
        <Typography
          variant='body1'
          color='#b3b3b3'
          sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}
        >
          Swap crypto without native tokens. Unidex handles the gas for swaps
          and approvals so you can focus on trading.
        </Typography>
        {/* <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            position: 'relative',
          }}
        >

         
        </Box> */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mx: 'auto',
          }}
        >
          <Box
            sx={{
              position: 'relative',
            }}
          >
            <img
              style={{ width: '100%', height: '100%' }}
              src='assets/images/CrossChain/List.png'
              alt='list'
            />
            <Box
              sx={{
                position: 'absolute',
                top: '45px',
                right: { md: '-340px', lg: '-360px' },
                display: { xs: 'none', md: 'flex' },
                alignItems: 'flex-end',
              }}
            >
              <Divider
                sx={{
                  borderStyle: 'dotted',
                  borderColor: '#b5b5b5',
                  width: '200px',
                  mt: 1,
                }}
              />
              <Typography
                variant='h6'
                sx={{ fontWeight: 'bold', textAlign: 'center', width: '200px' }}
              >
                With High volume
              </Typography>
            </Box>
            <Box
              sx={{
                position: 'absolute',
                bottom: 70,
                left: { md: '-350px', lg: '-370px' },
                display: { xs: 'none', md: 'flex' },
                alignItems: 'flex-end',
              }}
            >
              <Typography
                variant='h6'
                sx={{
                  fontWeight: 'bold',
                  textAlign: 'center',
                  width: '170px',
                }}
              >
                With most <br /> trending Pairs
              </Typography>
              <Divider
                sx={{
                  borderStyle: 'dotted',
                  borderColor: '#b5b5b5',
                  width: '200px',
                  mt: 1,
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider />
      {/* fifth section */}
      <Box
        sx={{
          backgroundImage: `url("assets/images/GaslessSwap/ddd.png")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          py: 8,
          minHeight: '100vh',
        }}
      >
        {/* Content */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mx: 3,
          }}
        >
          {/* Feature Card */}
          <Card
            sx={{
              bgcolor: '#048acd',
              border: '1px solid #e7e9eb',
              borderRadius: 3,
              boxShadow:
                '0px 1.7px 10.3px rgba(0,0,0,0.03), 0px 17.2px 60.1px rgba(0,0,0,0.06), 0px 1.7px 3.4px rgba(0,0,0,0.02)',
              width: '100%',
              maxWidth: 478,
              p: { xs: 3, md: 5 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              variant='h6'
              sx={{
                color: '#000',
                fontWeight: 500,
                textAlign: 'center',
                mb: 2,
              }}
            >
              Unidex Auto
            </Typography>

            {/* Toggle */}
            <ToggleButtonGroup
              value={toggle}
              exclusive
              onChange={handleToggle}
              sx={{
                bgcolor: '#f1f1f4',
                p: '4px',
                mb: 3,
                borderRadius: 24,
              }}
            >
              <ToggleButton
                value='on'
                sx={{
                  variant: 'contained',
                  textTransform: 'none',
                  fontWeight: 500,
                  fontSize: 14,
                  px: 2,
                  color: '#000',
                  borderRadius: 24,
                  '&.Mui-selected': {
                    bgcolor: '#fff',
                    color: '#000',
                    boxShadow:
                      '0px 2px 3px rgba(0,0,0,0.06), 0px 0px 0px 1px rgba(0,0,0,0.06)',
                  },
                }}
              >
                on
              </ToggleButton>
              <ToggleButton
                value='off'
                sx={{
                  textTransform: 'none',
                  fontWeight: 500,
                  fontSize: 14,
                  px: 2,
                  color: '#000',
                  borderRadius: 24,
                  '&.Mui-selected': {
                    bgcolor: '#fff',
                    color: '#000',
                    boxShadow:
                      '0px 2px 3px rgba(0,0,0,0.06), 0px 0px 0px 1px rgba(0,0,0,0.06)',
                  },
                }}
              >
                Off
              </ToggleButton>
            </ToggleButtonGroup>

            {/* Feature List */}
            <List
              disablePadding
              sx={{
                width: '100%',
                color: '#fff',
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              <ListItem
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <ListItemIcon>
                  <Box
                    component='img'
                    src='assets/images/GaslessSwap/green tick.png'
                    alt=''
                    sx={{ width: 16, height: 16 }}
                  />
                </ListItemIcon>
                <Typography sx={{ flexGrow: 1, textAlign: 'center' }}>
                  No gas needed
                </Typography>
              </ListItem>

              <ListItem
                sx={{
                  borderTop: '1px solid #f1f2f4',
                  py: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <ListItemIcon>
                  <Box
                    component='img'
                    src='assets/images/GaslessSwap/green tick.png'
                    alt=''
                    sx={{ width: 16, height: 16 }}
                  />
                </ListItemIcon>
                <Typography sx={{ flexGrow: 1, textAlign: 'center' }}>
                  130+ liquidity sources
                </Typography>
              </ListItem>

              <ListItem
                sx={{
                  borderTop: '1px solid #f1f2f4',
                  py: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <ListItemIcon>
                  <Box
                    component='img'
                    src='assets/images/GaslessSwap/green tick.png'
                    alt=''
                    sx={{ width: 16, height: 16 }}
                  />
                </ListItemIcon>
                <Typography sx={{ flexGrow: 1, textAlign: 'center' }}>
                  Smart Routing - Auto
                </Typography>
              </ListItem>
            </List>

            <Typography
              sx={{
                borderTop: '1px solid #f1f2f4',
                py: 1.5,
                color: '#fff',
                fontSize: 14,
                fontWeight: 500,
                textAlign: 'center',
                width: '100%',
              }}
            >
              0.05% - 0.25% fee on certain pairs
            </Typography>
          </Card>

          {/* Section Title */}
          <Typography
            variant='h3'
            sx={{
              color: 'text.primary',
              fontWeight: 700,
              textAlign: 'center',
              fontSize: 24,
              fontFamily: 'Manrope, sans-serif',
              mt: 4,
            }}
          >
            Available Supporting Chains
          </Typography>
          <Typography
            sx={{
              color: 'text.primary',
              fontWeight: 400,
              fontSize: 14,
              lineHeight: '24px',
              textAlign: 'center',
              maxWidth: 582,
              mt: 2,
              fontFamily: 'Manrope, sans-serif',
            }}
          >
            Swap crypto without native token. Unidex handles the gas for <br />{' '}
            swaps and approvals so you can focus on trading.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
