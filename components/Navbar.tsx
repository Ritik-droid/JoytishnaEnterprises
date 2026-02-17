"use client";

import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "Download Brochure", href: "/biotech_solution.pdf", newTab: true },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: 20,
          left: 0,
          right: 0,
          mx: "auto",
          backgroundColor: "#FFFFFF33",
          backdropFilter: "blur(5px)",
          borderRadius: "30px",
          width: {
            xs: "calc(100% - 56px)",
            sm: "calc(100% - 24px)",
            md: "calc(100% - 32px)",
          },
          maxWidth: 1200,
        }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: 56, sm: 64, md: 80 },
            px: { xs: 2, md: 4 },
            py: { xs: 0, md: 2 },
          }}
        >
          <Typography
            sx={{
              flexGrow: 1,
              fontSize: { xs: 20, md: 20 },
              fontWeight: 600,
              color: "#FFFFFF",
            }}
          >
            Biotech Solution
          </Typography>

          {!isMobile && (
            <Box sx={{ display: "flex", gap: 3 }}>
              {navLinks.map((link) => {
                const isBrochure = link.label === "Download Brochure";

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    target={link.newTab ? "_blank" : "_self"}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      sx={{
                        px: 2,
                        py: 1,
                        fontWeight: isBrochure ? 500 : 400,
                        borderRadius: isBrochure ? "12px" : 0, 
                        backgroundColor: isBrochure ? "#FFD700" : "transparent",
                        color: isBrochure ? "#333333" : "#333",
                        textDecoration: isBrochure ? "underline" : "none", // ✅ Underline fixed
                        transition: "0.3s",
                        "&:hover": {
                          opacity: 0.85,
                        },
                      }}
                    >
                      {link.label}
                    </Box>
                  </Link>
                );
              })}
            </Box>
          )}

          {isMobile && (
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: { width: 260 },
        }}
      >
        <Box sx={{ p: 3 }}>
          <Typography sx={{ fontSize: 20, fontWeight: 600, mb: 3 }}>
            Biotech Solution
          </Typography>
          {navLinks.map((link) => (
            <Button
              key={link.href}
              component={link.newTab ? "a" : Link}
              href={link.href}
              {...(link.newTab && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              onClick={() => setOpen(false)}
              sx={{
                display: "block",
                width: "100%",
                justifyContent: "flex-start",
                color: "#333333",
                textTransform: "none",
                mb: 1,
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
      </Drawer>
    </>
  );
}
