import { green } from "@mui/material/colors";
import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentServices",
  uniqId: "servicesComponent",
})((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "start",

    height: "auto",
    background: theme.palette.secondary.light,
  },
  cardsubHeading: {
    display: "flex",

    color: theme.palette.secondary.main,
    lineHeight: "40px",
    "&:hover": {
      color: theme.palette.secondary.contrastText,
      cursor: "pointer",
      transition: "1s",
    },
  },

  mainGrid: {
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    
    width: "1300px",
    height: "auto",
  },
  cardBoxend: {
    background: theme.palette.success.contrastText,
    height: "100%",
    display: "flex",
    width: "232px",
  },
  cardBox: {
    display: "flex",
    width: "232px",
  },
  cardcontent: {},
  cardHeading: {
    color: theme.palette.secondary.main,
    marginBottom: "10px",
    marginTop: "20px",
  },
  cardHeadingsupport: {
    color: theme.palette.secondary.contrastText,
    marginBottom: "10px",
  },
}));
export const style = {};
