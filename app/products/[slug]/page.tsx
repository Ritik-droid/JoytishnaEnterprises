import { Box, Typography } from "@mui/material";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let product: any = null;

  try {
    product = await import(`@/data/products/${slug}`).then((m) => m.default);
  } catch (error) {
    product = null;
  }

  if (!product) {
    return <Typography sx={{ color: "#fff" }}>Product not found</Typography>;
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#0F0F0F",
        color: "#fff",
        px: { xs: 2, md: 10 },
        py: 10,
        display: "flex",
        flexDirection: "column",
        gap: 6,
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          fontSize: { xs: "32px", md: "48px" },
          fontWeight: 700,
        }}
      >
        {product.heading}
      </Typography>

      {/* Image Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr 1fr",
            md: "repeat(4, 1fr)",
          },
          gap: 3,
        }}
      >
        {product.images.map((img: string, index: number) => (
          <Box
            key={index}
            component="img"
            src={img}
            alt={product.heading}
            sx={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
              borderRadius: "12px",
              background: "#1A1A1A",
            }}
          />
        ))}
      </Box>

      {/* Info */}
      <Typography
        sx={{
          color: "#aaa",
          fontSize: "16px",
          lineHeight: "28px",
          maxWidth: "900px",
        }}
      >
        {product.info}
      </Typography>
    </Box>
  );
}