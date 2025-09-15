import React from "react";
import { Box, Typography, Button ,Grid, Card,
  Divider,
  TextField,
  InputAdornment,
  Tabs,
  Stack,
  Container,
  useMediaQuery,
  Avatar,
  CardContent,
  Tab,
  MenuItem,
  Select,
  ToggleButton,
  ToggleButtonGroup,

} from '@mui/material';



function LimitOrderSection({isDarkMode}) {



     const features = [
  { text: "Master volatility and get the price you want", icon: "assets/images/LimitorderSection/tick.svg" },
  { text: "Set custom expiry time up to 28 days", icon: "assets/images/LimitorderSection/tick.svg" },
  { text: "Bypass MEV attacks", icon:  "assets/images/LimitorderSection/tick.svg"},
  { text: "Limit Orders have no slippage", icon:  "assets/images/LimitorderSection/tick.svg" },
  { text: "Trade low-cap, illiquid tokens with confidence", icon:  "assets/images/LimitorderSection/tick.svg"},
];

const orders = [
  { sellIcon: "assets/images/LimitorderSection/danger.svg", sell: "14 EQrd", buyIcon: "assets/images/LimitorderSection/danger.svg", buy: "200 ETH", expiry: "12 hours 3mins" },
  { sellIcon: "assets/images/LimitorderSection/danger.svg", sell: "14 EQrd", buyIcon: "assets/images/LimitorderSection/danger.svg", buy: "200 ETH", expiry: "12 hours 3mins" },
  { sellIcon: "assets/images/LimitorderSection/danger.svg", sell: "14 EQrd", buyIcon: "assets/images/LimitorderSection/danger.svg", buy: "200 ETH", expiry: "12 hours 3mins" },
  { sellIcon: "assets/images/LimitorderSection/danger.svg", sell: "14 EQrd", buyIcon: "assets/images/LimitorderSection/danger.svg", buy: "200 ETH", expiry: "12 hours 3mins" },
  { sellIcon: "assets/images/LimitorderSection/danger.svg", sell: "14 EQrd", buyIcon: "assets/images/LimitorderSection/danger.svg", buy: "200 ETH", expiry: "12 hours 3mins" },
  { sellIcon: "assets/images/LimitorderSection/danger.svg", sell: "14 EQrd", buyIcon: "assets/images/LimitorderSection/danger.svg", buy: "200 ETH", expiry: "12 hours 3mins" },
];

  const [tab, setTab] = React.useState(1);
   
  const isTablet = useMediaQuery("(max-width:1024px)");
  const isMobile = useMediaQuery("(max-width:768px)");


   const [selected, setSelected] = React.useState("market");
  const [expiry, setExpiry] = React.useState("1h");

  const handleChange = (event, newValue) => {
    if (newValue !== null) {
      setSelected(newValue);
    }
  };

return (
    <Box>
    {/* first section */}
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
              src="assets/images/LimitorderSection/littlewaves.png"
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
                Master volatile markets
              </Typography>
    
              <Typography
                sx={{
                  color: "text.primary",
                  fontWeight: 700,
                  fontSize: { xs: "48px", md: "62px" },
                  lineHeight: 1.1,
                }}
              >
                Limit Orders
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
      component="section"
      sx={{
        py: isMobile ? 6 : 10,
        px: 2,
        position: "relative",
        overflow: "hidden",
        minHeight: 595,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: 1440,
          width: "100%",
          mx: "auto",
          display: "flex",
          flexDirection: isTablet ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          gap: isTablet ? 20 : 14,
          textAlign: isTablet ? "center" : "left",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Chart Card */}
        <Card
          sx={{
            width: isMobile ? "100%" : 504,
            height: isMobile ? "auto" : 390,
            borderRadius: 2,
            p: 3,
            display: "flex",
            flexDirection: "column",
            bgcolor: "#feffff",
            margin:"10px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
              src="assets/images/LimitorderSection/danger.svg"
              alt="Bedrock logo"
              sx={{ width: 73, height: 73 }}
            />
            <Box>
              <Typography
                variant="h5"
                sx={{ fontFamily: "Manrope", fontWeight: 700 ,color:"black"}}
              >
                Bedrock
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#595959", fontWeight: 700, mt: -1 }}
              >
                Be
              </Typography>
            </Box>
          </Box>

          <CardContent sx={{ mt: 2 }}>
            <Typography
              sx={{ fontFamily: "Manrope", fontSize: 24, fontWeight: 400, color: "black"}}
            >
              $9209.00
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mt: 0.5 }}>
              <Typography sx={{ fontSize: 12, color: "#097d27" }}>8.0%</Typography>
              <Typography sx={{ fontSize: 12, color: "#6b6b6b" }}>
                Last 24 Hours
              </Typography>
            </Box>

            {/* Chart area */}
            <Box sx={{ mt: isMobile ? 2 : 5, position: "relative", height: 124 }}>
              <Box
                sx={{
                  position: "absolute",
                  width: 365,
                  height: 13,
                  bgcolor: "#00a92b",
                  filter: "blur(100px)",
                  top: 15,
                  left: isMobile ? "50%" : 104,
                  transform: isMobile ? "translateX(-50%)" : "none",
                }}
              />
              <Box
                component="img"
                src="assets/images/LimitorderSection/graph.png"
                alt="Price chart"
                sx={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Box>

            {/* Time Labels */}
            <Box
              sx={{
                display: "flex",
                justifyContent: isMobile ? "center" : "space-between",
                flexWrap: isMobile ? "wrap" : "nowrap",
                gap: isMobile ? 2 : 0,
                mt: 2,
              }}
            >
              {["2 PM", "4 PM", "7 PM", "10 PM", "JUN 18", "3 AM", "6 AM"].map(
                (label, i) => (
                  <Typography
                    key={i}
                    sx={{ fontSize: 12, color: "#6b6b6b", fontFamily: "Manrope" }}
                  >
                    {label}
                  </Typography>
                )
              )}
            </Box>
          </CardContent>
        </Card>

        {/* Content Column */}
        <Box sx={{ maxWidth: 444, display: "flex", flexDirection: "column", alignItems: isTablet ? "center" : "flex-start" }}>
          <Typography
            variant={isMobile ? "h4" : "h3"}
            sx={{ fontFamily: "Manrope", fontWeight: 700 ,fontSize:"50px", }}
          >
            Set price, time,
            <br /> and sit tight
          </Typography>

          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: 16,
              lineHeight: "25px",
              color: "#B3B3B3",
              mt: 3,
              maxWidth: 334,
              textAlign: isTablet ? "center" : "left",
              fontWeight:400,
            }}
          >
            Place a limit order to buy or sell crypto at an<br/> exact price within a chosen period.
          </Typography>

          
        </Box>
      </Box>

      {/* Background decoration */}
      <Box
        component="img"
        src="assets/images/LimitorderSection/spiral.png"
        alt="Decorative background"
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width:250,
          height:250,
          
          opacity: isMobile ? 0.5 : 1,
          transform: isMobile ? "scale(0.8) translate(10%,10%)" : "none",
          zIndex: 0,
        }}
      />
    </Box>
    <Divider/>
   {/* third section */}
   
   <Box
      id="limit-orders"
      sx={{
        py: { xs: 6, md: 10 },
      }}
    >
      <Box
        component="img"
         src="assets/images/LimitorderSection/spiral.png"
        alt=""
        sx={{
          position: "absolute",
          bottom:-1000,
          right: 0,
          width:200,
          height:200,
        }}
      />
      <Box maxWidth="1200px" mx="auto" px={2}>
        {/* Title */}
        <Typography
          variant="h4"
          align="center"
          fontWeight={700}
          sx={{
            mb: { xs: 6, md: 10 },
            fontSize: { xs: "28px", md: "33.33px" },
            lineHeight: "38px",
          }}
        >
          Why place Limit Orders?
        </Typography>

        {/* Content */}
        <Grid
          container
          spacing={{ xs: 6, md: 40 }}
          justifyContent="center"
          alignItems="flex-start"
        >
          {/* Features List */}
          <Grid item xs={12} md={6}>
            <Stack spacing={6}>
              {features.map((f, i) => (
                <Stack direction="row" spacing={2} alignItems="center" key={i}>
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(308deg, #02a863 0%, rgba(2, 168, 99, 0.49) 140.51%)",
                      boxShadow:
                        "inset 0px -1px 0px rgba(0,0,0,0.16), 0px 1px 3px rgba(0,0,0,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    
                    }}
                  >
                    <Avatar
                      src={f.icon}
                      alt="icon"
                      sx={{ width: 16, height: 16, bgcolor: "transparent" }}
                      variant="square"
                    />
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 500, fontSize: 18, lineHeight: "25px" }}
                  >
                    {f.text}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
              
          {/* Orders Card */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                bgcolor:"default2",
                borderRadius: 2,
                p: { xs: 2, md: 3 },
              }}
            >
              {/* Tabs */}
              <Stack direction="row" spacing={3} mb={2}>
                <Button
                  variant="body1"
                  fontWeight={700}
                  sx={{ color: "#B3B3B3" }}
                >
                  Order history
                </Button>
                <Button variant="body1"
                  fontWeight={700}
                  sx={{ color: "text.primary"}}>
                  Open Orders
                </Button>
              </Stack>

              {/* Table */}
              <Stack spacing={2}>
                {/* Header */}
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1.5fr 1.5fr",
                    gap: { xs: 1, md: 2 },
                    px: 1,
                  }}
                >
                  <Typography variant="caption" fontWeight={700}>
                    Sell
                  </Typography>
                  <Typography variant="caption" fontWeight={700} sx={{ pl: 1 }}>
                    Buy
                  </Typography>
                  <Typography variant="caption" fontWeight={700}>
                    Expiration Date
                  </Typography>
                </Box>

                {/* Rows */}
                {orders.map((o, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1.5fr 1.5fr",
                      gap: { xs: 1, md: 2 },
                      alignItems: "center",
                      px: 1,
                    }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Avatar
                        src={o.sellIcon}
                        sx={{ width: 24, height: 24 }}
                      />
                      <Typography variant="caption" color="#B3B3B3">
                        {o.sell}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Avatar
                        src={o.buyIcon}
                        sx={{ width: 24, height: 24 }}
              
                      />
                      <Typography variant="caption" color="#B3B3B3">
                        {o.buy}
                      </Typography>
                    </Stack>
                    <Typography variant="caption" color="#B3B3B3">
                      {o.expiry}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Card>
          </Grid>
         
        </Grid>
      </Box>
       
      
    </Box>
     
    <Divider/>
    {/* foursection */}
     <Box sx={{py: 8, textAlign: "center" }}>
      {/* Title */}
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
        How to setup limit orders
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: "#B3B3B3" }}>
        Available on 3 chains:
      </Typography>

      {/* Chain Logos */}
      <Box display="flex" justifyContent="center" gap={3} mb={6}>
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar src="assets/images/LimitorderSection/eth.png" sx={{ width: 28, height: 28 }} />
          <Typography sx={{color:"#B3B3B3"}}>Ethereum</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar src="assets/images/LimitorderSection/danger.png" sx={{ width: 28, height: 28 }} />
          <Typography sx={{color:"#B3B3B3"}}>Polygon</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar src="assets/images/LimitorderSection/bsc.png" sx={{ width: 28, height: 28 }} />
          <Typography sx={{color:"#B3B3B3"}}>BSC</Typography>
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
                        <Typography >Balance: 0.00</Typography>
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

    </Box>
    <Divider/>
    {/* Fifth section */}
  <Box
      component="section"
      id="limit-orders"
      sx={{
       
        py: { xs: 5, md: 8 },
        px: { xs: 2, md: 4 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        className="container"
        sx={{
          maxWidth: "1440px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Title */}
         <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
        How to setup limit orders
      </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 400,
            fontSize: { xs: "16px", md: "17px" },
            lineHeight: "25px",
            color: "#B3B3B3",
            mb: 4,
          }}
        >
          Available on 3 chains:
        </Typography>

        {/* Chain list */}
        <Stack
          direction="row"
          spacing={isMobile ? 2.5 : 3.5}
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          sx={{ mb: 5 }}
        >
          {[
            {
              src: "assets/images/LimitorderSection/eth.png",
              alt: "Ethereum icon",
              name: "Ethereum",
            },
            {
              src: "assets/images/LimitorderSection/ploygon.png",
              alt: "Polygon icon",
              name: "Polygon",
            },
            {
              src: "assets/images/LimitorderSection/bsc.png",
              alt: "BSC icon",
              name: "BSC",
            },
          ].map((chain) => (
            <Stack key={chain.name} direction="row" alignItems="center" spacing={1}>
              <Box
                component="img"
                src={chain.src}
                alt={chain.alt}
                sx={{ width: 20, height: 20 }}
              />
              <Typography
                sx={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "25px",
                  color: "#B3B3B3",
                }}
              >
                {chain.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
             <Box
      sx={{
        border:2,
        p: 3,
        borderRadius: 2,
        maxWidth: 320,
      }}
    >
      {/* Title */}
      <Typography
        variant="body2"
        color="text.secondary"
        gutterBottom
        sx={{ fontWeight: 500 }}
      >
        Slippage Tolerance
      </Typography>

      {/* Limit Price */}
      <Typography variant="body2" sx={{ fontWeight: 600 }}>
        Limit Price
      </Typography>
      <Typography variant="body2"  gutterBottom>
        0.00
      </Typography>

      {/* Toggle Buttons */}
      <ToggleButtonGroup
        value={selected}
        exclusive
        onChange={handleChange}
        sx={{ mb: 2 }}
      >
        <ToggleButton value="market">Market</ToggleButton>
        <ToggleButton value="1">1 % ↑</ToggleButton>
        <ToggleButton value="2">2 % ↑</ToggleButton>
        <ToggleButton value="5">5 % ↑</ToggleButton>
        <ToggleButton value="10">10 % ↑</ToggleButton>
      </ToggleButtonGroup>

      {/* Expiry */}
      <Typography variant="body2" sx={{ fontWeight: 600 }}>
        Expiry
      </Typography>
      <Select
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
        size="small"
        sx={{
          
          mt: 1,
          mb: 2,
          borderRadius: 1,
          minWidth: 120,
        }}
      >
        <MenuItem value="1h">1 Hour</MenuItem>
        <MenuItem value="6h">6 Hours</MenuItem>
        <MenuItem value="12h">12 Hours</MenuItem>
        <MenuItem value="24h">24 Hours</MenuItem>
      </Select>

      {/* Wallet Button */}
      <Button
        variant="contained"
        fullWidth
        sx={{
          mt: 2,
          bgcolor: "linear-gradient(to right, #00aaff, #0072ff)",
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 1.5,
          py: 1.2,
        }}
      >
        Connect Ethereum Wallet
      </Button>
    </Box>
        
      
       
      </Box>
    </Box>

    <Divider/>
    {/* sixth section */}
      <Container
         
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        
        }}
      >
       {/* Title */}
         <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
           How to setup limit orders
      </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 400,
            fontSize: { xs: "16px", md: "17px" },
            lineHeight: "25px",
            color: "#B3B3B3",
          }}
        >
          Available on 3 chains:
        </Typography>

        {/* Chain list */}
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          sx={{ mb: 5 }}
        >
          {[
            {
              src: "assets/images/LimitorderSection/eth.png",
              alt: "Ethereum icon",
              name: "Ethereum",
            },
            {
              src: "assets/images/LimitorderSection/ploygon.png",
              alt: "Polygon icon",
              name: "Polygon",
            },
            {
              src: "assets/images/LimitorderSection/bsc.png",
              alt: "BSC icon",
              name: "BSC",
            },
          ].map((chain) => (
            <Stack key={chain.name} direction="row" alignItems="center" spacing={1}>
              <Box
                component="img"
                src={chain.src}
                alt={chain.alt}
                sx={{ width: 20, height: 20 }}
              />
              <Typography
                sx={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "25px",
                  color: "#B3B3B3",
                }}
              >
                {chain.name}
              </Typography>
            </Stack>
          ))}
        </Stack>

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

              {/* Swap Details */}
              <Box sx={{ display: "flex", flexDirection: "column", }}>
                {[
                  { label: "Liquidity Providers", value: "OxRFQ" },
                  { label: "Rate", value: "1 ETH = 1562.76 USDC($1562.77)" },
                  { label: "Ethereum Fees", value: "$ 23" },
                ].map((row, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: { xs: "column", sm: "row" },
                      gap: { xs: 0.5, sm: 0 },
                    }}
                  >
                    <Typography
                      sx={{ fontWeight: 700, fontSize: 14, color: "text.primary" }}
                    >
                      {row.label}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: 14,
                        color: "text.primary",
                        textAlign: { xs: "left", sm: "right" },
                      }}
                    >
                      {row.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
       
        </Container>
        
        <Divider/>
       
  
</Box>



  );
}
export default LimitOrderSection;