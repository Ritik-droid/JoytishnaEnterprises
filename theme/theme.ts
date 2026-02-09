import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // you can change later
    },
    secondary: {
      main: "#2e7d32",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
