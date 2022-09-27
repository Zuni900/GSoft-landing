
import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentServices",
  uniqId: "servicesComponent",
})((theme) => ({
  container: {
    display: "flex",
    
position:"absolute",
marginTop:"40px",
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
   
    display: "flex",
    justifyContent: "center",
    zIndex:"999",
    position:"absolute",
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
