"use client";

import { Box, Typography, IconButton, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTube from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { LocationOn, Email, Phone, QrCode } from "@mui/icons-material";

const Footer = () => {
  const socialLinks = [
    {
      icon: FacebookIcon,
      url: "https://www.facebook.com/yourpage",
    },
    {
      icon: InstagramIcon,
      url: "https://www.instagram.com/biotechsolution22?utm_source=qr&igsh=dDBvNDdmcjBvam11",
    },
    {
      icon: YouTube,
      url: "https://youtube.com/@biotechsolution-f4g?si=DB_35x0g4tv14qbZ",
    },
  ];
  return (
    <Box
      sx={{
        background: "#5C4B5C",
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 4, md: 20 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1200px" }}>
        {/* COLUMNS */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 5, md: 4 },
            alignItems: "stretch",
          }}
        >
          {/* Column 1 */}
          <Box
            sx={{
              flex: 1,
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              sx={{
                color: "#FFD700",
                fontFamily: "var(--font-teachers)",
              }}
              fontSize={22}
              fontWeight={600}
              mb={2}
            >
              Biotech Solution
            </Typography>

            <Typography
              fontSize={14}
              lineHeight={1.6}
              mb={2}
              maxWidth={320}
              sx={{
                color: "#33333",
                fontFamily: "var(--font-jest)",
              }}
            >
              Leading the way in renewable energy solutions for a sustainable
              future. Go green, encourage clean.
            </Typography>

            <Box sx={{ display: "flex", gap: 1 }}>
              {socialLinks.map(({ icon: Icon, url }, i) => (
                <IconButton
                  key={i}
                  component="a"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "#fff",
                    p: 0,
                    "&:hover": { color: "#FFD700" },
                  }}
                >
                  <Icon />
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* Column 2 */}
          <Box
            sx={{
              flex: 1,
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 600,
                color: "#FFD700",
                fontFamily: "var(--font-teachers)",
              }}
            >
              Quick Links
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Products", href: "/products" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  sx={{
                    color: "#fff",
                    textDecoration: "none",
                    fontFamily: "var(--font-jost)",

                    "&:hover": { color: "#FFD700" },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Box>
          </Box>

          {/* Column 3 */}
          <Box
            sx={{
              flex: 1,
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 600,
                color: "#FFD700",
                fontFamily: "var(--font-teachers)",
              }}
            >
              Contact Us
            </Typography>

            {[
              {
                icon: <LocationOn sx={{ color: "#FFD700" }} />,
                text: `Plot No. B-33
                      Murtizapur Growth Center, MIDC, Sherwadi Road,
                      Murtizapur Dist.-Akola, PinCode - 444107`,
              },
              {
                icon: <Email sx={{ color: "#FFD700" }} />,
                text: "biotechsolution07.22@gmail.com",
              },
              {
                icon: <Phone sx={{ color: "#FFD700" }} />,
                text: "+91 8668375337",
              },
              {
                icon: <QrCode sx={{ color: "#FFD700" }} />,
                text: "GSTIN: 27ANWPR0738F1ZI",
              },
            ].map((item, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  gap: 1.5,
                  mb: 1.4,
                  maxWidth: 320,
                  alignItems: "flex-start",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                {item.icon}
                <Typography
                  fontSize={14}
                  lineHeight={1.5}
                  sx={{
                    fontFamily: "var(--font-jest)",
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Divider */}
        <Box
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.25)",
            my: 4,
          }}
        />

        {/* Copyright */}
        <Typography
          sx={{
            textAlign: "center",
            fontSize: 13,
            color: "#fff",
            opacity: 0.85,
          }}
        >
          © 2026 Biotech Solution. All rights reserved.
        </Typography>
        <Typography
          sx={{
            mt: 3,
            textAlign: "center",
            fontSize: 13,
            color: "#fff",
            opacity: 0.85,
          }}
        >
          Design and Developed by
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: 13,
            color: "#fff",
            opacity: 0.85,
          }}
        >
          Prathmesh & Ritik- iritik358@gmail.com [+917397827579]
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
