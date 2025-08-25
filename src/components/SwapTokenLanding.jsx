import React from "react";
import {
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BoltIcon from "@mui/icons-material/Bolt";
import AddIcon from "@mui/icons-material/Add";
import WhatshotIcon from "@mui/icons-material/Whatshot";

export default function SwapTokenLanding() {
  const features = [
    {
      icon: <BoltIcon sx={{ fontSize: 40, color: "white" }} />,
      text: "Faster trade Confirmation",
    },
    {
      icon: <AddIcon sx={{ fontSize: 40, color: "white" }} />,
      text: "Reduce failed rate by 75 %",
    },
    {
      icon: <WhatshotIcon sx={{ fontSize: 40, color: "white" }} />,
      text: "Matches handles Gases",
    },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>

      {/* Hero Section */}
      <Container sx={{ textAlign: "center", py: 8 }}>
        <Typography variant="h5" color="primary">
          Browse. Swap. Confirm.
        </Typography>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Swap Tokens
        </Typography>
        <Typography variant="body1" gutterBottom>
          Zero fee trades on 9+ million tokens across 14 chains. Get the best
          prices by tapping into 130+ liquidity sources.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ mt: 3, bgcolor: "#2196f3" }}
        >
          Start Trading
        </Button>
      </Container>

      <Divider />

      {/* Trade Prices Section */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom fontWeight="bold">
              Get unbeatable trade prices on Unidex.
            </Typography>
        <List>
          <ListItem>
     
            
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: "green" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography>
                  <Box component="span" sx={{ color: "#1976d2", fontWeight: 600 }}>
                    Scans multiple 
                  <Box component="span" sx={{ color: "#000000", fontWeight: 600 }}>
                  sources to find the best possible trade rates</Box>{" "}
                 </Box>{" "}
                </Typography>
              }
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: "green" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography>
                  <Box component="span" sx={{ color: "#1976d2", fontWeight: 600 , size:14}}>
                    Smart routing
                  </Box>{" "}
                  <Box component="span" sx={{ color: "#000000", fontWeight: 600 }}>
                  ensures maximum value across liquidity pools</Box>{" "}
                </Typography>
              }
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: "green" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography>
                  <Box component="span" sx={{ color: "#1976d2", fontWeight: 600 }}>
                    Protects against front-running 
                  </Box>{" "}
                  <Box component="span" sx={{ color: "#000000", fontWeight: 600 }}>
                  and sandwich attacks</Box>{" "}
                </Typography>
              }
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: "green" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography>
                  <Box component="span" sx={{ color: "#1976d2", fontWeight: 600 }}>
                    Alerts you to slippage
                  </Box>{" "}
                  <Box component="span" sx={{ color: "#000000", fontWeight: 600 }}>
                  and potential price impact before you trade</Box>{" "}
                </Typography>
              }
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: "green" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography>
                  <Box component="span" sx={{ color: "#1976d2", fontWeight: 600 }}>
                    Optimized for smarter
                  </Box>{" "}
                  <Box component="span" sx={{ color: "#000000", fontWeight: 600 }}>
                  trading with safety and transparency in every swap</Box>{" "}
                </Typography>
              }
            />
          </ListItem>
        </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
              <Typography variant="body2" color="text.secondary">
                Quote Expires in 20s
              </Typography>
              <Grid container spacing={2} justifyContent="center" sx={{ my: 2 }}>
                <Grid item>
                  <Paper sx={{ p: 2 }}>
                                    <img
                  src="assets/images/swapToken/dollar.png"
                  alt="Description"
                  style={{
                    width: '62px',
                  height: '62px',
                  opacity: '1',
                  top: '242px',
                  left: '906px',
                  }}
                />
                    <Typography variant="h6">253.63 USDC</Typography>
                    <Typography variant="body2" color="text.secondary">
                      $253.44
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper sx={{ p: 2 }}>
                    <img
                        src="assets/images/swapToken/eth.png"
                        alt="Description"
                        style={{
                        width: '62px',
                        height: '62px',
                        opacity: '1',
                        top: '242px',
                        left: '1148px',
                        }}
                          />
                    <Typography variant="h6">0.06 ETH</Typography>
                    <Typography variant="body2" color="text.secondary">
                      $253.44
                    </Typography>
                  </Paper>
                </Grid>
                
              </Grid>
              <Typography>Liquidity Providers: OxRFQ</Typography>
              <Typography>1 ETH = 1562.76 USDC</Typography>
              <Typography>Ethereum Fees: $23</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Divider />

      {/* MEV Protection */}
            <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, md: 8 },
        py: 6,
        backgroundColor: "#F0F9FF",
      }}
    >
      {/* Left Side Content */}
      <Box sx={{ maxWidth: 600 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 4 }}>
          MEV Protection
        </Typography>

        <List>
          <ListItem>
     
            
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: "green" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography>
                  <Box component="span" sx={{ color: "#1976d2", fontWeight: 600 }}>
                    RFQ Private
                  <Box component="span" sx={{ color: "#000000", fontWeight: 500 }}>
                  Settlement</Box>{" "}
                 </Box>{" "}
                </Typography>
              }
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: "green" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography>
                  <Box component="span" sx={{ color: "#1976d2", fontWeight: 600 , size:14}}>
                    No public mempool
                  </Box>{" "}
                  <Box component="span" sx={{ color: "#000000", fontWeight: 500 }}>
                  -no MEV Bot</Box>{" "}
                </Typography>
              }
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: "green" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography>
                  <Box component="span" sx={{ color: "#1976d2", fontWeight: 600 }}>
                    Enhanced protection with
                  </Box>{" "}
                  <Box component="span" sx={{ color: "#000000", fontWeight: 500 }}>
                  Unidex Auto</Box>{" "}
                </Typography>
              }
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: "green" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography>
                  <Box component="span" sx={{ color: "#1976d2", fontWeight: 600 }}>
                    Alerts you to slippage
                  </Box>{" "}
                  <Box component="span" sx={{ color: "#000000", fontWeight: 500 }}>
                  and potential price impact before you trade</Box>{" "}
                </Typography>
              }
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: "green" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography>
                  <Box component="span" sx={{ color: "#1976d2", fontWeight: 600 }}>
                    Optimized for smarter
                  </Box>{" "}
                  <Box component="span" sx={{ color: "#000000", fontWeight: 500 }}>
                  trading with safety,transparency in every swap</Box>{" "}
                 
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Box>

      {/* Right Side Image */}
      <Box
        component="img"
        src="assets/images/swapToken/protection.png" // <-- place your image in public folder
        alt="MEV Protection Shield"
        sx={{
          width: { xs: "200px", md: "300px" },
        }}
      />
    </Box>

      <Divider />


      {/* Smart Routing */}
                <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, md: 8 },
        py: 6,
        backgroundColor: "#F0F9FF",
      }}
    > {/* Right Side Image */}
      <Box
        component="img"
        src="assets/images/swapToken/Rectangle.png" // <-- place your image in public folder
        alt="MEV Protection Shield"
        sx={{
          width: { xs: "250px", md: "400px" },
          height: "auto",
        }}
      /> {/* Left Side Content */}
      <Box sx={{ maxWidth: 600 }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 4 }}>
          Smart Routing
        </Typography>

        <List>
          <ListItem>
     
            
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: "green" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography>
                  <Box component="span" sx={{ color: "#1976d2", fontWeight: 600 }}>
                    Unidex Source the market for the best prices
                 </Box>{" "}
                </Typography>
              }
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: "green" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography>
                  <Box component="span" sx={{ color: "#1976d2", fontWeight: 600 , size:14}}>
                    No public mempool
                  </Box>{" "}
                  <Box component="span" sx={{ color: "#000000", fontWeight: 500 }}>
                  -no MEV Bot</Box>{" "}
                </Typography>
              }
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: "green" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography>
                  <Box component="span" sx={{ color: "#1976d2", fontWeight: 600 }}>
                  Enhanced protection with Matcha Auto
                  </Box>{" "}
                  
                </Typography>
              }
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: "green" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography>
                  <Box component="span" sx={{ color: "#1976d2", fontWeight: 600 }}>
                    Alerts you to slippage
                  </Box>{" "}
                  <Box component="span" sx={{ color: "#000000", fontWeight: 500 }}>
                  and potential price impact before you trade</Box>{" "}
                </Typography>
              }
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon sx={{ color: "green" }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography>
                  <Box component="span" sx={{ color: "#1976d2", fontWeight: 600 }}>
                    Optimized for smarter
                  </Box>{" "}
                  <Box component="span" sx={{ color: "#000000", fontWeight: 500 }}>
                  trading with safety,transparency in every swap </Box>{" "}
                 
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
     <Divider/>


      {/* New Trade Mode */}
      <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #F0F9FF, #F0F9FF)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        py: 6,
      }}
    >
      {/* Title */}
      <Typography variant="h6" sx={{ color: "#2196f3", fontWeight: 600 }}>
        New Trade Mode :
      </Typography>
      <Typography variant="h3" sx={{ fontWeight: "bold", my: 1 }}>
        Swap Tokens
      </Typography>
      <Typography variant="subtitle1" sx={{ color: "white", mb: 6, fontWeight:"700"}}>
        Great Prices, with more speed and less worry
      </Typography>

      {/* Features */}
      <Grid container spacing={6} justifyContent="center">
        {features.map((item, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper
              elevation={0}
              sx={{
                background: "transparent",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Circle with Icon */}
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, #0288d1 60%, #03a9f4 90%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                {item.icon}
              </Box>

              {/* Text */}
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {item.text}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
    <Divider/>
    </Box>
  );
}
