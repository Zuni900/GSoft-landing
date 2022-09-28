import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentServicesTwo",
  uniqId: "ServicesTwoComponent",
})((theme) => ({
  box: {
    display: "flex",
    marginTop: "5%",
    justifyContent: "center",
  },
  button: {
    display: "flex",
    paddingLeft: "5%",
    paddingRight: "5%",
    marginTop: "8%",
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
    textTransform: "none",
  },
  tick: {
    display: "flex",
  },
  text: {
    marginTop: "5%",
  },
  grid: {
    marginRight: "2%",
  },
  txt: {
    marginRight: "2%",
    color: theme.palette.secondary.contrastText,
  },
  points: {
    marginTop: "4%",
    display: "flex",
    flexDirection: "column",
  },
}));
export const style = {};
