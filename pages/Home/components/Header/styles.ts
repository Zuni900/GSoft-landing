import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentTop",
  uniqId: "topComponent",
})((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.secondary.light,
    background: theme.palette.primary.dark,
  },
  box: {
    paddingTop: "80px",
    paddingBottom: "100px",
    paddingLeft: "20px",
    paddingRight: "20px",
    display: "flex",
    justifyContent: "center",
  },
  typo: {
    display: "flex",
  },
  button: {
    color: theme.palette.secondary.contrastText,
    border: "1px solid",
    // borderColor: theme.palette.secondary.contrastText,
    display: "flex",
    justifyContent: "center",
    borderRadius: "4px",
    textTransform: "none",
    padding: "10px",
  },
  desc: {
    marginTop: "30px",
    marginBottom: "30px",
  },
  gsoft: {
    color: theme.palette.secondary.contrastText,
    marginLeft: "10px",
  },
  img: {
    marginLeft: "5px",
    marginTop: "51px",
  },
}));
export const style = {};
