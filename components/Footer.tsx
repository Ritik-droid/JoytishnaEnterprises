"use client";

import { Box, Typography, IconButton, Link, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTube from "@mui/icons-material/YouTube";
import Twitter from "@mui/icons-material/X";

import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Footer = () => {
  const socialLinks = [
    {
      icon: FacebookIcon,
      url: "https://www.facebook.com/yourpage",
    },
    {
      icon: Twitter,
      url: "https://www.instagram.com/biotechsolution22?utm_source=qr&igsh=dDBvNDdmcjBvam11",
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
        background: "#0F0F0F",
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
            <Image
              src="/logo.png"
              alt="jyotishnaLogo"
              width={120}
              height={100}
              style={{ objectFit: "contain" }}
            />


            <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
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
            <Typography
              mt={2}
              fontSize={14}
              lineHeight={1.6}
              mb={2}
              maxWidth={320}
              sx={{
                color: "#33333",
                fontFamily: "var(--font-jest)",
              }}
            >
              Gate No. 1430, Chinchecha Mala, Mhatre Industries, Chikhali, Pune – 411062
            </Typography>
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


            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "#about" },
                { label: "Products", href: "#products" },
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
                color: "#FFFFFF",
                fontFamily: "var(--font-teachers)",
              }}
            >
              Contact
            </Typography>

            {[
              {

                text: `Family Industries`,
              },
              {
                text: "sales@jyotishnaenterprises.com",
              },
              {
                text: "+91 8668375337",
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
       
               <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>

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
            href="https://wa.me/7498541851"
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
          © 2026 Jyotishna Enterprises. All rights reserved.
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
