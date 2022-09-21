import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentAbout",
  uniqId: "aboutComponent",
})((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "70px",
    paddingBottom: "70px",
    paddingLeft: "20px",
    paddingRight: "20px",
    backgroundColor: theme.palette.primary.light,
  },
  text: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    marginTop: "20px",
    textAlign: "center",
    width: "1150px",
  },
  styling: {
    color: "#001A1F",
  },
  color: {
    color: "#1E212C",
  },
}));
export const style = {};
