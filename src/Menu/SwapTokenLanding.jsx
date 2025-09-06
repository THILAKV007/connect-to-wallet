// SwapTokenLanding.jsx

import React from 'react';
import {
  Typography,
  Button,
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Container,
  Paper,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BoltIcon from "@mui/icons-material/Bolt";
import AddIcon from "@mui/icons-material/Add";
import WhatshotIcon from "@mui/icons-material/Whatshot";

export default function SwapTokenLanding({ isDarkMode }) {
  

  // Features for "New Trade Mode" section
  const features = [
    {
      icon: <BoltIcon sx={{ fontSize: 40, color: 'white' }} />,
      text: 'Faster trade Confirmation'
    },
    {
      icon: <AddIcon sx={{ fontSize: 40, color: 'white' }} />,
      text: 'Reduce failed rate by 75%'
    },
    {
      icon: <WhatshotIcon sx={{ fontSize: 40, color: 'white' }} />,
      text: 'Matches handles Gases'
    }
  ];

  return (
    <Box sx={{ textAlign: "center", display: "flex", flexDirection: "column" }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: 4,
          fontFamily: "'Manrope', sans-serif",
          color: "text.primary",
          backgroundImage: `url("assets/images/swapToken/gradient.png")`,
        }}
      >
        <Container
          sx={{
            textAlign: 'center',
            backgroundImage: `url("assets/images/swapToken/swapback.png")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: { xs: 'cover', md: 'contain' },
            backgroundPosition: 'center',
            py: { xs: 10, md: 20 },
            minHeight: { xs: '60vh', md: '80vh' },
            px: { xs: 2, md: 4 },
          }}
        >
          <Typography variant='h5' color='primary' fontWeight={700} fontSize={24}>
            Browse. Swap. Confirm.
          </Typography>
          <Typography variant='h3' fontWeight='bold' gutterBottom fontSize={62}>
            Swap Tokens
          </Typography>
          <Typography variant='body1' gutterBottom fontWeight={700}>
            Zero fee trades on 9+ million tokens across 14 chains. Get the best
            prices by tapping into 130+ liquidity sources.
          </Typography>
          <Button
            variant='contained'
            size='large'
            sx={{
              mt: 3,
              color: 'text.primary',
              borderRadius: "8px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "24px",
              background: "linear-gradient(90deg, #0da2e5 0%, #0488cb 100%)",
            
              textTransform: "none",
            }}
          >
            Start Trading
          </Button>
        </Container>
      </Box>

      <Divider />

      {/* Trade Features Section */}
      <Box
        sx={{
          py: 8,
          px: 2,
          display: 'flex',
          justifyContent: 'center',
          fontFamily: "'Manrope', sans-serif",
        }}
      >
        <Box
          sx={{
            maxWidth: 1248,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: { xs: 4, md: 8 },
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          {/* Left Features */}
          <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: 600 }, pt: 2, mb: { xs: 4, md: 0 } }}>
            <Box sx={{ maxWidth: 700 }}>
              <Typography
                variant='h3'
                sx={{
                  fontWeight: 700,
                  mb: 4,
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' }
                }}
              >
                Get unbeatable trade prices on Unidex.
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: 'green' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography>
                        <Box component='span' sx={{ color: '#1976d2', fontWeight: 700, fontSize: 16 }}>
                          Scans multiple
                          <Box component='span' sx={{ color: 'text.primary', fontWeight: 700, fontSize: 16, ml: 1 }}>
                            sources to find the best possible trade rates
                          </Box>
                        </Box>
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: 'green' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography>
                        <Box component='span' sx={{ color: '#1976d2', fontWeight: 700, fontSize: 16 }}>
                          Smart routing
                          <Box component='span' sx={{ color: 'text.primary', fontWeight: 700, fontSize: 16, ml: 1 }}>
                            ensures maximum value across liquidity pools
                          </Box>
                        </Box>
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: 'green' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography>
                        <Box component='span' sx={{ color: '#1976d2', fontWeight: 700, fontSize: 16 }}>
                          Protects against front-running
                          <Box component='span' sx={{ color: 'text.primary', fontWeight: 700, fontSize: 16, ml: 1 }}>
                            and sandwich attacks
                          </Box>
                        </Box>
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: 'green' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography>
                        <Box component='span' sx={{ color: '#1976d2', fontWeight: 700, fontSize: 16 }}>
                          Alerts you to slippage
                          <Box component='span' sx={{ color: 'text.primary', fontWeight: 700, fontSize: 16, ml: 1 }}>
                            and potential price impact before you trade
                          </Box>
                        </Box>
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: 'green' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography>
                        <Box component='span' sx={{ color: '#1976d2', fontWeight: 700, fontSize: 16 }}>
                          Optimized for smarter
                          <Box component='span' sx={{ color: 'text.primary', fontWeight: 700, fontSize: 16, ml: 1 }}>
                            trading with safety, transparency in every swap
                          </Box>
                        </Box>
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Box>
          </Box>

          {/* Right Side Swap Widget */}
          <Box
            sx={{
              width: { xs: '100%', md: 501 },
              maxWidth: 501,
              borderRadius: 2,
              mt: { xs: 4, md: 0 },
            }}
          >
            <Box sx={{ flex: 1, maxWidth: 501 }}>
              <Typography sx={{
                textAlign: 'center',
                color: '#0ea5e9',
                fontWeight: 700,
                fontSize: 14,
                mb: 6,
              }}>
                Quote Expires in 20s
              </Typography>
              {/* Token Swap Visual */}
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mb: 4,
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: { xs: 2, sm: 4 },
                }}
              >
                {/* Token Box 1 */}
                <Box
                  sx={{
                    backgroundColor: '#fff',
                    borderRadius: 2,
                    width: { xs: 180, sm: 210 },
                    height: { xs: 140, sm: 163 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: 3,
                    zIndex: 2,
                  }}
                >
                  <Box sx={{ width: 62, height: 62, position: 'relative', mb: 2 }}>
                    <Box
                      component='img'
                      src='assets/images/swapToken/dollar.png'
                      alt='USDC token'
                      sx={{ width: 62, height: 62, position: 'absolute' }}
                    />
                  </Box>
                  <Typography sx={{ fontWeight: 700, fontSize: 14, color: '#000' }}>
                    253.63 USDC
                  </Typography>
                  <Typography sx={{ fontWeight: 500, fontSize: 10, color: 'rgba(0,0,0,0.43)' }}>
                    $253.44
                  </Typography>
                </Box>

                {/* Token Box 2 */}
                <Box
                  sx={{
                    backgroundColor: '#fff',
                    borderRadius: 2,
                    width: { xs: 180, sm: 210 },
                    height: { xs: 140, sm: 163 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: 3,
                    zIndex: 2,
                  }}
                >
                  <Box
                    component='img'
                    src='assets/images/swapToken/eth.png'
                    alt='ETH token'
                    sx={{
                      width: { xs: 50, sm: 62 },
                      height: { xs: 50, sm: 62 },
                      mb: 2,
                    }}
                  />
                  <Typography sx={{ fontWeight: 700, fontSize: 14, color: '#000' }}>
                    0.06 ETH
                  </Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: 10, color: '#000' }}>
                    $253.44
                  </Typography>
                </Box>
              </Box>
              {/* Swap Details */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {[
                  { label: 'Liquidity Providers', value: 'OxRFQ' },
                  { label: 'Rate', value: '1 ETH = 1562.76 USDC($1562.77)' },
                  { label: 'Ethereum Fees', value: '$ 23' },
                ].map((row, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexDirection: { xs: 'column', sm: 'row' },
                      gap: { xs: 0.5, sm: 0 },
                    }}
                  >
                    <Typography sx={{ fontWeight: 700, fontSize: 14, color: 'text.primary' }}>
                      {row.label}
                    </Typography>
                    <Typography sx={{
                      fontWeight: 700,
                      fontSize: 14,
                      color: 'text.primary',
                      textAlign: { xs: 'left', sm: 'right' },
                    }}>
                      {row.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Divider />

      {/* MEV Protection Section */}
      <Box
        sx={{
          maxHeight: '100vh',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          px: { xs: 2, md: 8 },
          py: { xs: 4, md: 6 },
          gap: { xs: 4, md: 0 },
          overflow: 'hidden',
        }}
      >
        <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: 600 }, mb: { xs: 4, md: 0 } }}>
          <Typography variant='h3' sx={{ fontWeight: 700, mb: 4 }}>
            MEV Protection
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: 'green' }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography>
                    <Box component='span' sx={{ color: '#1976d2', fontWeight: 700, fontSize: 14 }}>
                      RFQ Private
                      <Box component='span' sx={{ color: 'text.primary', fontWeight: 700, fontSize: 14, ml: 1 }}>
                        Settlement
                      </Box>
                    </Box>
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: 'green' }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography>
                    <Box component='span' sx={{ color: '#1976d2', fontWeight: 700, fontSize: 14 }}>
                      No public mempool
                      <Box component='span' sx={{ color: 'text.primary', fontWeight: 700, fontSize: 14, ml: 1 }}>
                        -no MEV Bot
                      </Box>
                    </Box>
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: 'green' }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography>
                    <Box component='span' sx={{ color: '#1976d2', fontWeight: 700, fontSize: 14 }}>
                      Enhanced protection with
                      <Box component='span' sx={{ color: 'text.primary', fontWeight: 700, fontSize: 14, ml: 1 }}>
                        Unidex Auto
                      </Box>
                    </Box>
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: 'green' }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography>
                    <Box component='span' sx={{ color: '#1976d2', fontWeight: 700, fontSize: 14 }}>
                      Alerts you to slippage
                      <Box component='span' sx={{ color: 'text.primary', fontWeight: 700, fontSize: 14, ml: 1 }}>
                        and potential price impact before you trade
                      </Box>
                    </Box>
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: 'green' }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography>
                    <Box component='span' sx={{ color: '#1976d2', fontWeight: 700, fontSize: 14 }}>
                      Optimized for smarter
                      <Box component='span' sx={{ color: 'text.primary', fontWeight: 700, fontSize: 14, ml: 1 }}>
                        trading with safety, transparency in every swap
                      </Box>
                    </Box>
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Box>
        {/* Right side Image */}
        <Box
          sx={{
            backgroundImage: `url("assets/images/swapToken/combaincircle.png")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            width: { xs: '100%', md: '700px' },
            maxWidth: '100%',
            height: { xs: '60vh', md: '80vh' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: { xs: 2, md: 0 },
          }}
        >
          <Box
            component='img'
            src='assets/images/swapToken/protection.png'
            alt='MEV Protection Shield'
            sx={{
              width: { xs: '90px', sm: '180px', md: '350px' },
              maxWidth: { xs: '280px', sm: '320px', md: '350px' },
              height: 'auto',
              objectFit: 'contain',
              maxHeight: { xs: '50vh', sm: '55vh', md: '60vh' },
              margin: '0 auto',
            }}
          />
        </Box>
      </Box>

      <Divider />

      {/* Smart Routing Section */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          px: { xs: 2, md: 8 },
          py: { xs: 4, md: 6 },
          gap: { xs: 4, md: 0 },
        }}
      >
        <Box
          component='img'
          src='assets/images/swapToken/Rectangle.png'
          alt='Smart Routing Rectangle'
          sx={{
            width: { xs: '100%', sm: '300px', md: '400px' },
            maxWidth: 400,
            height: 'auto',
          }}
        />
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: '100%', md: 600 },
            mb: { xs: 4, md: 0 },
          }}
        >
          <Typography variant='h3' sx={{ fontWeight: 700, mb: 4 }}>
            Smart Routing
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: 'green' }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography>
                    <Box component='span' sx={{ color: '#1976d2', fontWeight: 700, fontSize: 14 }}>
                      Unidex Source the market for the best prices
                    </Box>
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: 'green' }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography>
                    <Box component='span' sx={{ color: '#1976d2', fontWeight: 700, fontSize: 14 }}>
                      No public mempool
                      <Box component='span' sx={{ color: 'text.primary', fontWeight: 700, fontSize: 14, ml: 1 }}>
                        -no MEV Bot
                      </Box>
                    </Box>
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: 'green' }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography>
                    <Box component='span' sx={{ color: '#1976d2', fontWeight: 700, fontSize: 14 }}>
                      Enhanced protection with Matcha Auto
                    </Box>
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: 'green' }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography>
                    <Box component='span' sx={{ color: '#1976d2', fontWeight: 700, fontSize: 14 }}>
                      Alerts you to slippage
                      <Box component='span' sx={{ color: 'text.primary', fontWeight: 700, fontSize: 14, ml: 1 }}>
                        and potential price impact before you trade
                      </Box>
                    </Box>
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: 'green' }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography>
                    <Box component='span' sx={{ color: '#1976d2', fontWeight: 700, fontSize: 14 }}>
                      Optimized for smarter
                      <Box component='span' sx={{ color: 'text.primary', fontWeight: 700, fontSize: 14, ml: 1 }}>
                        trading with safety, transparency in every swap
                      </Box>
                    </Box>
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Box>

      <Divider />

      {/* New Trade Mode Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          py: { xs: 4, md: 6 },
          px: { xs: 2, md: 4 },
          backgroundImage: `url("assets/images/swapToken/gradient.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: { xs: '60vh', md: '80vh' },
        }}
      >
        {/* Title */}
        <Typography variant='h6' sx={{ color: '#2196f3', fontWeight: 600 }}>
          New Trade Mode :
        </Typography>
        <Typography variant='h3' sx={{ fontWeight: 'bold', my: 1 }}>
          Swap Tokens
        </Typography>
        <Typography
          variant='subtitle1'
          sx={{
            color: 'text.primary',
            mb: { xs: 4, md: 6 },
            fontWeight: '700',
            fontSize: { xs: 14, md: 16 },
          }}
        >
          Great Prices, with more speed and less worry
        </Typography>

        <Grid container spacing={6} justifyContent='center'>
          {features.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  background: 'transparent',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, #0288d1 60%, #03a9f4 90%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  {item.icon}
                </Box>
                <Typography variant='subtitle1' sx={{ fontWeight: 600 }}>
                  {item.text}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Divider />
    </Box>
  );
}
