import React from "react";
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
  
} from "@mui/material";
import { styled } from '@mui/system';

import BoltIcon from "@mui/icons-material/Bolt";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { useTheme } from "@mui/material/styles";


export default function SwapTokenLanding(isDarkMode) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // `md` is 900px by default

  const features = [
    {
      icon: "assets/images/swapToken/tick.svg",
      text: (
        <>
          <span style={{ color: "#0ea5e9" }}>RFQ Private </span>Settlement
        </>
      ),
    },
    {
      icon: "assets/images/swapToken/tick.svg",
      text: (
        <>
          <span style={{ color: "#0ea5e9" }}>No public mempool - </span>no MEV
          bots
        </>
      ),
    },
    {
      icon: "assets/images/swapToken/tick.svg",
      text: (
        <>
          <span style={{ color: "#0ea5e9" }}>Enhanced protection with </span>
          Unidex Auto
        </>
      ),
    },
    {
      icon: "assets/images/swapToken/tick.svg",
      text: (
        <>
          <span style={{ color: "#0ea5e9" }}>Alerts you to slippage</span> and
          potential price impact before you trade
        </>
      ),
    },
    {
      icon: "assets/images/swapToken/tick.svg",
      text: (
        <>
          <span style={{ color: "#0ea5e9" }}>Optimized for smarter </span>
          trading with safety,transparency in every swap
        </>
      ),
    },
  ];
  const checklistItems = [
    {
      icon: "assets/images/swapToken/tick.svg",
      text: (
        <>
          <span style={{ color: "#0ea5e9" }}>Scans multiple</span>sources to find the best possible trade rates
        </>
      ),
    },
    {
      icon: "assets/images/swapToken/tick.svg",
      text: (
        <>
          <span style={{ color: "#0ea5e9" }}>Smart routing</span>ensures maximum value across liquidity pools
          bots
        </>
      ),
    },
    {
      icon: "assets/images/swapToken/tick.svg",
      text: (
        <>
          <span style={{ color: "#0ea5e9" }}>Protects against front-running</span>and sandwich attacks
          Unidex Auto
        </>
      ),
    },
    {
      icon: "assets/images/swapToken/tick.svg",
      text: (
        <>
          <span style={{ color: "#0ea5e9" }}>Alerts you to slippage</span> and
          potential price impact before you trade
        </>
      ),
    },
    {
      icon: "assets/images/swapToken/tick.svg",
      text: (
        <>
          <span style={{ color: "#0ea5e9" }}>Optimized for smarter </span>
          trading with safety,transparency in every swap
        </>
      ),
    },
  ];
  const swap = [
    {
      icon: "assets/images/swapToken/tick.svg",
      text: (
        <>
          <span style={{ color: "#0ea5e9" }}>Unidex Source the market for the best prices</span>
        </>
      ),
    },
    {
      icon: "assets/images/swapToken/tick.svg",
      text: (
        <>
          <span style={{ color: "#0ea5e9" }}>No public mempool - </span>no MEV
          bots
        </>
      ),
    },
    {
      icon: "assets/images/swapToken/tick.svg",
      text: (
        <>
          <span style={{ color: "#0ea5e9" }}>Enhanced protection with Unidex Auto</span>
          
        </>
      ),
    },
    {
      icon: "assets/images/swapToken/tick.svg",
      text: (
        <>
          <span style={{ color: "#0ea5e9" }}>Alerts you to slippage</span> and
          potential price impact before you trade
        </>
      ),
    },
    {
      icon: "assets/images/swapToken/tick.svg",
      text: (
        <>
          <span style={{ color: "#0ea5e9" }}>Optimized for smarter </span>
          trading with safety,transparency in every swap
        </>
      ),
    },
  ];
  const CurrencyCard = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  boxShadow: 'none',
  border: `1px solid ${theme.palette.divider}`,
  flexGrow: 1,
  margin: theme.spacing(1),
  minWidth: 150, // Ensures cards don't shrink too much
  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(2),
  },
}));

// Placeholder for the custom icons
// You would replace these with actual SVG or image components
const UsdcIconPlaceholder = () => (
  <Box
    sx={{
      width: 48,
      height: 48,
      borderRadius: '50%',
      backgroundColor: '#0070DE', // Example color
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      mb: 1,
    }}
  >
    $
  </Box>
);

const EthIconPlaceholder = () => (
  <Box
    sx={{
      width: 48,
      height: 48,
      borderRadius: '50%',
      backgroundColor: '#627EEA', // Example color
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      mb: 1,
    }}
  >
    Ξ
  </Box>
);
  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Hero Section  */}
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
      // Use conditional background image for all screens
      backgroundImage: {
        xs: 'url("assets/images/swapToken/gradient.png")', // Shows the image on mobile
        md: 'url("assets/images/swapToken/gradient.png")',
      },
      // Set background position to center for all screens
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    {/* Background Decoration */}
    <Box
      component="img"
      src="assets/images/swapToken/swapback.png"
      alt="hero background decor"
      sx={{
        position: "absolute",
        left: "50%",
        transform: { xs: "translate(-50%, -50%)", md: "translateX(-50%)" },
        width: "650px",
        height: "60vh",
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
        Browse. Swap. Confirm.
      </Typography>

      <Typography
        sx={{
          color: "text.primary",
          fontWeight: 700,
          fontSize: { xs: "36px", md: "62px" },
          lineHeight: { xs: 1.2, md: 1.1 },
        }}
      >
       
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
        Zero fee trades on 9+ million tokens across 14 chains. Get the best prices by tapping <br/> into 130+ liquidity sources.
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
          marginTop: { xs: "16px", md: "40" },
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
        color: "text.primary",
        minHeight: "100vh",
       // Dark blue background as per images
        padding: { xs: "40px 20px", md: "80px 120px" }, // Responsive padding
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Column on mobile, row on desktop
        alignItems: { xs: "flex-start", md: "center" }, // Align items at start for mobile, center for desktop
        justifyContent: "center", // Center content if space allows
        gap: { xs: "40px", md: "80px" }, // Gap between left and right sections
      }}
    >
      {/* Left Section: Heading and Checklist */}
      <Box
        sx={{
          flex: { md: 1 }, // Takes up available space on desktop
          maxWidth: { md: "50%" }, // Limit width on desktop
          textAlign: { xs: "left", md: "left" },
        }}
      >
        <Typography
          variant="h3" // Using h3 for semantic heading, adjust style as needed
          sx={{
            fontWeight: 500,
            fontSize: { xs: "20px", sm: "40px", md: "56px" }, // Responsive font size
            lineHeight: { xs: 1.2, md: 1.1 },
            color: "text.primary",
            marginBottom: { xs: "20px", md: "30px" },
            maxWidth: { xs: "100%", md: "500px" }, // Limit heading width
          }}
        >
          Get unbeatable trade prices on Unidex.
        </Typography>

         <List sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {checklistItems.map((item, idx) => (
                <ListItem
                  key={idx}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    p: 0,
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "unset" }}>
                    <Box
                      component="img"
                      src={item.icon}
                      alt="Checkmark icon"
                      sx={{ width: 24, height: 24, mt: "2px" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: 700,
                      lineHeight: "24px",
                      color: "text.primary",
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
        alignItems: 'center',
        padding: 3,
        maxWidth: 500,
        margin: 'auto',
        fontFamily: 'Inter, sans-serif',
        color: '#333',
        borderRadius: 2,
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
      }}
    >
      <Typography variant="body2" sx={{ color: '#0070DE', mb: 4, fontWeight: 'bold' }}>
        Quote Expired in 20s
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          mb: 4,
          flexWrap: 'wrap', // Allows cards to wrap on smaller screens
        }}
      >
        <CurrencyCard
          sx={{
            backgroundColor: 'white',
            border: '1px solid #e0e0e0',
          }}
        >
          {/* Replace with your actual USDC icon component */}
          <UsdcIconPlaceholder />
          <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1 }}>
            253.63 USDC
          </Typography>
          <Typography variant="body2" sx={{ color: '#666', mt: 0.5 }}>
            $ 253.44
          </Typography>
        </CurrencyCard>

        {/* This is the separator circle, can be styled as needed */}
        <Box
          sx={{
            width: 30,
            height: 30,
            borderRadius: '50%',
            border: '2px solid #e0e0e0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 2,
            backgroundColor: 'transparent',
            position: 'relative', // For positioning the circle in the middle
            top: 0,
            [theme.breakpoints.down('sm')]: {
                mx: 1,
                my: 2, // Add vertical margin for wrap layout
            },
          }}
        >
          {/* You can add an arrow icon here if desired */}
        </Box>

        <CurrencyCard
          sx={{
            backgroundColor: 'white',
            border: '1px solid #e0e0e0',
          }}
        >
          {/* Replace with your actual ETH icon component */}
          <EthIconPlaceholder />
          <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1 }}>
            0.06 ETH
          </Typography>
          <Typography variant="body2" sx={{ color: '#666', mt: 0.5 }}>
            $ 253.44
          </Typography>
        </CurrencyCard>
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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body1" sx={{ color: '#666' }}>
            Liquidity Providers
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            0xRFQ
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body1" sx={{ color: '#666' }}>
            Rate
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold', textAlign: 'right' }}>
            1 ETH = 1562.76 USDC($1562.77)
          </Typography>
        </Box>

       

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body1" sx={{ color: '#666' }}>
            Ethereum Fees
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            $ 23
          </Typography>
        </Box>
      </Box>
    </Box>
    </Box>

      <Divider />

      {/* MEV Protection */}
      <Box
        id="mev-protection"
        sx={{
          position: "relative",
          overflow: "hidden",
          py: { xs: 6, md: 10 },
        }}
      >
        {/* Background Shapes (hidden on tablet/mobile) */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
              pointerEvents: "none",
            }}
          >
            {["46", "48", "12", "13"].map((id, idx) => (
              <Box
                key={idx}
                component="img"
                src={`/page/d217867e-d6a5-4b6d-a6f4-5b0d4b6cb0aa/images/137_${id}.svg`}
                alt="decorative background shape"
                sx={{
                  position: "absolute",
                  borderRadius: "50%",
                  border: "1px solid rgba(4, 138, 205, 0.2)",
                  top: "-116px",
                  width: 801,
                  height: 801,
                  left: `${778 + idx * 120}px`,
                }}
              />
            ))}
          </Box>
        

        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 6, md: 8 },
            flexDirection: { xs: "column", md: "row" },
            textAlign: { xs: "center", md: "left" },
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Text Content */}
          <Box
            sx={{
              flex: { md: "0 0 530px" },
              order: { xs: 2, md: 1 },
            }}
          >
            <Typography
              variant={isMobile ? "h4" : "h3"}
              sx={{
                fontWeight: 700,
                mb: { xs: 4, md: 9 },
                lineHeight: { xs: 1.3, md: "55px" },
                color: "text.primary",
              }}
            >
              MEV Protection
            </Typography>

            <List sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {features.map((item, idx) => (
                <ListItem
                  key={idx}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    p: 0,
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "unset" }}>
                    <Box
                      component="img"
                      src={item.icon}
                      alt="Checkmark icon"
                      sx={{ width: 24, height: 24, mt: "2px" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: 700,
                      lineHeight: "24px",
                      color: "text.primary",
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
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              order: { xs: 1, md: 2 },
            }}
          >
            <Box
              component="img"
              src="assets/images/swapToken/protection.png"
              alt="MEV Protection Shield"
              sx={{
                width:"50%",
                height:"50%",
              }}
            />
          </Box>
        </Container>
      </Box>
      <Divider />

      {/* Smart Routing */}
     <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, md: 8 },
        py: 6,
        flexDirection: { xs: "column", md: "row" },
        textAlign: { xs: "center", md: "left" },
        gap: { xs: 4, md: 0 },
      }}
    >
      {/* Right Side Image */}
      <Box
        component="img"
        src="assets/images/swapToken/Rectangle.png"
        alt="mobile"
        sx={{
          width: { xs: "250px", md: "400px" },
          height: "auto",
          order: { xs: 1, md: 2 },
        }}
      />
      {/* Left Side Content */}
      <Box sx={{ maxWidth: 600, order: { xs: 2, md: 1 } }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 4,
            textAlign: { xs: "center", md: "initial" },
            fontSize: { xs: "2rem", md: "3rem" },
            color: "text.primary"
          }}
        >
          Smart Routing
        </Typography>
        <List sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {swap.map((item, idx) => (
                <ListItem
                  key={idx}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    p: 0,
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "unset" }}>
                    <Box
                      component="img"
                      src={item.icon}
                      alt="Checkmark icon"
                      sx={{ width: 24, height: 24, mt: "2px" }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: 700,
                      lineHeight: "24px",
                      color: "text.primary",
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
      // Use conditional background image for all screens
      backgroundImage: {
        xs: 'url("assets/images/swapToken/gradient.png")', // Shows the image on mobile
        md: 'url("assets/images/swapToken/gradient.png")',
      },
      // Set background position to center for all screens
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    {/* Background Decoration */}
    <Box
      component="img"
      src="assets/images/swapToken/string.png"
      alt="hero background decor"
      sx={{
        position: "absolute",
        left: "50%",
        transform: { xs: "translate(-50%, -50%)", md: "translateX(-50%)" },
        width: "9%",
        height: "60vh",
        opacity: 1,
        zIndex: 0,
      }}
    />
          {/* Title Section */}
          <Typography
            variant="h5"
            sx={{
              color: "#2196f3",
              fontWeight: 700,
              mb: 1,
              textAlign: "center",
            }}
          >
            New Trade Mode :
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              color: "text.primary",
              textAlign: "center",
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            Swap Tokens
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "text.primary",
              fontWeight: 500,
              mb: 6,
              textAlign: "center",
              opacity: 0.75,
            }}
          >
            Great Prices, with more speed and less worry
          </Typography>

          {/* Feature Section */}
          <Grid
            container
            spacing={{ xs: 2, md: 22 }}
            justifyContent="center"
            alignItems="flex-start"
          >
            {/* 1. Faster Trade Confirmation */}
            <Grid
              item
              xs={12}
              md={4}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box
                sx={{
                  width: 140,
                  height: 140,
                  borderRadius: "50%",
                  backgroundImage:
                    "url('assets/images/swapToken/circle inner.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                <BoltIcon sx={{ fontSize: 48, color: "#fff" }} />
              </Box>
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: 500,
                  fontSize: 20,
                  color: "text.primary",
                }}
              >
                Faster trade Confirmation
              </Typography>
            </Grid>

            {/* 2. Reduce Failed Rate */}
            <Grid
              item
              xs={12}
              md={4}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box
                sx={{
                  width: 140,
                  height: 140,
                  borderRadius: "50%",
                  backgroundImage:
                    "url('assets/images/swapToken/circle inner.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                <AddCircleIcon sx={{ fontSize: 48, color: "#fff" }} />
              </Box>
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: 500,
                  fontSize: 20,
                  color: "text.primary",
                }}
              >
                Reduce failed rate by 75 %
              </Typography>
            </Grid>

            {/* 3. Matches Handles Gases */}
            <Grid
              item
              xs={12}
              md={4}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box
                sx={{
                  width: 140,
                  height: 140,
                  borderRadius: "50%",
                  backgroundImage:
                    "url('assets/images/swapToken/circle inner.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                <LocalFireDepartmentIcon sx={{ fontSize: 48, color: "#fff" }} />
              </Box>
              <Typography
                sx={{
                  textAlign: "center",
                  fontWeight: 500,
                  fontSize: 20,
                  color: "text.primary",
                }}
              >
                Matches handles Gases
              </Typography>
            </Grid>
          </Grid>
        </Box>
      
      <Divider />
    </Box>
  );
}
