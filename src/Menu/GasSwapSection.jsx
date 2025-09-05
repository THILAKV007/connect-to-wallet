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
  Link,
  Divider,
  ToggleButton,
  ToggleButtonGroup,  
  CardContent,
  

} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { styled } from '@mui/material/styles';
// import ShieldIcon from "@mui/icons-material/Shield";





export default function GasSwapSection() {
  
   

  // function to return background based on mode
 
  const [toggle, setToggle] = useState("on");

  const handleToggle = (_event, newValue) => {
    if (newValue !== null) setToggle(newValue);
  };
const SubTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Manrope',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '54.64px',
  color: '#B3B3B3',
  textAlign: 'center',
  marginBottom: theme.spacing(2),
}))

const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: '90vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  position: 'relative',
}))

const MainTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Manrope',
  fontWeight: 700,
  fontSize: '40px',
  lineHeight: '54.64px',
  color: 'text.primary',
  textAlign: 'center',
  marginBottom: theme.spacing(4),
}))



const ChainListContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  width: '250px',
  height: '308px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: theme.spacing(4),
}))

const ChainListImage = styled('img')({
         width:"900px",
         height:"400px",
})

const FeatureText = styled(Typography)(({ theme }) => ({
  fontFamily: 'Manrope',
  fontWeight: 700,
  fontSize: '23px',
  lineHeight: '31.42px',
  color: 'text.primary',
  textAlign: 'center',
  position: 'absolute',
  zIndex: 2,
}))

const HighVolumeText = styled(FeatureText)({
  top: '220px',
  right: '164px',
  width: '201px',
})

const TrendingPairsText = styled(FeatureText)({
  bottom: '30px',
  left: '100px',
  width: '201px',
})



 


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
              color: "white",
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
    {/* core function */}
     <Box sx={{ minHeight: "90vh", py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 700 }}>
          our Core Swap Functions
        </Typography>
        <Typography
          align="center"
          color="#B3B3B3"
          sx={{ mb: 6, fontSize: { xs: "1rem", md: "1.25rem"}}}
        >
          Swap crypto without native tokens.Unidex handles the gas for <br/> swaps and approvals so you can focus on trading.
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
                <Typography variant="h4" sx={{ fontWeight:700,textAlign:"initial" }} gutterBottom>
                  MEV protection
                </Typography>
                <Typography align="center" color="textSecondary" sx={{ mb: 2,textAlign:"initial"}}>
                  Say goodbye to sandwich attacks and <br/> frontrunning. Protect from MEV <br/> without a second thought.&nbsp;
                  <Button href="#" sx={{ textTransform: "none", p: 0, minWidth: 0 }}>Learn more.</Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3,width:360, height:300 }}>
              <CardContent sx={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
                <Box
                  component="img"
                 src="assets/images/GaslessSwap/dollar.svg"
                  alt=""
                  sx={{ width: "20%", height: "20%" }}
                />
                <Typography variant="h4" sx={{ fontWeight: 700,textAlign:"initial" }} gutterBottom>
                  Get more than <br/> you pay for
                </Typography>
                <Typography  color="textSecondary" textAlign="initial">
                  Save on slippage and cut <br/> down opportunity cost.
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
                <Typography variant="h4" sx={{ fontWeight: 700,textAlign:"initial" }} gutterBottom>
                  MEV protection
                </Typography>
                <Typography align="center" color="textSecondary" sx={{ mb: 2,textAlign:"initial" }}>
                  Say goodbye to sandwich attacks and <br/> frontrunning. Protect from MEV <br/> without a second thought.&nbsp;
                  <Button href="#" sx={{ textTransform: "none", p: 0, minWidth: 0 }}>Learn more.</Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
    <Divider/>
      
      
      
    {/* fourth section  */}
    <StyledContainer maxWidth={false} disableGutters>
      <Box sx={{ position: 'relative', width: '100%', maxWidth: '1440px' }}>
        <MainTitle>
          Available Supporting Chains
        </MainTitle>
        
        <SubTitle>
          Swap crypto without native tokens. Unidex handles the gas for <br/>
          swaps and approvals so you can focus on trading.
        </SubTitle>

       

        <ChainListContainer sx={{ margin: '0 auto' }}>
          <ChainListImage 
            src="assets/images/GaslessSwap/Group 48095754.png"
            alt="Chain List"
            width="100%"
            height="100%"
          />
        </ChainListContainer>

        <HighVolumeText>
          With High volume
        </HighVolumeText>

        <TrendingPairsText>
          With most <br/> trending Pairs
        </TrendingPairsText>
      </Box>
    </StyledContainer>
  


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
                color:"#0000",
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
                 color:"#0000",
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
          Swap crypto without native token.Unidex handles the gas for <br/> swaps
          and approvals so you can focus on trading.
        </Typography>
      </Box>
    
    </Box>
    
    
    
    
    
</Box>
  );
}
