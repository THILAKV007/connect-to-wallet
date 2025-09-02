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
  ListItemIcon,
  ListItemText,
  Paper,
  Link,
  Divider,
  useTheme,
  Stack,
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

export default function GasSwapSection() {
  const swap = [
    {
      title: 'MEV protection',
      description:
        'Say goodbye to sandwich attacks and frontrunning.Protect from MEV without a second thought.',
      img: 'assets/images/GaslessSwap/shei.png', // replace with your actual image path
      link: 'Learn more.',
    },
    {
      title: 'Get more than you pay for',
      description:
        'Save on slippage and cut down opportunity cost.                ',
      img: 'assets/images/GaslessSwap/Dollar.png', // replace with your actual image path
      link: null,
    },
    {
      title: 'MEV protection',
      description:
        'Say goodbye to sandwich attacks and frontrunning. Protect from MEV without a second thought.',
      img: 'assets/images/GaslessSwap/thunder.png', // replace with your actual image path
      link: 'Learn more.',
    },
  ]
  const theme = useTheme()

  // function to return background based on mode
  const getBgColor = (hello) => {
    return theme.palette.mode === 'dark' ? '#122A53' : '#F8FCFF'
  }
  const [toggle, setToggle] = useState('On')

  return (
    <Box sx={{ minHeight: '100vh', py: 5, overflow: 'hidden' }}>
      {/* Hero Section */}

      <Container
        sx={{
          textAlign: 'center',
          minHeight: '80vh',
          py: 20,
          backgroundImage: `url("assets/images/GaslessSwap/03.png")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          width: 'auto',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Typography
          variant='h4'
          sx={{ fontWeight: 'bold', color: 'primary.main' }}
        >
          Go gasless with Unidex..
        </Typography>
        <Typography variant='h2' sx={{ fontWeight: 'bold', mt: 2 }}>
          Gasless swaps
        </Typography>
        <Typography variant='body1' sx={{ mt: 2 }}>
          Swap crypto without native tokens. Matcha handles the gas for swaps
          and approvals so you can focus on trading.
        </Typography>
        <Button variant='contained' color='primary' sx={{ mt: 4, px: 4 }}>
          Start Trading
        </Button>
      </Container>

      <Divider />
      {/* Instant gas-free swaps */}
      <Container sx={{ py: 8 }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: { xs: 4, md: 6 }
        }}>
          {/* Left side - Tokens grid */}
          <Box sx={{ flex: { xs: '1', md: '1' }, width: { xs: '100%', md: '50%' } }}>
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
                const opacity = index === 0 ? 0.3 : index === 1 ? 0.6 : 1;
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
                );
              })}

              {/* Center circular arrow button */}
              <IconButton
                sx={{
                  width: { xs: 35, sm: 45, md: 50 },
                  height: { xs: 35, sm: 45, md: 50 },
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  boxShadow: 3,
                  flexShrink: 0,
                  mx: { xs: 0.5, sm: 1 },
                }}
              >
                <ArrowForwardIosIcon
                  sx={{ fontSize: { xs: 14, sm: 18, md: 20 } }}
                />
              </IconButton>

              {/* Right 3 tokens - High to Low Opacity */}
              {[4, 5, 6].map((tokenNumber, index) => {
                const opacity = index === 0 ? 1 : index === 1 ? 0.6 : 0.3;
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
                );
              })}
            </Box>
          </Box>

          {/* Right side - Content */}
          <Box sx={{ flex: { xs: '1', md: '1' }, width: { xs: '100%', md: '50%' } }}>
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
                          and sandwhich attacks
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
                          trading with safety,transparency in every swap
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

          <Grid
            container
            spacing={{ xs: 2, sm: 3, md: 4 }}
            justifyContent='center'
          >
            {swap.map((swap, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                sx={{
                  bgcolor: getBgColor(), // calling function here
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
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Divider />

      {/* Available Supporting Chains */}
      <Box>
        <Container sx={{ py: { xs: 4, md: 8 } }}>
          <Typography
            variant='h4'
            sx={{
              fontWeight: '700',
              mb: 2,
              style: 'bold',
              textAlign: 'center',
              margin: 4,
              fontSize: {
                xs: '1.8rem',
                sm: '2.2rem',
                md: '2.5rem',
                lg: '3rem',
              },
              px: { xs: 2, sm: 0 },
            }}
          >
            Available Supporting Chains
          </Typography>
          <Typography
            variant='body1'
            sx={{
              fontWeight: '400',
              mb: 2,
              style: 'bold',
              textAlign: 'center',
              margin: 4,
            }}
          >
            Swap crypto without native tokens. Matcha handles the gas for
            <br /> swaps and approvals so you can focus on trading.
          </Typography>

          <Box
            component='img'
            src='assets/images/GaslessSwap/curve.png'
            alt='Supporting Chains'
            sx={{
              width: '100%',
              height: {
                xs: '300px',
                sm: '400px',
                md: '500px',
                lg: '600px',
              },
              objectFit: 'cover',
              borderRadius: 2,
              maxWidth: '100%',
            }}
          />
        </Container>
      </Box>
      <Divider />
      {/* Unidex Auto Section */}
      <Box
        component='section'
        id='features'
        sx={{
          py: { xs: 4, md: 8 },
          position: 'relative',
        }}
      >
        {/* Background blobs */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
            pointerEvents: 'none',
            display: { xs: 'none', md: 'block' },
            overflow: 'hidden',
          }}
        >
          <Box
            component='img'
            src='/page/c288acba-e30e-47c2-af64-d36751fa6511/images/157_35.svg'
            alt='background blur effect 1'
            sx={{
              position: 'absolute',
              top: { md: '30%', lg: '25%' },
              left: { md: '8%', lg: '10%' },
              width: { md: 200, lg: 260 },
              height: { md: 200, lg: 260 },
              filter: 'blur(300px)',
            }}
          />
          <Box
            component='img'
            src='/page/c288acba-e30e-47c2-af64-d36751fa6511/images/157_36.svg'
            alt='background blur effect 2'
            sx={{
              position: 'absolute',
              top: { md: '35%', lg: '30%' },
              right: { md: '8%', lg: '10%' },
              width: { md: 200, lg: 260 },
              height: { md: 200, lg: 260 },
              filter: 'blur(300px)',
            }}
          />
        </Box>

        {/* Content wrapper */}
        <Stack
          spacing={{ xs: 3, md: 4 }}
          alignItems='center'
          sx={{ position: 'relative', zIndex: 1, px: { xs: 2, sm: 0 } }}
        >
          {/* Feature Card */}
          <Card
            sx={{
              backgroundColor: '#048acd',
              borderRadius: '20px',
              boxShadow:
                '0px 1.7px 10.3px rgba(0,0,0,0.03), 0px 17.2px 60.1px rgba(0,0,0,0.06), 0px 1.7px 3.4px rgba(0,0,0,0.02)',
              maxWidth: { xs: '100%', sm: 400, md: 478 },
              width: '100%',
              p: { xs: '20px 15px', sm: '25px 20px', md: '41px 25px 30px' },
              textAlign: 'center',
            }}
          >
            <Typography
              variant='h6'
              sx={{
                fontWeight: 500,
                fontSize: { xs: 18, sm: 19, md: 20 },
                mb: { xs: 1.5, md: 2 },
                color: '#000000',
              }}
            >
              Unidex Auto
            </Typography>

            {/* Toggle switch */}
            <Box
              sx={{
                display: 'flex',
                bgcolor: '#f1f1f4',
                borderRadius: '14px',
                p: '4px',
                mb: { xs: 2, md: 3 },
                justifyContent: 'center',
                width: 'fit-content',
                mx: 'auto',
              }}
            >
              {['On', 'Off'].map((option) => (
                <Typography
                  key={option}
                  onClick={() => setToggle(option)}
                  sx={{
                    px: { xs: 1.5, sm: 2 },
                    py: { xs: 0.8, sm: 1 },
                    fontSize: { xs: 13, sm: 14 },
                    fontWeight: 500,
                    borderRadius: '24px',
                    cursor: 'pointer',
                    color: '#17181c',
                    bgcolor: toggle === option ? '#ffffff' : 'transparent',
                    boxShadow:
                      toggle === option
                        ? '0px 2px 3px rgba(0,0,0,0.06), 0px 0px 0px 1px rgba(0,0,0,0.06)'
                        : 'none',
                    transition: 'all 0.3s',
                  }}
                >
                  {option}
                </Typography>
              ))}
            </Box>

            {/* Feature list */}
            <List
              sx={{
                p: 0,
                color: '#ffffff',
                fontSize: { xs: 13, sm: 14 },
                fontWeight: 500,
              }}
            >
              <ListItem
                sx={{
                  borderTop: '1px solid #f1f2f4',
                  py: { xs: 1.5, md: 2 },
                  display: 'flex',
                  alignItems: 'center',
                  px: { xs: 1, sm: 2 },
                }}
              >
                <Box
                  component='img'
                  src='assets/images/GaslessSwap/green tick.png'
                  sx={{ width: 16, height: 16, mr: { xs: 1.5, sm: 2 } }}
                />
                <Typography sx={{ fontSize: { xs: 13, sm: 14 } }}>
                  No gas needed
                </Typography>
              </ListItem>

              <ListItem
                sx={{
                  borderTop: '1px solid #f1f2f4',
                  py: { xs: 1.5, md: 2 },
                  display: 'flex',
                  alignItems: 'center',
                  px: { xs: 1, sm: 2 },
                }}
              >
                <Box
                  component='img'
                  src='assets/images/GaslessSwap/green tick.png'
                  sx={{ width: 16, height: 16, mr: { xs: 1.5, sm: 2 } }}
                />
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 0.2, sm: 1 }}
                  justifyContent='center'
                  flexGrow={1}
                  alignItems={{ xs: 'flex-start', sm: 'center' }}
                >
                  <Typography sx={{ fontSize: { xs: 13, sm: 14 } }}>
                    MEV protection
                  </Typography>
                  <Typography
                    sx={{
                      color: '#31353c',
                      display: { xs: 'none', sm: 'block' },
                    }}
                  >
                    ·
                  </Typography>
                  <Typography
                    sx={{ color: '#fafafa', fontSize: { xs: 13, sm: 14 } }}
                  >
                    No slippage
                  </Typography>
                </Stack>
              </ListItem>

              <ListItem
                sx={{
                  borderTop: '1px solid #f1f2f4',
                  py: { xs: 1.5, md: 2 },
                  display: 'flex',
                  alignItems: 'center',
                  px: { xs: 1, sm: 2 },
                }}
              >
                <Box
                  component='img'
                  src='assets/images/GaslessSwap/green tick.png'
                  sx={{ width: 16, height: 16, mr: { xs: 1.5, sm: 2 } }}
                />
                <Typography flexGrow={1} sx={{ fontSize: { xs: 13, sm: 14 } }}>
                  130+ liquidity sources
                </Typography>
              </ListItem>

              <ListItem
                sx={{
                  borderTop: '1px solid #f1f2f4',
                  py: { xs: 1.5, md: 2 },
                  display: 'flex',
                  alignItems: 'center',
                  px: { xs: 1, sm: 2 },
                }}
              >
                <Box
                  component='img'
                  src='assets/images/GaslessSwap/green tick.png'
                  sx={{ width: 16, height: 16, mr: { xs: 1.5, sm: 2 } }}
                />
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 0.2, sm: 1 }}
                  justifyContent='center'
                  alignItems={{ xs: 'flex-start', sm: 'center' }}
                >
                  <Typography sx={{ fontSize: { xs: 13, sm: 14 } }}>
                    Smart Routing
                  </Typography>
                  <Typography
                    sx={{
                      color: '#31353c',
                      display: { xs: 'none', sm: 'block' },
                    }}
                  >
                    ·
                  </Typography>
                  <Typography
                    sx={{ color: '#fafafa', fontSize: { xs: 13, sm: 14 } }}
                  >
                    Auto
                  </Typography>
                </Stack>
              </ListItem>
            </List>

            <Typography
              sx={{
                color: '#ffffff',
                fontSize: { xs: 13, sm: 14 },
                fontWeight: 500,
                pt: { xs: 1.5, md: 2 },
                mt: { xs: 1.5, md: 2 },
                borderTop: '1px solid #f1f2f4',
                px: { xs: 1, sm: 0 },
              }}
            >
              0.05% - 0.25% fee on certain pairs
            </Typography>
          </Card>

          {/* Section Title & Subtitle */}
          <Box
            textAlign='center'
            maxWidth={{ xs: '100%', sm: 500, md: 582 }}
            sx={{ px: { xs: 2, sm: 0 } }}
          >
            <Typography
              variant='h3'
              sx={{
                fontWeight: 700,
                fontSize: { xs: 24, sm: 28, md: 32, lg: 40 },
                mb: { xs: 2, md: 3 },
                color: 'text.primary',
                fontFamily: 'Manrope, sans-serif',
              }}
            >
              Available Supporting Chains
            </Typography>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: 13, sm: 14 },
                lineHeight: { xs: '20px', sm: '24px' },
                color: 'text.primary',
                fontFamily: 'Manrope, sans-serif',
                style: 'bold',
              }}
            >
              Swap crypto without native tokens. Matcha handles the gas for
              swaps and approvals so you can focus on trading.
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}
