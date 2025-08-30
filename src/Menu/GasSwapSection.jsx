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
  ListItemIcon,
  ListItemText,
  Paper,
  Link,
  Divider,
  useTheme,
  Stack,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";



export default function GasSwapSection() {
   const swap = [
    {
      title: "MEV protection",
      description:
        "Say goodbye to sandwich attacks and frontrunning.Protect from MEV without a second thought.",
      img: "assets/images/GaslessSwap/shei.png", // replace with your actual image path
      link: "Learn more.",
    },
    {
      title: "Get more than you pay for",
      description: "Save on slippage and cut down opportunity cost.                ",
      img: "assets/images/GaslessSwap/Dollar.png", // replace with your actual image path
      link: null,
    },
    {
      title: "MEV protection",
      description:
        "Say goodbye to sandwich attacks and frontrunning. Protect from MEV without a second thought.",
      img: "assets/images/GaslessSwap/thunder.png", // replace with your actual image path
      link: "Learn more.",
    },
  ];
   const theme = useTheme();

  // function to return background based on mode
  const getBgColor = (hello) => {
    return theme.palette.mode === "dark" ? "#122A53" : "#F8FCFF";
  };
    const [toggle, setToggle] = useState("On");



  return (
    <Box sx={{minHeight: "100vh", py: 5 }}>
      {/* Hero Section */}
      <Box sx={{backgroundImage: `url("assets/images/swapToken/gradient.png")`,}} >
      <Container sx={{ 
        textAlign: "center", 
        minHeight:"80vh",
        py:20,
        backgroundImage: `url("assets/images/GaslessSwap/03.png")`, // image inside public/assets folder
        backgroundRepeat: "no-repeat",
        backgroundSize:"contain",
        backgroundPosition: "center",
        width: "auto",

       }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "primary.main" }}>
          Go gasless with Unidex..
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: "bold", mt: 2 }}>
          Gasless swaps
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Swap crypto without native tokens. Matcha handles the gas for swaps and approvals so you can focus on trading.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 4, px: 4 }}>
          Start Trading
        </Button>
      </Container>
      </Box>
    <Divider/>
      {/* Instant gas-free swaps */}
       <Container sx={{ py: 8}}>
      <Grid container spacing={6} alignItems="center">
        {/* Left side - Tokens grid */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(8, 1fr)",
              gap:1,
              justifyItems: "center",
              alignItems: "center",
            }}
          >
          <Box
                component="img"
                src="assets/images/GaslessSwap/line1.png"
                alt="ki"
          />
          <Box
                component="img"
                src="assets/images/GaslessSwap/line2.png"
                alt="ki"
          />
          <Box
                component="img"
                src="assets/images/GaslessSwap/line3.png"
                alt="ki"
          />          {/* Center circular arrow button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 3,
            }}
          >
            <IconButton
              sx={{
                width: 60,
                height: 60,
                borderRadius: "50%",
                backgroundColor: "white",
                boxShadow: 3,
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>

          </Box>
          <Box
                component="img"
                src="assets/images/GaslessSwap/line4.png"
                alt="ki"
          /><Box
                component="img"
                src="assets/images/GaslessSwap/line5.png"
                alt="ki"
          /><Box
                component="img"
                src="assets/images/GaslessSwap/line6.png"
                alt="ki"
          /> <Box>
      {/* Heading */}
      <Typography variant="h2">
        Instant gas-free swaps
      </Typography>

      {/* Checklist */}
      <List>
        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="success" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="body1" 
              sx={{
                width:500,
                }}>
                <Link href="#" underline="none" sx={{ color: "primary.main", fontWeight: 700, fontStyle:"bold",fontSize:14,}}>
                  Scans multiple
                </Link>{" "}
              <Link href="#" underline="none" sx={{ color: "text.primary", fontWeight: 700, fontStyle:"bold",fontSize:14,}}>
             sources to find the best possible trade rates
               </Link>{" "}
              </Typography>
            }
          />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="success" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="body1">
                <Link href="#" underline="none" sx={{ color: "primary.main",fontWeight: 700, fontStyle:"bold",fontSize:14,}}>
                  Smart routing
                </Link>{" "}
               <Link href="#" underline="none" sx={{ color: "text.primary", fontWeight: 700, fontStyle:"bold",fontSize:14,}}>
             ensures maximum value across liquidity pools
               </Link>{" "}
              </Typography>
            }
          />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="success" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="body1">
                <Link href="#" underline="none" sx={{ color: "primary.main", fontWeight: 700, fontStyle:"bold",fontSize:14, }}>
                  Protects against front-running
                </Link>{" "}
              <Link href="#" underline="none" sx={{ color: "text.primary", fontWeight: 700, fontStyle:"bold",fontSize:14,}}>
               and sandwhich attacks
               </Link>{" "}
              </Typography>
            }
          />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="success" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="body1">
                <Link href="#" underline="none" sx={{ color: "primary.main", fontWeight: 700, fontStyle:"bold",fontSize:14, }}>
                  Alerts you to slippage
                </Link>{" "}
                <Link href="#" underline="none" sx={{ color: "text.primary", fontWeight: 700, fontStyle:"bold",fontSize:14,}}>
               and potential price impact before you trade
               </Link>{" "}
              </Typography>
            }
          />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <CheckCircleIcon color="success" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="body1">
                <Link href="#" underline="none" sx={{ color: "primary.main", fontWeight: 700, fontStyle:"bold",fontSize:14,}}>
                  Optimized for smarter
                </Link>{" "}
               <Link href="#" underline="none" sx={{ color: "text.primary", fontWeight: 700, fontStyle:"bold",fontSize:14,}}>
               trading with safety,transparency in every swap
               </Link>{" "}
                
              </Typography>
            }
          />
        </ListItem>
      </List>
    </Box>
        </Box>

      
      </Grid>
      
      </Grid>
    </Container>
    <Divider/>
      {/* Core Swap Functions */}
      <Box sx={{py: 6 }}>
      <Container Width="389px" height="310">
        <Typography
          variant="h4"
          align="center"
          sx={{ style:"bold", mb: 2 , fontWeight:"700"}}
        >
          Our Core Swap Functions
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ maxWidth: "600px", mx: "auto", mb: 6, color: "text.secondary" , fontWeight:"700"}}
        >
          Swap crypto without native tokens. Matcha handles the gas for swaps and
          approvals so you can focus on trading.
        </Typography>

        <Grid container spacing={4} justifyContent="center"
        
        >
          {swap.map((swap, index) => (
            <Grid item xs={12} md={4} key={index} sx={{
           bgcolor: getBgColor() // calling function here
        }}
        >
              <Paper
                elevation={0}
                sx={{
                  maxwidth: "320px",
                  height: "310",
                  alignContent:"center",
                  

                }}
              >
                <Box
                  component="img"
                  src={swap.img}
                  sx={{
                    width:100,
                    height:100,
                    marginLeft:12,
                  }}
                />
                <Typography variant="h6" sx={{width: "297.1355285644531", height: "36",opacity: "1", margin:"50px",fontWeight:"700", style:"bold",size:"33px",}}>
                  {swap.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color:"#555555",fontWeight:"400",fontStyle:"bold",fontSize:14,maxWidth:260, margin:2}}
                >
                  {swap.description}{" "}
                  {swap.link && (
                    <Link href="#" underline="always" color="text.primary" sx={{ fontWeight: 700, fontStyle:"bold",fontSize:14, }}>
                      {swap.link}
                    </Link>
                  )}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
    <Divider/>
      
      
      
      {/* Available Supporting Chains */}
      <Box >
      <Container  >
        <Typography variant="h4" sx={{ fontWeight: "700", mb: 2 , style:"bold", textAlign:"center", margin:4}}>
          Available Supporting Chains
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "400", mb: 2 , style:"bold", textAlign:"center", margin:4}}>
          Swap crypto without native tokens. Matcha handles the gas for<br/> swaps and approvals so you can focus on trading.
        </Typography>
      
         <img
                  src="assets/images/GaslessSwap/curve.png"
                  alt="Description"
                  style={{
                    width: '100%',
                  height: '600px',
                  }}
                />
         
      </Container>
      </Box>
    <Divider/>
      {/* Unidex Auto Section */}
 <Box
      component="section"
      id="features"
      sx={{
        py: { xs: 6, md: 10 },
        position: "relative",
      }}
    >
      {/* Background blobs */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          pointerEvents: "none",
          display: { xs: "none", md: "block" },
        }}
      >
        <Box
          component="img"
          src="/page/c288acba-e30e-47c2-af64-d36751fa6511/images/157_35.svg"
          alt="background blur effect 1"
          sx={{
            position: "absolute",
            top: 372,
            left: 132,
            width: 260,
            height: 260,
            filter: "blur(300px)",
          }}
        />
        <Box
          component="img"
          src="/page/c288acba-e30e-47c2-af64-d36751fa6511/images/157_36.svg"
          alt="background blur effect 2"
          sx={{
            position: "absolute",
            top: 414,
            left: 1021,
            width: 260,
            height: 260,
            filter: "blur(300px)",
          }}
        />
      </Box>

      {/* Content wrapper */}
      <Stack
        spacing={4}
        alignItems="center"
        sx={{ position: "relative", zIndex: 1 }}
      >
        {/* Feature Card */}
        <Card
          sx={{
            backgroundColor: "#048acd",
            borderRadius: "20px",
            boxShadow:
              "0px 1.7px 10.3px rgba(0,0,0,0.03), 0px 17.2px 60.1px rgba(0,0,0,0.06), 0px 1.7px 3.4px rgba(0,0,0,0.02)",
            maxWidth: 478,
            width: "100%",
            p: { xs: "30px 20px", md: "41px 25px 30px" },
            textAlign: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 500,
              fontSize: 20,
              mb: 2,
              color: "#000000",
            }}
          >
            Unidex Auto
          </Typography>

          {/* Toggle switch */}
          <Box
            sx={{
              display: "flex",
              bgcolor: "#f1f1f4",
              borderRadius: "14px",
              p: "4px",
              mb: 3,
              justifyContent: "center",
              width: "fit-content",
              mx: "auto",
            }}
          >
            {["On", "Off"].map((option) => (
              <Typography
                key={option}
                onClick={() => setToggle(option)}
                sx={{
                  px: 2,
                  py: 1,
                  fontSize: 14,
                  fontWeight: 500,
                  borderRadius: "24px",
                  cursor: "pointer",
                  color: "#17181c",
                  bgcolor:
                    toggle === option ? "#ffffff" : "transparent",
                  boxShadow:
                    toggle === option
                      ? "0px 2px 3px rgba(0,0,0,0.06), 0px 0px 0px 1px rgba(0,0,0,0.06)"
                      : "none",
                  transition: "all 0.3s",
                }}
              >
                {option}
              </Typography>
            ))}
          </Box>

          {/* Feature list */}
          <List sx={{ p: 0, color: "#ffffff", fontSize: 14, fontWeight: 500 }}>
            <ListItem
              sx={{
                borderTop: "1px solid #f1f2f4",
                py: 2,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src="assets/images/GaslessSwap/green tick.png"
                sx={{ width: 16, height: 16, mr: 17 }}
              />
              <Typography>No gas needed</Typography>
            </ListItem>

            <ListItem
              sx={{
                borderTop: "1px solid #f1f2f4",
                py: 2,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src="assets/images/GaslessSwap/green tick.png"
                sx={{ width: 16, height: 16, mr: 2 }}
              />
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 0.5, sm: 1 }}
                justifyContent="center"
                flexGrow={1}
              >
                <Typography>MEV protection</Typography>
                <Typography sx={{ color: "#31353c" }}>·</Typography>
                <Typography sx={{ color: "#fafafa" }}>No slippage</Typography>
              </Stack>
            </ListItem>

            <ListItem
              sx={{
                borderTop: "1px solid #f1f2f4",
                py: 2,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src="assets/images/GaslessSwap/green tick.png"
                sx={{ width: 16, height: 16, mr: 14 }}
              />
              <Typography flexGrow={1}>
                130+ liquidity sources
              </Typography>
            </ListItem>

            <ListItem
              sx={{
                borderTop: "1px solid #f1f2f4",
                py: 2,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src="assets/images/GaslessSwap/green tick.png"
                sx={{ width: 16, height: 16, mr: 14}}
              />
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 0.5, sm: 1 }}
                justifyContent="center"
              >
                <Typography>Smart Routing</Typography>
                <Typography sx={{ color: "#31353c" }}>·</Typography>
                <Typography sx={{ color: "#fafafa" }}>Auto</Typography>
              </Stack>
            </ListItem>
          </List>

          <Typography
            sx={{
              color: "#ffffff",
              fontSize: 14,
              fontWeight: 500,
              pt: 2,
              mt: 2,
              borderTop: "1px solid #f1f2f4",

            }}
          >
            0.05% - 0.25% fee on certain pairs
          </Typography>
        </Card>

        {/* Section Title & Subtitle */}
        <Box textAlign="center" maxWidth={582}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: 28, sm: 32, md: 40 },
              mb: 3,
              color: "text.primary",
              fontFamily: "Manrope, sans-serif",
            }}
          >
            Available Supporting Chains
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 14,
              lineHeight: "24px",
              color: "text.primary",
              fontFamily: "Manrope, sans-serif",
              style:"bold",
            }}
          >
            Swap crypto without native tokens. Matcha handles the gas for swaps
            and approvals so you can focus on trading.
          </Typography>
        </Box>
      </Stack>
    </Box>
    </Box>
   
  );
}
