export type Product = {
  id: number;
  title: string;
  slug: string;
  category: "Burners" | "Generators" | "Heaters" | "Specialized";
  image: string;
  description: string;
  detailedDescription: string;
};

export const features = [
  {
    title: "High Efficiency 92%+",
    description: "Advanced combustion technology",
    image: "/featuredProducts/img6.png",
  },
  {
    title: "Fuel Savings 30-70%",
    description: "Significant cost reduction",
    image: "/featuredProducts/img2.png",
  },
  {
    title: "Auto Control",
    description: "PLC-based intelligent system",
    image: "/featuredProducts/img3.png",
  },
  {
    title: "Easy Maintenance",
    description: "Simple ash removal, no complexity",
    image: "/featuredProducts/img5.png",
  },
];

export const products: Product[] = [
  {
    id: 1,
    title: "Biomass Pellet Burner",
    slug: "biomass-pellet-burner",
    category: "Burners",
    image: "/products/product1.png",
    description:
      "High-efficiency burners available in various capacities (Air/Water Cooled) for industrial and residential use.",
    detailedDescription:
      "The Biomass Pellet Burner is designed for high thermal efficiency with PLC-based control systems. It ensures 30–70% fuel savings compared to conventional fossil fuels. Suitable for industrial and residential heating applications with air and water-cooled variants available.",
  },
  {
    id: 2,
    title: "Pellet Fire Burners",
    slug: "pellet-fire-burners",
    category: "Burners",
    image: "/products/product2.png",
    description:
      "Compact and user-friendly burners for smaller scale heating, ideal for bakeries and small industries.",
    detailedDescription:
      "The Biomass Pellet Burner is designed for high thermal efficiency with PLC-based control systems. It ensures 30–70% fuel savings compared to conventional fossil fuels. Suitable for industrial and residential heating applications with air and water-cooled variants available.",
  },
  {
    id: 3,
    title: "Compact Burners",
    slug: "compact-burners",
    category: "Burners",
    image: "/products/product4.png",
    description:
      "Space-saving and highly efficient burners, offering up to 60% fuel saving for targeted applications.",
    detailedDescription:
      "The Biomass Pellet Burner is designed for high thermal efficiency with PLC-based control systems. It ensures 30–70% fuel savings compared to conventional fossil fuels. Suitable for industrial and residential heating applications with air and water-cooled variants available.",
  },
  {
    id: 4,
    title: "Hot Air Generators",
    slug: "hot-air-generators",
    category: "Generators",
    image: "/products/product3.png",
    description:
      "Automatic temperature regulation, robust build for drying in various industries.",
    detailedDescription:
      "The Biomass Pellet Burner is designed for high thermal efficiency with PLC-based control systems. It ensures 30–70% fuel savings compared to conventional fossil fuels. Suitable for industrial and residential heating applications with air and water-cooled variants available.",
  },
  {
    id: 5,
    title: "Thermic Fluid Heaters",
    slug: "thermic-fluid-heaters",
    category: "Heaters",
    image: "/products/product5.png",
    description:
      "PLC-based control, economic and safe for intense industrial heating applications.",
    detailedDescription:
      "The Biomass Pellet Burner is designed for high thermal efficiency with PLC-based control systems. It ensures 30–70% fuel savings compared to conventional fossil fuels. Suitable for industrial and residential heating applications with air and water-cooled variants available.",
  },
  {
    id: 6,
    title: "Hot Water Generators",
    slug: "hot-water-generators",
    category: "Generators",
    image: "/products/product6.png",
    description:
      "Three-pass design, ensuring low fuel consumption for consistent hot water supply.",
    detailedDescription:
      "The Biomass Pellet Burner is designed for high thermal efficiency with PLC-based control systems. It ensures 30–70% fuel savings compared to conventional fossil fuels. Suitable for industrial and residential heating applications with air and water-cooled variants available.",
  },
  {
    id: 7,
    title: "Edible Oil Heat Exchanger",
    slug: "edible-oil-heat-exchanger",
    category: "Specialized",
    image: "/products/product7.png",
    description:
      "Stainless steel 304 coils with automatic temperature control for food processing.",
    detailedDescription:
      "The Biomass Pellet Burner is designed for high thermal efficiency with PLC-based control systems. It ensures 30–70% fuel savings compared to conventional fossil fuels. Suitable for industrial and residential heating applications with air and water-cooled variants available.",
  },
  {
    id: 8,
    title: "Aluminium Melting Furnace",
    slug: "aluminium-melting-furnace",
    category: "Specialized",
    image: "/products/product8.png",
    description:
      "Compact, smokeless, and fuel-saving solution for foundry and metal works.",
    detailedDescription:
      "The Biomass Pellet Burner is designed for high thermal efficiency with PLC-based control systems. It ensures 30–70% fuel savings compared to conventional fossil fuels. Suitable for industrial and residential heating applications with air and water-cooled variants available.",
  },
  {
    id: 9,
    title: "Steam Boilers",
    slug: "steam-boilers",
    category: "Generators",
    image: "/products/product9.png",
    description:
      "Wet/Dry back designs for food, chemical, and pharmaceutical industries, ensuring safety.",
    detailedDescription:
      "The Biomass Pellet Burner is designed for high thermal efficiency with PLC-based control systems. It ensures 30–70% fuel savings compared to conventional fossil fuels. Suitable for industrial and residential heating applications with air and water-cooled variants available.",
  },
  {
    id: 10,
    title: "Dryers",
    slug: "industrial-dryers",
    category: "Specialized",
    image: "/products/product10.png",
    description:
      "Efficient systems with manual/auto ignition suitable for pulses, plastics, and wood.",
    detailedDescription:
      "The Biomass Pellet Burner is designed for high thermal efficiency with PLC-based control systems. It ensures 30–70% fuel savings compared to conventional fossil fuels. Suitable for industrial and residential heating applications with air and water-cooled variants available.",
  },
  {
    id: 11,
    title: "Industrial Ovens",
    slug: "industrial-ovens",
    category: "Heaters",
    image: "/products/product11.png",
    description:
      "Designed for various heating and curing processes in manufacturing.",
    detailedDescription:
      "The Biomass Pellet Burner is designed for high thermal efficiency with PLC-based control systems. It ensures 30–70% fuel savings compared to conventional fossil fuels. Suitable for industrial and residential heating applications with air and water-cooled variants available.",
  },
];
