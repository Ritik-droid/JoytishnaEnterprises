import { Box, Typography } from "@mui/material";

export default function Gallery() {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        backgroundColor: "#FCF8EC",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            color: "#347C5E",
            mb: 2,
            letterSpacing: 1,
          }}
        >
          Coming Soon..............!
        </Typography>


      </Box>
    </Box>
  );
}
