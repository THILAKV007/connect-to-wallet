import React from "react";
import {
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
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
      src="assets/images/CrossChain/cross.png"
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
        where opportunity awaits
      </Typography>

      <Typography
        sx={{
          color: "text.primary",
          fontWeight: 700,
          fontSize: { xs: "36px", md: "62px" },
          lineHeight: { xs: 1.2, md: 1.1 },
        }}
      >
        Cross chain swaps
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
        Deep liquidity for the best prices on 9+ million tokens across 14 chains. Tap into 130+ <br/> liquidity sources aggregated by Unidex!
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
        id="trade-features-section"
        sx={{
          py: 8,
          px: 2,
          display: "flex",
          justifyContent: "center",
          fontFamily: "'Manrope', sans-serif",
          height:"60vh"
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
          <Box sx={{ flex: 1, maxWidth: { xs: "100%", md: 600 }, pt: 2 }}>
            <Box sx={{ maxWidth: { xs: "100%", md: 700 } }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "700",
                  mb: 4,
                  textAlign: { xs: "center", md: "initial" },
                }}
              >
                Move seamlessly across chains.
              </Typography>
              <Typography
                sx={{
                  fontWeight: 420,
                  mb: 4,
                  color: "#b3b3b3",
                  textAlign: { xs: "center", md: "initial" },
                }}
              >
                Swap tokens between chains in one trade to <br />
                keep pace with fast-moving markets.
              </Typography>
            </Box>
          </Box>

           {/* Right Side Swap Widget */}
          <Box
            sx={{
              width: 501,
              height: 513,
              top: 126,
              left: 815,
              borderRadius: 8,
              maxWidth: "100%",
            }}
          >
            <Box sx={{ flex: 1, maxWidth: 501, mx: "auto" }}>

              {/* Token Swap Visual */}
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 4,
                  flexDirection: { xs: "column", sm: "row" },
                  gap: { xs: 2, sm: 0 }, // Added gap for small screens
                }}
              >
                {/* Token Box 1 */}
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: 2,
                    width: { xs: "100%", sm: 210 },
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
                      sx={{ width: 62, height: 62, position: "center" }}
                    />
                  </Box>
                  <Typography sx={{ fontWeight: 700, fontSize: 14, color: "#000" }}>
                    253.63 USDC
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: 10,
                      color: "rgba(0,0,0,0.43)",
                    }}
                  >
                    $253.44
                  </Typography>
                </Box>

                {/* Swap Icon */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 3,
                  }}
                >
                  <Box
                    sx={{
                      width: 110,
                      height: 110,
                      borderRadius: "50%",
                      backgroundColor: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                    }}
                  >
                  </Box>
                </Box>

                {/* Token Box 2 */}
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: 2,
                    width: { xs: "100%", sm: 210 },
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
                    sx={{ width: 62, height: 62, position: "center" }}
                  />
                  <Typography sx={{ fontWeight: 700, fontSize: 14, color: "#000" }}>
                    0.06 ETH
                  </Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: 10, color: "#000" }}>
                    $253.44
                  </Typography>
                </Box>
              </Box>

              
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider />
      {/* third section */}
      <Box
        sx={{
          minHeight: "90vh",
          backgroundImage: "url('assets/images/CrossChain/edit.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 5, md: 20 }} alignItems="center">
            {/* Left Side Content */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  width: { xs: "100%", md: 378 },
                  height: "auto",
                  textAlign: { xs: "center", md: "initial" },
                }}
              >
                Better than CEXs <br /> for L2 trading
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  width: { xs: "100%", md: 443 },
                  height: "auto",
                  fontWeight: 400,
                  fontSize: 16,
                  textAlign: { xs: "center", md: "initial" },
                }}
              >
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
                  width: { xs: "100%", md: 500 },
                  height: "auto",
                  opacity: 1,
                }}
              >
                <CardContent>
                  <Grid container spacing={4}>
                    {/* Unidex Column */}
                    <Grid item xs={6}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#0099ff",
                          fontWeight: "bold",
                          mb: 2,
                          width: "83",
                          height: "51",
                          top: "51",
                          left: "102",
                        }}
                      >
                        Unidex
                      </Typography>
                      <List dense>
                        <ListItem>
                          <ListItemIcon>
                            <CheckIcon sx={{ color: "#b3b3b3" }} />
                          </ListItemIcon>
                          <ListItemText
                            primary="Aggregated liquidity"
                            sx={{
                              width: "100%",
                              height: "24",
                              opacity: "1",
                              top: "36px",
                              left: "20px",
                              color: "#b3b3b3",
                            }}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CheckIcon sx={{ color: "#b3b3b3" }} />
                          </ListItemIcon>
                          <ListItemText
                            primary="Trustless"
                            sx={{
                              width: "100%",
                              height: "24",
                              opacity: "1",
                              top: "36px",
                              left: "20px",
                              color: "#b3b3b3",
                            }}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CheckIcon sx={{ color: "#b3b3b3" }} />
                          </ListItemIcon>
                          <ListItemText
                            primary="Non-custodial"
                            sx={{
                              width: "100%",
                              height: "24",
                              opacity: "1",
                              top: "36px",
                              left: "20px",
                              color: "#b3b3b3",
                            }}
                          />
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
                          <ListItemText 
                          primary="Fragmented liquidity" 
                          sx={{color:"#b3b3b3"}} />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CloseIcon sx={{ color: "#b3b3b3" }} />
                          </ListItemIcon>
                          <ListItemText
                            primary="Requires deposits"
                            sx={{
                              width: "100%",
                              height: "24",
                              opacity: "1",
                              top: "36px",
                              left: "20px",
                              color: "#b3b3b3",
                            }}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CloseIcon sx={{ color: "#b3b3b3" }} />
                          </ListItemIcon>
                          <ListItemText
                            primary="Custodial apps"
                            sx={{
                              width: "100%",
                              height: "24",
                              opacity: "1",
                              top: "36px",
                              left: "20px",
                              color: "#b3b3b3",
                            }}
                          />
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
      <Divider />
      {/* four section */}
      <Box
        sx={{
          backgroundImage: "url('assets/images/CrossChain/center wave.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          alignItems: "center",
          textAlign: "center",
          py: 8,
        }}
      >
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
          sx={{
            width: { xs: "100%", md: "80%" },
            height: "auto",
            maxWidth: "100%",
          }}
        />
      </Box>
      <Divider />
    </Box>
  );
}