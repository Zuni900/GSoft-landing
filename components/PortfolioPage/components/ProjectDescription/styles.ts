import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentMenu2",
  uniqId: "menu2Component",
})(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "5%",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "7%",
    marginBottom: "6%",
  },
  text: {
    marginTop: "3%",
  },
  desc: {
    textAlign: "center",
  },
  style: {
    justifyContent: "center",
  },
}));
export const style = {};
