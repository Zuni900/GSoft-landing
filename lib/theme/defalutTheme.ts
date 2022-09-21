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

    h3: {
      fontFamily: "Poppins",
      fontSize: "28px",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "Poppins",
      fontSize: "24px",
    },
    h5: {
      fontFamily: "Poppins",
      fontSize: "20px",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "Poppins",
      fontSize: "18px",
      fontWeight: 600,
    },
    subtitle2: {
      fontFamily: "Poppins",
      fontWeight: 600,
      fontSize: "20px",
    },
    body2: {
      fontFamily: "Poppins",
      fontSize: "16px",
      fontWeight: 500,
    },
    caption: {
      fontFamily: "Poppins",
      fontSize: "14px",
    },
    overline: {
      fontFamily: "Poppins",
      fontSize: "48px",
      fontWeight: 900,
      lineHeight: "62.4px",
    },
    // customHeading: {
    //   fontFamily: "Poppins",
    //   fontSize: "48px",
    //   fontWeight: 900,
    // },
  },
});
theme.typography.h1 = {
  fontSize: "48px",
  fontWeight: 600,
  fontFamily: "Poppins",
  [theme.breakpoints.up("sm")]: {
    fontSize: "72px",
  },
};

theme.typography.h2 = {
  fontSize: "32px",
  fontWeight: 600,
  fontFamily: "Poppins",
  [theme.breakpoints.up("sm")]: {
    fontSize: "48px",
  },
};

theme.typography.body1 = {
  fontSize: "16px",
  fontWeight: 400,
  fontFamily: "Poppins",
  [theme.breakpoints.up("sm")]: {
    fontSize: "18px",
  },
};

theme.typography.subtitle1 = {
  fontSize: "24px",
  fontWeight: 400,
  fontFamily: "Poppins",
  [theme.breakpoints.up("sm")]: {
    fontSize: "36px",
  },
};
