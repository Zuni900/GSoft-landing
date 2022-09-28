import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentWhyUs",
  uniqId: "whyUsComponent",
})((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "50px",
    paddingBottom: "50px",
    paddingLeft: "20px",
    paddingRight: "20px",
    backgroundColor: theme.palette.primary.light,
  },
  block: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: "20px",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  grid: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  img: {
    justifyContent: "center",
  },
}));
export const style = {};
