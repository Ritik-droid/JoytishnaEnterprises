"use client";

import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { products } from "@/data/products";
import Link from "next/link";

const OurFeaturedProducts = () => {
  const [mounted, setMounted] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 2,
    centerMode: true,
    centerPadding: "5px",
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    focusOnSelect: true,
    beforeChange: (_: number, next: number) => setCurrent(next),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3.5,
          infinite: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4.5,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
        },
      },
    ],
  };

  // Helper to calculate scale based on distance from center
  const getScale = (index: number) => {
    const diff = Math.abs(current - index);
    if (diff === 0) return 1; // center
    if (diff === 1) return 0.9; // immediate neighbors
    if (diff === 2) return 0.85; // next-to neighbors
    return 0.7; // others
  };

  return (
    <Box sx={{ py: 5, background: "#232323", overflow: "hidden" }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{
            color: "#fff",
            fontFamily: "var(--font-teachers)",
          }}
        >
          Our Featured Products
        </Typography>
      </Box>

      <Slider {...settings}>
        {products.map((card, index) => (
          <div key={index}>
            <Box
              className="inner-card"
              sx={{
                width: { xs: "95%", sm: 180, md: 250, lg: 290 },
                height: { xs: 250, sm: 440, md: 500, lg: 500 },
                mx: { xs: 0.5, sm: 1, md: 1.5, lg: 5 },
                borderRadius: 2,
                overflow: "hidden",
                backgroundColor: "#fff",
                display: "flex",
                justifyContent: "left",
                flexDirection: "column",
                transform: {
                  xs: "scale(1)", // 👈 mobile = no scaling
                  sm: `scale(${getScale(index)})`,
                },
                transition: "transform 0.5s, box-shadow 0.5s",
                boxShadow:
                  getScale(index) > 1
                    ? "0px 20px 40px rgba(0,0,0,0.25)"
                    : "none",
                zIndex: getScale(index) > 1 ? 2 : 1,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "60%",
                  aspectRatio: "1 / 1.2",
                }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <Box
                sx={{
                  p: { xs: 1, sm: 2, md: 2.5 },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  sx={{
                    color: "#347C5E",
                    fontFamily: "var(--font-teachers)",
                    fontWeight: 600,
                    fontSize: { xs: "8px", sm: "16px", md: "18px" },
                    mb: { xs: 0.5, sm: 1 },
                  }}
                >
                  {card.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#333333",
                    fontFamily: "var(--font-jost)",
                    fontSize: { xs: "8px", sm: "13px", md: "14px" },
                    mb: { xs: 1, sm: 1.5, md: 2 },
                    lineHeight: 1.4,
                  }}
                >
                  {card.description}
                </Typography>

                <Button
                  component={Link}
                  href={`/products/${card.slug}`}
                  sx={{
                    backgroundColor: "transparent",
                    border: "1.5px solid #347C5E",
                    borderRadius: 2.5,
                    color: "#347C5E",
                    fontFamily: "var(--font-jost)",

                    fontSize: { xs: "8px", sm: "12px", md: "13px" },
                    px: { xs: 1, sm: 2 },
                    py: { xs: 0.3, sm: 0.75 },
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#347C5E",
                      color: "#fff",
                    },
                  }}
                >
                  Discover Product
                </Button>
              </Box>
            </Box>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default OurFeaturedProducts;
