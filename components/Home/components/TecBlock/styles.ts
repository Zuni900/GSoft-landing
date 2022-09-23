import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentTecBlock",
  uniqId: "tecBlockComponent",
})(() => ({
  container: {
    padding: "5px",
    marginTop: "10px",
    marginBottom: "10px",
    marginLeft: "20px",
    marginRight: "20px",
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
    marginBottom: "70px",
  },
  tec: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));
