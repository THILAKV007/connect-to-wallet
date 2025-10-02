import React from 'react'
import {
  Typography,
  Button,
  Box,
  Container,
  Grid,
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
        overflowX: 'hidden',
        width: '100%',
      }}
    >
      {/* first section */}
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
            minHeight: { xs: '60vh', md: '90vh' },
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
            src='assets/images/CrossChain/cross.png'
            alt='hero background decor'
            sx={{
              position: 'absolute',
              left: '50%',
              bottom: { xs: '0%', md: '-6%' },
              transform: {
                xs: 'translate(-50%, -50%)',
                md: 'translateX(-50%)',
              },
              height: { xs: '50vh', md: '70vh' },
              maxHeight: { xs: '200px', md: '600px' },
              width: 'auto',
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
              where opportunity awaits
            </Typography>

            <Typography
              sx={{
                color: 'text.primary',
                fontWeight: 700,
                fontSize: { xs: '36px', md: '62px' },
                lineHeight: { xs: 1.2, md: 1.1 },
              }}
            >
              Cross chain swaps
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
              Deep liquidity for the best prices on 9+ million tokens across 14
              chains. Tap into 130+ <br /> liquidity sources aggregated by
              Unidex!
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
                marginTop: { xs: '16px', md: '40px' },
              }}
            >
              Start Trading
            </Button>
          </Box>
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
          // height: '60vh',
          position: 'relative',
        }}
      >
        <Box
          component='img'
          src='assets/images/LimitorderSection/spiral.png'
          alt='Decorative background'
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: { xs: 100, sm: 150, md: 200 },
            height: { xs: 100, sm: 150, md: 200 },
            display: { xs: 'none', sm: 'block' },
            zIndex: 0,
          }}
        />
        <Box
          className='trade-features-container'
          sx={{
            maxWidth: 1248,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: { xs: 4, md: 8 },
            flexDirection: { xs: 'column', md: 'row' },
            minHeight: '60vh',
          }}
        >
          {/* Left Side Features */}
          <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: 600 }, pt: 2 }}>
            <Box sx={{ maxWidth: { xs: '100%', md: 700 } }}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '24px', sm: '32px', md: '40px', lg: '48px' },
                  lineHeight: { xs: 1.3, md: '45px' },
                  mb: 4,
                  textAlign: { xs: 'center', md: 'initial' },
                }}
              >
                Move seamlessly across chains.
              </Typography>
              <Typography
                sx={{
                  fontWeight: 420,
                  mb: 4,
                  color: '#b3b3b3',
                  textAlign: { xs: 'center', md: 'initial' },
                }}
              >
                Swap tokens between chains in one trade to <br />
                keep pace with fast-moving markets.
              </Typography>
            </Box>
          </Box>

          {/* Right Side Swap Widget */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: { xs: '16px', sm: '20px', md: '24px' },
              maxWidth: { xs: '100%', sm: '500px' },
              width: { xs: '100%', sm: 'auto', md: 'auto', lg: 'auto' },
              margin: 'auto',
              fontFamily: 'Inter, sans-serif',
              color: (theme) =>
                theme.palette.mode === 'dark' ? '#fff' : '#333',
              borderRadius: 2,
              bgcolor: (theme) =>
                theme.palette.mode === 'dark' ? '#10254A' : 'transparent',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row', md: 'row' },
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                mb: { xs: 3, md: 4 },
                gap: { xs: '6px', sm: '20px', md: '24px' },
                position: 'relative',
              }}
            >
              {[
                {
                  img: '/assets/images/swapToken/usd.svg',
                  label: '253.63 USDC',
                  sub: '$ 253.44',
                },
                {
                  img: '/assets/images/swapToken/eth.svg',
                  label: '253.63 USDC',
                  sub: '$ 253.44',
                },
              ].map((t, i) => (
                <React.Fragment key={t.img}>
                  <Box
                    sx={{
                      bgcolor: '#fff',
                      height: { xs: '210px', md: '150px' },
                      width: { xs: '100%', sm: '200px' },
                      maxWidth: { xs: 'none', sm: '200px' },
                      borderRadius: 3,
                      p: { xs: '12px', md: '16px' },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    }}
                  >
                    <img
                      src={t.img}
                      alt=''
                      style={{
                        marginBottom: '8px',
                        display: 'block',
                        margin: '0 auto 8px auto',
                      }}
                    />
                    <Typography sx={{ color: '#000', fontWeight: 'bold' }}>
                      {t.label}
                    </Typography>
                    <Typography
                      sx={{
                        color: '#000',
                        opacity: 0.4,
                        fontSize: '14px',
                      }}
                    >
                      {t.sub}
                    </Typography>
                  </Box>
                  {i === 0 && (
                    <Box
                      sx={{
                        bgcolor: '#fff',
                        height: { xs: '80px', md: '100px' },
                        width: { xs: '80px', md: '100px' },
                        borderRadius: '100%',
                        position: { xs: 'absolute' },
                        top: { md: '50%' },
                        left: { md: '50%' },
                        transform: { md: 'translate(-50%, -50%)' },
                        border: (theme) =>
                          `8px solid ${
                            theme.palette.mode === 'dark' ? '#10254A' : '#F0F8FF'
                          }`,
                        alignSelf: { xs: 'center' },
                        my: { xs: 1, md: 0 },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: { xs: '16px', sm: '20px', md: '24px' },
                        zIndex: 1,
                      }}
                    />
                  )}
                </React.Fragment>
              ))}
            </Box>

            {/* <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                mt: 2,
                padding: 2,

                borderRadius: 2,
                boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.03)',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography
                  variant='body1'
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === 'dark' ? '#fff' : '#333',
                  }}
                >
                  Liquidity Providers
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    fontWeight: 'bold',
                    color: (theme) =>
                      theme.palette.mode === 'dark' ? '#fff' : '#333',
                  }}
                >
                  0xRFQ
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography
                  variant='body1'
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === 'dark' ? '#fff' : '#333',
                  }}
                >
                  Rate
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    fontWeight: 'bold',
                    textAlign: 'right',
                    color: (theme) =>
                      theme.palette.mode === 'dark' ? '#fff' : '#333',
                  }}
                >
                  1 ETH = 1562.76 USDC($1562.77)
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography
                  variant='body1'
                  sx={{
                    color: (theme) =>
                      theme.palette.mode === 'dark' ? '#fff' : '#333',
                  }}
                >
                  Ethereum Fees
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    fontWeight: 'bold',
                    color: (theme) =>
                      theme.palette.mode === 'dark' ? '#fff' : '#333',
                  }}
                >
                  $ 23
                </Typography>
              </Box>
            </Box> */}
          </Box>
        </Box>
      </Box>
      <Divider />
      {/* third section */}
      <Box
        sx={{
          minHeight: { xs: '70vh', md: '90vh' },
          backgroundImage: "url('assets/images/CrossChain/edit.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          py: { xs: 4, md: 0 },
        }}
      >
        <Container maxWidth='lg'>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: { xs: 5, lg: 20 },
            }}
          >
            {/* Left Side Content */}
            <Box
              sx={{
                flex: { xs: '1 1 100%', md: '1 1 50%' },
                maxWidth: { xs: '100%', md: '50%' },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '24px', sm: '32px', md: '40px', lg: '43px' },
                  lineHeight: { xs: 1.3, md: '45px' },
                  mb: 2,
                  width: { xs: '100%', md: 378 },
                  height: 'auto',
                  textAlign: { xs: 'center', md: 'initial' },
                }}
              >
                Better than CEXs <br /> for L2 trading
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  width: { xs: '100%', md: 443 },
                  height: 'auto',
                  fontWeight: 400,
                  fontSize: 16,
                  textAlign: { xs: 'center', md: 'initial' },
                }}
              >
                Trustless and non-custodial trades across chains. You stay in
                control of your funds.
              </Typography>
            </Box>

            {/* Right Side Card */}
            <Box
              sx={{
                flex: { xs: '1 1 100%', md: '1 1 50%' },
                maxWidth: { xs: '100%', md: '50%' },
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  borderRadius: '20px',
                  boxShadow: '0px 8px 24px rgba(0,0,0,0.08)',
                  width: { xs: '100%', md: 500 },
                  height: 'auto',
                  opacity: 1,
                  backgroundColor: 'background.paper',
                  p: 3,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: { xs: 3, sm: 4 },
                  }}
                >
                  {/* Unidex Column */}
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant='h6'
                      sx={{
                        color: '#0099ff',
                        fontWeight: 'bold',
                        mb: 2,
                        fontSize: { xs: '1rem', md: '1.25rem' },
                      }}
                    >
                      Unidex
                    </Typography>
                    <List dense>
                      {['Aggregated liquidity', 'Trustless', 'Non-custodial'].map((text) => (
                        <ListItem key={text}>
                          <ListItemIcon>
                            <CheckIcon sx={{ color: '#b3b3b3' }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={text}
                            sx={{
                              color: '#b3b3b3',
                              '& .MuiListItemText-primary': {
                                fontSize: { xs: '0.875rem', md: '1rem' },
                              },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>

                  {/* Other Dex Column */}
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant='h6'
                      sx={{
                        fontWeight: 'bold',
                        mb: 2,
                        fontSize: { xs: '1rem', md: '1.25rem' },
                      }}
                    >
                      Other Dex
                    </Typography>
                    <List dense>
                      {[
                        { text: 'Fragmented liquidity', sx: { color: '#b3b3b3' } },
                        {
                          text: 'Requires deposits',
                          sx: {
                            color: '#b3b3b3',
                            '& .MuiListItemText-primary': {
                              fontSize: { xs: '0.875rem', md: '1rem' },
                            },
                          },
                        },
                        {
                          text: 'Custodial apps',
                          sx: {
                            color: '#b3b3b3',
                            '& .MuiListItemText-primary': {
                              fontSize: { xs: '0.875rem', md: '1rem' },
                            },
                          },
                        },
                      ].map(({ text, sx }) => (
                        <ListItem key={text}>
                          <ListItemIcon>
                            <CloseIcon sx={{ color: '#b3b3b3' }} />
                          </ListItemIcon>
                          <ListItemText primary={text} sx={sx} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Divider />
      {/* four section */}
      <Box
        sx={{
          backgroundImage: "url('assets/images/CrossChain/center wave.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: { xs: 'cover', md: '150vh' },
          alignItems: 'center',
          textAlign: 'center',
          py: { xs: 4, md: 8 },
          minHeight: { xs: '60vh', md: '90vh' },
        }}
      >
        {/* Section Title */}
        <Typography
          gutterBottom
          sx={{
            fontWeight: 700,
            fontSize: { xs: '24px', sm: '32px', md: '40px', lg: '48px' },
            lineHeight: { xs: 1.3, md: '45px' },
            mb: { xs: 2, md: 3 },
          }}
        >
          Available Supporting Chains
        </Typography>
        <Typography
          variant='body1'
          color='#b3b3b3'
          sx={{
            mb: { xs: 4, md: 6 },
            maxWidth: 600,
            mx: 'auto',
            fontSize: { xs: '0.875rem', md: '1rem' },
            px: { xs: 2, md: 0 },
          }}
        >
          Swap crypto without native tokens. Unidex handles the gas for swaps
          and approvals so you can focus on trading.
        </Typography>
        <Box
          component='img'
          src='assets/images/CrossChain/List.png'
          alt='list'
          sx={{
            width: { xs: '100%', md: '80%' },
            height: '100%',
            maxWidth: '100%',
            maxHeight: { xs: '80vh', md: '60vh' },
            objectFit: 'contain',
            px: { xs: 1, md: 0 },
          }}
        />
      </Box>
      <Divider />
    </Box>
  )
}
