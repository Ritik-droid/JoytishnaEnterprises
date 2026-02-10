"use client";

import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import Image from "next/image";
import { useState, useMemo } from "react";
import ProductFilterTabs from "@/components/ProductFilterTabs/ProductFilterTabs";
import ProductCard from "@/components/ProductFilterTabs/ProductCard";
import { products } from "@/data/products";
import { features } from "@/data/productFeatures";
import { productTabledata } from "@/data/productTableData";
import { ConnectUS } from "@/components/section/ConnectUS";

export default function Products() {
  const [active, setActive] = useState("All Products");
  const filteredProducts = useMemo(() => {
    if (active === "All Products") return products;
    return products.filter((p) => p.category === active);
  }, [active]);
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "60vh",
          backgroundImage: "url('/productsBg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography
          fontSize={{ xs: 32, md: 50 }}
          fontWeight={600}
          color="#FFFFFF"
        >
          Our Products
        </Typography>
        <Typography color="#FFFFFF" maxWidth={600}>
          Fueling a Sustainable Future with Innovative Renewable Energy
          Solutions.
        </Typography>
      </Box>

      {/* Filter Section */}
      <Box sx={{ backgroundColor: "#FCF8EC", py: 4 }}>
        <ProductFilterTabs active={active} onChange={setActive} />
        {/* Products Grid */}
        <Box
          sx={{
            background: "#FCF8EC",
            maxWidth: "80%",
            mx: "auto",
            padding: 10,
            px: 2,
            py: 5,
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 4,
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          minHeight: "90vh",
          background: "#E6E3D2",
          display: "flex",
          py: 5,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          textAlign: "center",
          px: 5,
        }}
      >
        <Typography
          fontSize={{ xs: 32, md: 35 }}
          fontWeight={600}
          color="#347C5E"
        >
          Key Product Features
        </Typography>

        <Box
          sx={{
            mt: 5,
            maxWidth: "1200px",
            width: "100%",
            display: "grid",
            px: { xs: 2, sm: 3, md: 10 },
            py: { xs: 2, sm: 3, md: 0 },
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
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
                p: 3,
                py: 5,
                px: 5,
                boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                transition: "all .3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                },
                textAlign: "center",
              }}
            >
              {/* Image */}
              <Box
                sx={{
                  width: 35,
                  height: 35,
                  mx: "auto",
                  mb: 2,
                  position: "relative",
                }}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>

              {/* Heading */}
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "#347C5E",
                  mb: 1,
                }}
              >
                {feature.title}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#555555",
                  lineHeight: "160%",
                }}
              >
                {feature.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          minHeight: "60vh",
          background: "#FCF8EC",
          display: "flex",
          py: 5,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          textAlign: "center",
          px: 5,
        }}
      >
        <Typography
          fontSize={{ xs: 32, md: 35 }}
          fontWeight={600}
          color="#347C5E"
        >
          Product Comparison
        </Typography>

        <TableContainer
          component={Paper}
          elevation={0}
          sx={{
            px: { xs: 1.5, sm: 3, md: 15 }, // ✅ responsive padding
            py: { xs: 2, sm: 3 },
            borderRadius: "16px",
            backgroundColor: "#FCF8EC",
            overflowX: "auto", // ✅ mobile horizontal scroll
          }}
        >
          <Table
            sx={{
              minWidth: 650, // ✅ ensures scroll instead of squeeze
              borderCollapse: "separate",
            }}
          >
            {/* Header */}
            <TableHead>
              <TableRow sx={{ backgroundColor: "#347C5E" }}>
                {[
                  "Product Name",
                  "Application",
                  "Key Features",
                  "Capacity Range",
                ].map((head, index) => (
                  <TableCell
                    key={head}
                    sx={{
                      color: "#FFFFFF",
                      fontWeight: 600,
                      fontSize: "14px",
                      border: "none",
                      whiteSpace: "nowrap",
                      ...(index === 0 && { borderTopLeftRadius: "16px" }),
                      ...(index === 3 && { borderTopRightRadius: "16px" }),
                    }}
                  >
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            {/* Body */}
            <TableBody>
              {productTabledata.map((a, i) => (
                <TableRow
                  key={i}
                  sx={{
                    backgroundColor: i % 2 === 1 ? "transparent" : "#F7F3E8",
                  }}
                >
                  <TableCell sx={{ border: "none", fontSize: "13px" }}>
                    {a.name}
                  </TableCell>
                  <TableCell sx={{ border: "none", fontSize: "13px" }}>
                    {a.application}
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "none",
                      fontSize: "13px",
                      maxWidth: 260,
                      whiteSpace: "normal", // ✅ allow wrapping
                    }}
                  >
                    {a.features}
                  </TableCell>
                  <TableCell sx={{ border: "none", fontSize: "13px" }}>
                    {a.capacity}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box
        sx={{
          minHeight: "60vh",
          background: "#347C5E",
          display: "flex",
          py: 5,
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          px: { xs: 2, md: 5 },
        }}
      >
        {/* Heading */}
        <Typography
          fontSize={{ xs: 28, md: 32 }}
          fontWeight={600}
          color="#FFD700"
          mb={4}
        >
          Why Choose Biomass Pellets?
        </Typography>

        {/* Content Wrapper */}
        <Box
          sx={{
            maxWidth: "1200px",
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            alignItems: "flex-start",
          }}
        >
          {/* Left Box – Image + Description */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: "transparent",
              borderRadius: "16px",
              p: 3,
              textAlign: "left",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: 220,
                mb: 2,
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <img
                src="featuredProducts/img1.png" 
                alt="Biomass Pellets"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>

            <Typography fontWeight={600} fontSize={18} mb={1} color="#347C5E">
              Clean & Renewable Energy
            </Typography>

            <Typography
              fontSize={18}
              fontWeight={600}
              color="#FFFFFF"
              lineHeight="50%"
            >
              The Power of Renewable Energy
            </Typography>
          </Box>

          {/* Right Box – Bullet Points */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: "transparent",
              borderRadius: "16px",
              p: 3,
              textAlign: "left",
            }}
          >
            {[
              "Locally produced, compressed biomass fuels from sawdust, rice husk, groundnut shell",
              "Below 8% moisture content – ensuring high combustion efficiency",
              "Environmentally friendly and safe for residential areas",
              "Savings up to 50% on fuel costs compared to LPG and diesel",
              "Pellets are easy to store, transport, and use",
              "Replaces fossil fuels and significantly reduces carbon emissions",
            ].map((point, index) => (
              <Typography
                key={index}
                fontSize={14}
                color="#FFFFFF"
                mb={1.8}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  lineHeight: "160%",
                }}
              >
                <span
                  style={{
                    color: "#FFD700", // ✅ gold check mark
                    fontWeight: 700,
                    marginRight: 10,
                    fontSize: "16px",
                    lineHeight: "1.4",
                  }}
                >
                  ✓
                </span>
                {point}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
      <ConnectUS/>
    </Box>
  );
}
