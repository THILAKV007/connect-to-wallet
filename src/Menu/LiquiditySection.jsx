import React from 'react'
import {
  Box, Typography, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, TextField, Avatar, Stack, InputAdornment,
  Button, Divider, Container, useMediaQuery
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { useTheme } from '@mui/material/styles'

function LiquiditySection() {
  const theme = useTheme()
  // Match screens xs (phones), sm (large phones, small tablets), md and above (large tablets, desktops)
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const rows = [
    {
      source: 'oX RFQ',
      icon: 'assets/images/LiquiditySection/danger.svg',
      total: '$ 2.8B',
      volume: '$108.5 M',
      networks: [
        'assets/images/LiquiditySection/a.svg',
        'assets/images/LiquiditySection/b.svg',
        'assets/images/LiquiditySection/c.svg',
        'assets/images/LiquiditySection/d.svg',
      ],
    },
    {
      source: 'Across',
      icon: 'assets/images/LiquiditySection/across.svg',
      total: '$ 1.2B',
      volume: '$207.5 k',
      networks: [
        'assets/images/LiquiditySection/a.svg',
        'assets/images/LiquiditySection/b.svg',
        'assets/images/LiquiditySection/c.svg',
      ],
    },
    {
      source: 'oX RFQ',
      icon: 'assets/images/LiquiditySection/danger.svg',
      total: '$ 2.8B',
      volume: '$108.5 M',
      networks: [
        'assets/images/LiquiditySection/a.svg',
        'assets/images/LiquiditySection/b.svg',
        'assets/images/LiquiditySection/c.svg',
        'assets/images/LiquiditySection/d.svg',
      ],
    },
    {
      source: 'Across',
      icon: 'assets/images/LiquiditySection/across.svg',
      total: '$ 1.2B',
      volume: '$207.5 k',
      networks: [
        'assets/images/LiquiditySection/a.svg',
        'assets/images/LiquiditySection/b.svg',
        'assets/images/LiquiditySection/c.svg',
      ],
    },
    {
      source: 'oX RFQ',
      icon: 'assets/images/LiquiditySection/danger.svg',
      total: '$ 2.8B',
      volume: '$108.5 M',
      networks: [
        'assets/images/LiquiditySection/a.svg',
        'assets/images/LiquiditySection/b.svg',
        'assets/images/LiquiditySection/c.svg',
        'assets/images/LiquiditySection/d.svg',
      ],
    },
    {
      source: 'Across',
      icon: 'assets/images/LiquiditySection/across.svg',
      total: '$ 1.2B',
      volume: '$207.5 k',
      networks: [
        'assets/images/LiquiditySection/a.svg',
        'assets/images/LiquiditySection/b.svg',
        'assets/images/LiquiditySection/c.svg',
      ],
    },
  ]
  return (
    <>
      {/* Hero Section */}
        <Box
         sx={{
           fontFamily: "'Manrope', sans-serif",
           color: "text.primary",
         }}
       >
         <Box
           id="hero"
           sx={{
             position: "relative",
             textAlign: "center",
             display: "flex",
             flexDirection: "column",
             alignItems: "center",
             justifyContent: "center",
             minHeight: { xs: "100vh", md: "515px" },
             overflow: "hidden",
             padding: { xs: "20px", md: "0" },
             boxSizing: "border-box",
             // Responsive background image:
             // Hides the gradient image on extra-small screens (xs)
             // and shows it on medium screens (md) and up.
             backgroundImage: {
               xs: 'none',
               md: 'url("assets/images/swapToken/gradient.png")',
             },
           }}
         >
           {/* Background Decoration */}
           <Box
             component="img"
             src="assets/images/LiquiditySection/wavey.png"
             alt="hero background decor"
             sx={{
               position: "absolute",
               top: { xs: "50%", sm: "50%", md: "35px" },
               left: "50%",
               transform: { xs: "translate(-50%, -50%)", md: "translateX(-50%)" },
               width: { xs: "120%", sm: "100%", md: "901px" },
               height: "auto",
               opacity: 1,
               zIndex: 0,
             }}
           />
       
           {/* Content */}
           <Box
             sx={{
               position: "relative",
               zIndex: 1,
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
               gap: { xs: "12px", md: "22px" },
               maxWidth: "582px",
               width: "100%",
             }}
           >
             <Typography
               sx={{
                 color: "#0c9fe3",
                 fontWeight: 700,
                 fontSize: { xs: "16px", md: "24px" },
                 lineHeight: "32.78px",
               }}
             >
                Go gasless with Unidex..
             </Typography>
       
             <Typography
               sx={{
                 color: "text.primary",
                 fontWeight: 700,
                 fontSize: { xs: "36px", md: "62px" },
                 lineHeight: { xs: 1.2, md: 1.1 },
               }}
             >
               Liquidity sources
             </Typography>
       
             <Typography
               sx={{
                 color: "text.primary",
                 fontWeight: 700,
                 fontSize: { xs: "12px", md: "14px" },
                 lineHeight: "24px",
                 textAlign: "center",
                 paddingX: { xs: "20px", md: "0" },
               }}
             >
              Deep liquidity for the best prices on 9+ million tokens across 14 chains. Tap into 130+ <br/> liquidity sources aggregated by Unidex!
             </Typography>
       
             <Button
               variant="contained"
               sx={{
                 borderRadius: "8px",
                 fontFamily: "Inter, sans-serif",
                 fontWeight: 700,
                 fontSize: "16px",
                 lineHeight: "24px",
                 background: "linear-gradient(90deg, #0da2e5 0%, #0488cb 100%)",
                 color: "white",
                 textTransform: "none",
                 padding: "12px 24px",
                 marginTop: { xs: "16px", md: "0" },
               }}
             >
               Start Trading
             </Button>
               </Box>
              </Box>
               </Box>
      <Divider />

      {/* Integrated Liquidity Table Section */}
      <Box
        id='liquidity-sources'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          minHeight: { xs: '50vh', md: '100vh' },
          px: { xs: 0, md: 5 },
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: { xs: 375, sm: 600, md: 1240 },
            borderRadius: 4,
            border: '1px solid #6d6d6d',
            p: { xs: 1, md: 4 },
          }}
        >

          {/* Table Header and Filters */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', sm: 'center' },
              gap: 2,
              mb: 3,
            }}
          >
            <Typography variant={isMobile ? 'body1' : 'h6'} fontWeight={600}>
              Integrated liquidity sources
            </Typography>
            <Stack direction={isMobile ? 'column' : 'row'} spacing={1} flexWrap='wrap'>
              <TextField
                placeholder='Search by liquidity source'
                size='small'
                sx={{
                  width: isMobile ? 180 : 278,
                  bgcolor: 'rgba(88, 88, 242, 0.05)',
                  borderRadius: 2,
                  mb: isMobile ? 1 : 0,
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <SearchIcon fontSize='small' />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                variant='outlined'
                endIcon={<ArrowDropDownIcon />}
                sx={{
                  bgcolor: 'rgba(55, 55, 80, 0.04)',
                  color: 'text.primary',
                  textTransform: 'none',
                  borderRadius: 2,
                  fontSize: { xs: '0.8rem', sm: '1rem' }
                }}
              >
                Network
              </Button>
              <Button
                variant='contained'
                endIcon={<ArrowDropDownIcon />}
                sx={{
                  bgcolor: '#058ccf',
                  color: 'text.primary',
                  textTransform: 'none',
                  borderRadius: 1,
                  fontSize: { xs: '0.8rem', sm: '1rem' }
                }}
              >
                All time
              </Button>
            </Stack>
          </Box>

          {/* Responsive Table/Card */}
          {!isMobile ? (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Source</TableCell>
                    <TableCell>Total Volume (USD)</TableCell>
                    <TableCell>30D Volume (USD)</TableCell>
                    <TableCell>Networks available</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <Stack direction='row' spacing={1.5} alignItems='center'>
                          <Avatar src={row.icon} alt={row.source} sx={{ width: 24, height: 24 }} />
                          <Typography>{row.source}</Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>{row.total}</TableCell>
                      <TableCell>{row.volume}</TableCell>
                      <TableCell>
                        <Stack direction='row' spacing={-1}>
                          {row.networks.map((net, j) => (
                            <Avatar key={j} src={net} alt='network' sx={{ width: 24, height: 24 }} />
                          ))}
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Box>
              {rows.map((row, i) => (
                <Box key={i} sx={{ border: '1px solid #eee', borderRadius: 2, mb: 2, p: 2, bgcolor: '#f8fafb' }}>
                  <Stack direction='row' spacing={1.5} alignItems='center'>
                    <Avatar src={row.icon} alt={row.source} sx={{ width: 24, height: 24 }} />
                    <Typography fontWeight={600}>{row.source}</Typography>
                  </Stack>
                  <Divider sx={{ my: 1 }} />
                  <Typography variant='body2'><strong>Total Volume:</strong> {row.total}</Typography>
                  <Typography variant='body2'><strong>30D Volume:</strong> {row.volume}</Typography>
                  <Typography variant='body2'><strong>Networks:</strong></Typography>
                  <Stack direction='row' spacing={-1}>
                    {row.networks.map((net, j) => (
                      <Avatar key={j} src={net} alt='network' sx={{ width: 24, height: 24 }} />
                    ))}
                  </Stack>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Box>
      <Divider />

      {/* Deep Liquidity Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: '60vh', md: '100vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: { xs: 'none', md: "url('assets/images/LiquiditySection/back.png')" },
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          textAlign: 'center',
          px: { xs: 2, md: 0 }
        }}
      >
        <Container maxWidth='md'>
          <Typography
            variant={isMobile ? 'h5' : 'h3'}
            component='h1'
            gutterBottom
            sx={{ fontWeight: 'bold' }}
          >
            Deep liquidity.<br />AMM and RFQ combined.
          </Typography>
          <Typography variant={isMobile ? 'body2' : 'h6'} sx={{ opacity: 0.85 }}>
            Unidex combines 130+ liquidity sources, on-chain and off-chain.
          </Typography>
        </Container>
      </Box>
      <Divider />
    </>
  )
}

export default LiquiditySection
