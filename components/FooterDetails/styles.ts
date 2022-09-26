import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentFooter",
  uniqId: "footerComponent",
})((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "30px",
    paddingBottom: "30px",
    paddingLeft: "20px",
    paddingRight: "20px",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.light,
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid",
    paddingBottom: "5%",
    borderBottomColor: theme.palette.secondary.contrastText,
  },
  block: {
    display: "flex",
    flexDirection: "column",
  },
  tecBlock: {
    display: "flex",
    justifyContent: "space-between",
  },
  heading: {
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  text: {
    paddingTop: "10px",
    paddingBottom: "10px",
    "&:hover": {
      color: theme.palette.secondary.contrastText,
      cursor: "pointer",
    },
  },
  technologies: {
    border: "1px solid",
    borderColor: theme.palette.secondary.light,
    marginTop: "10px",
    marginBottom: "10px",
    padding: "10px",
    borderRadius: "5px",
    textAlign: "center",
    "&:hover": {
      color: theme.palette.secondary.contrastText,
      borderColor: theme.palette.secondary.contrastText,
      cursor: "pointer",
    },
  },
  textField: {
    backgroundColor: theme.palette.secondary.light,
    borderRadius: 4,
    width: "386px",
  },
  button: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    font: theme.typography.h6,
    width: "133px",
    height: "44px",
  },
  grid: {
    display: "flex",
  },
}));
export const style = {};
