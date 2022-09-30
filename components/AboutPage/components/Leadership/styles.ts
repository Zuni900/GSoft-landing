import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentLeadership",
  uniqId: "leadershipComponent",
})((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "5%",
    paddingBottom: "5%",
    paddingLeft: "20px",
    paddingRight: "20px",
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.secondary.main,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  box: {
    display: "flex",
    flexDirection: "column",
  },
  grid: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
export const style = {};
