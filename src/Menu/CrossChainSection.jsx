import React from "react";
import {

  Typography,
  Button,
  Box,
  Container,
  Grid,Card, CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";


export default function CrossChainSection(isDarkMode) {
  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >  
    {/* first section */}
     <Box sx={{backgroundImage: `url("assets/images/swapToken/gradient.png")`,
          }}>
       
  

        {/* Hero Content */}
        <Box
          sx={{
            alignItems: "center",
            textAlign: "center",
            mt: { xs: "60px", sm: "100px", md: "143px" },
            position: "relative",
            zIndex:2,
            minHeight: "50vh",
            backgroundImage:'url("assets/images/CrossChain/y.png")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <Typography
            className="sub-heading"
            sx={{
              color: "#0c9fe3",
              fontWeight: 700,
              fontSize: { xs: "18px", sm: "20px", md: "24px" },
              lineHeight: "33px",
              fontFamily: "Manrope, sans-serif",
              pt:2,
            }}
          >
            where opportunity awaits
          </Typography>

          <Typography
            variant="h1"
            sx={{
              color: "text.primary",
              fontWeight: 700,
              fontSize: { xs: "36px", sm: "48px", md: "62px" },
              lineHeight: { xs: "1.2", md: "85px" },
              fontFamily: "Manrope, sans-serif",
              m: 0,
            }}
          >
            Cross chain swaps
          </Typography>

          <Typography
            sx={{
              color: "text.primary",
              fontWeight: 700,
              fontSize: { xs: "12px", sm: "14px" },
              lineHeight: "24px",
              fontFamily: "Manrope, sans-serif",
            }}
          >
            Deep liquidity for the best prices on 9+ million tokens across 14
            chains. Tap into 130+ <br /> liquidity sources aggregated by Unidex!
          </Typography>

          <Button
            sx={{
              background: "linear-gradient(90deg, #0da2e5 0%, #0488cb 100%)",
              color: "#fff",
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "24px",
              px: 2,
              py: 1,
              borderRadius: "8px",
              mt: 3,
            }}
          >
            Start Trading
          </Button>
        </Box>

        
     
      </Box>
    <Divider/>
    
     {/* new trade section */}
    <Box
      id="trade-features-section"
      sx={{
        py: 8,
        px: 2,
        display: "flex",
        justifyContent: "center",
        fontFamily: "'Manrope', sans-serif",
        height:"50vh",
      }}
    >
      <Box
        className="trade-features-container"
        sx={{
          maxWidth: 1248,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: { xs: 4, md: 8 },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Left Side Features */}
        <Box sx={{ flex: 1, maxWidth: 600, pt: 2 }}>

  <Box sx={{ maxWidth: 700 }}>
        <Typography variant="h4" sx={{ fontWeight:"700", mb: 4,textAlign:"initial"}}>
          Move seamlessly across chains.
        </Typography>
        <Typography sx={{ fontWeight: 420,mb: 4,color:"#b3b3b3",textAlign:"initial"}}>
         Swap tokens between chains inone trade to <br/>
keep pace with fast-movingmarkets.
        </Typography>
      </Box>
        </Box>

        {/* Right Side Swap Widget */}
        <Box sx={{ width:501,
          height:513,
          top:126,
          left:815,
          borderRadius:8,

        }}>
        <Box sx={{ flex: 1, maxWidth: 501 }}>
             

            {/* Token Swap Visual */}
            <Box sx={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4, flexDirection: { xs: "column", sm: "row" }}}>
              
              {/* Token Box 1 */}
              <Box
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: 2,
                  width: 210,
                  height: 163,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  pt: 3,
                  zIndex: 2,
                }}
              >
                <Box sx={{ width: 62, height: 62, position: "relative", mb: 2 }}>
                  <Box
                    component="img"
                    src="assets/images/swapToken/dollar.png"
                    alt="USDC token"
                    sx={{ width: 62, height: 62, position:"center"}}
                  />
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: 14, color: "#000" }}>253.63 USDC</Typography>
                <Typography sx={{ fontWeight: 500, fontSize: 10, color: "#b3b3b3" }}>
                  $253.44
                </Typography>
              </Box>

             

              {/* Token Box 2 */}
              <Box
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: 2,
                  width: 210,
                  height: 163,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  pt: 3,
                  zIndex: 2,
                }}
              >
                <Box
                  component="img"
                  src="assets/images/swapToken/eth.png"
                  alt="ETH token"
                  sx={{ width: 62, height: 62,position:"center",mb:2 }}
                />
                <Typography sx={{ fontWeight: 700, fontSize: 14, color: "#000" }}>0.06 ETH</Typography>
                <Typography sx={{ fontWeight: 700, fontSize: 10, color: "#b3b3b3" }}>$253.44</Typography>
                {/* Connecting Circle */}
              <Box
                sx={{
                  position: "absolute",
                  width:120,
                  height:130,
                  backgroundColor: "white",
                  borderRadius: "90%",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1,
                  display: { xs: "none", sm: "block" },
                }}
              />
              </Box>
              
            </Box>

        
        </Box>
        </Box>
      <Box
        component="img"
         src="assets/images/LimitorderSection/spiral.png"
        alt=""
        sx={{
          position: "absolute",
          bottom:-185,
          right: 0,
          width:120,
          height:120,
        }}
      /></Box>
    
    
    </Box>
    <Divider/>
    {/* third section */}
     <Box
      sx={{
        minHeight: "90vh", // light blue
        backgroundImage: "url('assets/images/CrossChain/edit.png')", // place wave background here
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        py: 8,
        textAlign:"center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={20} alignItems="center">
          {/* Left Side Content */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", mb: 2,width: 378,height: 135,textAlign:"initial"}}
            >
              Better than CEXs <br /> for L2 trading
            </Typography>
            <Typography
              variant="body1"
              sx={{width: 443,height: 67, fontWeight:400, fontSize:16,textAlign:"initial"}}>
              Trustless and non-custodial trades across chains. You stay in
              control of your funds.
            </Typography>
          </Grid>

          {/* Right Side Card */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                borderRadius: "20px",
                boxShadow: "0px 8px 24px rgba(0,0,0,0.08)",
                width:500,
                height:250,
              opacity: 1,}}>
              <CardContent>
                <Grid container spacing={4}>
                  {/* Unidex Column */}
                  <Grid item xs={6}>
                    <Typography
                      variant="h6"
                      sx={{ color: "#0099ff", fontWeight: "bold", mb: 2,width:"83", height:"51", top:"51", left:"102" }}
                    >
                      Unidex
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <CheckIcon sx={{ color: "#b3b3b3" }} />
                        </ListItemIcon>
                        <ListItemText primary="Aggregated liquidity" width="201.05999755859375"
height="24"
opacity="1"
top="36px"
left="20px"
color="#b3b3b3"
 />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckIcon sx={{ color: "#b3b3b3" }} />
                        </ListItemIcon>
                        <ListItemText primary="Trustless" width="201.05999755859375"
height="24"
opacity="1"
top="36px"
left="20px"/>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckIcon sx={{ color: "#b3b3b3"}} />
                        </ListItemIcon>
                        <ListItemText primary="Non-custodial" width="201.05999755859375"
height="24"
opacity="1"
top="36px"
left="20px" />
                      </ListItem>
                    </List>
                  </Grid>

                  {/* Other Dex Column */}
                  <Grid item xs={6}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", mb: 2 }}
                    >
                      Other Dex
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <CloseIcon sx={{ color: "#b3b3b3" }} />
                        </ListItemIcon>
                        <ListItemText primary="Fragmented liquidity"  />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CloseIcon sx={{ color: "#b3b3b3" }} />
                        </ListItemIcon>
                        <ListItemText primary="Requires deposits" width="201.05999755859375"
height="24"
opacity="1"
top="36px"
left="20px" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CloseIcon sx={{ color: "#b3b3b3" }} />
                        </ListItemIcon>
                        <ListItemText primary="Custodial apps" width="201.05999755859375"
height="24"
opacity="1"
top="36px"
left="20px" />
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
       <Divider/>
       {/* four section */}
        <Box  sx={{
        minHeight: "100vh", // light blue
        backgroundImage: "url('assets/images/CrossChain/center wave.png')", // place wave background here
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        alignItems: "center",
        py: 8,
        textAlign:"center",
      }}>
      {/* Section Title */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Available Supporting Chains
      </Typography>
      <Typography
        variant="body1"
        color="#b3b3b3"
        sx={{ mb: 6, maxWidth: 600, mx: "auto" }}
      >
        Swap crypto without native tokens. Unidex handles the gas for swaps and
        approvals so you can focus on trading.
      </Typography>
      <Box
                component="img"
                src="assets/images/CrossChain/List.png"
                alt="list"
                
              />
      </Box>
      <Divider/>
    </Box>
  );
}