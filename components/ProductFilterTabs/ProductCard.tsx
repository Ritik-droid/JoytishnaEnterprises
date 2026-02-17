"use client";

import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { Product } from "@/data/products";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        transition: "transform .25s ease",
        "&:hover": {
          transform: "translateY(-6px)",
        },
        display: "flex",
        flexDirection: "column",
        minHeight: 450,
      }}
    >
      {/* Image on TOP */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 200,
          mt: 1,
        }}
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          style={{ objectFit: "contain" }}
        />
      </Box>

      {/* Content BELOW image */}
      <Box
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 1.5,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Teachers",
            fontWeight: 700,
            fontSize: "18px",
            color: "#347C5E",
          }}
        >
          {product.title}
        </Typography>

        <Typography
          sx={{
            fontSize: "14px",
            lineHeight: "160%",
            color: "#555555",
          }}
        >
          {product.description}
        </Typography>

        <Link
          href={`/products/${product.slug}`}
          style={{ textDecoration: "none" }}
        >
          <Button
            sx={{
              mt: 2.5,
              textTransform: "none",
              fontWeight: 600,
              color: "#347C5E",
              border: "1.5px solid #347C5E",
              borderRadius: "999px",
              px: 3,
              py: 1,
              "&:hover": {
                backgroundColor: "#347C5E",
                color: "#FFFFFF",
              },
            }}
          >
            Learn More
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
