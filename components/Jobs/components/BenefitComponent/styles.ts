import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentBenefitsComp",
  uniqId: "benefitsCompComponent",
})(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    marginTop: "1%",
    marginBottom: "1%",
  },
  text: {
    marginLeft: "4%",
  },
}));
export const style = {};
