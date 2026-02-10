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
    description: "High-efficiency burners available invarious capacities (Air/Water Cooled) forindustrial and residential use.  .",
  },
  {
    id: 2,
    title: "Pellet Fire Burners",
    category: "Generators",
    image: "/products/product1.png",
    description: "Reliable power generation with low emissions.",
  },
  {
    id: 3,
    title: "Eco Heating System",
    category: "Heaters",
    image: "/products/product1.png",
    description: "Energy-efficient heating for residential use.",
  },
  {
    id: 4,
    title: "Custom Bio Solution",
    category: "Specialized",
    image: "/products/product1.png",
    description: "Tailored renewable energy solutions.",
  },
];
