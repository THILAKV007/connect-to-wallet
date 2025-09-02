import React from 'react'
import {
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'

export default function CrossChainSection(isDarkMode) {
  return (
    <Box
      sx={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* first section */}
      <Box sx={{}}>
        {/* Hero Content */}
        <Box
          sx={{
            alignItems: 'center',
            textAlign: 'center',
            gap: '22px',
            mt: { xs: '60px', sm: '100px', md: '143px' },
            position: 'relative',
            zIndex: 10,
            minHeight: { xs: '50vh', sm: '58vh' },
            backgroundImage: 'url("assets/images/CrossChain/y.png")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: { xs: 'cover', sm: 'contain' },
            px: { xs: 2, sm: 4 },
          }}
        >
          <Typography
            className='sub-heading'
            sx={{
              color: '#0c9fe3',
              fontWeight: 700,
              fontSize: { xs: '18px', sm: '20px', md: '24px' },
              lineHeight: '33px',
              fontFamily: 'Manrope, sans-serif',
              pt: 2,
            }}
          >
            where opportunity awaits
          </Typography>

          <Typography
            variant='h1'
            sx={{
              color: 'text.primary',
              fontWeight: 700,
              fontSize: { xs: '36px', sm: '48px', md: '62px' },
              lineHeight: { xs: '1.2', md: '85px' },
              fontFamily: 'Manrope, sans-serif',
              m: 0,
            }}
          >
            Cross chain swaps
          </Typography>

          <Typography
            sx={{
              color: 'text.primary',
              fontWeight: 700,
              fontSize: { xs: '12px', sm: '14px' },
              lineHeight: '24px',
              fontFamily: 'Manrope, sans-serif',
            }}
          >
            Deep liquidity for the best prices on 9+ million tokens across 14
            chains. Tap into 130+ <br /> liquidity sources aggregated by Matcha!
          </Typography>

          <Button
            sx={{
              background: 'linear-gradient(90deg, #0da2e5 0%, #0488cb 100%)',
              color: '#fff',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '16px',
              lineHeight: '24px',
              px: 2,
              py: 1,
              borderRadius: '8px',
              mt: 3,
            }}
          >
            Start Trading
          </Button>
        </Box>
      </Box>
      <Divider />

      {/* new trade section */}
      <Box
        id='trade-features-section'
        sx={{
          py: 8,
          px: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: "'Manrope', sans-serif",
          mx: 'auto',
          // height: '50vh',
        }}
      >
        <Box
          className='trade-features-container'
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
          {/* Left Side Features */}
          <Box sx={{ maxWidth: 600, pt: 2 }}>
            <Box sx={{ maxWidth: 700 }}>
              <Typography variant='h3' sx={{ fontWeight: 700, mb: 4 }}>
                Get unbeatable trade prices on Unidex.
              </Typography>
              <Typography
                sx={{ fontWeight: 400, mb: 4, color: 'text.primary' }}
              >
                Matcha does the hard work to find efficient and secure paths for{' '}
                <br />
                your cross-chain trades.
              </Typography>
            </Box>
          </Box>

          {/* Right Side Swap Widget */}
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mx: 'auto',
              mb: 4,
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 2, sm: 4 },
            }}
          >
            {/* Connecting Circle */}
            <Box
              sx={{
                position: 'absolute',
                width: { xs: 80, sm: 110 },
                height: { xs: 80, sm: 110 },
                backgroundColor: '#fff',
                borderRadius: '50%',
                border: '10px solid #10254A',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 3,
                display: { xs: 'none', sm: 'block' },
              }}
            />

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
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: 10,
                  color: 'rgba(0,0,0,0.43)',
                }}
              >
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
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: 12, sm: 14 },
                  color: '#000',
                }}
              >
                0.06 ETH
              </Typography>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: 9, sm: 10 },
                  color: '#000',
                }}
              >
                $253.44
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider />
      {/* third section */}
      <Box
        sx={{
          minHeight: '100vh', // light blue
          backgroundImage: "url('assets/images/CrossChain/edit.png')", // place wave background here
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          display: 'flex',
          alignItems: 'center',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth='lg'>
          <Grid container spacing={6} alignItems='center'>
            {/* Left Side Content */}
            <Grid item xs={12} md={6}>
              <Typography
                variant='h4'
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' },
                }}
              >
                Better than CEXs <br /> for L2 trading
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  maxWidth: { xs: '100%', sm: '80%' },
                }}
              >
                Trustless and non-custodial trades across chains. You stay in
                control of your funds.
              </Typography>
            </Grid>

            {/* Right Side Card */}
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  borderRadius: '20px',
                  boxShadow: '0px 8px 24px rgba(0,0,0,0.08)',
                  maxWidth: { xs: '100%', sm: 500, md: 587 },
                  width: '100%',
                  mx: 'auto',
                  p: { xs: 1, sm: 2 },
                }}
              >
                <CardContent>
                  <Grid container spacing={4}>
                    {/* Unidex Column */}
                    <Grid item xs={6}>
                      <Typography
                        variant='h6'
                        sx={{
                          color: '#0099ff',
                          fontWeight: 'bold',
                          mb: 2,
                          fontSize: { xs: '1rem', sm: '1.25rem' },
                        }}
                      >
                        Unidex
                      </Typography>
                      <List dense>
                        <ListItem>
                          <ListItemIcon>
                            <CheckIcon sx={{ color: 'text.primary' }} />
                          </ListItemIcon>
                          <ListItemText
                            primary='Aggregated liquidity'
                            primaryTypographyProps={{
                              fontSize: { xs: '0.875rem', sm: '1rem' },
                            }}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CheckIcon sx={{ color: 'text.primary' }} />
                          </ListItemIcon>
                          <ListItemText
                            primary='Trustless'
                            primaryTypographyProps={{
                              fontSize: { xs: '0.875rem', sm: '1rem' },
                            }}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CheckIcon sx={{ color: 'text.primary' }} />
                          </ListItemIcon>
                          <ListItemText
                            primary='Non-custodial'
                            primaryTypographyProps={{
                              fontSize: { xs: '0.875rem', sm: '1rem' },
                            }}
                          />
                        </ListItem>
                      </List>
                    </Grid>

                    {/* Other Dex Column */}
                    <Grid item xs={6}>
                      <Typography
                        variant='h6'
                        sx={{
                          fontWeight: 'bold',
                          mb: 2,
                          fontSize: { xs: '1rem', sm: '1.25rem' },
                        }}
                      >
                        Other Dex
                      </Typography>
                      <List dense>
                        <ListItem>
                          <ListItemIcon>
                            <CloseIcon sx={{ color: 'text.primary' }} />
                          </ListItemIcon>
                          <ListItemText
                            primary='Fragmented liquidity'
                            primaryTypographyProps={{
                              fontSize: { xs: '0.875rem', sm: '1rem' },
                            }}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CloseIcon sx={{ color: 'text.primary' }} />
                          </ListItemIcon>
                          <ListItemText
                            primary='Requires deposits'
                            primaryTypographyProps={{
                              fontSize: { xs: '0.875rem', sm: '1rem' },
                            }}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CloseIcon sx={{ color: 'text.primary' }} />
                          </ListItemIcon>
                          <ListItemText
                            primary='Custodial apps'
                            primaryTypographyProps={{
                              fontSize: { xs: '0.875rem', sm: '1rem' },
                            }}
                          />
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Divider />
      {/* four section */}
      <Box
        sx={{
          minHeight: '100vh', // light blue
          backgroundImage: "url('assets/images/CrossChain/center wave.png')", // place wave background here
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          alignItems: 'center',
          py: 8,
          textAlign: 'center',
        }}
      >
        {/* Section Title */}
        <Typography variant='h4' fontWeight='bold' gutterBottom>
          Available Supporting Chains
        </Typography>
        <Typography
          variant='body1'
          color='text.secondary'
          sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}
        >
          Swap crypto without native tokens. Matcha handles the gas for swaps
          and approvals so you can focus on trading.
        </Typography>
        <Box
          component='img'
          src='assets/images/CrossChain/List.png'
          alt='list'
          sx={{
            width: { xs: '100%', sm: '90%', md: '80%' },
            maxWidth: { xs: 350, sm: 500, md: 700 },
            height: 'auto',
            mx: 'auto',
            display: 'block',
          }}
        />
      </Box>
      <Divider />
    </Box>
  )
}
