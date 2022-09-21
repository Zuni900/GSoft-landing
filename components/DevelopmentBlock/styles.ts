import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentServices",
  uniqId: "servicesComponent",
})(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: "10px",
    color: "#001A1F",
    "&:hover": {
      background: "#001A1F",
    },
  },
  img: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    padding: "20px",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    "&:hover": {
      filter: "brightness(0) invert(1)",
    },
  },
  text: {
    display: "flex",
    // backgroundColor: "pink",
    height: "20%",
    flexDirection: "column",
    justifyContent: "center",
  },
  styling: {
    fontWeight: "bold",
  },
}));
export const style = {};
