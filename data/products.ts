export type Product = {
  id: number;
  title: string;
  slug: string;
  category: "Burners" | "Generators" | "Heaters" | "Specialized";
  image: string;
  capacity: string;
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
    capacity: "1,00,000 - 70,00,000 Kcal/hr",
    description:
      "High-performance biomass burner delivering maximum thermal efficiency with eco-friendly fuel combustion.",
    detailedDescription:
      "The Biomass Pellet Burner is engineered for superior combustion efficiency using advanced PLC-based automation. Designed for both air-cooled and water-cooled applications, it ensures stable flame control, reduced emissions, and 30–70% fuel savings compared to conventional fuels. Ideal for boilers, ovens, dryers, and other industrial heating systems requiring consistent and economical heat output.",
  },
  {
    id: 2,
    title: "Vertical Pellet Fire Burners",
    slug: "pellet-fire-burners",
    category: "Burners",
    image: "/products/product2.png",
    capacity: "50,000 - 10,00,000 Kcal/hr",
    description:
      "Compact vertical design pellet burner ideal for bakeries, kitchens, and small industrial setups.",
    detailedDescription:
      "The Vertical Pellet Fire Burner is specially designed for space-efficient installations where consistent heating is required. Its vertical combustion chamber ensures optimal flame distribution and reduced fuel wastage. With easy installation, low maintenance, and automatic ignition options, it is perfect for bakeries, commercial kitchens, and small-scale industrial applications.",
  },
  {
    id: 3,
    title: "Compact Burners",
    slug: "compact-burners",
    category: "Burners",
    image: "/products/product4.png",
    capacity: "25,000 – 5,00,000 Kcal/hr",

    description:
      "Space-saving biomass burners offering high efficiency and up to 60% fuel cost reduction.",
    detailedDescription:
      "Compact Burners are built for applications requiring targeted heating in limited spaces. Despite their small footprint, they deliver powerful and stable combustion performance. Equipped with intelligent control systems, these burners ensure reduced smoke emission, uniform heat output, and significant operational savings for industries such as food processing, textiles, and small manufacturing units.",
  },
  {
    id: 4,
    title: "Hot Air Generators",
    slug: "hot-air-generators",
    category: "Generators",
    image: "/products/product3.png",
    capacity: "1,00,000 – 50,00,000 Kcal/hr",

    description:
      "Energy-efficient hot air systems designed for industrial drying and process heating.",
    detailedDescription:
      "Our Hot Air Generators provide reliable and uniform hot air circulation for drying and heating processes. Featuring automatic temperature control and heavy-duty construction, they are suitable for agro-processing, chemical industries, and packaging units. The system ensures optimal heat transfer efficiency with reduced fuel consumption and minimal maintenance requirements.",
  },
  {
    id: 5,
    title: "Thermic Fluid Heaters",
    slug: "thermic-fluid-heaters",
    category: "Heaters",
    image: "/products/product5.png",
    capacity: "3,00,000 – 40,00,000 Kcal/hr",

    description:
      "Safe and economical thermic fluid heating systems for high-temperature industrial operations.",
    detailedDescription:
      "Thermic Fluid Heaters are designed for applications requiring precise and uniform high-temperature heat transfer without high pressure. Integrated with PLC-based control and advanced safety features, these systems ensure consistent performance, reduced fuel usage, and long operational life. Ideal for chemical plants, laminates, pharmaceuticals, and large-scale manufacturing processes.",
  },
  {
    id: 6,
    title: "Hot Water Generators",
    slug: "hot-water-generators",
    category: "Generators",
    image: "/products/product6.png",
    capacity: "1,00,000 – 20,00,000 Kcal/hr",

    description:
      "Three-pass hot water systems ensuring efficient heat exchange and low fuel consumption.",
    detailedDescription:
      "The Hot Water Generator features a three-pass design that maximizes heat extraction and minimizes fuel loss. Built for continuous hot water supply, it is suitable for hotels, hospitals, food processing units, and industrial facilities. Its robust construction, safety controls, and efficient combustion system make it a dependable solution for long-term operation.",
  },
  {
    id: 7,
    title: "Edible Oil Heat Exchanger",
    slug: "edible-oil-heat-exchanger",
    category: "Specialized",
    image: "/products/product7.png",
    capacity: "50,000 – 5,00,000 Kcal/hr",

    description:
      "Food-grade heat exchanger with SS-304 construction for precise edible oil temperature control.",
    detailedDescription:
      "The Edible Oil Heat Exchanger is manufactured using stainless steel 304 coils to meet food industry safety standards. It ensures controlled and uniform heating of edible oils for processing applications. With automatic temperature regulation and hygienic design, it is widely used in oil mills, food manufacturing plants, and commercial kitchens.",
  },
  {
    id: 8,
    title: "Aluminium Melting Furnace",
    slug: "aluminium-melting-furnace",
    category: "Specialized",
    image: "/products/product8.png",
    capacity: "2,00,000 – 25,00,000 Kcal/hr",

    description:
      "High-efficiency melting furnace delivering smokeless and fuel-saving metal processing.",
    detailedDescription:
      "The Aluminium Melting Furnace is designed for foundries and metal fabrication units requiring fast and uniform melting. Its insulated chamber ensures minimal heat loss, reduced emissions, and lower fuel consumption. The compact design allows easy installation while maintaining high productivity and operational safety standards.",
  },
  {
    id: 9,
    title: "Steam Boilers",
    slug: "steam-boilers",
    category: "Generators",
    image: "/products/product9.png",
    capacity: "300 Kg/hr – 5,000 Kg/hr Steam",

    description:
      "High-performance steam boilers with wet and dry back designs for industrial steam applications.",
    detailedDescription:
      "Our Steam Boilers are engineered with wet-back and dry-back configurations to suit diverse industrial needs. Designed for safety, durability, and fuel efficiency, they deliver consistent steam output for food processing, pharmaceuticals, chemical industries, and manufacturing plants. Advanced control systems ensure safe operation and energy savings.",
  },
  {
    id: 10,
    title: "Dryers/Dal-Mill Dryers",
    slug: "industrial-dryers",
    category: "Specialized",
    image: "/products/product10.png",
    capacity: "500 Kg/hr – 10,000 Kg/hr Drying",

    description:
      "Industrial drying systems with manual or automatic ignition for agro and manufacturing sectors.",
    detailedDescription:
      "Dryers and Dal-Mill Dryers are built for uniform and efficient moisture removal in pulses, grains, plastics, and wood products. Featuring adjustable temperature control and optional automatic ignition, these systems enhance productivity while minimizing fuel usage. Their rugged construction ensures long-term durability in demanding environments.",
  },
  {
    id: 11,
    title: "Industrial Ovens",
    slug: "industrial-ovens",
    category: "Heaters",
    image: "/products/product11.png",
    capacity: "50,000 – 8,00,000 Kcal/hr",

    description:
      "Reliable industrial ovens for curing, baking, drying, and heat-treatment applications.",
    detailedDescription:
      "Industrial Ovens are designed to provide uniform heat distribution for a wide range of manufacturing processes such as curing, coating, baking, and drying. Built with high-grade insulation and precision temperature control systems, they ensure energy efficiency, consistent output quality, and safe long-term operation across industries.",
  },
];

export const heroData = [
  {
    slug: "biomass-pellet-burner",
    heroTitle: "Advanced Biomass Heating Technology",
    heroDescription:
      "Our biomass pellet burner systems are engineered to deliver high efficiency, consistent thermal output, and environmentally responsible performance. Designed with modern automation and industrial-grade components, these systems ensure low operational costs, minimal emissions, and seamless integration into various industrial applications.",
    specifications: [
      { label: "Fuel Type", value: "Biomass Pellets" },
      { label: "Capacity Range", value: "1,00,000 – 70,00,000 Kcal/hr" },
      { label: "Efficiency", value: "92%+" },
      { label: "Control System", value: "PLC Automated" },
      { label: "Ignition", value: "Auto Ignition" },
      { label: "Warranty", value: "2 Years" },
    ],
  },

  {
    slug: "pellet-fire-burners",
    heroTitle: "Compact Vertical Combustion Innovation",
    heroDescription:
      "Vertical pellet fire burners are built for compact installations while delivering powerful and stable combustion. Their efficient flame distribution ensures uniform heating with minimal fuel consumption.",
    specifications: [
      { label: "Fuel Type", value: "Biomass Pellets" },
      { label: "Capacity Range", value: "50,000 – 5,00,000 Kcal/hr" },
      { label: "Efficiency", value: "90%+" },
      { label: "Control System", value: "Semi / Fully Automatic" },
      { label: "Ignition", value: "Manual / Auto" },
      { label: "Warranty", value: "1 Year" },
    ],
  },

  {
    slug: "compact-burners",
    heroTitle: "Smart Space-Saving Heating Solutions",
    heroDescription:
      "Compact burners are engineered for high efficiency within limited installation space, ensuring consistent heat output and optimized fuel usage.",
    specifications: [
      { label: "Fuel Type", value: "Biomass Pellets" },
      { label: "Capacity Range", value: "25,000 – 3,00,000 Kcal/hr" },
      { label: "Efficiency", value: "88%+" },
      { label: "Control System", value: "Digital Controller" },
      { label: "Ignition", value: "Auto Ignition" },
      { label: "Warranty", value: "1 Year" },
    ],
  },

  {
    slug: "hot-air-generators",
    heroTitle: "High-Efficiency Industrial Hot Air Systems",
    heroDescription:
      "Hot air generators provide uniform and controlled air circulation for drying and industrial process heating.",
    specifications: [
      { label: "Fuel Type", value: "Biomass Pellets / Briquettes" },
      { label: "Capacity Range", value: "1,00,000 – 50,00,000 Kcal/hr" },
      { label: "Temperature Range", value: "Up to 350°C" },
      { label: "Control System", value: "PLC Based" },
      { label: "Application", value: "Drying & Process Heating" },
      { label: "Warranty", value: "2 Years" },
    ],
  },

  {
    slug: "thermic-fluid-heaters",
    heroTitle: "Precision Controlled High-Temperature Heating",
    heroDescription:
      "Thermic fluid heaters deliver consistent high-temperature heat transfer without operating under high pressure.",
    specifications: [
      { label: "Fuel Type", value: "Biomass / Agro Waste" },
      { label: "Temperature Range", value: "Up to 300°C" },
      { label: "Efficiency", value: "90%+" },
      { label: "Pressure", value: "Low Pressure Operation" },
      { label: "Control System", value: "Fully Automatic" },
      { label: "Warranty", value: "2 Years" },
    ],
  },

  {
    slug: "hot-water-generators",
    heroTitle: "Energy-Efficient Hot Water Technology",
    heroDescription:
      "Hot water generators provide continuous and economical hot water supply with advanced heat exchange design.",
    specifications: [
      { label: "Fuel Type", value: "Biomass Pellets" },
      { label: "Temperature Range", value: "Up to 95°C" },
      { label: "Efficiency", value: "90%+" },
      { label: "Design", value: "Three Pass" },
      { label: "Application", value: "Hotels / Hospitals / Industry" },
      { label: "Warranty", value: "2 Years" },
    ],
  },

  {
    slug: "edible-oil-heat-exchanger",
    heroTitle: "Food-Grade Precision Heat Exchange",
    heroDescription:
      "SS-304 constructed edible oil heat exchangers ensure hygienic and precise temperature control.",
    specifications: [
      { label: "Material", value: "SS-304" },
      { label: "Application", value: "Food Processing" },
      { label: "Temperature Control", value: "Automatic" },
      { label: "Design", value: "Coil Type" },
      { label: "Compliance", value: "Food Grade Standards" },
      { label: "Warranty", value: "1 Year" },
    ],
  },

  {
    slug: "aluminium-melting-furnace",
    heroTitle: "Efficient & Smokeless Metal Melting Technology",
    heroDescription:
      "Designed for foundries requiring uniform melting with optimized fuel efficiency.",
    specifications: [
      { label: "Fuel Type", value: "Biomass Pellets" },
      { label: "Melting Capacity", value: "50kg – 500kg" },
      { label: "Emission", value: "Low Smoke" },
      { label: "Structure", value: "Insulated Chamber" },
      { label: "Application", value: "Foundry & Metal Works" },
      { label: "Warranty", value: "1 Year" },
    ],
  },

  {
    slug: "steam-boilers",
    heroTitle: "Reliable Industrial Steam Generation",
    heroDescription:
      "Steam boilers engineered for safe and efficient steam production across industries.",
    specifications: [
      { label: "Fuel Type", value: "Biomass / Agro Waste" },
      { label: "Steam Pressure", value: "Up to 21 Bar" },
      { label: "Design", value: "Wet Back / Dry Back" },
      { label: "Efficiency", value: "90%+" },
      { label: "Control System", value: "Fully Automatic" },
      { label: "Warranty", value: "2 Years" },
    ],
  },

  {
    slug: "industrial-dryers",
    heroTitle: "Advanced Industrial Drying Solutions",
    heroDescription:
      "Industrial dryers designed for uniform moisture removal across multiple applications.",
    specifications: [
      { label: "Fuel Type", value: "Biomass Pellets" },
      { label: "Application", value: "Pulses / Plastics / Wood" },
      { label: "Temperature Control", value: "Manual / Automatic" },
      { label: "Design", value: "Heavy Duty" },
      { label: "Efficiency", value: "High Thermal Efficiency" },
      { label: "Warranty", value: "1 Year" },
    ],
  },

  {
    slug: "industrial-ovens",
    heroTitle: "Uniform Heat Distribution Technology",
    heroDescription:
      "Industrial ovens provide precise temperature control for curing, baking, and heat-treatment.",
    specifications: [
      { label: "Fuel Type", value: "Biomass / Electric Hybrid" },
      { label: "Temperature Range", value: "Up to 400°C" },
      { label: "Application", value: "Curing / Baking / Drying" },
      { label: "Control System", value: "Digital / PLC" },
      { label: "Insulation", value: "High Grade Thermal Insulation" },
      { label: "Warranty", value: "1–2 Years" },
    ],
  },
];
