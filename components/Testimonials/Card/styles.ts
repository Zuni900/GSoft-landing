import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentServices",
  uniqId: "servicesComponent",
})((theme) => ({
  box: {
    display: "flex",
    minHeight: "40vh",
    flexDirection: "column",
    margin: "auto",
    alignItems: "center",
    WebkitJustifyContent: "center",
    width: "100%",
    backgroundColor: theme.palette.secondary.main,
  },
  grid: {
    marginTop: "40px",
  },
  header: {
    fontWeight: "200",
    lineHeight: "30px",
    textAlign: "center",
    color: theme.palette.secondary.light,
  },
  subHeader: {
    marginTop: "10px",
    fontWeight: "300",
    lineHeight: "62px",
    textAlign: "center",
    color: theme.palette.secondary.light,
  },
  card: {
    borderRadius: "16px",
    paddingTop: "30px",
    paddingBottom: "30px",
    paddingLeft: "7px",
    paddingRight: "7px",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    cursor: "pointer",
  },
  headerCard: {
    color: theme.palette.secondary.light,
  },
  gridCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  avatar: {
    height: "67px",
    width: "67px",
    borderRadius: "100%",
    background: theme.palette.secondary.contrastText,
  },
  dot1: {
    height: "8px",
    marginTop: "8px",
    width: "8px",
    borderRadius: "100%",
    background: theme.palette.secondary.contrastText,
  },
  dot2: {
    height: "16px",
    marginTop: "8px",
    width: "16px",
    borderRadius: "100%",
    background: theme.palette.secondary.contrastText,
    marginBottom: "6px",
  },
  bottomHeader: {
    marginTop: "10px",
    textAlign: "center",

    color: theme.palette.secondary.light,
  },
}));
export const style = {};
