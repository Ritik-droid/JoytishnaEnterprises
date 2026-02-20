"use client";

import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";

export default function IndusrtyPerfect() {
  const industries = [
    {
      title: "Food Processing",
      description:
        "Efficient steam and heating solutions for bakeries, dairies, and food plants.",
      image: "/products/product9.png",
    },
    {
      title: "Textile Industry",
      description:
        "Reliable thermal energy for dyeing, drying, and fabric processing.",
      image: "/products/product8.png",
    },
    {
      title: "Pharmaceutical",
      description:
        "Clean and controlled heating for manufacturing and sterilization processes.",
      image: "/products/product7.png",
    },
    {
      title: "Agro & Agriculture",
      description:
        "Sustainable heating solutions for crop drying and agro-processing units.",
      image: "/products/product5.png",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#FFFFFF",
        px: { xs: 2, md: 15 },
        py: { xs: 6, md: 12 },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "24px", md: "36px" },
          fontWeight: 700,
          color: "#347C5E",
          mb: 10,
          textAlign: "center",
        }}
      >
        Perfect For These Industries
      </Typography>

      <Grid container spacing={4}>
        {industries.map((item, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <Box
              sx={{
                backgroundColor: "#F9F9F9",
                borderRadius: "20px",
                overflow: "hidden",
                textAlign: "center",
                height: 460,
                display: "flex",
                flexDirection: "column",
                transition: "0.3s",
                boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 18px 45px rgba(0,0,0,0.12)",
                },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: 260,
                  position: "relative",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>

              <Box
                sx={{
                  p: 4,
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: 600,
                    mb: 2,
                    color:"#347C5E"
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "15px",
                    color: "#666",
                    lineHeight: 1.7,
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
