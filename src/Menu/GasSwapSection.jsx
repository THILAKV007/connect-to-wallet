import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  Switch,
  List,
  ListItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Link,
  Divider
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
  



  return (
    <Box sx={{minHeight: "100vh", py: 5 }}>
      {/* Hero Section */}
      <Container sx={{ 
        textAlign: "center", 
        py:34,
        minHeight:"100vh",
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
                <Link href="#" underline="none" sx={{ color: "primary.main", fontWeight: 500 }}>
                  Scans multiple
                </Link>{" "}
                sources to find the best possible trade rates
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
                <Link href="#" underline="none" sx={{ color: "primary.main", fontWeight: 500 }}>
                  Smart routing
                </Link>{" "}
                ensures maximum value across liquidity pools
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
                <Link href="#" underline="none" sx={{ color: "primary.main", fontWeight: 500 }}>
                  Protects against front-running
                </Link>{" "}
                and sandwich attacks
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
                <Link href="#" underline="none" sx={{ color: "primary.main", fontWeight: 500 }}>
                  Alerts you to slippage
                </Link>{" "}
                and potential price impact before you trade
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
                <Link href="#" underline="none" sx={{ color: "primary.main", fontWeight: 500 }}>
                  Optimized for smarter
                </Link>{" "}
                trading with safety,transparency in every swap
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
      <Box sx={{py: 8 }}>
      <Container Width="300">
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          our Core Swap Functions
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{ maxWidth: "600px", mx: "auto", mb: 6, color: "text.secondary" }}
        >
          Swap crypto without native tokens. Matcha handles the gas for swaps and
          approvals so you can focus on trading.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {swap.map((swap, index) => (
            <Grid item xs={12} md={4} key={index}>
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
                    height:70,
                  }}
                />
                <Typography variant="h6" sx={{width: "297.1355285644531", height: "36",opacity: "1", margin:"50px",fontWeight:"600"}}>
                  {swap.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 1, maxWidth:260, margin:2}}
                >
                  {swap.description}{" "}
                  {swap.link && (
                    <Link href="#" underline="always">
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
      <Container  sx={{ 
        textAlign: "center", 
        py:8,
        minHeight:"100vh",
        backgroundImage: `url("assets/images/GaslessSwap/gasfun.png")`, // image inside public/assets folder
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover",
        backgroundPosition: "center -65%",

       }} >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          Available Supporting Chains
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Swap crypto without native tokens. Matcha handles the gas for<br/> swaps and approvals so you can focus on trading.
        </Typography>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2,marginLeft:100,}}>
          With High Volume
        </Typography>
         <img
                  src="assets/images/GaslessSwap/Dif.png"
                  alt="Description"
                  style={{
                    width: '620px',
                  height: '308px',
                  opacity: '1',
                  top: '270px',
                  left: '595px',
                  }}
                />
         <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 , marginRight:90,}}>
          With most 
          trending Pairs
        </Typography>
      </Container>
    <Divider/>
      {/* Unidex Auto Section */}
      <Container sx={{ py: 8, textAlign: "center"}}>
        <Card sx={{ bgcolor: "primary.main", color: "white", p: 4, borderRadius: 3, maxWidth: 500, mx: "auto" }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Unidex Auto
          </Typography>
        on  <Switch defaultChecked/> off 
          <List>
            {[
              "No gas needed",
              "MEV protection · No slippage",
              "130+ liquidity sources",
              "Smart Routing · Auto",
              "0.05% - 0.25% fee on certain pairs",
            ].map((text, i) => (
              <ListItem key={i}>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: "white" }} />
              </ListItem>
            ))}
          </List>
        </Card>
        <Typography variant="h4" sx={{ fontWeight: "bold", margin:4 }}>
          Available Supporting Chains
        </Typography>
        <Typography variant="h7" sx={{margin:4}}>
          Swap crypto without native tokens. Matcha handles the gas for
          swaps and approvals so you can focus on trading.
        </Typography>
      </Container>
       <Divider/>
    </Box>
   
  );
}
