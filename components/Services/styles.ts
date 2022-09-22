import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentServices",
  uniqId: "servicesComponent",
})((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "40px",
    paddingBottom: "40px",
    paddingLeft: "20px",
    paddingRight: "20px",
    background: theme.palette.primary.contrastText,
  },
  text: {
    display: "flex",
    justifyContent: "center",
  },
  description: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "25px",
    textAlign: "center",
  },
  styling: {
    color: theme.palette.secondary.main,
  },
}));
export const style = {};
