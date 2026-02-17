export type Product = {
  id: number;
  title: string;
  category: "Burners" | "Generators" | "Heaters" | "Specialized";
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    title: "Biomass Pellet Burner",
    category: "Burners",
    image: "/products/product1.png",
    description:
      "High-efficiency burners available invarious capacities (Air/Water Cooled) forindustrial and residential use.  .",
  },
  {
    id: 2,
    title: "Pellet Fire Burners",
    category: "Burners",
    image: "/products/product2.png",
    description: "Compact and user-friendly burners for smaller scale heating, ideal for bakeries and small industries.  ",
  },
  {
    id: 3,
    title: "Compact Burners",
    category: "Burners",
    image: "/products/product4.png",
    description:
      "Space-saving and highly efficientburners, offering up to 60% fuel savingfor targeted applications.",
  },
  {
    id: 4,
    title: "Hot Air Generators",
    category: "Generators",
    image: "/products/product3.png",
    description: "Automatic temperature regulation,robust build for drying in various industries. ",
  },


  {
    id: 5,
    title: "Thermic Fluid Heaters",
    category: "Heaters",
    image: "/products/product5.png",
    description:
      "PLC-based control, economic and safe for intense industrial heating applications. ",
  },
  {
    id: 6,
    title: "Hot Water Generators",
    category: "Generators",
    image: "/products/product6.png",
    description:
      "Three-pass design, ensuring low fuel consumption for consistent hot water supply.  ",
  },
  {
    id: 7,
    title: "Edible Oil Heat Exchanger",
    category: "Specialized",
    image: "/products/product7.png",
    description:
      "Stainless steel 304 coils with automatic temperature control for food processing. ",
  },
  {
    id: 8,
    title: "Aluminium Melting Furnace",
    category: "Specialized",
    image: "/products/product8.png",
    description:
      "Compact, smokeless, and fuel-saving solution for foundry and metal works. ",
  },
  {
    id: 9,
    title: "Steam Boilers",
    category: "Generators",
    image: "/products/product9.png",
    description:
      "Wet/Dry back designs for food, chemical,and pharmaceutical industries, ensuring safety. ",
  },


  {
    id: 10,
    title: "Dryers",
    category: "Specialized",
    image: "/products/product10.png",
    description:
      "Efficient systems with manual/auto ignition suitable for pulses, plastics, andwood.",
  },
  {
    id: 11,
    title: "Industrial Ovens",
    category: "Heaters",
    image: "/products/product11.png",
    description:
      "Designed for various heating and curing processes in manufacturing.",
  },
];
