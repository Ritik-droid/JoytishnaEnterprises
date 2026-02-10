"use client";

import { Box, Button } from "@mui/material";

const categories = [
  "All Products",
  "Burners",
  "Generators",
  "Heaters",
  "Specialized",
];

type Props = {
  active: string;
  onChange: (value: string) => void;
};

export default function ProductFilterTabs({ active, onChange }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {categories.map((item) => {
        const isActive = active === item;

        return (
          <Button
            key={item}
            onClick={() => onChange(item)}
            sx={{
              textTransform: "none",
              fontFamily: "Teachers",
              fontWeight: 600,
              px: 3,
              py: 1.2,
              borderRadius: "999px",
              fontSize: "14px",

              color: isActive ? "#FFFFFF" : "#347C5E",
              backgroundColor: isActive ? "#347C5E" : "#347C5E1A",

              border: "2px solid",
              borderColor: isActive ? "#FFD700" : "transparent",

              transition: "all 0.25s ease",

              "&:hover": {
                backgroundColor: isActive ? "#2E6E55" : "#347C5E33",
                borderColor: "#FFD700",
              },
            }}
          >
            {item}
          </Button>
        );
      })}
    </Box>
  );
}
