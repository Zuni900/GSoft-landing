import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentTecBlock",
  uniqId: "tecBlockComponent",
})(() => ({
  container: {
    padding: "5px",
    marginTop: "10px",
    marginBottom: "10px",
  },
}));
