import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentServices",
  uniqId: "servicesComponent",
})(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
    marginTop: "60px",
    color: "#FFFFFF",
    background: "radial-gradient(83.15% 154.4% at 10% 13.52%, #001A1F 0%, #002E37 56.38%, #001A1F 100%);",
  },
  typo: {
    display: "flex",
  },
  button: {
    color: "#16B1E1;",
    borderColor: "#16B1E1;",
    textTransform: "none",
    paddingLeft: "30px",
    paddingRight: "30px",
  },
  desc: {
    marginTop: "30px",
    marginBottom: "30px",
  },
  gsoft: {
    color: "#16B1E1",
    fontWeight: 600,
    marginLeft: "10px",
  },
  style: {
    fontWeight: 600,
  },
}));
export const style = {};
