"use client";

import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const reviews = [
  {
    text: "Biotech Solution's biomass burners have transformed our energy consumption. Significant savings and peace of mind.",
    author: "Rajeev Kumar, Operations Manager",
  },
  {
    text: "Excellent quality and reliable service. Our factory efficiency has improved noticeably after installation.",
    author: "Amit Sharma, Plant Head",
  },
  {
    text: "A sustainable and cost-effective solution. The support team is responsive and professional.",
    author: "Neha Deshmukh, Energy Consultant",
  },
];

export const CustomerResponse = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
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
          backgroundColor: "rgba(0,0,0,0.65)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography variant="h4" fontWeight={700} color="#FFD700" mb={3}>
          What Our Customers Say
        </Typography>

        {/* Slider */}
        <Box
          sx={{
            display: "flex",
            width: `${reviews.length * 100}%`,
            transform: `translateX(-${index * (100 / reviews.length)}%)`,
            transition: "transform 0.8s ease-in-out",
          }}
        >
          {reviews.map((review, i) => (
            <Box
              key={i}
              sx={{
                width: `${100 / reviews.length}%`,
                px: 2,
              }}
            >
              <Typography
                sx={{
                  maxWidth: "800px",
                  margin: "0 auto",
                  color: "#FFFFFF",
                  fontSize: { xs: "13.5px", sm: "16px", md: "22px" },
                  fontStyle: "italic",
                  lineHeight: 1.6,
                }}
              >
                “{review.text}”
              </Typography>

              <Typography
                sx={{
                  mt: 4,
                  color: "#FFFFFF",
                  fontSize: { xs: "12px", sm: "16px", md: "18px" },
                }}
              >
                — {review.author}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
