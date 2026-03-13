"use client";

import { Box, Typography } from "@mui/material";

export default function Products() {
    const products = [
        { img: "/images/img1.jpg", title: "ASTM Fasteners" },
        { img: "/images/img2.jpg", title: "SS Fasteners" },
        { img: "/images/img3.jpg", title: "High Tensile Fasteners" },
        { img: "/images/img4.jpg", title: "Bolts & Nuts" },
        { img: "/images/img1.jpg", title: "Industrial Screws" },
        { img: "/images/img2.jpg", title: "Washers" },
        { img: "/images/img3.jpg", title: "Anchor Fasteners" },
        { img: "/images/img4.jpg", title: "Threaded Rods" },
    ];

    return (
        <Box
            id="products"
            sx={{
                minHeight: "80vh",
                background: "#0F0F0F",
                px: { xs: 3, md: 8 },
                py: 0,
                overflow: "visible"

            }}
        >
            <Typography
                sx={{
                    fontSize: "60px",
                    fontWeight: 900,
                    fontFamily: "Teachers, sans-serif",
                    color: "transparent",
                    WebkitTextStroke: "1px #EFECE6",
                }}
            >
                PRODUCTS
            </Typography>            {/* Scroll Container */}
            <Box
                sx={{
                    display: "flex",
                    gap: 5,
                    flexDirection: { xs: "column", md: "row" },
                    overflowX: "auto",
                    pt: 6,
                    pb: 6,
                    scrollbarWidth: "none",        // Firefox
                    msOverflowStyle: "none",       // IE / Edge
                    "&::-webkit-scrollbar": {
                        display: "none",             // Chrome / Safari
                    },
                }}
            >

                {products.map((product, i) => {
                    const rotate = i % 2 === 0 ? -7 : 6;

                    return (
                        <Box
                            key={i}
                            sx={{
                                minWidth: { xs: "60%", md: 250 },
                                height: { xs: 460, md: 320 },
                                background: "#FFFFFF",
                                position: "relative",
                                overflow: "visible",
                                flexShrink: 0,
                                borderRadius: { xs: "20px", md: 0 },
                                transform: { xs: "none", md: `rotate(${rotate}deg)` },
                                transition: "0.4s",
                                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",

                                "&:hover": {
                                    transform: { xs: "none", md: "rotate(0deg) scale(1.05)" },
                                },
                            }}
                        >
                            <img
                                src={product.img}
                                alt=""
                                style={{
                                    width: "90%",
                                    height: "90%",
                                    objectFit: "cover",
                                    borderRadius: "inherit",
                                }}
                            />

                            {/* Bottom Text */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    bottom: -28,
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    color: "#EFECE6",
                                    px: 3,
                                    py: 1,
                                    zIndex: 2,
                                    borderRadius: "10px",
                                    fontSize: "25px",
                                    fontWeight: 600,
                                    fontFamily: "Jost",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                {product.title}
                            </Box>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
}