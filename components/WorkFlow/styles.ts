import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentWorkFlow",
  uniqId: "WorkflowComponent",
})((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    color: theme.palette.secondary.light,
    backgroundColor: theme.palette.secondary.main,
  },
  box: {
    display: "flex",
  },
  text: {
    display: "flex",
    flexDirection: "column",
  },
  grid: {
    justifyContent: "space-between",
  },
}));
export const style = {};
