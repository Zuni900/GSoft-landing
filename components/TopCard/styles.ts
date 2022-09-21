import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentServices",
  uniqId: "servicesComponent",
})(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#FFFFFF",
    background: "radial-gradient(83.15% 154.4% at 10% 13.52%, #001A1F 0%, #002E37 56.38%, #001A1F 100%)",
  },
  box: {
    width: "1150px",
    paddingTop: "80px",
    paddingBottom: "100px",
    paddingLeft: "20px",
    paddingRight: "20px",
    // backgroundColor: "pink",
    display: "flex",
    justifyContent: "center",
  },
  typo: {
    display: "flex",
  },
  button: {
    color: "#16B1E1",
    border: "1px solid #16B1E1",
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
    color: "#16B1E1",
    marginLeft: "10px",
  },
}));
export const style = {};
