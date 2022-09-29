import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentTop",
  uniqId: "topComponent",
})((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "5%",
    color: theme.palette.secondary.light,
    backgroundSize: "cover",
    backgroundColor: theme.palette.secondary.main,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    marginTop: "2%",
  },
  text: {
    marginTop: "3%",
  },
  button: {
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
    display: "flex",
    justifyContent: "center",
    borderRadius: "4px",
    textTransform: "none",
    padding: "10px",
    marginTop: "4%",
  },
}));
export const style = {};
