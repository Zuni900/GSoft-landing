import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4
import jobs from "images/jobs.png";

export const useStyles = makeStyles({
  name: "ComponentBuilding",
  uniqId: "buildingComponent",
})((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "5%",
    color: theme.palette.secondary.light,
    backgroundSize: "cover",
    backgroundImage: `url(${jobs?.src})`,
    backgroundColor: theme.palette.secondary.main,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  block: {
    paddingLeft: "20px",
    paddingRight: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    marginTop: "80px",
    marginBottom: "100px",
  },
  buttonGrid: {
    justifyContent: "center",
    marginTop: "2%",
    marginBottom: "2%",
  },
  button: {
    textTransform: "none",
    paddingLeft: "10%",
    paddingRight: "10%",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary.main,
    },
  },
}));
export const style = {};
