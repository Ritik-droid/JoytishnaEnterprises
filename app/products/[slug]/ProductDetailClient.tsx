"use client";

import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";

export default function ProductDetailClient({ product }: any) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#0F0F0F",
        color: "#fff",
        px: { xs: 2, md: 10 },
        py: 12,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* 🔥 Heading */}
      <Typography
        sx={{
          fontSize: { xs: "36px", md: "78px" },
          fontWeight: 700,
          textAlign: "center",
          fontFamily: "var(--font-teachers)",
          mb: 6,
        }}
      >
        {product.heading}
      </Typography>

      <Box
        sx={{
          width: { xs: "100%", md: "900px" },
          mx: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Big Image Wrapper */}
        <Box sx={{ position: "relative" }}>
          {/* Big Image */}
          <Box
            component="img"
            src={product.images[0]}
            alt={product.heading}
            sx={{
              width: "100%",
              height: "420px",
              objectFit: "cover",
              borderRadius: "12px",
              border: "2px solid #FFFFFF",
            }}
          />

          {/* 🔥 Scroll Button */}
          <Box
            sx={{
              position: "absolute",
              top: "-150px",
              left: "50%",
              transform: "translateX(-50%)",
              cursor: "pointer",
              zIndex: 2,
            }}
          >
            <Box
              component="img"
              src="/scrollDown.png"
              alt="scroll"
              sx={{
                width: "250px",
                height: "250px",
                objectFit: "contain",
                animation: "bounce 1.5s infinite",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            />
          </Box>
        </Box>

        {/* 🔥 Small Info */}
        <Typography
          sx={{
            fontSize: "16px",
            textAlign: "center",
            fontFamily: "var(--font-jost)",
            mt: { xs: 2, md: 3 },
            color: "#ccc",
            lineHeight: "26px",
          }}
        >
          {product.smallInfo}
        </Typography>

        {/* 🔥 4 Image Grid */}
        <Box
          id="nextSection"
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 2,
            width: "100%",
            mt: 3,
          }}
        >
          {product.images.slice(1, 5).map((img: string, index: number) => (
            <Box
              key={index}
              component="img"
              src={img}
              alt={product.heading}
              sx={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
                borderRadius: "10px",
                border: "1px solid #2A2A2A",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            />
          ))}
        </Box>
      </Box>

      {/* 🔥 Info Section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 2fr" },
          gap: 4,
          maxWidth: "900px",
          mx: "auto",
          mt: 8,
        }}
      >
        <Typography
          sx={{
            color: "#777",
            fontSize: "16px",
            lineHeight: "28px",
          }}
        >
          {product.heading}
        </Typography>

        <Typography
          sx={{
            color: "#EFECE6",
            fontSize: "16px",
            lineHeight: "28px",
          }}
        >
          {product.info}
        </Typography>
      </Box>

      {/* 🔥 Related Heading */}
      <Box sx={{ mt: 10 }}>
        <Typography
          sx={{
            fontSize: { xs: "40px", md: "78px" },
            fontWeight: 700,
            lineHeight: 0.9,
            fontFamily: "var(--font-teachers)",
            color: "transparent",
            WebkitTextStroke: "1px #FFFFFF",
          }}
        >
          Related
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "40px", md: "78px" },
            fontWeight: 700,
            fontFamily: "var(--font-teachers)",
          }}
        >
          Products
        </Typography>
      </Box>

      {/* 🔥 Related Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },
          gap: 6,
          mt: 6,
        }}
      >
        {product.relatedProducts?.map((item: any, index: number) => (
          <Box key={index}>
            {/* Image */}
            <Box
              sx={{
                border: "1px solid #FFFFFF",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <Image
                src={item.image}
                alt="related-product"
                width={100}
                height={300}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* Content */}
            <Box sx={{ mt: 2 }}>
              <Typography
                sx={{
                  color: "#aaa",
                  fontSize: "14px",
                  lineHeight: "22px",
                }}
              >
                {item.text}
              </Typography>

              <Button
                endIcon={<ArrowForwardIcon />}
                onClick={() => {
                  const message = `Hello, I am interested in ${item.text}`;
                  const url = `https://wa.me/919665316851?text=${encodeURIComponent(
                    message,
                  )}`;
                  window.open(url, "_blank");
                }}
                sx={{
                  width: "172px",
                  height: "40px",
                  background: "#FFF83A",
                  color: "#000",
                  borderRadius: "20px",
                  mt: 2,
                  textTransform: "none",
                  fontWeight: 600,
                  "&:hover": {
                    background: "#e6df30",
                  },
                }}
              >
                Yes I'm Interested
              </Button>
            </Box>
          </Box>
        ))}
      </Box>

      {/* 🔥 Bounce Animation */}
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(10px); }
          }
        `}
      </style>

    </Box>
  );
}
