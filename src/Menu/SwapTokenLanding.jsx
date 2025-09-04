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
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BoltIcon from '@mui/icons-material/Bolt';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';


export default function SwapTokenLanding(isDarkMode) {
   const isTablet = useMediaQuery("(max-width:992px)");
  const isMobile = useMediaQuery("(max-width:768px)");
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

  return (
    <Box sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
      }}>

     
      {/* Hero Section */}
      <Box sx={{
        py:4,
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
          minHeight: { md: "515px" },
          overflow: "hidden",
        }}
      >
        {/* Single Background Decoration */}
        <Box
          component="img"
          src="assets/images/swapToken/swapback.png"
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
            Browse. Swap. Confirm.
          </Typography>

          <Typography
            sx={{
              color: "text.primary",
              fontWeight: 700,
              fontSize: { xs: "48px", md: "62px" },
              lineHeight: 1.1,
            }}
          >
            Swap Tokens
          </Typography>

          <Typography
            sx={{
              color: "text.primary",
              fontWeight: 700,
              fontSize: { xs: "13px", md: "14px" },
              lineHeight: "24px",
            }}
          >
            Zero fee trades on 9+ million tokens across 14 chains. Get the best
            prices by tapping into 130+ liquidity sources
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
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 4 }}>
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
                  <Box component="span" sx={{ color: "#1976d2", fontWeight: 700, fontStyle:"bold",fontSize:14,}}>
                   Scans multiple
                  <Box component="span" sx={{ color: "text.primary", fontWeight: 700, fontStyle:"bold",fontSize:14, }}>
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
                  <Box component="span" sx={{ color: "#1976d2", fontWeight: 700, fontStyle:"bold",fontSize:14,}}>
                    Smart routing 
                  </Box>{" "}
                  <Box component="span" sx={{color: "text.primary", fontWeight: 700, fontStyle:"bold",fontSize:14, }}>
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
                  <Box component="span" sx={{ color: "#1976d2", fontWeight: 700, fontStyle:"bold",fontSize:14,}}>
                    Protects against front-running
                  </Box>{" "}
                  <Box component="span" sx={{color: "text.primary", fontWeight: 700, fontStyle:"bold",fontSize:14,}}>
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
                  <Box component="span" sx={{ color: "#1976d2", fontWeight: 700, fontStyle:"bold",fontSize:14,}}>
                    Alerts you to slippage
                  </Box>{" "}
                  <Box component="span" sx={{ color: "text.primary", fontWeight: 700, fontStyle:"bold",fontSize:14, }}>
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
                  <Box component="span" sx={{ color: "#1976d2", fontWeight: 700, fontStyle:"bold",fontSize:14,}}>
                    Optimized for smarter
                  </Box>{" "}
                  <Box component="span" sx={{ color: "text.primary", fontWeight: 700, fontStyle:"bold",fontSize:14,}}>
                  trading with safety,transparency in every swap</Box>{" "}
                 
                </Typography>
              }
            />
          </ListItem>
        </List>
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
       
            <Typography
              sx={{ textAlign: "center", color: "#0ea5e9", fontWeight: 700, fontSize: 14, mb: 6 }}
            >
              Quote Expires in 20s
            </Typography>
             

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
                    sx={{ width: 62, height: 62,position:"center" }}
                  />
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: 14, color: "#000" }}>253.63 USDC</Typography>
                <Typography sx={{ fontWeight: 500, fontSize: 10, color: "rgba(0,0,0,0.43)" }}>
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
                 sx={{ width: 62, height: 62,position:"center" }}
                />
                <Typography sx={{ fontWeight: 700, fontSize: 14, color: "#000" }}>0.06 ETH</Typography>
                <Typography sx={{ fontWeight: 700, fontSize: 10, color: "#000" }}>$253.44</Typography>
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

            {/* Swap Details */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {[
                { label: "Liquidity Providers", value: "OxRFQ" },
                { label: "Rate", value: "1 ETH = 1562.76 USDC($1562.77)" },
                { label: "Ethereum Fees", value: "$ 23" },
              ].map((row, i) => (
                <Box key={i} sx={{ display: "flex", justifyContent: "space-between", flexDirection: { xs: "column", sm: "row" }, gap: { xs: 0.5, sm: 0 } }}>
                  <Typography sx={{ fontWeight: 700, fontSize: 14, color: "text.primary" }}>{row.label}</Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: 14, color: "text.primary", textAlign: { xs: "left", sm: "right" } }}>{row.value}</Typography>
                </Box>
              ))}
            </Box>
      
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
      {!isTablet && (
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
      )}

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
              width: { xs: 280, md: 371 },
              height: { xs: "auto", md: 456 },
            }}
          />
        </Box>
      </Container>
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
                  <Box component="span" sx={{ color: "#1976d2", fontWeight: 700, fontStyle:"bold",fontSize:14,}}>
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
                  <Box component="span" sx={{ color: "#1976d2", fontWeight: 700, fontStyle:"bold",fontSize:14,}}>
                    No public mempool
                  </Box>{" "}
                  <Box component="span" sx={{ color: "text.primary", fontWeight: 700, fontStyle:"bold",fontSize:14, }}>
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
                  <Box component="span" sx={{ color: "#1976d2", fontWeight: 700, fontStyle:"bold",fontSize:14,}}>
                  Enhanced protection with Unidex Auto
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
                  <Box component="span" sx={{ color: "#1976d2",fontWeight: 700, fontStyle:"bold",fontSize:14,}}>
                    Alerts you to slippage
                  </Box>{" "}
                  <Box component="span" sx={{color: "text.primary", fontWeight: 700, fontStyle:"bold",fontSize:14,}}>
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
                  <Box component="span" sx={{ color: "#1976d2", fontWeight: 700, fontStyle:"bold",fontSize:14,}}>
                    Optimized for smarter
                  </Box>{" "}
                  <Box component="span" sx={{color: "text.primary", fontWeight: 700, fontStyle:"bold",fontSize:14,}}>
                  trading with safety,transparency in every swap </Box>{" "}
                 
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
     <Divider/>
    {/* last section */}
    <Box sx={{
        
        fontFamily: "'Manrope', sans-serif",
        color: "text.primary",
        backgroundImage: `url("assets/images/swapToken/gradient.png")`,
      }}
    >
      <Box sx={{
        minHeight:"70vh",
        backgroundImage: "url('assets/images/CrossChain/edit.png')", // place wave background here
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
       
      }}> 
  <Typography
    variant="h5"
    sx={{
      color: '#2196f3',
      fontWeight: 700,
      mt: 4,
      mb: 1,
      textAlign: 'center',
    }}
  >
    New Trade Mode :
  </Typography>
  <Typography
    variant="h2"
    sx={{
      fontWeight: 800,
      mb: 2,
      color: 'text.primary',
      textAlign: 'center',
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
      opacity: 0.75
    }}
  >
    Great Prices, with more speed and less worry
  </Typography>
  
  <Grid
    container
    spacing={40}
    justifyContent="center"
    alignItems="flex-start"
    sx={{ mt:2, mb: 8 }}
  >
    <Grid item xs={12} md={4} display="flex" flexDirection="column" alignItems="center">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "rgba(33,150,243,0.8)",
          borderRadius: "50%",
          width: 140,
          height: 140,
          boxShadow: "0 0 50px 5px #bbe2fd",
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
          color: "text.primary"
        }}>
        Faster trade Confirmation
      </Typography>
    </Grid>
    <Grid item xs={12} md={4} display="flex" flexDirection="column" alignItems="center">
      <Box
        sx={{
        
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "rgba(33,150,243,0.8)",
          borderRadius: "50%",
          width: 140,
          height: 140,
          boxShadow: "0 0 50px 5px #bbe2fd",
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
          color: "text.primary"
        }}>
        Reduce failed rate by 75 %
      </Typography>
    </Grid>
    <Grid item xs={12} md={4} display="flex" flexDirection="column" alignItems="center">
      <Box
        sx={{
          
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "rgba(33,150,243,0.8)",
          borderRadius: "50%",
          width: 140,
          height: 140,
          boxShadow: "0 0 50px 5px #bbe2fd",
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
          color: "text.primary"
        }}>
        Matches handles Gases
      </Typography>
    </Grid>
  </Grid>
  </Box>
</Box>

    <Divider/>
    </Box>
  );
}
