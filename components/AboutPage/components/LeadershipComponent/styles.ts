import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentLeadershipComp",
  uniqId: "leadershipCompComponent",
})((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "2%",
    marginTop: "3%",
    border: "1px solid",
    borderRadius: "2%",
    borderColor: theme.palette.success.light,
  },
  box: {
    display: "flex",
    alignItems: "center",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "4%",
  },
  title: {
    marginTop: "5%",
  },
  desc: {
    marginTop: "8%",
  },
}));
export const style = {};
