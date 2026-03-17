"use client";

import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function AboutUS() {
  return (
    <Box
      id="about"
      sx={{
        background: "#0F0F0F",
        color: "#EFECE6",
        px: { xs: 2, md: 12 },
        py: { xs: 8, md: 0 },
      }}
    >
      {/* ================= HEADING ================= */}
      <Typography
        sx={{
          fontWeight: 900,
          fontSize: { xs: "38px", md: "88px" },
          textAlign: "center",
          mb: 5,
          letterSpacing: "2px",
        }}
      >
        About Us
      </Typography>

      {/* ================= ABOUT ================= */}
      <Box sx={{ maxWidth: "900px", mx: "auto", mb: 10 }}>
        <Typography sx={{ color: "#BDBDBD", lineHeight: "32px", mb: 3 }}>
          We are a dynamic and reliable industrial trading firm specializing in
          the supply of{" "}
          <b>fasteners, bearings, chains, sprockets, and springs</b>. With a
          strong focus on quality, precision, and performance, we serve a wide
          range of industries including manufacturing, material handling,
          construction, and engineering.
        </Typography>

        <Typography sx={{ color: "#BDBDBD", lineHeight: "32px", mb: 3 }}>
          Backed by robust sourcing capabilities and a growing global network,
          we offer{" "}
          <b>
            end-to-end solutions in domestic supply as well as import and export
            operations
          </b>
          . Our commitment is to deliver the right product at the right time,
          ensuring uninterrupted operations for our clients.
        </Typography>

        <Typography sx={{ color: "#BDBDBD", lineHeight: "32px" }}>
          We believe that even the smallest component plays a critical role in
          industrial performance. That’s why we prioritize{" "}
          <b>quality assurance, competitive pricing, and dependable service</b>{" "}
          in everything we do.
        </Typography>
      </Box>

      {/* ================= VISION & MISSION ================= */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          mb: 12,
        }}
      >
        {/* Vision */}
        <Box
          sx={{
            flex: { xs: "100%", md: "48%" },
            p: 5,
            borderRadius: "20px",
            background: "linear-gradient(145deg, #111, #1A1A1A)",
            border: "1px solid #1F1F1F",
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: "22px", mb: 2 }}>
            🌍 Our Vision
          </Typography>
          <Typography sx={{ color: "#BDBDBD", lineHeight: "30px" }}>
            To become a trusted global partner in industrial supply, recognized
            for quality, reliability, and excellence in delivering fastening and
            power transmission solutions.
          </Typography>
        </Box>

        {/* Mission */}
        <Box
          sx={{
            flex: { xs: "100%", md: "48%" },
            p: 5,
            borderRadius: "20px",
            background: "linear-gradient(145deg, #111, #1A1A1A)",
            border: "1px solid #1F1F1F",
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: "22px", mb: 2 }}>
            🎯 Our Mission
          </Typography>
          <Box
            component="ul"
            sx={{ pl: 2, color: "#BDBDBD", lineHeight: "30px" }}
          >
            <li>
              Provide high-quality industrial products that meet international
              standards
            </li>
            <li>
              Build long-term relationships based on trust and transparency
            </li>
            <li>Ensure timely delivery and cost-effective solutions</li>
            <li>Continuously expand global sourcing network</li>
            <li>Support industries with reliable components</li>
          </Box>
        </Box>
      </Box>

      {/* ================= CORE VALUES ================= */}
      <Box sx={{ mb: 12 }}>
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: { xs: "26px", md: "32px" },
            textAlign: "center",
            mb: 6,
          }}
        >
          💡 Our Core Values
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          {[
            {
              title: "Quality First",
              desc: "We never compromise on product quality and standards.",
            },
            {
              title: "Reliability",
              desc: "We ensure consistent supply and dependable service.",
            },
            {
              title: "Integrity",
              desc: "We follow transparent and ethical business practices.",
            },
            {
              title: "Customer Focus",
              desc: "We deliver solutions tailored to customer needs.",
            },
            {
              title: "Continuous Growth",
              desc: "We constantly improve and expand our capabilities.",
            },
          ].map((item, i) => (
            <Box
              key={i}
              sx={{
                flex: { xs: "100%", sm: "48%", md: "30%" },
                p: 4,
                borderRadius: "16px",
                background: "#121212",
                border: "1px solid #1F1F1F",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  borderColor: "#333",
                },
              }}
            >
              <Typography sx={{ fontWeight: 600, mb: 1 }}>
                {item.title}
              </Typography>
              <Typography sx={{ color: "#9E9E9E", fontSize: "14px" }}>
                {item.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ================= OFFERINGS ================= */}
      <Box sx={{ textAlign: "center", mb: 10 }}>
        <Typography sx={{ fontWeight: 800, fontSize: "30px", mb: 3 }}>
          ⚙️ What We Offer
        </Typography>

        <Box
          component="ul"
          sx={{
            listStyle: "none",
            p: 0,
            color: "#BDBDBD",
            lineHeight: "32px",
          }}
        >
          <li>Industrial Fasteners (Bolts, Nuts, Washers)</li>
          <li>Bearings (All types)</li>
          <li>Chains & Sprockets</li>
          <li>Industrial Springs</li>
          <li>Import & Export Services</li>
        </Box>
      </Box>

      {/* ================= COMMITMENT ================= */}
      <Typography
        sx={{
          textAlign: "center",
          fontStyle: "italic",
          color: "#888",
          mb: 6,
          maxWidth: "700px",
          mx: "auto",
        }}
      >
        “To power industries with dependable components and build lasting
        partnerships through quality, service, and trust.”
      </Typography>

      {/* ================= CTA ================= */}
      <Box sx={{ textAlign: "center" }}>
        <Button
          endIcon={<ArrowForwardIcon />}
          sx={{
            background: "#EFECE6",
            color: "#000",
            px: 5,
            py: 1.5,
            borderRadius: "10px",
            fontWeight: 600,
            textTransform: "none",
            "&:hover": {
              background: "#ddd",
            },
          }}
        >
          Know More
        </Button>
      </Box>
    </Box>
  );
}
