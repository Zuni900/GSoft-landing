import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentServices",
  uniqId: "servicesComponent",
})(() => ({
  container: {
    // background: "#001A1F",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: "10px",
    padding: "20px",
    color: "#001A1F",
    "&:hover": {
      background: "#001A1F",
      color: "#FFFFFF",
    },
    // backgroundColor: theme.palette.primary.light,
  },
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "10px",
    marginBottom: "10px",
  },
  styling: {
    // color: "#001A1F",
    fontWeight: "bold",
  },
  bgcolor: {
    backgroundcolor: "#001A1F",
    "&:hover": {
      backgroundcolor: "#FFFFFF",
    },
  },
}));
export const style = {};
