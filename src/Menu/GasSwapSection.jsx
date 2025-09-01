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
  ToggleButton,
  ToggleButtonGroup,
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
    
  const [toggle, setToggle] = useState("on");

  const handleToggle = (_event, newValue) => {
    if (newValue !== null) setToggle(newValue);
  };



  return (
    <Box sx={{minHeight: "100vh"}}>
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
            Swap crypto without native tokens. Matcha handles the gas for <br/>
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
             
            }}
          >
            Start Trading
          </Button>
        </Box>
      </Box>
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
                  height: "310px",
                  alignContent:"center",
                  

                }}
              >
                <Box
                  component="img"
                  src={swap.img}
                  sx={{
                    width:100,
                    height:100,
                    marginLeft:14,
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
                  height: '100%',
                  }}
                />
         
      </Container>
      </Box>
    <Divider/>
      
      {/* fifth section */}
      <Box sx ={{backgroundImage: `url("assets/images/GaslessSwap/ddd.png")`,
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
                borderRadius: 24,
                "&.Mui-selected": {
                  bgcolor: "#fff",
                  boxShadow:
                    "0px 2px 3px rgba(0,0,0,0.06), 0px 0px 0px 1px rgba(0,0,0,0.06)",
                },
              }}
            >
              On
            </ToggleButton>
            <ToggleButton
              value="off"
              sx={{
                textTransform: "none",
                fontWeight: 500,
                fontSize: 14,
                px: 2,
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
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: { xs: 0.5, md: 1 },
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Typography>MEV protection</Typography>
                <Typography sx={{ color: "#31353c" }}>·</Typography>
                <Typography sx={{ color: "#fafafa" }}>No slippage</Typography>
              </Box>
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
              <ListItemIcon >
                <Box
                  component="img"
                src="assets/images/GaslessSwap/green tick.png"
                  alt=""
                  sx={{ width: 16, height: 16 }}
                />
              </ListItemIcon>
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: { xs: 0.5, md: 1 },
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Typography>Smart Routing</Typography>
                <Typography sx={{ color: "#31353c" }}>·</Typography>
                <Typography sx={{ color: "#fafafa" }}>Auto</Typography>
              </Box>
            </ListItem>
            <ListItem sx={{
                borderTop: "1px solid #f1f2f4",
                py: 1.5,
                display: "flex",
                alignItems: "center",
              }}></ListItem>
          </List>

          <Typography
            sx={{
              color: "#fff",
              fontSize: 14,
              fontWeight: 500,
              textAlign: "center",
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
            fontSize:24,
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
            mt:2,
            fontFamily: "Manrope, sans-serif",
          }}
        >
          Swap crypto without native tokens. Matcha handles the gas for <br/> swaps
          and approvals so you can focus on trading.
        </Typography>
      </Box>
    
    </Box>
    
    
    
    
    
</Box>
  );
}
