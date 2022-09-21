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
    padding: "20px",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.1)",
      // paddingTop: "30px",
      // marginTop: "20px",
      // marginBottom: "20px",
      paddingBottom: "80px",
    },
  },
  uperText: {
    color: "#16B1E1",
    fontWeight: 900,
  },
  lowerText: {
    marginTop: "10px",
    marginBottom: "10px",
    fontWeight: 600,
  },
}));
export const style = {};
