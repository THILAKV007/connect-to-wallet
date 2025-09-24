import React from 'react'
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  Divider,
  TextField,
  InputAdornment,
  Tabs,
  Stack,
  Container,
  useMediaQuery,
  Avatar,
  CardContent,
  Tab,
  MenuItem,
  Select,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material'

function LimitOrderSection({ isDarkMode }) {
  const features = [
    {
      text: 'Master volatility and get the price you want',
      icon: 'assets/images/LimitorderSection/tick.svg',
    },
    {
      text: 'Set custom expiry time up to 28 days',
      icon: 'assets/images/LimitorderSection/tick.svg',
    },
    {
      text: 'Bypass MEV attacks',
      icon: 'assets/images/LimitorderSection/tick.svg',
    },
    {
      text: 'Limit Orders have no slippage',
      icon: 'assets/images/LimitorderSection/tick.svg',
    },
    {
      text: 'Trade low-cap, illiquid tokens with confidence',
      icon: 'assets/images/LimitorderSection/tick.svg',
    },
  ]

  const orders = [
    {
      sellIcon: 'assets/images/LimitorderSection/danger.svg',
      sell: '14 EQrd',
      buyIcon: 'assets/images/LimitorderSection/danger.svg',
      buy: '200 ETH',
      expiry: '12 hours 3mins',
    },
    {
      sellIcon: 'assets/images/LimitorderSection/danger.svg',
      sell: '14 EQrd',
      buyIcon: 'assets/images/LimitorderSection/danger.svg',
      buy: '200 ETH',
      expiry: '12 hours 3mins',
    },
    {
      sellIcon: 'assets/images/LimitorderSection/danger.svg',
      sell: '14 EQrd',
      buyIcon: 'assets/images/LimitorderSection/danger.svg',
      buy: '200 ETH',
      expiry: '12 hours 3mins',
    },
    {
      sellIcon: 'assets/images/LimitorderSection/danger.svg',
      sell: '14 EQrd',
      buyIcon: 'assets/images/LimitorderSection/danger.svg',
      buy: '200 ETH',
      expiry: '12 hours 3mins',
    },
    {
      sellIcon: 'assets/images/LimitorderSection/danger.svg',
      sell: '14 EQrd',
      buyIcon: 'assets/images/LimitorderSection/danger.svg',
      buy: '200 ETH',
      expiry: '12 hours 3mins',
    },
    {
      sellIcon: 'assets/images/LimitorderSection/danger.svg',
      sell: '14 EQrd',
      buyIcon: 'assets/images/LimitorderSection/danger.svg',
      buy: '200 ETH',
      expiry: '12 hours 3mins',
    },
  ]

  const [tab, setTab] = React.useState(1)

  const isTablet = useMediaQuery('(max-width:1024px)')
  const isMobile = useMediaQuery('(max-width:768px)')

  const [selected, setSelected] = React.useState('market')
  const [expiry, setExpiry] = React.useState('1h')

  const handleChange = (event, newValue) => {
    if (newValue !== null) {
      setSelected(newValue)
    }
  }

  return (
    <Box>
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
            minHeight: { xs: '95vh' },
            overflow: 'hidden',
            padding: { xs: '20px', md: '0' },
            boxSizing: 'border-box',
            // Use conditional background image for all screens
            backgroundImage: {
              xs: 'url("assets/images/swapToken/gradient.png")', // Shows the image on mobile
              md: 'url("assets/images/swapToken/gradient.png")',
            },
            // Set background position to center for all screens
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          {/* Background Decoration */}
          <Box
            component='img'
            src='assets/images/LimitorderSection/limitback.png'
            alt='hero background decor'
            sx={{
              position: 'absolute',
              left: '0',
              bottom: '-150px',
              transform: {
                xs: 'rotate(0deg)',
                md: 'rotate(0deg)',
              },
              width: '115%',
              height: '100%',
              opacity: 1,
              zIndex: 0,
              objectFit: 'cover',
              objectPosition: 'left bottom',
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
              Master volatile markets
            </Typography>

            <Typography
              sx={{
                color: 'text.primary',
                fontWeight: 700,
                fontSize: { xs: '36px', md: '62px' },
                lineHeight: { xs: 1.2, md: 1.1 },
              }}
            >
              Limit sources
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
              Deep liquidity for the best prices on 9+ million tokens
              across 14 chains. Tap into 130+
              <br /> liquidity sources aggregated by Matcha!
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
      {/* second section */}
      <Box
        component='section'
        sx={{
          py: isMobile ? 6 : 10,
          px: 2,
          position: 'relative',
          overflow: 'hidden',
          minHeight: 595,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            maxWidth: 1440,
            width: '100%',
            mx: 'auto',
            display: 'flex',
            flexDirection: isTablet ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: isTablet ? 20 : 14,
            textAlign: isTablet ? 'center' : 'left',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Chart Card */}
          <Card
            sx={{
              width: isMobile ? '100%' : 504,
              height: isMobile ? 'auto' : 390,
              borderRadius: 2,
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              bgcolor: '#feffff',
              margin: '10px',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar
                src='assets/images/LimitorderSection/danger.svg'
                alt='Bedrock logo'
                sx={{ width: 73, height: 73 }}
              />
              <Box>
                <Typography
                  variant='h5'
                  sx={{
                    fontFamily: 'Manrope',
                    fontWeight: 700,
                    color: 'black',
                  }}
                >
                  Bedrock
                </Typography>
                <Typography
                  variant='body2'
                  sx={{ color: '#595959', fontWeight: 700, mt: -1 }}
                >
                  Be
                </Typography>
              </Box>
            </Box>

            <CardContent sx={{ mt: 2 }}>
              <Typography
                sx={{
                  fontFamily: 'Manrope',
                  fontSize: 24,
                  fontWeight: 400,
                  color: 'black',
                }}
              >
                $9209.00
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, mt: 0.5 }}>
                <Typography sx={{ fontSize: 12, color: '#097d27' }}>
                  8.0%
                </Typography>
                <Typography sx={{ fontSize: 12, color: '#6b6b6b' }}>
                  Last 24 Hours
                </Typography>
              </Box>

              {/* Chart area */}
              <Box
                sx={{ mt: isMobile ? 2 : 5, position: 'relative', height: 124 }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    width: 365,
                    height: 13,
                    bgcolor: '#00a92b',
                    filter: 'blur(100px)',
                    top: 15,
                    left: isMobile ? '50%' : 104,
                    transform: isMobile ? 'translateX(-50%)' : 'none',
                  }}
                />
                <Box
                  component='img'
                  src='assets/images/LimitorderSection/graph.png'
                  alt='Price chart'
                  sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </Box>

              {/* Time Labels */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: isMobile ? 'center' : 'space-between',
                  flexWrap: isMobile ? 'wrap' : 'nowrap',
                  gap: isMobile ? 2 : 0,
                  mt: 2,
                }}
              >
                {[
                  '2 PM',
                  '4 PM',
                  '7 PM',
                  '10 PM',
                  'JUN 18',
                  '3 AM',
                  '6 AM',
                ].map((label, i) => (
                  <Typography
                    key={i}
                    sx={{
                      fontSize: 12,
                      color: '#6b6b6b',
                      fontFamily: 'Manrope',
                    }}
                  >
                    {label}
                  </Typography>
                ))}
              </Box>
            </CardContent>
          </Card>

          {/* Content Column */}
          <Box
            sx={{
              maxWidth: 444,
              display: 'flex',
              flexDirection: 'column',
              alignItems: isTablet ? 'center' : 'flex-start',
            }}
          >
            <Typography
              variant={isMobile ? 'h4' : 'h3'}
              sx={{ fontFamily: 'Manrope', fontWeight: 700, fontSize: '50px' }}
            >
              Set price, time,
              <br /> and sit tight
            </Typography>

            <Typography
              sx={{
                fontFamily: 'Inter',
                fontSize: 16,
                lineHeight: '25px',
                color: '#B3B3B3',
                mt: 3,
                maxWidth: 334,
                textAlign: isTablet ? 'center' : 'left',
                fontWeight: 400,
              }}
            >
              Place a limit order to buy or sell crypto at an
              <br /> exact price within a chosen period.
            </Typography>
          </Box>
        </Box>

        {/* Background decoration */}
        <Box
          component='img'
          src='assets/images/LimitorderSection/spiral.png'
          alt='Decorative background'
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: 250,
            height: 250,
            '@media (max-width: 600px)': {
              backgroundImage: 'none',
            },

            zIndex: 0,
          }}
        />
      </Box>
      <Divider />
      {/* third section */}

      <Box
        id='limit-orders'
        sx={{
          py: { xs: 6, md: 10 },
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
            width: 250,
            height: 250,
            '@media (max-width: 600px)': {
              backgroundImage: 'none',
            },

            zIndex: 0,
          }}
        />
        <Box maxWidth='1200px' mx='auto' px={2}>
          {/* Title */}
          <Typography
            variant='h4'
            align='center'
            fontWeight={700}
            sx={{
              mb: { xs: 6, md: 10 },
              fontSize: { xs: '28px', md: '33.33px' },
              lineHeight: '38px',
            }}
          >
            Why place Limit Orders?
          </Typography>

          {/* Content */}
          <Grid
            container
            spacing={{ xs: 6, md: 40 }}
            justifyContent='center'
            alignItems='flex-start'
          >
            {/* Features List */}
            <Grid item xs={12} md={6}>
              <Stack spacing={6}>
                {features.map((f, i) => (
                  <Stack
                    direction='row'
                    spacing={2}
                    alignItems='center'
                    key={i}
                  >
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        background:
                          'linear-gradient(308deg, #02a863 0%, rgba(2, 168, 99, 0.49) 140.51%)',
                        boxShadow:
                          'inset 0px -1px 0px rgba(0,0,0,0.16), 0px 1px 3px rgba(0,0,0,0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Avatar
                        src={f.icon}
                        alt='icon'
                        sx={{ width: 16, height: 16, bgcolor: 'transparent' }}
                        variant='square'
                      />
                    </Box>
                    <Typography
                      variant='body1'
                      sx={{ fontWeight: 500, fontSize: 18, lineHeight: '25px' }}
                    >
                      {f.text}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>

            {/* Orders Card */}
            <Grid sx={{ zIndex: 1 }} item xs={12} md={6}>
              <Card
                sx={{
                  bgcolor: 'default2',
                  borderRadius: 2,
                  p: { xs: 2, md: 3 },
                }}
              >
                {/* Tabs */}
                <Stack direction='row' spacing={3} mb={2}>
                  <Button
                    variant='body1'
                    fontWeight={700}
                    sx={{ color: '#B3B3B3' }}
                  >
                    Order history
                  </Button>
                  <Button
                    variant='body1'
                    fontWeight={700}
                    sx={{ color: 'text.primary' }}
                  >
                    Open Orders
                  </Button>
                </Stack>

                {/* Table */}
                <Box sx={{ overflowX: 'auto', width: '100%' }}>
                  <Stack
                    spacing={2}
                    sx={{ minWidth: { xs: '300px', md: 'auto' } }}
                  >
                    {/* Header */}
                    <Box
                      sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                          xs: '80px 1fr 100px',
                          sm: '100px 1fr 120px',
                          md: '1fr 1.5fr 1.5fr',
                        },
                        gap: { xs: 0.5, sm: 1, md: 2 },
                        px: 1,
                      }}
                    >
                      <Typography
                        variant='caption'
                        fontWeight={700}
                        sx={{ fontSize: { xs: '10px', sm: '12px' } }}
                      >
                        Sell
                      </Typography>
                      <Typography
                        variant='caption'
                        fontWeight={700}
                        sx={{
                          pl: { xs: 0, md: 1 },
                          fontSize: { xs: '10px', sm: '12px' },
                        }}
                      >
                        Buy
                      </Typography>
                      <Typography
                        variant='caption'
                        fontWeight={700}
                        sx={{ fontSize: { xs: '10px', sm: '12px' } }}
                      >
                        {isMobile ? 'Expiry' : 'Expiration Date'}
                      </Typography>
                    </Box>

                    {/* Rows */}
                    {orders.map((o, i) => (
                      <Box
                        key={i}
                        sx={{
                          display: 'grid',
                          gridTemplateColumns: {
                            xs: '80px 1fr 100px',
                            sm: '100px 1fr 120px',
                            md: '1fr 1.5fr 1.5fr',
                          },
                          gap: { xs: 0.5, sm: 1, md: 2 },
                          alignItems: 'center',
                          px: 1,
                        }}
                      >
                        <Stack
                          direction={isMobile ? 'column' : 'row'}
                          spacing={isMobile ? 0.5 : 1}
                          alignItems={isMobile ? 'flex-start' : 'center'}
                        >
                          <Avatar
                            src={o.sellIcon}
                            sx={{
                              width: { xs: 16, md: 24 },
                              height: { xs: 16, md: 24 },
                            }}
                          />
                          <Typography
                            variant='caption'
                            color='#B3B3B3'
                            sx={{ fontSize: { xs: '10px', sm: '12px' } }}
                          >
                            {isMobile ? o.sell.split(' ')[0] : o.sell}
                          </Typography>
                        </Stack>
                        <Stack
                          direction={isMobile ? 'column' : 'row'}
                          spacing={isMobile ? 0.5 : 1}
                          alignItems={isMobile ? 'flex-start' : 'center'}
                        >
                          <Avatar
                            src={o.buyIcon}
                            sx={{
                              width: { xs: 16, md: 24 },
                              height: { xs: 16, md: 24 },
                            }}
                          />
                          <Typography
                            variant='caption'
                            color='#B3B3B3'
                            sx={{ fontSize: { xs: '10px', sm: '12px' } }}
                          >
                            {isMobile ? o.buy.split(' ')[0] : o.buy}
                          </Typography>
                        </Stack>
                        <Typography
                          variant='caption'
                          color='#B3B3B3'
                          sx={{
                            fontSize: { xs: '9px', sm: '11px', md: '12px' },
                            lineHeight: 1.2,
                          }}
                        >
                          {isMobile ? o.expiry.replace(' ', '\n') : o.expiry}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Divider />
      {/* foursection */}
      <Box sx={{ py: 8, textAlign: 'center' }}>
        {/* Title */}
        <Typography variant='h4' fontWeight='bold' sx={{ mb: 1 }}>
          How to setup limit orders
        </Typography>
        <Typography variant='body1' sx={{ mb: 4, color: '#B3B3B3' }}>
          Available on 3 chains:
        </Typography>

        {/* Chain Logos */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 2, sm: 3 }}
          justifyContent='center'
          alignItems='center'
          flexWrap='wrap'
          sx={{ mb: 6 }}
        >
          <Stack direction='row' alignItems='center' spacing={1}>
            <Avatar
              src='assets/images/LimitorderSection/eth.png'
              sx={{ width: { xs: 24, md: 28 }, height: { xs: 24, md: 28 } }}
            />
            <Typography
              sx={{
                color: '#B3B3B3',
                fontSize: { xs: '14px', md: '16px' },
              }}
            >
              Ethereum
            </Typography>
          </Stack>
          <Stack direction='row' alignItems='center' spacing={1}>
            <Avatar
              src='assets/images/LimitorderSection/danger.png'
              sx={{ width: { xs: 24, md: 28 }, height: { xs: 24, md: 28 } }}
            />
            <Typography
              sx={{
                color: '#B3B3B3',
                fontSize: { xs: '14px', md: '16px' },
              }}
            >
              Polygon
            </Typography>
          </Stack>
          <Stack direction='row' alignItems='center' spacing={1}>
            <Avatar
              src='assets/images/LimitorderSection/bsc.png'
              sx={{ width: { xs: 24, md: 28 }, height: { xs: 24, md: 28 } }}
            />
            <Typography
              sx={{
                color: '#B3B3B3',
                fontSize: { xs: '14px', md: '16px' },
              }}
            >
              BSC
            </Typography>
          </Stack>
        </Stack>

        {/* Card with Tabs */}
        <Grid container justifyContent='center'>
          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: 3 }}>
              <Tabs
                value={tab}
                onChange={(e, newValue) => setTab(newValue)}
                textColor='inherit'
                indicatorColor='secondary'
                variant='fullWidth'
                sx={{
                  '& .MuiTab-root': {},
                  '& .Mui-selected': {},
                }}
              >
                <Tab label='Market' />
                <Tab label='Limit' />
                <Tab label='Crosschain' />
              </Tabs>

              <CardContent>
                {/* Sell Box */}
                <Box
                  sx={{
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    p: 2,
                    mb: 2,
                    textAlign: 'left',
                    color: 'text.primary',
                  }}
                >
                  <Typography variant='body2' sx={{ mb: 1 }}>
                    Sell
                  </Typography>
                  <TextField
                    fullWidth
                    variant='standard'
                    placeholder='0'
                    InputProps={{
                      disableUnderline: true,
                      startAdornment: (
                        <InputAdornment position='end'>
                          <Typography>Balance: 0.00</Typography>
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position='end'>
                          <Button size='small'>ETH ▼</Button>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                {/* Buy Box */}
                <Box
                  sx={{
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    p: 2,
                    textAlign: 'left',
                    color: 'text.primary',
                  }}
                >
                  <Typography variant='body2' sx={{ mb: 1 }}>
                    Buy
                  </Typography>
                  <TextField
                    fullWidth
                    variant='standard'
                    placeholder='0'
                    InputProps={{
                      disableUnderline: true,
                      startAdornment: (
                        <InputAdornment position='end'>
                          <Typography color='text.secondary'>
                            Balance: 0.00
                          </Typography>
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position='end'>
                          <Button size='small'>ETH ▼</Button>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      {/* Fifth section */}
      <Box
        component='section'
        id='limit-orders'
        sx={{
          py: { xs: 5, md: 8 },
          px: { xs: 2, md: 4 },
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          className='container'
          sx={{
            maxWidth: '1440px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/* Title */}
          <Typography variant='h4' fontWeight='bold' sx={{ mb: 1 }}>
            How to setup limit orders
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 400,
              fontSize: { xs: '16px', md: '17px' },
              lineHeight: '25px',
              color: '#B3B3B3',
              mb: 4,
            }}
          >
            Available on 3 chains:
          </Typography>

          {/* Chain list */}
          <Stack
            direction='row'
            spacing={isMobile ? 2.5 : 3.5}
            flexWrap='wrap'
            justifyContent='center'
            alignItems='center'
            sx={{ mb: 5 }}
          >
            {[
              {
                src: 'assets/images/LimitorderSection/eth.png',
                alt: 'Ethereum icon',
                name: 'Ethereum',
              },
              {
                src: 'assets/images/LimitorderSection/ploygon.png',
                alt: 'Polygon icon',
                name: 'Polygon',
              },
              {
                src: 'assets/images/LimitorderSection/bsc.png',
                alt: 'BSC icon',
                name: 'BSC',
              },
            ].map((chain) => (
              <Stack
                key={chain.name}
                direction='row'
                alignItems='center'
                spacing={1}
              >
                <Box
                  component='img'
                  src={chain.src}
                  alt={chain.alt}
                  sx={{ width: 20, height: 20 }}
                />
                <Typography
                  sx={{
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '25px',
                    color: '#B3B3B3',
                  }}
                >
                  {chain.name}
                </Typography>
              </Stack>
            ))}
          </Stack>
          <Box
            sx={{
              border: 2,
              p: 3,
              borderRadius: 2,
              maxWidth: 320,
            }}
          >
            {/* Title */}
            <Typography
              variant='body2'
              color='text.secondary'
              gutterBottom
              sx={{ fontWeight: 500 }}
            >
              Slippage Tolerance
            </Typography>

            {/* Limit Price */}
            <Typography variant='body2' sx={{ fontWeight: 600 }}>
              Limit Price
            </Typography>
            <Typography variant='body2' gutterBottom>
              0.00
            </Typography>

            {/* Toggle Buttons */}
            <ToggleButtonGroup
              value={selected}
              exclusive
              onChange={handleChange}
              sx={{ mb: 2 }}
            >
              <ToggleButton value='market'>Market</ToggleButton>
              <ToggleButton value='1'>1 % ↑</ToggleButton>
              <ToggleButton value='2'>2 % ↑</ToggleButton>
              <ToggleButton value='5'>5 % ↑</ToggleButton>
              <ToggleButton value='10'>10 % ↑</ToggleButton>
            </ToggleButtonGroup>

            {/* Expiry */}
            <Typography variant='body2' sx={{ fontWeight: 600 }}>
              Expiry
            </Typography>
            <Select
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              size='small'
              sx={{
                mt: 1,
                mb: 2,
                borderRadius: 1,
                minWidth: 120,
              }}
            >
              <MenuItem value='1h'>1 Hour</MenuItem>
              <MenuItem value='6h'>6 Hours</MenuItem>
              <MenuItem value='12h'>12 Hours</MenuItem>
              <MenuItem value='24h'>24 Hours</MenuItem>
            </Select>

            {/* Wallet Button */}
            <Button
              variant='contained'
              fullWidth
              sx={{
                mt: 2,
                bgcolor: 'linear-gradient(to right, #00aaff, #0072ff)',
                textTransform: 'none',
                fontWeight: 600,
                borderRadius: 1.5,
                py: 1.2,
              }}
            >
              Connect Ethereum Wallet
            </Button>
          </Box>
        </Box>
      </Box>

      <Divider />
      {/* sixth section */}
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Title */}
        <Typography variant='h4' fontWeight='bold' sx={{ mb: 1 }}>
          How to setup limit orders
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            fontFamily: 'Manrope, sans-serif',
            fontWeight: 400,
            fontSize: { xs: '16px', md: '17px' },
            lineHeight: '25px',
            color: '#B3B3B3',
          }}
        >
          Available on 3 chains:
        </Typography>

        {/* Chain list */}
        <Stack
          direction='row'
          flexWrap='wrap'
          justifyContent='center'
          alignItems='center'
          sx={{ mb: 5 }}
        >
          {[
            {
              src: 'assets/images/LimitorderSection/eth.png',
              alt: 'Ethereum icon',
              name: 'Ethereum',
            },
            {
              src: 'assets/images/LimitorderSection/ploygon.png',
              alt: 'Polygon icon',
              name: 'Polygon',
            },
            {
              src: 'assets/images/LimitorderSection/bsc.png',
              alt: 'BSC icon',
              name: 'BSC',
            },
          ].map((chain) => (
            <Stack
              key={chain.name}
              direction='row'
              alignItems='center'
              spacing={1}
            >
              <Box
                component='img'
                src={chain.src}
                alt={chain.alt}
                sx={{ width: 20, height: 20 }}
              />
              <Typography
                sx={{
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '25px',
                  color: '#B3B3B3',
                }}
              >
                {chain.name}
              </Typography>
            </Stack>
          ))}
        </Stack>

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
      </Container>

      <Divider />
    </Box>
  )
}
export default LimitOrderSection
