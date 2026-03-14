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
import { Typography } from "@mui/material";

export default function NavContact() {
  const [mounted, setMounted] = useState(false);

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
          backgroundColor: "#A9FF5C",
          width: "100%",
        }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: 50, sm: 50, md: 50 },
            px: { xs: 2, md: 4 },
            py: { xs: 0, md: 2 },
          }}
        ></Toolbar>
      </AppBar>
    </>
  );
}
