"use client";

import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function AboutUS() {
  const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
  ];

  return (
    <Box
      id="about"
      sx={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: "#0F0F0F",
        gap: 2,
        px: 0,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating Image Boxes */}
      {images.map((src, i) => (
        <Box
          visibility={"hidden"}
          key={i}
          sx={{
            position: "absolute",
            width: { xs: 80, md: 95 },
            height: { xs: 60, md: 90 },
            background: "#FFFFFF",
            borderRadius: "60px",
            boxShadow: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            ...(i === 0 && { top: "5%", left: "45%" }),
            ...(i === 1 && { top: "21%", right: "15%" }),
            ...(i === 2 && { bottom: "43%", left: "7%" }),
            ...(i === 3 && { bottom: "15%", right: "37%" }),
          }}
        >
          <img
            src={src}
            alt=""
            style={{
              width: "70%",
              height: "70%",
              objectFit: "contain",
            }}
          />
        </Box>
      ))}

      {/* Title */}
      <Typography
        sx={{
          color: "#EFECE6",
          fontFamily: "Teachers, sans-serif",
          fontWeight: 900,
          fontSize: { xs: "55px", md: "105px" },
          lineHeight: "128px",
          letterSpacing: "3.2px",
          textAlign: "center",
        }}
      >
        About US
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          color: "#EFECE6",
          fontFamily: "Jost, sans-serif",
          fontWeight: 400,
          fontSize: { xs: "15px", md: "20px" },
          lineHeight: "38px",
          textAlign: "center",
          maxWidth: { xs: "355px", md: "800px" },
          mx: "auto",
        }}
      >
        Being a foremost organization in the industry, we Jyotishna Enterprises,
        from 2026 are actively engaged in manufacturing, wholesaling, trading
        and importing of an extensive array of ASTM and SS Fasteners. Our
        offered range has ASTM Fasteners, High Tensile Fasteners, and SS
        Fasteners.
      </Typography>

      {/* Button */}
      <Button
        endIcon={<ArrowForwardIcon />}
        sx={{
          backgroundColor: "#EFECE6",
          color: "#0F0F0F",
          fontFamily: "Jost, sans-serif",
          fontWeight: 500,
          px: 3,
          py: 1.2,
          borderRadius: "10px",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#e3e0d9",
          },
        }}
      >
        Know More
      </Button>
    </Box>
  );
}
