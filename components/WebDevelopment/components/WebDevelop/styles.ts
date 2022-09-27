import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4
import webDevelop from "../../../../public/images/webDevelop.png";

export const useStyles = makeStyles({
  name: "ComponentWebDev",
  uniqId: "webDevComponent",
})((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "5%",
    color: theme.palette.secondary.light,
    backgroundImage: `url(${webDevelop?.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  block: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    marginTop: "80px",
    marginBottom: "100px",
  },
}));
export const style = {};
