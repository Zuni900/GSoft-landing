import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentAbout",
  uniqId: "aboutComponent",
})((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "100px",
    backgroundColor: theme.palette.primary.light,
  },
  text: {
    display: "flex",
    justifyContent: "center",
  },
  description: {
    marginTop: "20px",
    textAlign: "center",
  },
  styling: {
    fontWeight: "bold",
    color: "#001A1F",
  },
  color: {
    color: "#1E212C",
  },
}));
export const style = {};
