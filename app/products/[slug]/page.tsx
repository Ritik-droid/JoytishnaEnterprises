"use client";
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import Link from "next/link";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let product: any = null;

  try {
    product = await import(`@/data/products/${slug}`).then((m) => m.default);
  } catch (error) {
    product = null;
  }

  if (!product) {
    return <Typography sx={{ color: "#fff" }}>Product not found</Typography>;
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#0F0F0F",
        color: "#fff",
        px: { xs: 2, md: 10 },
        py: 15,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          fontSize: { xs: "40px", md: "78px" },
          fontWeight: 700,
          textAlign: "center",
          fontFamily: "var(--font-teachers)",
        }}
      >
        {product.heading}
      </Typography>

      {/* Image Section */}
      <Box
        sx={{
          width: { xs: "100%", md: "900px" },
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 0,
        }}
      >
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
        <Typography
          sx={{
            fontSize: { xs: "20px", md: "20px" },
            textAlign: "center",
            fontFamily: "var(--font-jost)",
            mt: { xs: "0px", md: "20px" },
          }}
        >
          {product.snallInfo}
        </Typography>{" "}
        {/* 4 Images Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 2,
            width: "100%",
          }}
        >
          {product.images.slice(1, 5).map((img: string, index: number) => (
            <Box
              key={index}
              component="img"
              src={img}
              display={"flex"}
              alt={product.heading}
              sx={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          ))}
        </Box>
      </Box>

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
        {/* Left Column */}
        <Typography
          sx={{
            color: "#aaa",
            fontSize: "16px",
            lineHeight: "28px",
          }}
        >
          {product.heading}
        </Typography>

        {/* Right Column */}
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

      <Box>
        <Typography
          sx={{
            fontSize: { xs: "40px", md: "78px" },
            fontWeight: 700,
            textAlign: "left",
            mt: 8,
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
            textAlign: "left",
            lineHeight: 1.2, // reduces gap
            fontFamily: "var(--font-teachers)",
          }}
        >
          Products
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr,1fr,1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
            lg: "1fr 1fr 1fr",
          },
          gap: 10,
          mt: 6,
        }}
      >
        {product.relatedProducts?.map((item: any, index: number) => (
          <Box
            key={index}
            sx={{
              background: "transparent",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid transparent",
            }}
          >
            <Box sx={{ borderRadius: "12px", overflow: "hidden" }}>
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
                  width={400}
                  height={300}
                  style={{
                    width: "100%",
                    height: "350px",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Box>

            {/* Content */}
            <Box sx={{ p: 2 }}>
              {/* Description */}
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
                  const url = `https://wa.me/919665316851?text=${encodeURIComponent(message)}`;
                  window.open(url, "_blank");
                }}
                sx={{
                  width: "172px",
                  height: "40.5px",
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
    </Box>
  );
}
