"use client";

import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "/products" },
  { label: "Contact US", href: "#contact" },
  { label: "Download Catalogue", href: "#contact" },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setMounted(true);
  }, []);

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
          backgroundColor: "transparent",
          backdropFilter: "blur(15px)",
          borderRadius: "10px",
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
          <Image
            src="/logo2.png"
            alt="jyotishnaLogo"
            width={200}
            height={100}
            style={{ objectFit: "contain" }}
          />
          <Box sx={{ flexGrow: 1 }} />

          {!isMobile && (
            <Box
              sx={{ display: "flex", gap: 3, fontFamily: "var(--font-jost)" }}
            >
              {navLinks.map((link) => {
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    scroll={true}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      sx={{
                        px: 2,
                        py: 1,
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
              <MenuIcon sx={{ color: "#ffffff" }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ p: 3 }}>
          {navLinks.map((link) => (
            <Button
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              sx={{
                display: "block",
                width: "100%",
                justifyContent: "flex-start",
                color: "#000000",
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
