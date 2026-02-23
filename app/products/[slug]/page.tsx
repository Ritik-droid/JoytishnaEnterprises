import { products, features } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Button,
} from "@mui/material";
import ProductClient from "./ProductClient";
import { ConnectUS } from "@/components/section/ConnectUS";
import WhyChooeProduct from "./WhyChooseProduct";
import IndusrtyPerfect from "./IndustryPerfect";
import CustomersResponses from "./CustomersResponses";
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  return (
    <Box>
      <Box
        sx={{
          minHeight: "100vh",
          px: { xs: 3, md: 10 },
          py: 8,
          backgroundColor: "#EDE0C2",
        }}
      >
        <Link href="/products">
          <Button sx={{ mb: 4 }}>← Back to Products</Button>
        </Link>
        {/* Main Layout */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 6 },
            alignItems: { xs: "stretch", md: "center" },
          }}
        >
          {/* Image Section */}
          <Box
            sx={{
              flex: 1,
              position: "relative",
              width: "100%",
              aspectRatio: "4 / 3", // Perfect responsive ratio
            }}
          >
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "contain" }}
            />
          </Box>

          {/* Content Section */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "24px", md: "40px" },
                fontWeight: 700,
                color: "#347C5E",
              }}
            >
              {product.title}
            </Typography>

            {/* Capacity Badge */}
            <Box
              sx={{
                height: "2.5rem",
                width: { xs: "100%", md: "20rem" }, // full width on mobile
                bgcolor: "#FFD700",
                borderRadius: "2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#333",
                }}
              >
                1,00,000 - 70,00,000 Kcal/hr
              </Typography>
            </Box>

            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: "180%",
                color: "#444",
              }}
            >
              {product.detailedDescription}
            </Typography>

            {/* Feature Boxes */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                mt: 2,
              }}
            >
              {features.map((feature, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 1,
                    backgroundColor: "#FFFFFF",
                    borderRadius: "15px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  }}
                >
                  {/* Left Image */}
                  <Box
                    sx={{
                      position: "relative",
                      width: 50,
                      height: 25,
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </Box>

                  {/* Right Content */}
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 600,
                        color: "#347C5E",
                        mb: 0.5,
                      }}
                    >
                      {feature.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#666666",
                        lineHeight: "160%",
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 6 },
            alignItems: { xs: "stretch", md: "flex-start" },
            mt: 6,
          }}
        >
          {/* LEFT COLUMN */}
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontSize: { xs: "24px", md: "32px" },
                fontWeight: 700,
                color: "#347C5E",
                mb: 2,
              }}
            >
              Advanced Biomass Heating Technology
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: "180%",
                color: "#555555",
              }}
            >
              Our biomass pellet burner systems are engineered to deliver high
              efficiency, consistent thermal output, and environmentally
              responsible performance. Designed with modern automation and
              industrial-grade components, these systems ensure low operational
              costs, minimal emissions, and seamless integration into various
              industrial applications. Built for durability and optimized fuel
              combustion, they provide reliable heat generation across diverse
              capacity requirements.
            </Typography>
          </Box>

          {/* RIGHT COLUMN - SPEC BOX */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: "#FFFFFF",
              p: 4,
              borderRadius: "16px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Top Section */}
            <Box>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#347C5E",
                  mb: 3,
                }}
              >
                Quick Specification
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {[
                  { label: "Fuel Type", value: "Biomass Pellets" },
                  {
                    label: "Capacity Range",
                    value: "1,00,000 – 70,00,000 Kcal/hr",
                  },
                  { label: "Efficiency", value: "92%+" },
                  { label: "Control System", value: "PLC Automated" },
                  { label: "Ignition", value: "Auto Ignition" },
                  { label: "Warranty", value: "2 Years" },
                ].map((spec, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: "1px solid #E0E0E0",
                      pb: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#347C5E",
                        fontWeight: 600,
                        fontSize: "14px",
                      }}
                    >
                      {spec.label}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#555555",
                        fontSize: "14px",
                        textAlign: "right",
                      }}
                    >
                      {spec.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Bottom Button */}
            <Button
              startIcon={<PictureAsPdfIcon />}
              sx={{
                mt: 4,
                alignSelf: "flex-start",
                backgroundColor: "transparent",
                color: "#347C5E",
                textTransform: "none",
                fontWeight: 600,
                px: 0,
                "&:hover": {
                  backgroundColor: "transparent",
                  textDecoration: "underline",
                },
              }}
        
              Download Full Spec Sheet
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "50vh",
          justifyContentL: "center",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          px: { xs: 1, md: 0 },
          py: 0,
        }}
      >
        <ProductClient />
        <WhyChooeProduct/>
        <IndusrtyPerfect/>
        <CustomersResponses/>
      </Box>
      <ConnectUS/>
    </Box>
  );
}
