"use client";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { products } from "@/data/products";
import { useRouter } from "next/navigation";
import ContactUS from "@/components/ContactUS/ContactUS";

export default function ProductPage() {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: { xs: "flex-start", md: "center" },
        background: "#0F0F0F",
        gap: { xs: 6, md: 8 },
        px: { xs: 5, md: 8 },
        pt: { xs: 1, md: 6 },
        pb: 8,
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        fontFamily: "var(--font-jost)",
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
        {products.map((product, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {/* Image */}
            <Box
              sx={{
                background: "#1A1A1A",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid #FFFFFF",
              }}
            >
              <Box
                component="img"
                src={product.image}
                alt={product.heading}
                sx={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* Content */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "18px",
                }}
              >
                {product.heading}
              </Typography>

              <Typography
                sx={{
                  color: "#aaa",
                  fontSize: "14px",
                }}
              >
                {product.description}
              </Typography>
            </Box>
            {/* Button */}
            <Button
              endIcon={<ArrowForwardIcon />}
              onClick={() => router.push(`/products/${product.slug}`)}
              sx={{
                background: "#FFF83A",
                color: "#000",
                fontWeight: 500,
                textTransform: "none",
                borderRadius: "15px",
                px: 2,
                py: 1,
                alignSelf: "flex-start",
                "&:hover": {
                  background: "#e6df33",
                },
              }}
            >
              View Details
            </Button>
          </Box>
        ))}
      </Box>
      <ContactUS />
    </Box>
  );
}
