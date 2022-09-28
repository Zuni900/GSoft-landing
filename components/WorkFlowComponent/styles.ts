import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "workflowComponent",
  uniqId: "workflowComponent",
})((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "center",
    paddingLeft: "20px",
    paddingRight: "20px",
    minHeight: "500px",
    "&:hover": {
      backgroundColor: theme.palette.success.main,
      paddingBottom: "150px",
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
  desc: {
    textAlign: "center",
  },
}));
export const style = {};
