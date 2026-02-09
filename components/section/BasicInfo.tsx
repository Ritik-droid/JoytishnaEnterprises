"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

const cardsData = [
  {
    image: "/basicInfoSection/firstImg.png",
    title: "Sustainable Solutions",
    description: "Embrace eco-friendly energy options for a greener tomorrow.",
  },
  {
    image: "/basicInfoSection/secondImg.png",
    title: "Economical Benefits",
    description:
      "Reduce operational costs with efficient, renewable energy sources.",
  },
  {
    image: "/basicInfoSection/thirdImg.png",
    title: "Community Impact",
    description:
      "Contribute to a healthier environment and stronger local economies.",
  },
];

export default function BasicInfo() {
  return (
    <Box sx={{ py: 10 }}>
      <Box
        sx={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {cardsData.map((card, index) => (
          <Box
            key={index}
            sx={{
              width: 350,
              minHeight: 230,
              p: "24px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",

              boxShadow: `
                0px 10px 22px 0px #0000001A,
                0px 39px 39px 0px #00000017,
                0px 89px 53px 0px #0000000D,
                0px 157px 63px 0px #00000003,
                0px 246px 69px 0px #00000000
              `,
            }}
          >
            {/* Image */}
            <Box sx={{ mb: 2 }}>
               <Image
        src={card.image}
        alt={card.title}
        width={index === 1 ? 33 : 60}   
        height={index === 1 ? 33 : 60} 
      />
            </Box>

            {/* Title */}
            <Typography variant="h6" fontWeight={600} mb={1} color="#347C5E">
              {card.title}
            </Typography>

            {/* Description */}
            <Typography color="#333333" fontSize={14}>
              {card.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
