import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentServices",
  uniqId: "servicesComponent",
})((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: "10px",
    color: "#001A1F",
    "&:hover": {
      background: "#001A1F",
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
    justifyContent: "center",
    textAlign: "center",
    "&:hover": {
      filter: "brightness(0) invert(1)",
      // transition: "1s",
    },
  },
  text: {
    display: "flex",
    height: "20%",
    flexDirection: "column",
    justifyContent: "center",
  },
  styling: {
    paddingTop: "10px",
    paddingBottom: "10px",
  },
}));
export const style = {};
