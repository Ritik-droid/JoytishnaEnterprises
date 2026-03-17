const product = {
  heading: "Industrial Nuts",
  snallInfo: "Different angles and image of Industrial Nuts",

  images: [
    "/products/nuts/nut1.png",
    "/products/nuts/nut2.png",
    "/products/nuts/nut3.png",
    "/products/nuts/nut4.png",
    "/products/nuts/nut5.png",
    "/products/nuts/nut6.png",
    "/products/nuts/nut7.png",
    "/products/nuts/nut8.png",
  ],

  info: "As pioneers in the fastening industry, we offer a wide range of high-quality industrial fasteners designed for strength, durability, and reliable performance. Our product range includes Low Head Allen Bolts, 6mm HT Rivet Nuts, 6mm HT Dome Nuts, 16mm HT Nylock Nuts, KM 4 Lock Nuts, and M16 HT Hex Nuts used in engineering, construction, machinery, and industrial applications.",

  relatedProducts: Array.from({ length: 14 }).map((_, i) => ({
    image: `/products/nuts/RelatedProducts/img${i + 1}.png`,
    price: `₹${(0.7 + i * 0.05).toFixed(2)} / Piece`,
    text: `High-quality industrial nut variant ${i + 1} for reliable fastening.`,
  })),
};

export default product;