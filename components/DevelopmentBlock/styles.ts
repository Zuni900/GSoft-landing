import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentServices",
  uniqId: "servicesComponent",
})((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: "10px",
    padding: "20px",
    color: theme.palette.secondary.main,
  },
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "10px",
    marginBottom: "10px",
  },
  styling: {
    fontWeight: "bold",
  },
  bgColor: {
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));
export const style = {};
