import React from 'react'
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Avatar,
  Stack,
  InputAdornment,
  Button,
  Divider,
  Container,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

function LiquiditySection() {
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
            src='assets/images/LiquiditySection/wavey.png'
            alt='hero background decor'
            sx={{
              position: 'absolute',
              left: '45%',
              transform: {
                xs: 'translate(-50%)',
                md: 'translateX(-50%)',
              },
              width: { xs: '300px', sm: '450px', md: '650px' },
              height: { xs: '30vh', md: '60vh' },
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
              Liquidity sources
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

      {/* Integrated Liquidity Table Section */}
      <Box
        id='liquidity-sources'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          // minHeight: { xs: '50vh', md: '100vh' },
          px: { xs: 0, md: 5 },
          my: 8,
          mx: 3,
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: { xs: '100%', sm: 600, md: 1240 },
            borderRadius: 4,
            border: '1px solid #6d6d6d',
            p: { xs: 2, sm: 3, md: 4 },
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
            <Typography variant={{ xs: 'body1', sm: 'h6' }} fontWeight={600}>
              Integrated liquidity sources
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 1,
                alignItems: { xs: 'stretch', md: 'center' },
              }}
            >
              <TextField
                placeholder='Search by liquidity source'
                size='small'
                sx={{
                  width: { xs: '100%', md: 278 },
                  bgcolor: 'rgba(88, 88, 242, 0.05)',
                  borderRadius: 2,
                  mb: { xs: 1, md: 0 },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <SearchIcon fontSize='small' />
                    </InputAdornment>
                  ),
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  gap: 1,
                  width: { xs: '100%', md: 'auto' },
                }}
              >
                <Button
                  variant='outlined'
                  endIcon={<ArrowDropDownIcon />}
                  sx={{
                    bgcolor: 'rgba(55, 55, 80, 0.04)',
                    color: 'text.primary',
                    textTransform: 'none',
                    borderRadius: 2,
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    minHeight: { xs: 44, sm: 40 },
                    px: { xs: 2, sm: 1.5 },
                    border: 'none',
                    width: { xs: '50%', md: 'auto' },
                    flex: { xs: 1, md: 'none' },
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
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    minHeight: { xs: 44, sm: 40 },
                    px: { xs: 2, sm: 1.5 },
                    width: { xs: '50%', md: 'auto' },
                    flex: { xs: 1, md: 'none' },
                  }}
                >
                  All time
                </Button>
              </Box>
            </Box>
          </Box>

          {/* Responsive Table/Card */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <TableContainer sx={{ overflowX: 'auto' }}>
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600, minWidth: 150 }}>
                      Source
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 600,
                        minWidth: 180,
                        textAlign: 'right',
                      }}
                    >
                      Total Volume (USD)
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 600,
                        minWidth: 180,
                        textAlign: 'right',
                      }}
                    >
                      30D Volume (USD)
                    </TableCell>
                    <TableCell sx={{ fontWeight: 600, minWidth: 140 }}>
                      Networks available
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <Stack
                          direction='row'
                          spacing={1.5}
                          alignItems='center'
                        >
                          <Avatar
                            src={row.icon}
                            alt={row.source}
                            sx={{ width: 28, height: 28 }}
                          />
                          <Typography fontWeight={500}>{row.source}</Typography>
                        </Stack>
                      </TableCell>
                      <TableCell sx={{ textAlign: 'right' }}>
                        <Typography fontWeight={500}>{row.total}</Typography>
                      </TableCell>
                      <TableCell sx={{ textAlign: 'right' }}>
                        <Typography fontWeight={500}>{row.volume}</Typography>
                      </TableCell>
                      <TableCell>
                        <Stack direction='row' spacing={0.5}>
                          {row.networks.map((net, j) => (
                            <Avatar
                              key={j}
                              src={net}
                              alt='network'
                              sx={{ width: 28, height: 28 }}
                            />
                          ))}
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Box sx={{ display: { xs: 'block', sm: 'none' }, px: 1 }}>
            {rows.map((row, i) => (
              <Box
                key={i}
                sx={{
                  border: '1px solid #e0e0e0',
                  borderRadius: 3,
                  mb: 3,
                  p: 3,
                  bgcolor: 'transparent',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                }}
              >
                <Stack direction='row' spacing={2} alignItems='center' mb={2}>
                  <Avatar
                    src={row.icon}
                    alt={row.source}
                    sx={{ width: 32, height: 32 }}
                  />
                  <Typography variant='h6' fontWeight={600}>
                    {row.source}
                  </Typography>
                </Stack>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ mb: 1.5 }}>
                  <Typography
                    variant='body2'
                    color='text.secondary'
                    sx={{ mb: 0.5 }}
                  >
                    Total Volume
                  </Typography>
                  <Typography variant='body1' fontWeight={500}>
                    {row.total}
                  </Typography>
                </Box>
                <Box sx={{ mb: 1.5 }}>
                  <Typography
                    variant='body2'
                    color='text.secondary'
                    sx={{ mb: 0.5 }}
                  >
                    30D Volume
                  </Typography>
                  <Typography variant='body1' fontWeight={500}>
                    {row.volume}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant='body2'
                    color='text.secondary'
                    sx={{ mb: 1 }}
                  >
                    Networks Available
                  </Typography>
                  <Stack direction='row' spacing={0.5} flexWrap='wrap'>
                    {row.networks.map((net, j) => (
                      <Avatar
                        key={j}
                        src={net}
                        alt='network'
                        sx={{ width: 28, height: 28 }}
                      />
                    ))}
                  </Stack>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Pagination */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: 3,
              gap: { xs: 0.5, sm: 1 },
            }}
          >
            {/* Previous Button */}
            <Button
              variant='outlined'
              sx={{
                minWidth: { xs: '36px', sm: '40px' },
                width: { xs: '36px', sm: '40px' },
                height: { xs: '36px', sm: '40px' },
                borderRadius: '50%',
                border: '1px solid #e0e0e0',
                color: '#666',
                fontSize: { xs: '1rem', sm: '1rem' },
                '&:hover': {
                  bgcolor: '#f5f5f5',
                },
              }}
            >
              ‹
            </Button>

            {/* Page Numbers */}
            {[1, 2, 3, 4, 5].map((page) => (
              <Button
                key={page}
                variant='text'
                sx={{
                  minWidth: { xs: '36px', sm: '40px' },
                  width: { xs: '36px', sm: '40px' },
                  height: { xs: '36px', sm: '40px' },
                  borderRadius: '50%',
                  border: 'none',
                  bgcolor: 'transparent',
                  color: '#666',
                  fontSize: { xs: '0.875rem', sm: '0.875rem' },
                  '&:hover': {
                    bgcolor: '#f5f5f5',
                  },
                }}
              >
                {page}
              </Button>
            ))}

            {/* Next Button */}
            <Button
              variant='outlined'
              sx={{
                minWidth: { xs: '36px', sm: '40px' },
                width: { xs: '36px', sm: '40px' },
                height: { xs: '36px', sm: '40px' },
                borderRadius: '50%',
                border: '1px solid #e0e0e0',
                color: '#666',
                fontSize: { xs: '1rem', sm: '1rem' },
                '&:hover': {
                  bgcolor: '#f5f5f5',
                },
              }}
            >
              ›
            </Button>
          </Box>
        </Box>
      </Box>
      <Divider />

      {/* Deep Liquidity Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: '100%', md: '90vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: {
            xs: 'url("assets/images/LiquiditySection/back.png")',
            md: "url('assets/images/LiquiditySection/back.png')",
          },
          backgroundSize: { xs: '70vh', md: '150vh' },
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          textAlign: 'center',
          px: { xs: 2, md: 0 },
          py: 5,
        }}
      >
        <Container maxWidth='md'>
          <Typography
            component='h1'
            gutterBottom
            sx={{ 
              fontWeight: 700,
              fontSize: { xs: '24px', sm: '32px', md: '40px', lg: '48px' },
              lineHeight: { xs: 1.3, md: '45px' },
            }}
          >
            Deep liquidity.
            <br />
            AMM and RFQ combined.
          </Typography>
          <Typography
            variant={{ xs: 'body2', sm: 'h6' }}
            sx={{ opacity: 0.85 }}
          >
            Unidex combines 130+ liquidity <br /> sources, on-chain and
            off-chain.
          </Typography>
        </Container>
      </Box>
      <Divider />
    </>
  )
}

export default LiquiditySection
