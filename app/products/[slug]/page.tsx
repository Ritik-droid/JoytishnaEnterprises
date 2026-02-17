import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ unwrap params

  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        px: { xs: 3, md: 10 },
        py: 8,
        backgroundColor: "#F8FAF9",
      }}
    >
      <Link href="/products">
        <Button sx={{ mb: 4 }}>← Back to Products</Button>
      </Link>

      <Typography
        sx={{
          fontSize: { xs: "28px", md: "40px" },
          fontWeight: 700,
          color: "#347C5E",
          mb: 4,
        }}
      >
        {product.title}
      </Typography>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: 250, md: 500 },
          mb: 5,
        }}
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          style={{ objectFit: "contain" }}
        />
      </Box>

      <Typography
        sx={{
          fontSize: "16px",
          lineHeight: "180%",
          color: "#444",
          maxWidth: "900px",
        }}
      >
        {product.detailedDescription}
      </Typography>
    </Box>
  );
}
