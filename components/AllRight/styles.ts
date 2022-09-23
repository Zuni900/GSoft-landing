import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentAllRights",
  uniqId: "allrightsComponent",
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
    justifyContent: "space-between",
    alignItems: "center",
  },
  block: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
export const style = {};
