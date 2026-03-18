"use client";

import ProductPage from "@/components/Products/PoductPage";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

export default function Products() {
  const [active, setActive] = useState(0);

  const buttons = ["Industries", "Cement", "Automotive", "Pharma", "Food"];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: { xs: "flex-start", md: "center" }, // mobile top, desktop center
        background: "#0F0F0F",
        gap: { xs: 4, md: 6 },
        px: { xs: 2, md: 8 },
        pt: { xs: 20, md: 20 }, // top spacing on mobile
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "flex-start", md: "center" },
          alignItems: "center",
          gap: 2,
          flexWrap: "wrap",
          width: "100%",
          maxWidth: "900px",
        }}
      >
        {buttons.map((item, index) => {
          const isActive = active === index;

          const bg = isActive ? "#A9FF5C" : "transparent";
          const textColor = isActive ? "#000000" : "#FFFFFF";
          const borderColor = isActive ? "transparent" : "#FFFFFF";
          const borderWidth = isActive ? "1px" : "1px";

          return (
            <Box
              key={index}
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-jost)",

                width: { xs: "30%", sm: "30%", md: "auto" }, // mobile rows
              }}
            >
              {/* Main Button */}
              <Box
                onClick={() => setActive(index)}
                sx={{
                  px: { xs: 2, md: 5 },
                  py: 1.5,
                  width: "100%",
                  borderRadius: "50px",
                  background: bg,
                  border: `${borderWidth} solid ${borderColor}`,
                  cursor: "pointer",
                  position: "relative",
                  zIndex: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  fontFamily: "var(--font-jost)",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    color: textColor,
                    fontSize: { xs: "14px", md: "18px" },
                    whiteSpace: "nowrap",
                    fontFamily: "var(--font-jost)",
                  }}
                >
                  {item}
                </Typography>
              </Box>

              {/* Active Border Effect */}
              {isActive && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "4px",
                    left: -5,
                    width: "97%",
                    height: "100%",
                    zIndex: 1,
                    borderRadius: "30px",
                    border: "2px solid #FFFFFF",
                    boxSizing: "content-box",
                    borderTop: "0px solid transparent",
                    borderBottom: "4px solid #FFFFFF",
                    borderLeft: "2px solid #FFFFFF",
                    borderRight: "2px solid #FFFFFF",
                    transform: "translateY(3px)",
                  }}
                />
              )}
            </Box>
          );
        })}
      </Box>

      <ProductPage />
    </Box>
  );
}
