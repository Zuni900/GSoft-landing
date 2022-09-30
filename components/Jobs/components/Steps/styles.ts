import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentSteps",
  uniqId: "stepsComponent",
})(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "8%",
  },
}));
export const style = {};
