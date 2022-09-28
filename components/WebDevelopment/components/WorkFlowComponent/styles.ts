import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "workflowComponent",
  uniqId: "workflowComponent",
})((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: "4%",
  },
  block: {
    diplay: "flex",
    alignItems: "center",
  },
  uperText: {
    color: theme.palette.secondary.contrastText,
    marginRight: "20px",
  },
  lowerText: {
    marginTop: "10px",
    marginBottom: "12px",
  },
}));
export const style = {};
