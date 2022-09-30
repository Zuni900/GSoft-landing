import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentBenefits",
  uniqId: "benefitsComponent",
})((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "70px",
    paddingBottom: "70px",
    paddingLeft: "20px",
    paddingRight: "20px",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.light,
  },
  text: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    marginTop: "20px",
    textAlign: "center",
  },
  benefits: {
    marginTop: "5%",
  },
}));
export const style = {};
