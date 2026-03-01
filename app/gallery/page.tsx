import { Box, Typography, Card, CardContent, Container } from "@mui/material";
import Grid from "@mui/material/Grid"; // ✅ Correct import for v6
import Image from "next/image";
import { galleryData } from "../../data/galleryData";

export default function Gallery() {
  return (
    <Box
      sx={{
        py: { xs: 15, sm: 8, md: 15 },
        backgroundColor: "#FCF8EC",
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            color: "#347C5E",
            fontFamily: "var(--font-teachers)",
            textAlign: "center",
            mb: { xs: 4, md: 6 },
            letterSpacing: 1,
            fontSize: {
              xs: "22px",
              sm: "26px",
              md: "32px",
            },
          }}
        >
          Gallery
        </Typography>

        {/* Grid Section */}
        <Grid container spacing={{ xs: 3, sm: 4, md: 5 }}>
          {galleryData.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 3,
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 6,
                  },
                }}
              >
                {/* Image Section */}
                <Box
                  sx={{
                    position: "relative",
                    height: { xs: 300, sm: 300, md: 330 },
                    width: "100%",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 600px) 100vw,
                           (max-width: 960px) 50vw,
                           33vw"
                    style={{ objectFit: "cover" }}
                  />
                </Box>

                {/* Content Section */}
                <CardContent sx={{ flexGrow: 1 }}>
                  {/* Label */}
                  <Typography
                    sx={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#347C5E",
                      fontFamily: "var(--font-teachers)",
                      mb: 1,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                    }}
                  >
                    {item.label}
                  </Typography>

                  {/* Title */}
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontFamily: "var(--font-teachers)",

                      mb: 1,
                      fontSize: {
                        xs: "16px",
                        sm: "18px",
                        md: "20px",
                      },
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      fontSize: { xs: "13px", sm: "14px" },
                      color: "#555",
                      fontFamily: "var(--font-jest)",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
