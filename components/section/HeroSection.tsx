"use client";

import { Box, Typography, Button, Stack, Link } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
export default function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: { xs: "column", md: "row" },
        background: "#0F0F0F",
        gap: 2,
        px: 8,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          textAlign:{ xs: "center", md: "left" },
          py: { xs: 15, md: 20 },
          px: 2,
          maxWidth: 1100,
          width: "100%",
          mx: "auto",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Teachers, sans-serif",
            fontWeight: 900,
            fontSize: { xs: "60px", md: "105px" },
            lineHeight: { xs: "60px", md: "126px" },
            letterSpacing: "3.5px",
            backgroundImage: "url('/animation.gif')",
            backgroundSize: "cover",
            backgroundRepeat: "repeat",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Jyotishna Enterprises
        </Typography>
        {/* Description */}
        <Typography
          sx={{
            mt: 4,
            maxWidth: 750,
            fontSize: { xs: "16px", md: "18px" },
            lineHeight: 1.8,
            color: "#e0e0e0",
            fontFamily: "Jost",
          }}
        >
          We are pleased to introduce Jyotishna, a prominent Pune-based importer
          and stockiest established in 2026. We specialize in the supply of ASTM
          A193 Gr. B7 and A194 Gr. 2H fasteners, committed to providing
          industry-leading standards and service.
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          mt={5}
          alignItems="center"
        >
          <Button
            variant="contained"
            endIcon={<ArrowOutwardIcon />}
            sx={{
              background: "#A9FF5C",
              minWidth: 180,
              height: 48,
              borderRadius: "15px",
              color: "#0F0F0F",
              textTransform: "none",
              fontFamily: "Jost",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": { background: "#1ebe5d" },
            }}
            href="https://wa.me/919999999999"
            target="_blank"
          >
            WhatsApp Chat
          </Button>

          <Button
            variant="outlined"
            component={Link}
            href="/products"
            sx={{
              minWidth: 180,
              height: 48,
              borderRadius: "15px",
              borderColor: "#ffffff",
              background: "#FFFFFF",
              color: "#0F0F0F",
              textTransform: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                borderColor: "#ffffff",
              },
            }}
          >
            View Products
          </Button>
        </Stack>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2.2,
          }}
        >
          {/* Row 1 */}
          <Box sx={{ display: "flex", gap: 2, ml: { xs: 4, sm: 8, md: 15 } }}>
            {[1, 2].map((item) => (
              <Box
                key={item}
                sx={{
                  width: { xs: 120, sm: 150, md: 170, lg: 200 },
                  height: { xs: 65, sm: 90, md: 100, lg: 120 },
                  borderRadius: "55px",
                  overflow: "hidden",
                  boxShadow: 3,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#FFFFFF",

                }}
              >
                <img

                  src={`/images/img${item}.jpg`}
                  alt="products"
                  style={{ width: "80%", height: "80%", objectFit: "contain" }}
                />
              </Box>
            ))}
          </Box>

          {/* Row 2 */}
          <Box sx={{ display: "flex", gap: 1 }}>
            {[3, 4, 5].map((item) => (
              <Box
                key={item}
                sx={{
                  width: { xs: 120, sm: 150, md: 170, lg: 200 },
                  height: { xs: 65, sm: 90, md: 100, lg: 120 },
                  borderRadius: "55px",
                  overflow: "hidden",
                  boxShadow: 3,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#FFFFFF",
                }}
              >
                <img
                  src={`/images/img${item}.jpg`}
                  alt="secondrow"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </Box>
            ))}
          </Box>

          {/* Row 3 */}
          <Box sx={{ display: "flex", gap: 2, ml: { xs: 4, sm: 8, md: 15 } }}>
            {[6, 7].map((item) => (
              <Box
                key={item}
                sx={{
                  width: { xs: 120, sm: 150, md: 170, lg: 200 },
                  height: { xs: 65, sm: 90, md: 100, lg: 120 },
                  borderRadius: "55px",
                  overflow: "hidden",
                  boxShadow: 3,
                  background: "#FFFFFF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={`/images/img${item}.jpg`}
                  alt="thirdeow"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>

  );
}
