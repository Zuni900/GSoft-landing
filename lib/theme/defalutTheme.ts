import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#f3e5f5",
      light: "#F5F5F5",
    },
    secondary: {
      main: "#001A1F",
      light: "#ffffff",
      contrastText: "#16B1E1",
    },
  },
  typography: {
    fontFamily: "Poppins",
    h1: {
      fontFamily: "Poppins",
      fontSize: "72vw",
      fontWeight: "600",
    },
    h2: {
      fontFamily: "Poppins",
      fontSize: "48vw",
      fontWeight: "600",
    },
    h4: {
      fontFamily: "Poppins",
      fontSize: "20vw",
      fontWeight: "600",
    },
    subtitle1: {
      fontFamily: "Poppins",
      fontSize: "36vw",
      fontWeight: "600",
    },
    subtitle2: {
      fontFamily: "Poppins",
      fontSize: "20vw",
      fontWeight: "500",
    },
    body1: {
      fontFamily: "Poppins",
      fontSize: "18vw",
      fontWeight: "600",
    },
    body2: {
      fontFamily: "Poppins",
      fontSize: "16vw",
      fontWeight: "400",
    },
    button: {
      fontFamily: "Poppins",
      fontSize: "18vw",
      fontWeight: "600",
    },
  },
});
