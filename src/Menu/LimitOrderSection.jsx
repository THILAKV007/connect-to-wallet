import React from "react";
import { Box, Typography, Button ,Grid, Card,
    Divider,
    CardContent,List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow, Tab,
  TextField,
  InputAdornment,
  Tabs,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  MenuItem,
  Select,
  Container,
} from '@mui/material';
  import CheckCircleIcon from "@mui/icons-material/CheckCircle";
  import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


function LimitOrderSection({isDarkMode}) {
     const features = [
    "Master volatility and get the price you want",
    "Set custom expiry time up to 28 days",
    "Bypass MEV attacks",
    "Limit Orders have no slippage",
    "Trade low-cap, illiquid tokens with confidence",
  ];

  const orders = [
    { sell: "14 EQrd", buy: "200 ETH", expiry: "12 hours 3mins" },
    { sell: "14 EQrd", buy: "200 ETH", expiry: "12 hours 3mins" },
    { sell: "14 EQrd", buy: "200 ETH", expiry: "12 hours 3mins" },
    { sell: "14 EQrd", buy: "200 ETH", expiry: "12 hours 3mins" },
    { sell: "14 EQrd", buy: "200 ETH", expiry: "12 hours 3mins" },
    { sell: "14 EQrd", buy: "200 ETH", expiry: "12 hours 3mins" },
  ];
  const [tab, setTab] = React.useState(1);
   const [slippage, setSlippage] = React.useState("Market");
  const [expiry, setExpiry] = React.useState("1 Hour");

  const handleSlippage = (event, newSlippage) => {
    if (newSlippage !== null) setSlippage(newSlippage);
  };
  return (
    <>
    {/* first section */}
    <Box sx={{ 
        textAlign: "center", 
        py:34,
        minHeight:"100vh",
        backgroundImage: `url("assets/images/LimitorderSection/limitback.png")`, // image inside public/assets folder
        backgroundRepeat: "no-repeat",
        backgroundSize:"contain",
        backgroundPosition: "center",
        width: "auto",

       }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Master volatile markets
      </Typography>
      <Typography variant="h2" fontWeight="bold" gutterBottom>
        Limit orders
      </Typography>
      <Typography variant="body1" mb={4}>
        Deep liquidity for the best prices on 9+ million tokens across 14 chains. Tap into 130+ liquidity sources aggregated by Matcha!
      </Typography>
      <Button variant="contained" color="primary">
        Start Trading
      </Button>
    </Box>
    <Divider/>
    {/* second section */}
    <Box sx={{  py: 8, px: { xs: 2, md: 8 } }}>
      <Grid container spacing={6} alignItems="center">
        {/* Left Side Card */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: 4,
              boxShadow: 3,
              maxWidth: 400,
              mx: "auto",
              bgcolor:"white",
              color:"black"
            }}
          >
            <CardContent>
              {/* Logo + Name */}
              <Box display="flex" alignItems="center" gap={2} mb={2} >
                <Avatar
                  src="assets/images/LimitorderSection/bedrock.png" // Replace with your logo
                  alt="Bedrock"
                  sx={{ width: 56, height: 56 }}
                />
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    Bedrock
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Be
                  </Typography>
                </Box>
              </Box>

              {/* Price */}
              <Typography variant="h4" fontWeight="bold">
                $9209.00
              </Typography>
              <Typography variant="body2" sx={{ color: "green", mb: 2 }}>
                8.0% Last 24 Hours
              </Typography>

              {/* Graph Placeholder */}
              <Box
                component="img"
                src="assets/images/LimitorderSection/graph.png" // replace with your chart image
                alt="Graph"
                sx={{ width: "100%", height: "auto", borderRadius: 2 }}
              /> <Stack direction="row" spacing={2} alignItems="center">
      <Typography variant="body1">2PM</Typography>
      <Typography variant="body1">4PM</Typography>
      <Typography variant="body1">7PM</Typography>
      <Typography variant="body1">10PM</Typography>
      <Typography variant="body1">JUN18</Typography>
      <Typography variant="body1">3AM</Typography>
      <Typography variant="body1">6AM</Typography>
    </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Side Content */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ mb: 2 }}
          >
            Set price, time, <br /> and sit tight
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Place a limit order to buy or sell crypto at an exact price
            within a chosen period.
          </Typography>
        </Grid>
      </Grid>
    </Box>
    <Divider/>
   {/* third section */}
   <Box sx={{py: 8, px: { xs: 2, md: 8 } }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        align="center"
        sx={{ mb: 6 }}
      >
        Why placeLimit Orders?
      </Typography>

      <Grid container spacing={6} alignItems="flex-start" >
        {/* Left Side Features */}
        <Grid item xs={12} md={6}>
          <List>
            {features.map((text, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "green" }} />
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{ fontSize: "1rem" }}
                />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Right Side Table */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              p: 3,
              borderRadius: 4,
              boxShadow: 0,
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Order history</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Open Orders</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>Expiration Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Avatar
                          src="assets/images/LimitorderSection/danger.png" // replace with your logo
                          alt="token"
                          sx={{ width: 24, height: 24 }}
                        />
                        {order.sell}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Avatar
                          src="assets/images/LimitorderSection/danger.png" // replace with your logo
                          alt="token"
                          sx={{ width: 24, height: 24 }}
                        />
                        {order.buy}
                      </Box>
                    </TableCell>
                    <TableCell>{order.expiry}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </Grid>
      </Grid>
    </Box>
    <Divider/>
    {/* foursection */}
     <Box sx={{py: 8, textAlign: "center" }}>
      {/* Title */}
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
        How to setup limit orders
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: "#5E6773" }}>
        Available on 3 chains:
      </Typography>

      {/* Chain Logos */}
      <Box display="flex" justifyContent="center" gap={3} mb={6}>
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar src="assets/images/LimitorderSection/eth.png" sx={{ width: 28, height: 28 }} />
          <Typography>Ethereum</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar src="assets/images/LimitorderSection/danger.png" sx={{ width: 28, height: 28 }} />
          <Typography>Polygon</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar src="assets/images/LimitorderSection/bsc.png" sx={{ width: 28, height: 28 }} />
          <Typography>BSC</Typography>
        </Box>
      </Box>

      {/* Card with Tabs */}
      <Grid container justifyContent="center">
        <Grid item xs={12} md={4}>
          <Card sx={{ borderRadius: 3}}>
            <Tabs
              value={tab}
              onChange={(e, newValue) => setTab(newValue)}
              textColor="inherit"
              indicatorColor="secondary"
              variant="fullWidth"
              sx={{
                "& .MuiTab-root": {},
                "& .Mui-selected": {},
              }}
            >
              <Tab label="Market" />
              <Tab label="Limit" />
              <Tab label="Crosschain" />
            </Tabs>

            <CardContent>
              {/* Sell Box */}
              <Box
                sx={{
                  bgcolor: "white",
                  borderRadius: 2,
                  p: 2,
                  mb: 2,
                  textAlign: "left",
                  color: "black",
                }}
              >
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Sell
                </Typography>
                <TextField
                  fullWidth
                  variant="standard"
                  placeholder="0"
                  InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                      <InputAdornment position="end">
                        <Typography color="text.secondary">Balance: 0.00</Typography>
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button size="small">ETH ▼</Button>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              {/* Buy Box */}
              <Box
                sx={{
                  bgcolor: "white",
                  borderRadius: 2,
                  p: 2,
                  textAlign: "left",
                  color: "black",
                }}
              >
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Buy
                </Typography>
                <TextField
                  fullWidth
                  variant="standard"
                  placeholder="0"
                  InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                      <InputAdornment position="end">
                        <Typography color="text.secondary">Balance: 0.00</Typography>
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        
                        <Button size="small">ETH ▼</Button>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Footer Text */}
      <Typography variant="h6" sx={{ mt: 6 }}>
        Select your Buy and Sell tokens
      </Typography>

      {/* Pagination */}
      <Box display="flex" justifyContent="center" alignItems="center" gap={2} mt={4}>
        <IconButton sx={{ color: "black" }}>
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>
        {[1, 2, 3, 4, 5].map((num, i) => (
          <Typography
            key={i}
            sx={{
              mx: 1,
              fontWeight: num === 1 ? "bold" : "normal",
              color: num === 1 ? "black" : "#90a4ae",
            }}
          >
            {num}
          </Typography>
        ))}
        <IconButton sx={{ color: "black" }}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
    <Divider/>
    {/* Fifth section */}
    <Container maxWidth="md" sx={{ textAlign: "center", py: 8 }}>
      {/* Heading */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        How to setup limit orders
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Available on 3 chains:
      </Typography>

      {/* Chain icons */}
    <Box display="flex" justifyContent="center" gap={3} mb={6}>
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar src="assets/images/LimitorderSection/eth.png" sx={{ width: 28, height: 28 }} />
          <Typography>Ethereum</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar src="assets/images/LimitorderSection/danger.png" sx={{ width: 28, height: 28 }} />
          <Typography>Polygon</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar src="assets/images/LimitorderSection/bsc.png" sx={{ width: 28, height: 28 }} />
          <Typography>BSC</Typography>
        </Box>
      </Box>
      {/* Limit Order Card */}
      <Box
        sx={{
          mx: "auto",
          maxWidth: 350,
          p: 3,
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: "background.paper",
          textAlign: "left",
        }}
      >
        <Typography variant="subtitle2" color="text.secondary" mb={1}>
          Slippage Tolerance
        </Typography>

        {/* Limit Price */}
        <Typography variant="body2" mb={1}>
          Limit Price
        </Typography>
        <Box
          sx={{
            bgcolor: "grey.100",
            p: 1,
            borderRadius: 1,
            mb: 2,
          }}
        >
          <Typography color="text.secondary">0.00</Typography>
        </Box>

        {/* Slippage Buttons */}
        <ToggleButtonGroup
          value={slippage}
          exclusive
          onChange={handleSlippage}
          fullWidth
          sx={{ mb: 2 }}
        >
          <ToggleButton value="Market">Market</ToggleButton>
          <ToggleButton value="1%">1 % ↑</ToggleButton>
          <ToggleButton value="2%">2 % ↑</ToggleButton>
          <ToggleButton value="5%">5 % ↑</ToggleButton>
          <ToggleButton value="10%">10 % ↑</ToggleButton>
        </ToggleButtonGroup>

        {/* Expiry */}
        <Typography variant="body2" mb={1}>
          Expiry
        </Typography>
        <Select
          fullWidth
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          sx={{ mb: 3 }}
        >
          <MenuItem value="1 Hour">1 Hour</MenuItem>
          <MenuItem value="6 Hours">6 Hours</MenuItem>
          <MenuItem value="12 Hours">12 Hours</MenuItem>
          <MenuItem value="24 Hours">24 Hours</MenuItem>
        </Select>

        {/* Connect Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{ py: 1.5, fontWeight: "bold" }}
        >
          Connect Ethereum Wallet
        </Button>
      </Box>

      {/* Footer text */}
      <Typography variant="h6" sx={{ mt: 6 }}>
        Select your Buy and Sell tokens
      </Typography>

      {/* Pagination */}
      <Stack direction="row" justifyContent="center" spacing={1} mt={2}>
        {[1, 2, 3, 4, 5].map((page) => (
          <Box
            key={page}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              bgcolor: page === 1 ? "text.primary" : "grey.400",
            }}
          />
        ))}
      </Stack>
    </Container>
    <Divider/>
    {/* sixth section */}
     <Container maxWidth="md" sx={{ textAlign: "center", py: 8 }}>
      {/* Heading */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        How to setup limit orders
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Available on 3 chains:
      </Typography>

      {/* Chain icons */}
    <Box display="flex" justifyContent="center" gap={3} mb={6}>
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar src="assets/images/LimitorderSection/eth.png" sx={{ width: 28, height: 28 }} />
          <Typography>Ethereum</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar src="assets/images/LimitorderSection/danger.png" sx={{ width: 28, height: 28 }} />
          <Typography>Polygon</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar src="assets/images/LimitorderSection/bsc.png" sx={{ width: 28, height: 28 }} />
          <Typography>BSC</Typography>
        </Box>
      </Box>
      {/* Limit Order Card */}
      <Box
      component="img"
                src="assets/images/LimitorderSection/flash.png" // replace with your chart image
                alt="Graph"/>
      {/* Footer text */}
      <Typography variant="h6" sx={{ mt: 6 }}>
        Select your Buy and Sell tokens
      </Typography>

      {/* Pagination */}
      <Stack direction="row" justifyContent="center" spacing={1} mt={2}>
        {[1, 2, 3, 4, 5].map((page) => (
          <Box
            key={page}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              bgcolor: page === 1 ? "text.primary" : "grey.400",
            }}
          />
        ))}
      </Stack>
    </Container>
</>



  );
}
export default LimitOrderSection;