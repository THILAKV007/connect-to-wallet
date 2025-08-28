import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Select,
  MenuItem,
  Pagination,
  InputAdornment,
  Button,
  Divider,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


function LiquiditySection() {
  const [search, setSearch] = useState("");
  const [network, setNetwork] = useState("");
  const [time] = useState("All time");
const rows = [
  { source: "0X RFQ", volume: "$2.8B", volume30: "$108.5 M", networks: ["gg","dd"] },
  { source: "Across", volume: "$1.2B", volume30: "$207.5 k", networks: ["eth", "avax"] },
  { source: "0X RFQ", volume: "$2.8B", volume30: "$108.5 M", networks: ["eth", "poly", "avax", "celo"] },
  { source: "Across", volume: "$1.2B", volume30: "$207.5 k", networks: ["eth", "avax"] },
  { source: "0X RFQ", volume: "$2.8B", volume30: "$108.5 M", networks: ["eth", "poly", "avax", "celo"] },
  { source: "Across", volume: "$1.2B", volume30: "$207.5 k", networks: ["eth", "avax"] },
];

      

  return (
  <>   {/* first section */}
  <Box sx={{backgroundImage: `url("assets/images/swapToken/gradient.png")`,
      }}>
      <Box sx={{ 
        textAlign: "center", 
        minHeight:"80vh",
        backgroundImage: `url("assets/images/LiquiditySection/Vector 111.png")`, // image inside public/assets folder
        backgroundRepeat: "no-repeat",
        backgroundSize:"contain",
        backgroundPosition: "center",
        py:20,

       }}>
        <Typography variant="h4">Go gasless with Unidex..</Typography>
        <Typography variant="h2" sx={{ fontWeight: 'bold', my: 3 }}>
          Liquidity sources
        </Typography>
        <Typography variant="body1">
          Deep liquidity for the best prices on 9+ million tokens across 14 chains. Tap into 130+<br /> liquidity sources aggregated by Matcha!
        </Typography>
        <Button variant="contained" color="primary">
          Start Trading
        </Button>
      </Box>
      </Box>
      <Divider/>
      {/* second section */}
       <Box sx={{margin:"30px"}}>
      <Typography variant="h6" sx={{ fontWeight: "bold",margin:"10px"}}>
        Integrated liquidity sources
      </Typography>

      {/* Search + Filters */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2, gap: 2}}>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search by liquidity source"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            sx: { borderRadius: "12px", }
          }}
        />
        <Select
          value={network}
          onChange={(e) => setNetwork(e.target.value)}
          displayEmpty
          size="small"
          sx={{ borderRadius: "12px"}}
        >
          <MenuItem value="">Network</MenuItem>
          <MenuItem value="eth">Ethereum</MenuItem>
          <MenuItem value="poly">Polygon</MenuItem>
          <MenuItem value="avax">Avalanche</MenuItem>
        </Select>
        <Button
          variant="contained"
          endIcon={<ArrowDropDownIcon />}
          sx={{ borderRadius: "12px"}}
        >
          {time}
        </Button>
      </Box>

      {/* Table */}
      <TableContainer component={Paper} sx={{ borderRadius: "16px" }}>
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
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.source}</TableCell>
                <TableCell>{row.volume}</TableCell>
               <TableCell>{row.volume30}</TableCell>

       <TableCell>
      <Box
        component="img"
        src="assets/images/LiquiditySection/eth.png"
        alt="Ethereum"
        sx={{ width: 28, height: 28, borderRadius: "50%" }}
      />
      <Box
        component="img"
        src="assets/images/LiquiditySection/mus.png"
        alt="Polygon"
        sx={{ width: 28, height: 28, borderRadius: "50%" }}
      />
      <Box
        component="img"
        src="assets/images/LiquiditySection/as.png"
        alt="Arbitrum"
        sx={{ width: 28, height: 28, borderRadius: "50%" }}
      />
      <Box
        component="img"
        src="assets/images/LiquiditySection/cs.png"
        alt="Optimism"
        sx={{ width: 28, height: 28, borderRadius: "50%" }}
      />
      </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Box sx={{ display: "flex", justifyContent: "center"}}>
        <Pagination count={5} color="primary" shape="rounded" />
      </Box>
    </Box>
    <Divider/>
 <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url('assets/images/LiquiditySection/back.png')", // <-- place your bg image inside public/assets/images
        backgroundSize: "cover",
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
          Matcha combines 130+ liquidity sources, on-chain and off-chain.
        </Typography>
      </Container>
    </Box>
  <Divider/>
</>

  )
}

export default LiquiditySection;
