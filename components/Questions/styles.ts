import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentQuestions",
  uniqId: "questionsComponent",
})((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "70px",
    paddingBottom: "70px",
    paddingLeft: "20px",
    paddingRight: "20px",
    backgroundColor: theme.palette.primary.light,
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
    width: "227px",
    textTransform: "none",
    height: "44px",
    marginTop: "40px",
  },
  ques: {
    display: "flex",
    paddingTop: "7px",
    paddingBottom: "7px",
    cursor: "pointer",
  },
  text: {
    paddingRight: "10px",
    color: theme.palette.secondary.contrastText,
  },
}));
export const style = {};
