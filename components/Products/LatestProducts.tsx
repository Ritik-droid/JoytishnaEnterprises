"use client";

import { Box, Typography } from "@mui/material";
import { useState } from "react";

export default function Latestproducts() {
const [hovered, setHovered] = useState<number | null>(null);
  const products = Array.from({ length: 19 });

  return (
    <Box
      id="products"
      sx={{
        minHeight: "50vh",
        background: "#0F0F0F",
        px: { xs: 3, md: 8 },
        py: 6,
      }}
    >
      <Typography
        sx={{
          fontSize: "60px",
          fontWeight: 900,
          fontFamily: "Teachers, sans-serif",
          color: "transparent",
          WebkitTextStroke: "1px #EFECE6",
          mb: 4,
        }}
      >
        Latest PRODUCTS
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          overflowX: "auto",
        }}
      >
        {products.map((_, index) => (
          <Box
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            sx={{
              width: hovered === index ? "260px" : "50px",
              height: "400px",
              background: "#1A1A1A",
              borderRadius: "12px",
              flexShrink: 0,
              border: "1px solid #333",
              transition: "all 0.4s ease",
              cursor: "pointer",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}