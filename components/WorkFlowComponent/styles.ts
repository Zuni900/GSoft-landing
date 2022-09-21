import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentAbout",
  uniqId: "aboutComponent",
})(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    // backgroundColor: "pink",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "20vh",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.1)",
      paddingTop: "10vh",
      cursor: "pointer",
      transition: "1s",
    },
  },
  uperText: {
    color: "#16B1E1",
  },
  lowerText: {
    marginBottom: "10px",
  },
}));
export const style = {};
