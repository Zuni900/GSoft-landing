import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentWhyUsComp",
  uniqId: "whyUsCompComponent",
})((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    marginTop: "20px",
    marginBottom: "20px",
    padding: "20px",
    borderRadius: "4px",
    border: "2px solid",
    borderColor: theme.palette.error.light,
  },
  text: {
    marginTop: "15px",
    marginBottom: "15px",
  },
}));
export const style = {};
