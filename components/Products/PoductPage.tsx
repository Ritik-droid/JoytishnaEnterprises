"use client";

import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ProductPage() {
  const products = Array.from({ length: 6 });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: { xs: "flex-start", md: "center" },
        background: "#0F0F0F",
        gap: { xs: 6, md: 8 },
        px: { xs: 2, md: 8 },
        pt: { xs: 12, md: 6 },
        pb: 8,
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          color: "#fff",
          fontFamily: "Teachers, sans-serif",
          fontWeight: 900,
          fontSize: { xs: "60px", sm: "80px", md: "120px", lg: "159px" },
          lineHeight: { xs: "70px", sm: "100px", md: "160px", lg: "204px" },
          letterSpacing: "5px",
          textAlign: "center",
        }}
      >
        Products
      </Typography>

      {/* Products Grid */}
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "repeat(3, minmax(350px, 1fr))",
          },
          gap: 4,
          maxWidth: "1800px",
        }}
      >
        {products.map((_, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {/* Image Box */}
            <Box
              sx={{
                background: "#1A1A1A",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src="https://via.placeholder.com/400x250"
                alt="product"
                sx={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* Content Outside Box */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {/* Price */}
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: "18px",
                }}
              >
                ₹0.80 / Piece
              </Typography>

              {/* Heading */}
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 200,
                  fontSize: "15px",
                }}
              >
                Product Name
              </Typography>

              {/* Button */}
              <Button
                endIcon={<ArrowForwardIcon />}
                sx={{
                  background: "#FFF83A",
                  color: "#000",
                  fontWeight: 500,
                  textTransform: "none",
                  borderRadius: "30px",
                  px: 1,
                  py: 1,
                  alignSelf: "flex-start",
                  "&:hover": {
                    background: "#e6df33",
                  },
                }}
              >
                Yes I'm Interested
              </Button>
            </Box>
          </Box>
        ))}
      </Box>

    </Box>
  );
}
