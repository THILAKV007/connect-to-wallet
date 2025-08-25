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

export default function CrossChainSection() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#EFF8FF",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >      <Container sx={{ textAlign: "center", py: 10 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#0C9FE3",
 }}>
        Cross chain swaps
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: "bold", mt: 2 }}>
          Gasless swaps
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 , fontWeight:"700",}}>
          Deep liquidity for the best prices on 9+ million tokens across 14 chains. Tap into 130+ liquidity sources aggregated by Matcha!
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 4, px: 4 }}>
          Start Trading
        </Button>
      </Container>
    <Divider/>
    
    {/* second section */}
        <Box
      sx={{
        minHeight: "80vh",
        backgroundColor: "#EFF8FF", // light blue background
        backgroundImage:
          "radial-gradient(circle at 85% 80%, rgba(0,0,0,0.03) 0, transparent 40%)",
        display: "flex",
        alignItems: "center",
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", mb: 2, color: "#111",width: "488",height: "76",opacity:"1",}}>
              The best path <br /> to new networks
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "rgba(0,0,0,0.7)",width: "488",height: "45",opacity: "1"}}>
              Matcha does the hard work to find efficient and secure paths for
              your cross-chain trades.
            </Typography>
          </Grid>

          {/* Right Cards */}
 <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        mt: 4,
      }}
    >
      {/* First Token Card */}
      <Card
        sx={{
          borderRadius: "16px",
          p: 2,
          width: 180,
          textAlign: "center",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.05)",
        }}
      >
        <CardContent>
          <Box
            component="img"
            src="assets/images/CrossChain/do.png" // replace with your USDC image path
            alt="USDC"
            sx={{ width: 50, height: 50, mb: 1, mx: "auto" }}
          />
          <Typography variant="h6" fontWeight="bold">
            253.63USDC
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $253.44
          </Typography>
        </CardContent>
      </Card>

      {/* Second Token Card */}
      <Card
        sx={{
          borderRadius: "16px",
          p: 2,
          width: 180,
          textAlign: "center",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.05)",
        }}
      >
        <CardContent>
          <Box
            component="img"
            src="assets/images/CrossChain/eth.png" // replace with your ETH image path
            alt="ETH"
            sx={{ width: 50, height: 50, mb: 1, mx: "auto" }}
          />
          <Typography variant="h6" fontWeight="bold">
            0.06 ETH
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $253.44
          </Typography>
        </CardContent>
      </Card>
    </Box>
        </Grid>
      </Container>
    </Box>
    <Divider/>
    {/* third section */}
     <Box
      sx={{
        minHeight: "100vh", // light blue
        backgroundImage: "url('assets/images/CrossChain/waves.png')", // place wave background here
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left Side Content */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", mb: 2, color: "#111",width: 378,height: 135,}}
            >
              Better than CEXs <br /> for L2 trading
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "rgba(0,0,0,0.7)", width: 443,height: 67, fontWeight:400, fontSize:16,}}>
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
                width: 500,
                height:260,
              opacity: 1,}}>
              <CardContent>
                <Grid container spacing={4}>
                  {/* Unidex Column */}
                  <Grid item xs={6}>
                    <Typography
                      variant="h6"
                      sx={{ color: "#0099ff", fontWeight: "bold", mb: 2 }}
                    >
                      Unidex
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <CheckIcon sx={{ color: "#4caf50" }} />
                        </ListItemIcon>
                        <ListItemText primary="Aggregated liquidity" width="201.05999755859375"
height="24"
opacity="1"
top="36px"
left="20px"
 />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckIcon sx={{ color: "#4caf50" }} />
                        </ListItemIcon>
                        <ListItemText primary="Trustless" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckIcon sx={{ color: "#4caf50" }} />
                        </ListItemIcon>
                        <ListItemText primary="Non-custodial" />
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
                          <CloseIcon sx={{ color: "red" }} />
                        </ListItemIcon>
                        <ListItemText primary="Fragmented liquidity" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CloseIcon sx={{ color: "red" }} />
                        </ListItemIcon>
                        <ListItemText primary="Requires deposits"  />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CloseIcon sx={{ color: "red" }} />
                        </ListItemIcon>
                        <ListItemText primary="Custodial apps" />
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
        <Box sx={{ textAlign: "center", py: 8 ,background: "#EFF8FF",}}>
      {/* Section Title */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Available Supporting Chains
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 6, maxWidth: 600, mx: "auto" }}
      >
        Swap crypto without native tokens. Matcha handles the gas for swaps and
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