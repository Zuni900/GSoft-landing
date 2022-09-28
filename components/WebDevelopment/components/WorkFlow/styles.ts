import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentWorkFLow",
  uniqId: "workFlowComponent",
})((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "6%",
    paddingBottom: "6%",
    paddingLeft: "20px",
    paddingRight: "20px",
    color: theme.palette.secondary.light,
    backgroundColor: theme.palette.secondary.main,
  },
  box: {
    display: "flex",
    flexDirection: "column",
  },
  block: {
    marginTop: "2%",
    justifyContent: "space-between",
  },
}));
export const style = {};
