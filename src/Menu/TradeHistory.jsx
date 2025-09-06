import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

const TradeHistory = () => {
  return (
    <Box
      component="section"
      id="trade-history"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        fontFamily: "Manrope, sans-serif",
        p: 2,
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1440px",
          width: "100%",
          minHeight: "782px",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            position: { xs: "static", md: "absolute" },
            top: { md: "115px" },
            left: { md: "56px" },
            mb: { xs: 8, md: 0 },
            textAlign: { xs: "left", md: "unset" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 700,
              fontSize: { xs: "18px", md: "20px" },
              lineHeight: 1.37,
              color: "text.primary",
              m: 0,
            }}
          >
            Trade history
          </Typography>
        </Box>

        {/* Empty state content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: { xs: "100%", md: "582px" },
            px: 2,
          }}
        >
          <Box
            component="img"
            src="assets/images/TradeHistory/empty-box-XtO1oiZwG6.png"
            alt="An empty box illustration"
            sx={{
              width: "200px",
              height: "221px",
              objectFit: "contain",
              mb: 3,
            }}
          />

          <Typography
            sx={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 700,
              fontSize: { xs: "20px", md: "24px" },
              lineHeight: 1.37,
              color: "text.primary",
              mb: 2,
            }}
          >
            Trade History Will appear here.
          </Typography>

          <Typography
            sx={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              lineHeight: 1.71,
              color: "text.primary",
              mb: 2,
              maxWidth: "450px",
            }}
          >
            Swap crypto without native tokens. Matcha handles the gas for swaps
            and approvals so you can focus on trading.
          </Typography>

          <Button
            variant="contained"
            sx={{
              px: 2,
              py: 1,
              borderRadius: "8px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: 1.5,
              textTransform: "none",
              background: "linear-gradient(90deg, #0da2e5 0%, #0488cb 100%)",
              "&:hover": {
                background: "linear-gradient(90deg, #0488cb 0%, #0da2e5 100%)",
              },
              color:"white",
            }}
          >
            Connect Wallet
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TradeHistory;
