"use client";

import { Box, Typography, Button } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 2,

        /* Background image */
        backgroundImage: "url('/mainBG.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: 42, sm: 42, md: 56, lg: 64 },
          mt: { xs: 2, sm: 42, md: 6, lg: 4 },
          fontWeight: 600,
          color: "#fff",
          textAlign: "center",
          lineHeight: 1.2,
        }}
      >
        Biotech Solution
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: 18, sm: 22, md: 28 },
          color: "rgba(255,255,255,0.85)",
          textAlign: "center",
          lineHeight: 1.4,
        }}
      >
        Go Green, Encourage Clean.
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: 14, sm: 16, md: 18 },
          color: "rgba(255,255,255,0.75)",
          textAlign: "center",
          maxWidth: 720,
          lineHeight: 1.6,
        }}
      >
        Leading manufacturer of biomass pellet fire burners, heating equipment,
        and pellets supplier.
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: 13, sm: 14, md: 16 },
          color: "rgba(255,255,255,0.7)",
          fontStyle: "italic",
          textAlign: "center",
        }}
      >
        “Save Money. Use Green Energy. Go Green.”
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          mt: 3,
          flexWrap: "wrap", // 👈 mobile safe
          justifyContent: "center",
        }}
      >
        <Button
          sx={{
            backgroundColor: "#347C5E",
            borderRadius: "10px",
            color: "#fff",
            px: 3,
            py: 1.2,
            "&:hover": {
              backgroundColor: "#2e6f54",
            },
          }}
        >
          Explore Our Solutions
        </Button>

        <Button
          variant="outlined"
          sx={{
            color: "#fff",
            borderColor: "#fff",
            borderRadius: "10px",
            px: 3,
            py: 1.2,
            "&:hover": {
              borderColor: "#fff",
              backgroundColor: "rgba(255,255,255,0.1)",
            },
          }}
        >
          Connect With Us
        </Button>
      </Box>
    </Box>
  );
}
