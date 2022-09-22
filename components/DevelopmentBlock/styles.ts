import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ServicesBlock",
  uniqId: "servicesBlock",
})((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    // padding: "20px",
    alignItems: "center",
    borderRadius: "16px",
    color: theme.palette.secondary.main,
    "&:hover": {
      background: theme.palette.secondary.main,
      cursor: "pointer",
      transition: "1s",
    },
  },
  img: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "30px",
    paddingBottom: "30px",
    paddingLeft: "20px",
    paddingRight: "20px",
    alignItems: "center",
    // justifyContent: "center",
    // textAlign: "center",
    "&:hover": {
      filter: "brightness(0) invert(1)",
      // transition: "1s",
    },
  },
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  styling: {
    paddingTop: "10px",
    paddingBottom: "10px",
  },
}));
export const style = {};
