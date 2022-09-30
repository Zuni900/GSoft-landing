import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentCounts",
  uniqId: "countsComponent",
})((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "70px",
    paddingBottom: "70px",
    paddingLeft: "20px",
    paddingRight: "20px",
    background: theme.palette.primary.light,
  },
  block: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));
export const style = {};
