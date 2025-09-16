import React, { useState } from "react";
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
  
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { styled } from '@mui/material/styles';

const SubTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Manrope',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '54.64px',
  color: '#B3B3B3',
  textAlign: 'center',
  marginBottom: theme.spacing(2),
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: '90vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  position: 'relative',
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Manrope',
  fontWeight: 700,
  fontSize: '40px',
  lineHeight: '54.64px',
  color: 'text.primary',
  textAlign: 'center',
  marginBottom: theme.spacing(4),
}));

const ChainListContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: theme.spacing(4),
}));

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
  const [toggle, setToggle] = useState("on");
  const handleToggle = (_event, newValue) => {
    if (newValue !== null) setToggle(newValue);
  };
 
  return (
    <Box sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
      }}>
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
               minHeight: { xs: "90vh", md: "515px" },
               overflow: "hidden",
               padding: { xs: "20px", md: "0" },
               boxSizing: "border-box",
              
             }}
           >
             {/* Background Decoration */}
             <Box
               component="img"
               src="assets/images/GaslessSwap/03.png"
               alt="hero background decor"
               sx={{
                 position: "absolute",
                 // For mobile (xs and sm), center the image vertically.
                 // For md and up, use the original top: 35px.
                 top: { xs: "50%", sm: "50%", md: "35px" }, 
                 // Always center horizontally for all screen sizes.
                 left: "50%",
                 // Adjust transform to center both horizontally and vertically for mobile (xs, sm),
                 // and only horizontally for larger screens (md).
                 transform: { xs: "translate(-50%, -50%)", md: "translateX(-50%)" },
                 // Keep the width adjustments to ensure it fits well
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
               > Go gasless with Unidex..
               </Typography>
     
               <Typography
                 sx={{
                   color: "text.primary",
                   fontWeight: 700,
                   fontSize: { xs: "36px", md: "62px" },
                   lineHeight: { xs: 1.2, md: 1.1 },
                 }}
               >
                 Gasless swaps
               </Typography>
     
               <Typography
                 sx={{
                   color: "#A0A0A0",
                   fontWeight: 700,
                   fontSize: { xs: "12px", md: "14px" },
                   lineHeight: "24px",
                   textAlign: "center",
                   paddingX: { xs: "20px", md: "0" },
                 }}
               >
                 Swap crypto without native tokens.Unidex handles the gas for <br/>
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
                   color: "text.primary",
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
      {/* Instant gas-free swaps */}
      <Container sx={{ py: 8 }}>
  <Grid
    container
    spacing={12}
    direction={{ xs: 'column', md: 'row' }}
    alignItems="center"
  >
    
  <Grid item xs={12} md={6}>
  <Box
    sx={{
      position: 'relative',
      width: '100%',
      maxWidth: '600px',
      mx: 'auto',
      display: 'flex', // This line can be removed as we'll use responsive display below
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {/* This Box is for the desktop image */}
    <Box
      component="img"
      src="assets/images/GaslessSwap/line1.png"
      alt="Line animation"
      sx={{
        width: '100%',
        height: 'auto',
        // This makes the complex image visible only on medium and larger screens
        display: { xs: 'none', md: 'block' },
      }}
    />
    <Box
      component="img"
      src="assets/images/GaslessSwap/line2.png"
      alt="Line animation"
      sx={{
        width: '100%',
        height: 'auto',
        // This makes the complex image visible only on medium and larger screens
        display: { xs: 'none', md: 'block' },
      }}
    />
    <Box
      component="img"
      src="assets/images/GaslessSwap/line3.png"
      alt="Line animation"
      sx={{
        width: '100%',
        height: 'auto',
        // This makes the complex image visible only on medium and larger screens
        display: { xs: 'none', md: 'block' },
      }}
    />
    <Box
      component="img"
      src="assets/images/GaslessSwap/line4.png"
      alt="Line animation"
      sx={{
        width: '100%',
        height: 'auto',
        // This makes the complex image visible only on medium and larger screens
        display: { xs: 'none', md: 'block' },
      }}
    />
    <Box
      component="img"
      src="assets/images/GaslessSwap/line5.png"
      alt="Line animation"
      sx={{
        width: '100%',
        height: 'auto',
        // This makes the complex image visible only on medium and larger screens
        display: { xs: 'none', md: 'block' },
      }}
    />
    <Box
      component="img"
      src="assets/images/GaslessSwap/line6.png"
      alt="Line animation"
      sx={{
        width: '100%',
        height: 'auto',
        // This makes the complex image visible only on medium and larger screens
        display: { xs: 'none', md: 'block' },
      }}
    />
    
    {/* This Box is for the mobile image */}
    <Box
      component="img"
      src="assets/images/GaslessSwap/linining.png" // Assuming this is your mobile image
      alt="Mobile lines"
      sx={{
        width: '100%',
        height: 'auto',
        // This makes the mobile image visible only on extra-small screens
        display: { xs: 'block', md: 'none' },
      }}
    />
    
    <IconButton
      sx={{
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: '50%',
        backgroundColor: 'white',
        boxShadow: 3,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  </Box>
</Grid>
    {/* Left side - Heading and Features List */}
    <Grid item xs={12} md={6}>
      <Typography variant="h3" sx={{ fontWeight: 700, mb: 4, textAlign: 'left' }}>
        Instant gas-free swaps
      </Typography>
      <List>
        {/* Feature 1 */}
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="success" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="body1">
                <Box
                  component="span"
                  sx={{ color: 'primary.main', fontWeight: 700, fontSize: 14 }}
                >
                  Scans multiple
                </Box>
                <Box
                  component="span"
                  sx={{ color: 'text.primary', fontWeight: 700, fontSize: 14 }}
                >
                  {' '}
                  sources to find the best possible trade rates
                </Box>
              </Typography>
            }
          />
        </ListItem>
        {/* Feature 2 */}
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="success" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="body1">
                <Box
                  component="span"
                  sx={{ color: 'primary.main', fontWeight: 700, fontSize: 14 }}
                >
                  Smart routing
                </Box>
                <Box
                  component="span"
                  sx={{ color: 'text.primary', fontWeight: 700, fontSize: 14 }}
                >
                  {' '}
                  ensures maximum value across liquidity pools
                </Box>
              </Typography>
            }
          />
        </ListItem>
        {/* Feature 3 */}
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="success" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="body1">
                <Box
                  component="span"
                  sx={{ color: 'primary.main', fontWeight: 700, fontSize: 14 }}
                >
                  Protects against front-running
                </Box>
                <Box
                  component="span"
                  sx={{ color: 'text.primary', fontWeight: 700, fontSize: 14 }}
                >
                  {' '}
                  and sandwhich attacks
                </Box>
              </Typography>
            }
          />
        </ListItem>
        {/* Feature 4 */}
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="success" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="body1">
                <Box
                  component="span"
                  sx={{ color: 'primary.main', fontWeight: 700, fontSize: 14 }}
                >
                  Alerts you to slippage
                </Box>
                <Box
                  component="span"
                  sx={{ color: 'text.primary', fontWeight: 700, fontSize: 14 }}
                >
                  {' '}
                  and potential price impact before you trade
                </Box>
              </Typography>
            }
          />
        </ListItem>
        {/* Feature 5 */}
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="success" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="body1">
                <Box
                  component="span"
                  sx={{ color: 'primary.main', fontWeight: 700, fontSize: 14 }}
                >
                  Optimized for smarter
                </Box>
                <Box
                  component="span"
                  sx={{ color: 'text.primary', fontWeight: 700, fontSize: 14 }}
                >
                  {' '}
                  trading with safety,transparency in every swap
                </Box>
              </Typography>
            }
          />
        </ListItem>
      </List>
    </Grid>
  </Grid>
</Container>
      <Divider />
      {/* core function */}
       
      <Box
        sx={{
          minHeight: '90vh',
          py: { xs: 8, md: 14 },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700, fontSize: { xs: '2.25rem', md: '3rem' } }}
          >
            our Core Swap Functions
          </Typography>
          <Typography
            align="center"
            color="text.primary"
            sx={{ mb: { xs: 4, md: 6 }, fontSize: { xs: '1rem', md: '1.25rem' } }}
          >
            Swap crypto without native tokens. Unidex handles the gas for <br /> swaps and approvals so you can focus on trading.
          </Typography>

           <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
      {/* MEV protection Card */}
      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            p: 3,
            borderRadius: 3,
            Width:'50%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <CardContent
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              pb: '0 !important',
            }}
          >
            <Box
              component="img"
              src="assets/images/GaslessSwap/mevx.svg"
              alt="MEV Protection Icon"
              sx={{
                width: { xs: '60px', md: '80px' },
                height: { xs: '60px', md: '80px' },
                mb: 2,
              }}
            />
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, lineHeight: 1.2 }}>
              MEV protection
            </Typography>
            <Typography
              variant="body1"
              color="#b5b5b5"
            >
              Say goodbye to sandwich attacks and <br/>frontrunning. Protect from MEV without <br/> a second thought.
              <Button
                href="#"
                sx={{
                  textTransform: 'none',
                  p: 0,
                  minWidth: 0,
                  ml: 0.5,
                  color: '#007bff',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                }}
              >
                Learn more.
              </Button>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Get more than you pay for Card */}
      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            p: 3,
            borderRadius: 3,
           
           
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <CardContent
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              pb: '0 !important',
            }}
          >
            <Box
              component="img"
              src="assets/images/GaslessSwap/dollar.svg"
              alt="Dollar Icon"
              sx={{
                width: { xs: '60px', md: '80px' },
                height: { xs: '60px', md: '80px' },
                mb: 2,
              }}
            />
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, lineHeight: 1.2 }}>
              <Stack>
                <span>Get more than</span>
                <span>you pay for</span>
              </Stack>
            </Typography>
            <Typography
              variant="body1"
              color="#b5b5b5"
            >
              Save on slippage and cut<br/> down opportunity cost.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Another MEV protection Card */}
      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            p: 3,
            borderRadius: 3,
           
           
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <CardContent
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              pb: '0 !important',
            }}
          >
            <Box
              component="img"
              src="assets/images/GaslessSwap/thu.svg"
              alt="Thunderbolt Icon"
              sx={{
                width: { xs: '60px', md: '80px' },
                height: { xs: '60px', md: '80px' },
                mb: 2,
              }}
            />
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, lineHeight: 1.2 }}>
              MEV protection
            </Typography>
            <Typography
              variant="body1"
              color="#b5b5b5"
            >
              Say goodbye to sandwich attacks and <br/>frontrunning. Protect from MEV without<br/> a second thought.
              <Button
                href="#"
                sx={{
                  textTransform: 'none',
                  p: 0,
                  minWidth: 0,
                  ml: 0.5,
                  color: '#007bff',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                }}
              >
                Learn more.
              </Button>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
        </Container>
      </Box>
    
      <Divider />
      {/* fourth section */}
   <StyledContainer maxWidth={false} disableGutters>
  <Box sx={{ position: 'relative', width: '100%', maxWidth: '1440px', textAlign: 'center' }}>
    <MainTitle>
      Available Supporting Chains
    </MainTitle>
    <SubTitle>
      Swap crypto without native tokens. Unidex handles the gas for <br />
      swaps and approvals so you can focus on trading.
    </SubTitle>
    <ChainListContainer sx={{ margin: '0 auto', p: { xs: 2, md: 0 } }}>
      {/* This image is used for the desktop layout. */}
      <Box
        component="img"
        src="assets/images/GaslessSwap/Group 48095754.png"
        alt="Chain List"
        sx={{
          width: { xs: '100%', md: '900px' },
          height: { xs: 'auto', md: '400px' },
          objectFit: 'contain',
          bottom: "25px",
          // Hide this on mobile
          display: { xs: 'none', md: 'block' },
        }}
      />

      {/* This image is used for the mobile layout based on the provided design. */}
      <Box
        component="img"
        src="assets/images/GaslessSwap/Group 48095754.png"
        alt="Mobile Chain List"
        sx={{
          width: { xs: '100%', sm: 'auto' },
          height: 'auto',
          // Show this only on mobile
          display: { xs: 'block', md: 'none' },
        }}
      />
    </ChainListContainer>

    {/* Text for High Volume (Desktop & Mobile) */}
    <Typography
      sx={{
        position: 'absolute',
        zIndex: 2,
        fontWeight: 700,
        fontSize: { xs: '1rem', md: '23px' },
        lineHeight: '31.42px',
        color: 'text.primary',
        textAlign: 'center',
        // Reposition for responsiveness
        top: { xs: '20%', md: '220px' },
        right: { xs: '50%', md: '164px' },
        transform: { xs: 'translateX(50%)', md: 'none' },
        width: { xs: 'auto', md: '201px' }
      }}
    >
      With High volume
    </Typography>

    {/* Text for Trending Pairs (Desktop & Mobile) */}
    <Typography
      sx={{
        position: 'absolute',
        zIndex: 2,
        fontWeight: 700,
        fontSize: { xs: '1rem', md: '23px' },
        lineHeight: '31.42px',
        color: 'text.primary',
        textAlign: 'center',
        // Reposition for responsiveness
        bottom: { xs: '20%', md: '30px' },
        left: { xs: '50%', md: '100px' },
        transform: { xs: 'translateX(-50%)', md: 'none' },
        width: { xs: 'auto', md: '201px' }
      }}
    >
      With most <br /> trending Pairs
    </Typography>
  </Box>
</StyledContainer>
      <Divider />
      {/* fifth section */}
      <Box sx={{
        backgroundImage: `url("assets/images/GaslessSwap/ddd.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        py: 8,
        minHeight: "100vh",
      }}>
        {/* Content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Feature Card */}
          <Card
            sx={{
              bgcolor: "#048acd",
              border: "1px solid #e7e9eb",
              borderRadius: 3,
              boxShadow:
                "0px 1.7px 10.3px rgba(0,0,0,0.03), 0px 17.2px 60.1px rgba(0,0,0,0.06), 0px 1.7px 3.4px rgba(0,0,0,0.02)",
              width: "100%",
              maxWidth: 478,
              p: { xs: 3, md: 5 },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "text.primary",
                fontWeight: 500,
                textAlign: "center",
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
                bgcolor: "#f1f1f4",
                p: "4px",
                mb: 3,
              }}
            >
              <ToggleButton
                value="on"
                sx={{
                  varaiant: "contained",
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: 14,
                  px: 2,
                  color: "#0000",
                  borderRadius: 24,
                  "&.Mui-selected": {
                    bgcolor: "#fff",
                    boxShadow:
                      "0px 2px 3px rgba(0,0,0,0.06), 0px 0px 0px 1px rgba(0,0,0,0.06)",
                  },
                }}
              >
                on
              </ToggleButton>
              <ToggleButton
                value="off"
                sx={{
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: 14,
                  px: 2,
                  color: "#0000",
                  borderRadius: 24,
                  "&.Mui-selected": {
                    bgcolor: "#fff",
                    boxShadow:
                      "0px 2px 3px rgba(0,0,0,0.06), 0px 0px 0px 1px rgba(0,0,0,0.06)",
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
                width: "100%",
                color: "#fff",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              <ListItem
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <ListItemIcon>
                  <Box
                    component="img"
                    src="assets/images/GaslessSwap/green tick.png"
                    alt=""
                    sx={{ width: 16, height: 16 }}
                  />
                </ListItemIcon>
                <Typography sx={{ flexGrow: 1, textAlign: "center" }}>
                  No gas needed
                </Typography>
              </ListItem>

              <ListItem
                sx={{
                  borderTop: "1px solid #f1f2f4",
                  py: 1.5,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ListItemIcon>
                  <Box
                    component="img"
                    src="assets/images/GaslessSwap/green tick.png"
                    alt=""
                    sx={{ width: 16, height: 16 }}
                  />
                </ListItemIcon>
                <Typography sx={{ flexGrow: 1, textAlign: "center" }}>
                  130+ liquidity sources
                </Typography>
              </ListItem>

              <ListItem
                sx={{
                  borderTop: "1px solid #f1f2f4",
                  py: 1.5,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ListItemIcon>
                  <Box
                    component="img"
                    src="assets/images/GaslessSwap/green tick.png"
                    alt=""
                    sx={{ width: 16, height: 16 }}
                  />
                </ListItemIcon>
                <Typography sx={{ flexGrow: 1, textAlign: "center" }}>
                  Smart Routing - Auto
                </Typography>
              </ListItem>
            </List>

            <Typography
              sx={{
                borderTop: "1px solid #f1f2f4",
                py: 1.5,
                color: "#fff",
                fontSize: 14,
                fontWeight: 500,
                textAlign: "center",
                width: "100%"
              }}
            >
              0.05% - 0.25% fee on certain pairs
            </Typography>
          </Card>

          {/* Section Title */}
          <Typography
            variant="h3"
            sx={{
              color: "text.primary",
              fontWeight: 700,
              textAlign: "center",
              fontSize: 24,
              fontFamily: "Manrope, sans-serif",
              mt: 4,
            }}
          >
            Available Supporting Chains
          </Typography>
          <Typography
            sx={{
              color: "text.primary",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "24px",
              textAlign: "center",
              maxWidth: 582,
              mt: 2,
              fontFamily: "Manrope, sans-serif",
            }}
          >
            Swap crypto without native token. Unidex handles the gas for <br /> swaps
            and approvals so you can focus on trading.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}