"use client";

import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";

export default function CustomersResponses() {
  const testimonials = [
    {
      name: "Rahul Mehta",
      company: "Mehta Foods Pvt Ltd",
      comment:
        "Outstanding performance and energy efficiency. It significantly reduced our fuel costs.",
      image: "/featuredProducts/img3.png",
    },
    {
      name: "Anita Sharma",
      company: "Sharma Textiles",
      comment:
        "Very reliable heating solution. Installation was smooth and support team is excellent.",
      image: "/featuredProducts/img3.png",
    },
    {
      name: "Vikram Patel",
      company: "Patel Pharmaceuticals",
      comment:
        "Clean and consistent steam output. Perfect for our sterilization process.",
      image: "/featuredProducts/img3.png",
    },
    {
      name: "Suresh Deshmukh",
      company: "AgroDry Solutions",
      comment:
        "Eco-friendly and cost-effective. A great investment for our agro processing unit.",
      image: "/featuredProducts/img3.png",
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
          fontSize: { xs: "24px", md: "32px" },
          fontWeight: 700,
          color: "#347C5E",
          mb: 8,
          textAlign: "center",
        }}
      >
        What Our Customers Say
      </Typography>

      <Grid container spacing={4}>
        {testimonials.map((item, index) => (
          <Grid
            key={index}
            size={{ xs: 12, sm: 6, md: 3 }} // 4 cards in one row on md+
            sx={{ display: "flex" }}
          >
            <Box
              sx={{
                backgroundColor: "#F9F9F9",
                borderRadius: "20px",
                p: 4,
                boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 18px 45px rgba(0,0,0,0.12)",
                },
              }}
            >
              {/* Top Section */}
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                {/* Gold Circle Image */}
                <Box
                  sx={{
                    width: 70,
                    height: 70,
                    borderRadius: "100%",
                    backgroundColor: "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 2,
                    border: "3px solid #FFD700", // ✅ Gold border only
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "100%",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                </Box>

                {/* Name + Company + Stars */}
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
                    {item.name}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "13px",
                      color: "#666",
                      mb: 1,
                    }}
                  >
                    {item.company}
                  </Typography>

                  <Box sx={{ display: "flex" }}>
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        sx={{ color: "#FFD700", fontSize: 18 }}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>

              {/* Comment */}
              <Typography
                sx={{
                  fontStyle: "italic",
                  fontSize: "14px",
                  color: "#444",
                  lineHeight: 1.6,
                }}
              >
                "{item.comment}"
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
