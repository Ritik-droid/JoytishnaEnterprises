"use client";

import { Box, Typography, Button } from "@mui/material";
export const CustomerResponse = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          py: 5,
          overflow: "hidden",
        }}
      >
        {/* Background */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/customerBack.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />

        {/* Dark overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.35)",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column", 
            justifyContent: "center",
            alignItems: "center",
            minHeight: "200px",
            textAlign: "center",
            px: 2, // mobile padding
          }}
        >
          <Typography variant="h4" fontWeight={700} color="#FFD700" mb={2}>
            What Our Customer Say
          </Typography>

          <Typography
            sx={{
              maxWidth: "800px",
              color: "#FFFFFF",
              fontSize: { xs: "13.5px", sm: "16px", md: "22px" },
              fontStyle: "italic",
              mt: 2,
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            Biotech Solution&apos;s biomass burners have transformed our energy
            consumption. Significant savings and peace of mind.
          </Typography>

          <Typography
            sx={{
              maxWidth: "800px",
              color: "#FFFFFF",
              fontSize: { xs: "12px", sm: "16px", md: "18px" },
              lineHeight: 1.6,
              fontWeight: 400,
              mt: 5,
            }}
          >
            - Rajeev Kumar, Operations Manager
          </Typography>
        </Box>
      </Box>
    </>
  );
};
