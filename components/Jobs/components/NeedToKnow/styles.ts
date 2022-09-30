import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentNeedToKnow",
  uniqId: "needToKnowComponent",
})((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
    paddingRight: "20px",
    color: theme.palette.secondary.light,
    backgroundSize: "cover",
    backgroundColor: theme.palette.secondary.main,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
}));
export const style = {};
