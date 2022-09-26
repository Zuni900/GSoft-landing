import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentUpdates",
  uniqId: "updatesComponent",
})((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "30px",
    paddingBottom: "30px",
    paddingLeft: "20px",
    paddingRight: "20px",
    backgroundColor: theme.palette.secondary.contrastText,
  },
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  block: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    paddingTop: "15px",
    paddingBottom: "15px",
  },
  textField: {
    backgroundColor: theme.palette.secondary.light,
    borderRadius: 4,
  },
  button: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    height: "40px",
    textTransform: "none",
  },
  grid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
export const style = {};
