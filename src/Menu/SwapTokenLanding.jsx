import React from 'react'
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
  useMediaQuery,
  Container,
  Paper,
} from '@mui/material'
import { styled } from '@mui/system'

import BoltIcon from '@mui/icons-material/Bolt'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'
import { useTheme } from '@mui/material/styles'

export default function SwapTokenLanding(isDarkMode) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const features = [
    {
      icon: 'assets/images/swapToken/tick.svg',
      text: (
        <>
          <span style={{ color: '#0ea5e9' }}>RFQ Private </span>Settlement
        </>
      ),
    },
    {
      icon: 'assets/images/swapToken/tick.svg',
      text: (
        <>
          <span style={{ color: '#0ea5e9' }}>No public mempool - </span>no MEV
          bots
        </>
      ),
    },
    {
      icon: 'assets/images/swapToken/tick.svg',
      text: (
        <>
          <span style={{ color: '#0ea5e9' }}>Enhanced protection with </span>
          Unidex Auto
        </>
      ),
    },
    {
      icon: 'assets/images/swapToken/tick.svg',
      text: (
        <>
          <span style={{ color: '#0ea5e9' }}>Alerts you to slippage</span> and
          potential price impact before you trade
        </>
      ),
    },
    {
      icon: 'assets/images/swapToken/tick.svg',
      text: (
        <>
          <span style={{ color: '#0ea5e9' }}>Optimized for smarter </span>
          trading with safety,transparency in every swap
        </>
      ),
    },
  ]
  const checklistItems = [
    {
      icon: 'assets/images/swapToken/tick.svg',
      text: (
        <>
          <span style={{ color: '#0ea5e9' }}>Scans multiple</span>sources to
          find the best possible trade rates
        </>
      ),
    },
    {
      icon: 'assets/images/swapToken/tick.svg',
      text: (
        <>
          <span style={{ color: '#0ea5e9' }}>Smart routing</span>ensures maximum
          value across liquidity pools bots
        </>
      ),
    },
    {
      icon: 'assets/images/swapToken/tick.svg',
      text: (
        <>
          <span style={{ color: '#0ea5e9' }}>
            Protects against front-running
          </span>
          and sandwich attacks Unidex Auto
        </>
      ),
    },
    {
      icon: 'assets/images/swapToken/tick.svg',
      text: (
        <>
          <span style={{ color: '#0ea5e9' }}>Alerts you to slippage</span> and
          potential price impact before you trade
        </>
      ),
    },
    {
      icon: 'assets/images/swapToken/tick.svg',
      text: (
        <>
          <span style={{ color: '#0ea5e9' }}>Optimized for smarter </span>
          trading with safety,transparency in every swap
        </>
      ),
    },
  ]

  const swap = [
    {
      icon: 'assets/images/swapToken/tick.svg',
      text: (
        <>
          <span style={{ color: '#0ea5e9' }}>
            Unidex Source the market for the best prices
          </span>
        </>
      ),
    },
    {
      icon: 'assets/images/swapToken/tick.svg',
      text: (
        <>
          <span style={{ color: '#0ea5e9' }}>No public mempool - </span>no MEV
          bots
        </>
      ),
    },
    {
      icon: 'assets/images/swapToken/tick.svg',
      text: (
        <>
          <span style={{ color: '#0ea5e9' }}>
            Enhanced protection with Unidex Auto
          </span>
        </>
      ),
    },
    {
      icon: 'assets/images/swapToken/tick.svg',
      text: (
        <>
          <span style={{ color: '#0ea5e9' }}>Alerts you to slippage</span> and
          potential price impact before you trade
        </>
      ),
    },
    {
      icon: 'assets/images/swapToken/tick.svg',
      text: (
        <>
          <span style={{ color: '#0ea5e9' }}>Optimized for smarter </span>
          trading with safety,transparency in every swap
        </>
      ),
    },
  ]
  const CurrencyCard = styled(Paper)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    border: `1px solid ${theme.palette.divider}`,
    flexGrow: 1,
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 200,
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(0.5),
      padding: theme.spacing(1.5),
      minWidth: 100,
    },
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0.25),
      padding: theme.spacing(1),
      minWidth: 80,
      maxWidth: 150,
    },
  }))

  const UsdcIconPlaceholder = () => (
    <Box
      sx={{
        width: { xs: 32, sm: 40, md: 48 },
        height: { xs: 32, sm: 40, md: 48 },
        borderRadius: '50%',
        backgroundColor: '#0070DE',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: { xs: 16, sm: 20, md: 24 },
        fontWeight: 'bold',
        mb: 1,
      }}
    >
      $
    </Box>
  )

  const EthIconPlaceholder = () => (
    <Box
      sx={{
        width: { xs: 32, sm: 40, md: 48 },
        height: { xs: 32, sm: 40, md: 48 },
        borderRadius: '50%',
        backgroundColor: '#627EEA',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: { xs: 16, sm: 20, md: 24 },
        fontWeight: 'bold',
        mb: 1,
      }}
    >
      Ξ
    </Box>
  )
  return (
    <Box
      sx={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Hero Section  */}
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
            minHeight: '100vh',
            overflow: 'hidden',
            padding: { xs: '20px', md: '0' },
            boxSizing: 'border-box',
            // backgroundImage: {
            //   xs: 'url("assets/images/swapToken/gradient.png")',
            //   md: 'url("assets/images/swapToken/gradient.png")',
            // },
            // backgroundPosition: 'center',
            // backgroundRepeat: 'no-repeat',
            // backgroundSize: 'cover',
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
            src='assets/images/swapToken/swapback.svg'
            alt='hero background decor'
            sx={{
              position: 'absolute',
              left: '50%',
              top: { xs: '50%', md: '20%' },
              transform: {
                xs: 'translate(-50%, -50%)',
                md: 'translateX(-50%)',
              },
              width: { xs: '100%', sm: '800px', md: '950px' },
              maxWidth: '950px',
              height: { xs: '50vh', md: '60vh' },
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
              Browse. Swap. Confirm.
            </Typography>

            <Typography
              sx={{
                color: 'text.primary',
                fontWeight: 700,
                fontSize: { xs: '32px', sm: '48px', md: '62px' },
                lineHeight: { xs: 1.2, md: 1.1 },
                textAlign: 'center',
              }}
            >
              Swap Tokens{' '}
            </Typography>

            <Typography
              sx={{
                color: 'text.primary',
                fontWeight: 700,
                fontSize: { xs: '14px', sm: '16px', md: '18px' },
                lineHeight: { xs: '20px', md: '24px' },
                textAlign: 'center',
                paddingX: { xs: '20px', md: '0' },
              }}
            >
              Zero fee trades on 9+ million tokens across 14 chains. Get the
              best prices by tapping into 130+ liquidity sources
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

      {/* new trade section */}
      <Box
        sx={{
          fontFamily: "'Manrope', sans-serif",
          color: 'text.primary',
          paddingX: { xs: '20px', md: '40px', lg: '120px' },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' },
          justifyContent: 'center',
          gap: { xs: '40px', lg: '80px' },
          paddingTop: '100px',
        }}
      >
        {/* Left Section: Heading and Checklist */}
        <Box
          sx={{
            flex: { md: 1 },
            maxWidth: { md: '50%' },
            textAlign: { xs: 'center', md: 'center' },
            marginBottom: { xs: '20px', md: '80px' },
          }}
        >
          <Typography
            variant={isMobile ? 'h4' : 'h3'}
            sx={{
              fontWeight: 700,
              mb: { xs: 2, md: 3 },
              lineHeight: { xs: 1.3, md: '45px' },
              color: 'text.primary',
              fontSize: { xs: '24px', sm: '32px', md: '40px', lg: '48px' },
              textAlign: 'left',
            }}
          >
            Get unbeatable trade prices on Unidex.
          </Typography>

          <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {checklistItems.map((item, idx) => (
              <ListItem
                key={idx}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 2,
                  p: 0,
                }}
              >
                <ListItemIcon sx={{ minWidth: 'unset' }}>
                  <Box
                    component='img'
                    src={item.icon}
                    alt='Checkmark icon'
                    sx={{ width: 24, height: 24, mt: '2px' }}
                  />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: 700,
                    lineHeight: '24px',
                    color: 'text.primary',
                  }}
                  primary={item.text}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Right Section: Swap Card */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: { xs: '16px', sm: '20px', md: '24px' },
            maxWidth: { xs: '100%', sm: '500px' },
            width: { xs: '100%', sm: 'auto', md: 'auto', lg: 'auto' },
            margin: { xs: 'auto', md: 'auto' },
            fontFamily: 'Inter, sans-serif',
            color: (theme) => (theme.palette.mode === 'dark' ? '#fff' : '#333'),
            borderRadius: 2,
            bgcolor: (theme) =>
              theme.palette.mode === 'dark' ? '#10254A' : 'transparent',
          }}
        >
          <Typography
            variant='body2'
            sx={{
              color: (theme) =>
                theme.palette.mode === 'dark' ? '#0EA5E9' : '#1976d2',
              mb: 4,
              fontWeight: 'bold',
            }}
          >
            Quote Expired in 20s
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row', md: 'row' },
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              mb: { xs: 3, md: 4 },
              gap: { xs: '16px', sm: '20px', md: '24px' },
              position: 'relative',
            }}
          >
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
                src='/assets/images/swapToken/usd.svg'
                alt=''
                style={{
                  marginBottom: '8px',
                  display: 'block',
                  margin: '0 auto 8px auto',
                }}
              />
              <Typography sx={{ color: '#000', fontWeight: 'bold' }}>
                253.63 USDC
              </Typography>
              <Typography
                sx={{
                  color: '#000',
                  opacity: 0.4,
                  fontSize: '14px',
                }}
              >
                $ 253.44
              </Typography>
            </Box>
            <Box
              sx={{
                bgcolor: '#fff',
                height: { xs: '90px', md: '100px' },
                width: { xs: '90px', md: '100px' },
                borderRadius: '100%',
                position: 'absolute',
                top: { md: '50%' },
                left: { md: '50%' },
                transform: { md: 'translate(-50%, -50%)' },
                border: (theme) =>
                  `${theme.breakpoints.down('md') ? '10px' : '10px'} solid ${
                    theme.palette.mode === 'dark' ? '#10254A' : '#F0F8FF'
                  }`,
                alignSelf: { xs: 'center' },
                my: { xs: 0, md: 0 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: { xs: '20px', md: '24px' },
              }}
            />
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
                src='/assets/images/swapToken/eth.svg'
                alt=''
                style={{
                  marginBottom: '8px',
                  display: 'block',
                  margin: '0 auto 8px auto',
                }}
              />
              <Typography sx={{ color: '#000', fontWeight: 'bold' }}>
                253.63 USDC
              </Typography>
              <Typography
                sx={{
                  color: '#000',
                  opacity: 0.4,
                  fontSize: '14px',
                }}
              >
                $ 253.44
              </Typography>
            </Box>
          </Box>

          <Box
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
          </Box>
        </Box>
      </Box>

      <Divider />

      {/* MEV Protection */}
      <Box
        id='mev-protection'
        sx={{
          position: 'relative',
          overflow: 'hidden',
          py: { xs: 6, md: 10 },
        }}
      >
        {/* Background Shapes (hidden on tablet/mobile) */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            pointerEvents: 'none',
            display: { xs: 'none', lg: 'block' },
          }}
        >
          {['46', '48', '12', '13'].map((id, idx) => (
            <Box
              key={idx}
              component='img'
              src={`/page/d217867e-d6a5-4b6d-a6f4-5b0d4b6cb0aa/images/137_${id}.svg`}
              alt='decorative background shape'
              sx={{
                position: 'absolute',
                borderRadius: '50%',
                border: '1px solid rgba(4, 138, 205, 0.2)',
                top: '-116px',
                width: 801,
                height: 801,
                left: `${778 + idx * 120}px`,
              }}
            />
          ))}
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'center', md: 'flex-start' },
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', md: 'row' },
            textAlign: { xs: 'center', md: 'left' },
            position: 'relative',
            zIndex: 2,
            paddingX: { xs: '20px', sm: '40px', md: '80px', lg: '120px' },
            gap: { xs: '40px', sm: '50px', md: '60px', lg: '80px' },
          }}
        >
          {/* Text Content */}
          <Box
            sx={{
              flex: { md: '0 0 530px' },
              order: { xs: 2, md: 1 },
              width: { xs: '100%', md: 'auto' },
              maxWidth: { xs: '100%', md: '530px' },
            }}
          >
            <Typography
              variant={isMobile ? 'h4' : 'h3'}
              sx={{
                fontWeight: 700,
                mb: { xs: 3, sm: 4, md: 6, lg: 9 },
                lineHeight: { xs: 1.3, md: '45px' },
                color: 'text.primary',
                fontSize: { xs: '24px', sm: '32px', md: '40px', lg: '48px' },
              }}
            >
              MEV Protection
            </Typography>

            <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {features.map((item, idx) => (
                <ListItem
                  key={idx}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 2,
                    p: 0,
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 'unset' }}>
                    <Box
                      component='img'
                      src={item.icon}
                      alt='Checkmark icon'
                      sx={{ width: 24, height: 24, mt: '2px' }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: 700,
                      lineHeight: '24px',
                      color: 'text.primary',
                    }}
                    primary={item.text}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Image Content */}
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-end' },
              order: { xs: 1, md: 2 },
            }}
          >
            <Box
              component='img'
              src='assets/images/swapToken/protection.png'
              alt='MEV Protection Shield'
              sx={{
                width: '50%',
                height: '50%',
              }}
            />
          </Box>
        </Box>
      </Box>
      <Divider />

      {/* Smart Routing */}
      <Box
        sx={{
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingX: { xs: '20px', md: '120px' },
          py: 6,
          flexDirection: { xs: 'column', md: 'row' },
          textAlign: { xs: 'center', md: 'left' },
          gap: { xs: '40px', md: '80px' },
        }}
      >
        {/* Right Side Image */}
        <Box
          component='img'
          src='assets/images/swapToken/Rectangle.svg'
          alt='mobile'
          sx={{
            width: { xs: '250px', md: '400px' },
            height: 'auto',
            // order: { xs: 1, md: 2 },
          }}
        />
        {/* Left Side Content */}
        <Box sx={{ maxWidth: 600, order: { xs: 2, md: 1 } }}>
          <Typography
            variant='h3'
            sx={{
              fontWeight: 700,
              mb: { xs: 3, sm: 4, md: 6, lg: 9 },
              textAlign: { xs: 'center', md: 'initial' },
              fontSize: { xs: '24px', sm: '32px', md: '40px', lg: '48px' },
              lineHeight: { xs: 1.3, md: '45px' },
              color: 'text.primary',
            }}
          >
            Smart Routing
          </Typography>
          <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {swap.map((item, idx) => (
              <ListItem
                key={idx}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 2,
                  p: 0,
                }}
              >
                <ListItemIcon sx={{ minWidth: 'unset' }}>
                  <Box
                    component='img'
                    src={item.icon}
                    alt='Checkmark icon'
                    sx={{ width: 24, height: 24, mt: '2px' }}
                  />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: 700,
                    lineHeight: '24px',
                    color: 'text.primary',
                  }}
                  primary={item.text}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>

      <Divider />
      {/* last section */}
      <Box
        id='hero'
        sx={{
          position: 'relative',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          padding: { xs: '20px', md: '0' },
          boxSizing: 'border-box',
          // backgroundImage: {
          //   xs: 'url("assets/images/swapToken/gradient.png")',
          //   md: 'url("assets/images/swapToken/gradient.png")',
          // },
          // backgroundPosition: 'center',
          // backgroundRepeat: 'no-repeat',
          // backgroundSize: 'cover',
          // backgroundWidth: '100%',

          minHeight: { xs: '90vh' },
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
          src='assets/images/swapToken/string.svg'
          alt='hero background decor'
          sx={{
            position: 'absolute',
            left: '50%',
            top: { sm: '65%', md: '-15%', lg: '-30%', xl: '-35%' },
            transform: { xs: 'translate(-50%, -50%)', md: 'translateX(-50%)' },
            width: '100%',
            zIndex: 0,
            display: { xs: 'none', sm: 'block' },
          }}
        />
        {/* Title Section */}
        <Typography
          variant='h5'
          sx={{
            color: '#2196f3',
            fontWeight: 700,
            mb: 1,
            textAlign: 'center',
          }}
        >
          New Trade Mode :
        </Typography>
        <Typography
          variant='h2'
          sx={{
            fontWeight: 700,
            mb: { xs: 3, sm: 4, md: 6, lg: 9 },
            color: 'text.primary',
            textAlign: 'center',
            fontSize: { xs: '24px', sm: '32px', md: '40px', lg: '48px' },
            lineHeight: { xs: 1.3, md: '45px' },
          }}
        >
          Swap Tokens
        </Typography>
        <Typography
          variant='subtitle1'
          sx={{
            color: 'text.primary',
            fontWeight: 500,
            mb: { xs: 0, md: 6 },
            textAlign: 'center',
            opacity: 0.75,
          }}
        >
          Great Prices, with more speed and less worry
        </Typography>

        {/* Feature Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: { xs: 2, sm: 10, md: 25 },
            mt: { xs: 8, md: 16 },
          }}
        >
          {/* 1. Faster Trade Confirmation */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: 1,
              flex: { md: 1 },
            }}
          >
            <Box
              sx={{
                width: 140,
                height: 140,
                borderRadius: '50%',
                backgroundImage:
                  "url('assets/images/swapToken/circle inner.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 2,
              }}
            >
              <img src='assets/images/swapToken/center fire.png' alt='' />
            </Box>
            <Typography
              sx={{
                textAlign: 'center',
                fontWeight: 500,
                fontSize: { xs: 16, lg: 20 },
                color: 'text.primary',
                width: { md: '200px', lg: '280px' },
              }}
            >
              Faster trade Confirmation
            </Typography>
          </Box>

          {/* 2. Reduce Failed Rate */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: 1,
              flex: { md: 1 },
            }}
          >
            <Box
              sx={{
                width: 140,
                height: 140,
                borderRadius: '50%',
                backgroundImage:
                  "url('assets/images/swapToken/circle inner.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 2,
                zIndex: 1,
              }}
            >
              <img src='assets/images/swapToken/Traffic Economy.png' alt='' />
            </Box>
            <Typography
              sx={{
                textAlign: 'center',
                fontWeight: 500,
                fontSize: { xs: 16, lg: 20 },
                color: 'text.primary',
                width: { md: '200px', lg: '280px' },
              }}
            >
              Reduce failed rate by 75%
            </Typography>
          </Box>

          {/* 3. Matches Handles Gases */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: 1,
              flex: { md: 1 },
            }}
          >
            <Box
              sx={{
                width: 140,
                height: 140,
                borderRadius: '50%',
                backgroundImage:
                  "url('assets/images/swapToken/circle inner.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 2,
              }}
            >
              <img src='assets/images/swapToken/Fire Minimalistic.png' alt='' />
            </Box>
            <Typography
              sx={{
                textAlign: 'center',
                fontWeight: 500,
                fontSize: { xs: 16, lg: 20 },
                color: 'text.primary',
                width: { md: '200px', lg: '280px' },
              }}
            >
              Matches handles Gases
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider />
    </Box>
  )
}
