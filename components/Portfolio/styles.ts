import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentTec",
  uniqId: "tecComponent",
})(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "70px",
    paddingBottom: "70px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
  },
  text: {
    display: "flex",
    justifyContent: "center",
  },
  tabs: {
    display: "flex",
    marginTop: "25px",
    marginBottom: "60px",
    "& .MuiTab-root.Mui-selected": {
      color: "transparent",
    },
  },
  tab: {
    textTransform: "none",
  },
  tec: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));
export const style = {};
