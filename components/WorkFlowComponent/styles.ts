import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "workflowComponent",
  uniqId: "workflowComponent",
})((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "20vh",
    "&:hover": {
      backgroundColor: theme.palette.success.main,
      paddingTop: "10vh",
      cursor: "pointer",
      transition: "1s",
    },
  },
  uperText: {
    color: theme.palette.secondary.contrastText,
  },
  lowerText: {
    marginBottom: "10px",
  },
}));
export const style = {};
