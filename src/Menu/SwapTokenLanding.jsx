"use client"
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
  useTheme,
} from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import BoltIcon from "@mui/icons-material/Bolt"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment"

export default function SwapTokenLanding({ isDarkMode }) {

  const theme = useTheme()

  
  const isMd = useMediaQuery(theme.breakpoints.down("md")) // Tablets (900px)
  const isMobile = useMediaQuery("(max-width: 768px)")

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
          <span style={{ color: "#0ea5e9" }}>No public mempool - </span>no MEV bots
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
          <span style={{ color: "#0ea5e9" }}>Alerts you to slippage</span> and potential price impact before you trade
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
  ]

  const swap = [
    {
      icon: <BoltIcon sx={{ fontSize: { xs: 24, sm: 32, md: 40 }, color: "white" }} />,
      title: "Faster trade Confirmation",
    },
    {
      icon: <AddCircleOutlineIcon sx={{ fontSize: { xs: 24, sm: 32, md: 40 }, color: "white" }} />,
      title: "Reduce failed rate by 75 %",
    },
    {
      icon: <LocalFireDepartmentIcon sx={{ fontSize: { xs: 24, sm: 32, md: 40 }, color: "white" }} />,
      title: "Matches handles Gases",
    },
  ]

  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
           // Responsive padding
          fontFamily: "'Manrope', sans-serif",
          color: "text.primary",
          backgroundImage: `url("assets/images/swapToken/gradient.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
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
            minHeight: {
              xs: "400px", // iPhone SE and small phones
              sm: "450px", // Standard phones
              md: "500px", // Tablets
              lg: "515px", // Desktop
            },
            overflow: "hidden",
            px: { xs: 2, sm: 3, md: 4 }, // Responsive horizontal padding
          }}
        >
          {/* Single Background Decoration */}
          <Box
            component="img"
            src="assets/images/swapToken/swapback.png"
            alt="hero background decor"
            sx={{
              position: "absolute",
              top: {
                xs: "30px", // iPhone SE
                sm: "40px", // Standard phones
                md: "35px", // Tablets and up
              },
              width: {
                xs: "120%", // Slightly wider on small screens
                sm: "110%",
                md: "100%",
                lg: "901px",
              },
              maxWidth: "901px",
              left: "50%",
              transform: "translateX(-50%)", // Center the background image
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
              gap: { xs: "16px", sm: "20px", md: "22px" }, // Responsive gap
              maxWidth: { xs: "100%", sm: "500px", md: "582px" },
              width: "100%",
              px: { xs: 1, sm: 2 }, // Inner padding for content
            }}
          >
            <Typography
              sx={{
                color: "#0c9fe3",
                fontWeight: 700,
                fontSize: {
                  xs: "16px", // iPhone SE
                  sm: "18px", // Standard phones
                  md: "20px", // Tablets
                  lg: "24px", // Desktop
                },
                lineHeight: { xs: "24px", sm: "28px", md: "32.78px" },
                textAlign: "center",
              }}
            >
              Browse. Swap. Confirm.
            </Typography>

            <Typography
              sx={{
                color: "text.primary",
                fontWeight: 700,
                fontSize: {
                  xs: "32px", // iPhone SE
                  sm: "40px", // Standard phones
                  md: "48px", // Tablets
                  lg: "62px", // Desktop
                },
                lineHeight: { xs: 1.1, sm: 1.1, md: 1.1 },
                textAlign: "center",
              }}
            >
              Swap Tokens
            </Typography>

            <Typography
              sx={{
                color: "text.primary",
                fontWeight: 700,
                fontSize: {
                  xs: "12px", // iPhone SE
                  sm: "13px", // Standard phones
                  md: "14px", // Tablets and up
                },
                lineHeight: { xs: "20px", sm: "22px", md: "24px" },
                textAlign: "center",
                px: { xs: 1, sm: 2 }, // Additional padding for readability
              }}
            >
              Zero fee trades on 9+ million tokens across 14 chains. Get the best prices by tapping into 130+ liquidity
              sources
            </Typography>

            <Button
              variant="contained"
              sx={{
                borderRadius: "8px",
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: { xs: "14px", sm: "15px", md: "16px" }, // Responsive font size
                lineHeight: "24px",
                backgroundColor: "#0488cb",
                "&:hover": {
                  backgroundColor: "#0366a3",
                },
                color: "white",
                textTransform: "none",
                px: { xs: 3, sm: 4, md: 5 }, // Responsive padding
                py: { xs: 1.5, sm: 2 }, // Responsive vertical padding
                minWidth: { xs: "140px", sm: "160px" }, // Minimum button width
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
            
          }}
        >
          {/* Left Side Features */}
          <Box
            sx={{
              flex: 1,
              maxWidth: { xs: "50%", lg: 600 },
              pt: { xs: 1, sm: 2 }, // Responsive top padding
              order: { xs: 2, lg: 1 }, // Reorder on mobile
            }}
          >
            <Box sx={{ maxWidth: { xs: "100%", lg: 700 } }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                  mb: { xs: 2, sm: 3, md: 4 }, // Responsive margin
                  textAlign: { xs: "center", lg: "initial" }, // Center on mobile
                  
                }}
              >
                Get unbeatable trade prices on Unidex.
              </Typography>

              <List sx={{ px: { xs: 0, sm: 1 } }}>
                {" "}
                <ListItem sx={{ px: { xs: 0, sm: 2 }, py: { xs: 0.5, sm: 1 } }}>
                  {" "}
                  <ListItemIcon sx={{ minWidth: { xs: 32, sm: 40 } }}>
                    {" "}
                    <CheckCircleIcon sx={{ color: "green", fontSize: { xs: 20, sm: 24 } }} />{" "}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography sx={{ fontSize: { xs: 12, sm: 13, md: 14 } }}>
                        {" "}
                        <Box component="span" sx={{ color: "#1976d2", fontWeight: 700, fontStyle: "bold" }}>
                          Scans multiple
                        </Box>{" "}
                        <Box component="span" sx={{ color: "text.primary", fontWeight: 700, fontStyle: "bold" }}>
                          sources to find the best possible trade rates
                        </Box>{" "}
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem sx={{ px: { xs: 0, sm: 2 }, py: { xs: 0.5, sm: 1 } }}>
                  <ListItemIcon sx={{ minWidth: { xs: 32, sm: 40 } }}>
                    <CheckCircleIcon sx={{ color: "green", fontSize: { xs: 20, sm: 24 } }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography sx={{ fontSize: { xs: 12, sm: 13, md: 14 } }}>
                        <Box component="span" sx={{ color: "#1976d2", fontWeight: 700, fontStyle: "bold" }}>
                          Smart routing
                        </Box>{" "}
                        <Box component="span" sx={{ color: "text.primary", fontWeight: 700, fontStyle: "bold" }}>
                          ensures maximum value across liquidity pools
                        </Box>{" "}
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem sx={{ px: { xs: 0, sm: 2 }, py: { xs: 0.5, sm: 1 } }}>
                  <ListItemIcon sx={{ minWidth: { xs: 32, sm: 40 } }}>
                    <CheckCircleIcon sx={{ color: "green", fontSize: { xs: 20, sm: 24 } }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography sx={{ fontSize: { xs: 12, sm: 13, md: 14 } }}>
                        <Box component="span" sx={{ color: "#1976d2", fontWeight: 700, fontStyle: "bold" }}>
                          Protects against front-running
                        </Box>{" "}
                        <Box component="span" sx={{ color: "text.primary", fontWeight: 700, fontStyle: "bold" }}>
                          and sandwich attacks
                        </Box>{" "}
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem sx={{ px: { xs: 0, sm: 2 }, py: { xs: 0.5, sm: 1 } }}>
                  <ListItemIcon sx={{ minWidth: { xs: 32, sm: 40 } }}>
                    <CheckCircleIcon sx={{ color: "green", fontSize: { xs: 20, sm: 24 } }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography sx={{ fontSize: { xs: 12, sm: 13, md: 14 } }}>
                        <Box component="span" sx={{ color: "#1976d2", fontWeight: 700, fontStyle: "bold" }}>
                          Alerts you to slippage
                        </Box>{" "}
                        <Box component="span" sx={{ color: "text.primary", fontWeight: 700, fontStyle: "bold" }}>
                          and potential price impact before you trade
                        </Box>{" "}
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem sx={{ px: { xs: 0, sm: 2 }, py: { xs: 0.5, sm: 1 } }}>
                  <ListItemIcon sx={{ minWidth: { xs: 32, sm: 40 } }}>
                    <CheckCircleIcon sx={{ color: "green", fontSize: { xs: 20, sm: 24 } }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography sx={{ fontSize: { xs: 12, sm: 13, md: 14 } }}>
                        <Box component="span" sx={{ color: "#1976d2", fontWeight: 700, fontStyle: "bold" }}>
                          Optimized for smarter
                        </Box>{" "}
                        <Box component="span" sx={{ color: "text.primary", fontWeight: 700, fontStyle: "bold" }}>
                          trading with safety,transparency in every swap
                        </Box>{" "}
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Box>
          </Box>

          {/* Right Side Swap Widget */}
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "90%",
                md: "80%",
                lg: "501px",
              },
              maxWidth: "501px",
              height: "auto", // Auto height for responsiveness
              borderRadius: 2,
              
            }}
          >
            <Box sx={{ flex: 1, width: "100%" }}>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#0ea5e9",
                  fontWeight: 700,
                  fontSize: { xs: 12, sm: 13, md: 14 }, // Responsive font size
                  mb: { xs: 3, sm: 4, md: 6 }, // Responsive margin
                }}
              >
                Quote Expires in 20s
              </Typography>

             {/* Right Side Swap Widget */}
        <Box sx={{ width:501,
          height:513,
          top:126,
          left:815,
          borderRadius:8,

        }}>
        <Box sx={{ flex: 1, maxWidth: 501}}>
             

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
        </Box>
      </Box>

      <Divider />

      {/* MEV Protection */}
      <Box
        id="mev-protection"
        sx={{
          position: "relative",
          overflow: "hidden",
          py: { xs: 4, sm: 6, md: 8, lg: 10 }, // Responsive padding
          px: { xs: 2, sm: 3 }, // Add horizontal padding
        }}
      >
        {/* Background Shapes (hidden on tablet/mobile) */}
        {!isMd && ( // Hide on medium screens and below
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
                  width: { lg: 801, xl: 801 }, // Responsive background shapes
                  height: { lg: 801, xl: 801 },
                  left: `${778 + idx * 120}px`,
                  display: { xs: "none", lg: "block" }, // Only show on large screens
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
            gap: { xs: 4, sm: 5, md: 6, lg: 8 }, // Responsive gap
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
              maxWidth: { xs: "100%", md: "530px" }, // Ensure proper width constraint
            }}
          >
            <Typography
              variant={isMobile ? "h4" : "h3"}
              sx={{
                fontWeight: 700,
                mb: { xs: 3, sm: 4, md: 6, lg: 9 }, // Responsive margin
                lineHeight: { xs: 1.2, sm: 1.3, md: "55px" }, // Responsive line height
                color: "text.primary",
                fontSize: {
                  xs: "28px", // iPhone SE
                  sm: "32px", // Standard phones
                  md: "36px", // Tablets
                  lg: "42px", // Desktop
                },
              }}
            >
              MEV Protection
            </Typography>

            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 1.5, sm: 2 }, // Responsive gap
                px: { xs: 0, sm: 1 }, // Remove padding on small screens
              }}
            >
              {features.map((item, idx) => (
                <ListItem
                  key={idx}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: { xs: 1.5, sm: 2 }, // Responsive gap
                    p: 0,
                    px: { xs: 0, sm: 1 }, // Responsive padding
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "unset" }}>
                    <Box
                      component="img"
                      src={item.icon}
                      alt="Checkmark icon"
                      sx={{
                        width: { xs: 20, sm: 22, md: 24 }, // Responsive icon size
                        height: { xs: 20, sm: 22, md: 24 },
                        mt: "2px",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: { xs: 12, sm: 13, md: 14 }, // Responsive font size
                      fontWeight: 700,
                      lineHeight: { xs: "20px", sm: "22px", md: "24px" }, // Responsive line height
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
              maxWidth: { xs: "300px", sm: "400px", md: "50%" }, // Responsive max width
            }}
          >
            <Box
              component="img"
              src="assets/images/swapToken/protection.png"
              alt="MEV Protection Shield"
              sx={{
                width: "50%", // Full width within container
                height: "50%", // Maintain aspect ratio
                maxWidth: { xs: "250px", sm: "350px", md: "100%" }, // Responsive max width
              }}
            />
          </Box>
        </Container>
      </Box>
      <Divider />

      {/* Smart Routing */}
      <Box
        sx={{
          minHeight: { xs: "auto", md: "100vh" }, // Auto height on mobile
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, sm: 3, md: 6, lg: 8 }, // Responsive padding
          py: { xs: 4, sm: 5, md: 6 }, // Responsive vertical padding
          flexDirection: { xs: "column", md: "row" }, // Stack on mobile
          gap: { xs: 4, sm: 5, md: 6 }, // Add gap between elements
        }}
      >
         {/* Left Side Content */}
        <Box
          sx={{
            maxWidth: { xs: "100%", md: 600 },
            order: { xs: 2, md: 1 }, // Show content second on mobile
            textAlign: { xs: "center", md: "left" }, // Center text on mobile
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: { xs: 3, sm: 4 }, // Responsive margin
              textAlign: { xs: "center", md: "initial" }, // Center on mobile
              fontSize: {
                xs: "28px", // iPhone SE
                sm: "32px", // Standard phones
                md: "36px", // Tablets
                lg: "42px", // Desktop
              },
            }}
          >
            Smart Routing
          </Typography>

          <List sx={{ px: { xs: 0, sm: 1 } }}>
            {" "}
            <ListItem sx={{ px: { xs: 0, sm: 2 }, py: { xs: 0.5, sm: 1 } }}>
              <ListItemIcon sx={{ minWidth: { xs: 32, sm: 40 } }}>
                <CheckCircleIcon sx={{ color: "green", fontSize: { xs: 20, sm: 24 } }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: { xs: 12, sm: 13, md: 14 } }}>
                    <Box component="span" sx={{ color: "#1976d2", fontWeight: 700, fontStyle: "bold" }}>
                      Unidex Source the market for the best prices
                    </Box>{" "}
                  </Typography>
                }
              />
            </ListItem>
            <ListItem sx={{ px: { xs: 0, sm: 2 }, py: { xs: 0.5, sm: 1 } }}>
              <ListItemIcon sx={{ minWidth: { xs: 32, sm: 40 } }}>
                <CheckCircleIcon sx={{ color: "green", fontSize: { xs: 20, sm: 24 } }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: { xs: 12, sm: 13, md: 14 } }}>
                    <Box component="span" sx={{ color: "#1976d2", fontWeight: 700, fontStyle: "bold" }}>
                      No public mempool
                    </Box>{" "}
                    <Box component="span" sx={{ color: "text.primary", fontWeight: 700, fontStyle: "bold" }}>
                      -no MEV Bot
                    </Box>{" "}
                  </Typography>
                }
              />
            </ListItem>
            <ListItem sx={{ px: { xs: 0, sm: 2 }, py: { xs: 0.5, sm: 1 } }}>
              <ListItemIcon sx={{ minWidth: { xs: 32, sm: 40 } }}>
                <CheckCircleIcon sx={{ color: "green", fontSize: { xs: 20, sm: 24 } }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: { xs: 12, sm: 13, md: 14 } }}>
                    <Box component="span" sx={{ color: "#1976d2", fontWeight: 700, fontStyle: "bold" }}>
                      Enhanced protection with Unidex Auto
                    </Box>{" "}
                  </Typography>
                }
              />
            </ListItem>
            <ListItem sx={{ px: { xs: 0, sm: 2 }, py: { xs: 0.5, sm: 1 } }}>
              <ListItemIcon sx={{ minWidth: { xs: 32, sm: 40 } }}>
                <CheckCircleIcon sx={{ color: "green", fontSize: { xs: 20, sm: 24 } }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: { xs: 12, sm: 13, md: 14 } }}>
                    <Box component="span" sx={{ color: "#1976d2", fontWeight: 700, fontStyle: "bold" }}>
                      Alerts you to slippage
                    </Box>{" "}
                    <Box component="span" sx={{ color: "text.primary", fontWeight: 700, fontStyle: "bold" }}>
                      and potential price impact before you trade
                    </Box>{" "}
                  </Typography>
                }
              />
            </ListItem>
            <ListItem sx={{ px: { xs: 0, sm: 2 }, py: { xs: 0.5, sm: 1 } }}>
              <ListItemIcon sx={{ minWidth: { xs: 32, sm: 40 } }}>
                <CheckCircleIcon sx={{ color: "green", fontSize: { xs: 20, sm: 24 } }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: { xs: 12, sm: 13, md: 14 } }}>
                    <Box component="span" sx={{ color: "#1976d2", fontWeight: 700, fontStyle: "bold" }}>
                      Optimized for smarter
                    </Box>{" "}
                    <Box component="span" sx={{ color: "text.primary", fontWeight: 700, fontStyle: "bold" }}>
                      trading with safety,transparency in every swap{" "}
                    </Box>{" "}
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Box>
        {/* Right Side Image */}
        <Box
          component="img"
          src="assets/images/swapToken/Rectangle.png"
          alt="Smart Routing Visualization"
          sx={{
            width: {
              xs: "100%", // Full width on mobile
              sm: "300px",
              md: "350px",
              lg: "400px",
            },
            maxWidth: "400px", // Set max width
            height: "auto",
            order: { xs: 1, md: 2 }, // Show image first on mobile
          }}
        />

       
      </Box>
      <Divider />

      {/* last section */}
      <Box
        sx={{
          fontFamily: "'Manrope', sans-serif",
          color: "text.primary",
          backgroundImage: `url("assets/images/swapToken/gradient.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            minHeight: { xs: "70vh", sm: "80vh", md: "90vh" }, // Responsive height
            backgroundImage: "url('assets/images/CrossChain/edit.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Box
            sx={{
              py: { xs: 6, sm: 8, md: 10 }, // Responsive padding
              textAlign: "center",
              px: { xs: 2, sm: 3 }, // Add horizontal padding
            }}
          >
            <Container>
              {/* Section Title */}
              <Typography
                variant="h6"
                sx={{
                  color: "#2196f3",
                  mb: 1,
                  fontSize: { xs: "14px", sm: "16px", md: "18px" }, // Responsive font size
                }}
              >
                New Trade Mode :
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  color: "text.primary",
                  fontSize: {
                    xs: "28px", // iPhone SE
                    sm: "32px", // Standard phones
                    md: "36px", // Tablets
                    lg: "42px", // Desktop
                  },
                }}
              >
                Swap Tokens
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#b0bec5",
                  mb: { xs: 4, sm: 5, md: 6 }, // Responsive margin
                  fontSize: { xs: "14px", sm: "15px", md: "16px" }, // Responsive font size
                  px: { xs: 2, sm: 0 }, // Add padding on mobile for better readability
                }}
              >
                Great Prices, with more speed and less worry
              </Typography>

              {/* Features */}
              <Grid
                container
                spacing={{ xs: 4, sm: 6, md: 8, lg: 35 }} // Responsive spacing
                justifyContent="center"
              >
                {swap.map((swapItem, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={6} // Two columns on small screens
                    md={4}
                    key={index}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      mb: { xs: 2, sm: 0 }, // Add margin bottom on mobile
                    }}
                  >
                    {/* Circle Icon */}
                    <Box
                      sx={{
                        width: {
                          xs: 80, // iPhone SE
                          sm: 100, // Standard phones
                          md: 110, // Tablets
                          lg: 130, // Desktop
                        },
                        height: {
                          xs: 80,
                          sm: 100,
                          md: 110,
                          lg: 130,
                        },
                        borderRadius: "50%",
                        backgroundImage: "url('assets/images/swapToken/circle inner.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
                        mb: { xs: 2, sm: 2.5, md: 3 }, // Responsive margin
                      }}
                    >
                      {swapItem.icon}
                    </Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: "500",
                        fontSize: { xs: "14px", sm: "15px", md: "16px" }, // Responsive font size
                        textAlign: "center",
                        px: { xs: 1, sm: 0 }, // Add padding on mobile
                      }}
                    >
                      {swapItem.title}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        </Box>
      </Box>

      <Divider />
    </Box>
  )
}
