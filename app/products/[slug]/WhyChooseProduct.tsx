"use client";

import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";

export default function WhyChooeProduct({ product }: any) {
  const features = [
    {
      title: "High Efficiency",
      description:
        "Delivers maximum heat output with minimal pellet consumption.",
      image: "/featuredProducts/img2.png", // ✅ correct
    },
    {
      title: "Eco-Friendly",
      description: "Reduces carbon emissions using renewable biomass fuel.",
      image: "/featuredProducts/img3.png",
    },
    {
      title: "Low Maintenance",
      description: "Built with durable components for long-term performance.",
      image: "/featuredProducts/img4.png",
    },
    {
      title: "Cost Effective",
      description: "Lower operational cost compared to traditional systems.",
      image: "/featuredProducts/img5.png",
    },
    {
      title: "Safe Operation",
      description: "Advanced safety controls ensure secure functionality.",
      image: "/featuredProducts/img6.png",
    },
    {
      title: "Compact Design",
      description: "Space-saving structure for flexible installation.",
      image: "/featuredProducts/img7.png",
    },
    {
      title: "Automatic Control",
      description: "Smart temperature and fuel feeding automation.",
      image: "/featuredProducts/img8.png",
    },
    {
      title: "Low Emissions",
      description: "Clean combustion with minimal smoke output.",
      image: "/featuredProducts/img2.png",
    },
    {
      title: "Wide Applications",
      description: "Ideal for industrial, commercial & agricultural usage.",
      image: "/featuredProducts/img6.png",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#F7F3E8",
        px: { xs: 2, md: 10 },
        py: { xs: 6, md: 10 },
      }}
    >
      {/* Section Heading */}
      <Typography
        sx={{
          fontSize: { xs: "24px", md: "34px" },
          fontWeight: 700,
          color: "#347C5E",
          mb: 6,
          textAlign: "center",
        }}
      >
        Why Choose Our {product?.title}?
      </Typography>

      {/* Proper 3x3 Grid */}
      <Grid
        container
        spacing={4}
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(3, 1fr)",
          },
          gap: 4,
        }}
      >
        {features.map((feature, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: "18px",
              p: 4,
              textAlign: "left",
              transition: "all 0.3s ease",
              boxShadow: "0 8px 25px rgba(0,0,0,0.05)",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 12px 35px rgba(0,0,0,0.1)",
              },
            }}
          >
            {/* Image */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                mb: 2,
              }}
            >
              <Image
                src={feature.image}
                alt={feature.title}
                width={40}
                height={40}
              />
            </Box>

            {/* Title */}
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 600,
                mb: 1,
                color: "#347C5E",
              }}
            >
              {feature.title}
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                fontSize: "14px",
                color: "#666",
                lineHeight: 1.6,
              }}
            >
              {feature.description}
            </Typography>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
