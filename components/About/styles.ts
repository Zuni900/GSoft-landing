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
    paddingBottom: "30px",
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
  },
  styling: {
    color: theme.palette.secondary.main,
  },
  color: {
    color: theme.palette.secondary.dark,
  },
}));
export const style = {};
