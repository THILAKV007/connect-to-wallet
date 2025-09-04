import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Avatar,
  Stack,
  InputAdornment,
  Button,
  Divider,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


function LiquiditySection() {
const rows = [
    {
      source: "oX RFQ",
      icon: "assets/images/LiquiditySection/danger.svg",
      total: "$ 2.8B",
      volume: "$108.5 M",
      networks: ["assets/images/LiquiditySection/a.svg", "assets/images/LiquiditySection/b.svg", "assets/images/LiquiditySection/c.svg", "assets/images/LiquiditySection/d.svg"],
    },
    {
      source: "Across",
      icon: "assets/images/LiquiditySection/across.svg",
      total: "$ 1.2B",
      volume: "$207.5 k",
       networks: ["assets/images/LiquiditySection/a.svg", "assets/images/LiquiditySection/b.svg", "assets/images/LiquiditySection/c.svg",],
    },
     {
      source: "oX RFQ",
      icon:  "assets/images/LiquiditySection/danger.svg",
      total: "$ 2.8B",
      volume: "$108.5 M",
       networks: ["assets/images/LiquiditySection/a.svg", "assets/images/LiquiditySection/b.svg", "assets/images/LiquiditySection/c.svg", "assets/images/LiquiditySection/d.svg"],
    },
    {
      source: "Across",
      icon: "assets/images/LiquiditySection/across.svg",
      total: "$ 1.2B",
      volume: "$207.5 k",
      networks: ["assets/images/LiquiditySection/a.svg", "assets/images/LiquiditySection/b.svg", "assets/images/LiquiditySection/c.svg"],
    },
    {
      source: "oX RFQ",
      icon:  "assets/images/LiquiditySection/danger.svg",
      total: "$ 2.8B",
      volume: "$108.5 M",
       networks: ["assets/images/LiquiditySection/a.svg", "assets/images/LiquiditySection/b.svg", "assets/images/LiquiditySection/c.svg", "assets/images/LiquiditySection/d.svg"],
    },
    {
      source: "Across",
      icon: "assets/images/LiquiditySection/across.svg",
      total: "$ 1.2B",
      volume: "$207.5 k",
      networks: ["assets/images/LiquiditySection/a.svg", "assets/images/LiquiditySection/b.svg", "assets/images/LiquiditySection/c.svg"],
    },

  ];
      

  return (
  <>   {/* first section */}
      <Box sx={{
                py:1,
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
                  minHeight: { md: "410px" },
                  overflow: "hidden",
                }}
              >
                {/* Single Background Decoration */}
                <Box
                  component="img"
                  src="assets/images/LimitorderSection/limir.png"
                  alt="hero"
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
                    Go Glassless with Undiex..
                  </Typography>
        
                  <Typography
                    sx={{
                      color: "text.primary",
                      fontWeight: 700,
                      fontSize: { xs: "48px", md: "62px" },
                      lineHeight: 1.1,
                    }}
                  >
                    Liquidity sources
                  </Typography>
        
                  <Typography
                    sx={{
                      color: "text.primary",
                      fontWeight: 700,
                      fontSize: { xs: "13px", md: "14px" },
                      lineHeight: "24px",
                    }}
                  >
                    Deep liquidity for the best prices on 9+ million tokens across 14 chains. Tap into 130+ <br/> liquidity sources aggregated by Unidex!
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
      {/* second section */}

    <Box
      id="liquidity-sources"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        p: { xs: 2, md: 5 },
        minHeight: "100vh",
      }}
    >
      < Box
        sx={{
          width: "100%",
          maxWidth: 1240,
          borderRadius: 4,
          border: "1px solid #6d6d6d",
          p: { xs: 2, md: 4 },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
            mb: 3,
          }}
        >
          <Typography variant="h6" fontWeight={600}>
            Integrated liquidity sources
          </Typography>

          {/* Filters */}
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {/* Search Input */}
            <TextField
              placeholder="Search by liquidity source"
              size="small"
              sx={{
                width: 278,
                bgcolor: "rgba(88, 88, 242, 0.05)",
                borderRadius: 2,
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />

            {/* Filter Buttons */}
            <Button
              variant="outlined"
              endIcon={<ArrowDropDownIcon />}
              sx={{
                bgcolor: "rgba(55, 55, 80, 0.04)",
                color:"text.primary",
                textTransform: "none",
                borderRadius: 2,
              }}
            >
              Network
            </Button>

            <Button
              variant="contained"
              endIcon={<ArrowDropDownIcon/>}
              sx={{
                bgcolor: "#058ccf",
                color: "text.primary",
                textTransform: "none",
                borderRadius: 1,
              }}
            >
              All time
            </Button>
          </Stack>
        </Box>

        {/* Table */}
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Source</TableCell>
                <TableCell>Total Volume (USD)</TableCell>
                <TableCell>30D Volume (USD)</TableCell>
                <TableCell>Networks available</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Stack direction="row" alignItems="center" spacing={1.5}>
                      <Avatar
                        src={row.icon}
                        alt={row.source}
                        sx={{ width: 24, height: 24 }}
                      />
                      <Typography>{row.source}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>{row.total}</TableCell>
                  <TableCell>{row.volume}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={-1}>
                      {row.networks.map((net, j) => (
                        <Avatar
                          key={j}
                          src={net}
                          alt="network"
                          sx={{ width: 24, height: 24 }}
                        />
                      ))}
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

       
      </Box>
    </Box>

    <Divider/>
 <Box
      sx={{
        position: "relative",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url('assets/images/LiquiditySection/back.png')", // <-- place your bg image inside public/assets/images
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        {/* Headline */}
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold"}}
        >
          Deep liquidity. <br /> AMM and RFQ combined.
        </Typography>

        {/* Subheadline */}
        <Typography variant="h6" sx={{opacity: 0.85 }}>
          Unidex combines 130+ liquidity sources, on-chain and off-chain.
        </Typography>
      </Container>
    </Box>
  <Divider/>
</>

  )
}

export default LiquiditySection;
