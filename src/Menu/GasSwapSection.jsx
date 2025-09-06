import React from 'react'
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
  Divider,
  CardContent,
  IconButton,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import { styled } from '@mui/material/styles';


export default function GasSwapSection() {
  // const [toggle, setToggle] = useState("on");

  // const handleToggle = (_event, newValue) => {
  //   if (newValue !== null) setToggle(newValue);
  // };

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
  //   width: '250px',
  //   height: '308px',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginTop: theme.spacing(4),
  // }));

  // const ChainListImage = styled('img')({
  //   width: "900px",
  //   height: "400px",
  // });

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

  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box sx={{
        fontFamily: "'Manrope', sans-serif",
        color: "text.primary",
        backgroundImage: `url("assets/images/swapToken/gradient.png")`,
      }}>
        <Box
          id="hero"
          sx={{
            position: "relative",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: { md: "500px" },
            overflow: "hidden",
          }}
        >
          {/* Single Background Decoration */}
          <Box
            component="img"
            src="assets/images/GaslessSwap/03.png"
            alt="hero background decor"
            sx={{
              position: "absolute",
              top: { xs: "50px", md: "35px" },
              width: { xs: "100%", md: "901px" },
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
              gap: "22px",
              maxWidth: "582px",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                color: "#0c9fe3",
                fontWeight: 700,
                fontSize: { xs: "20px", md: "24px" },
                lineHeight: "32.78px",
              }}
            >
              Go gasless with Unidex.
            </Typography>

            <Typography
              sx={{
                color: "text.primary",
                fontWeight: 700,
                fontSize: { xs: "48px", md: "62px" },
                lineHeight: 1.1,
              }}
            >
              Gasless swaps
            </Typography>

            <Typography
              sx={{
                color: "text.primary",
                fontWeight: 700,
                fontSize: { xs: "13px", md: "14px" },
                lineHeight: "24px",
              }}
            >
              Swap crypto without native tokens. Unidex handles the gas for <br />
              swaps and approvals so you can focus on trading.
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
      <Box sx={{ minHeight: "90vh", py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700 }}>
            Our Core Swap Functions
          </Typography>
          <Typography
            align="center"
            color="#B3B3B3"
            sx={{ mb: 6, fontSize: { xs: "1rem", md: "1.25rem" } }}
          >
            Swap crypto without native tokens. Unidex handles the gas for <br /> swaps and approvals so you can focus on trading.
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
                <CardContent sx={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
                  <Box
                    component="img"
                    src="assets/images/GaslessSwap/mevx.svg"
                    alt=""
                    sx={{ width: "20%", height: "20%" }}
                  />
                  <Typography variant="h4" sx={{ fontWeight: 700, textAlign: "initial" }} gutterBottom>
                    MEV protection
                  </Typography>
                  <Typography align="center" color="textSecondary" sx={{ mb: 2, textAlign: "initial" }}>
                    Say goodbye to sandwich attacks and <br /> frontrunning. Protect from MEV <br /> without a second thought.&nbsp;
                    <Button href="#" sx={{ textTransform: "none", p: 0, minWidth: 0 }}>Learn more.</Button>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3, width: 360, height: 300 }}>
                <CardContent sx={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
                  <Box
                    component="img"
                    src="assets/images/GaslessSwap/dollar.svg"
                    alt=""
                    sx={{ width: "20%", height: "20%" }}
                  />
                  <Typography variant="h4" sx={{ fontWeight: 700, textAlign: "initial" }} gutterBottom>
                    Get more than <br /> you pay for
                  </Typography>
                  <Typography color="textSecondary" textAlign="initial">
                    Save on slippage and cut <br /> down opportunity cost.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
                <CardContent sx={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
                  <Box
                    component="img"
                    src="assets/images/GaslessSwap/thu.svg"
                    alt=""
                    sx={{ width: "15%", height: "15%" }}
                  />
                  <Typography variant="h4" sx={{ fontWeight: 700, textAlign: "initial" }} gutterBottom></Typography>
                  </CardContent>
                  </Card>
                  </Grid>
                  </Grid>
                  </Container>
                  </Box>
                  </Box>
  )}