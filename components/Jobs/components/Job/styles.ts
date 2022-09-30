import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentJob",
  uniqId: "JobComponent",
})(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "8%",
    paddingBottom: "8%",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "2%",
  },
}));
export const style = {};
