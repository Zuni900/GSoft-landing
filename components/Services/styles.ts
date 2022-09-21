import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentServices",
  uniqId: "servicesComponent",
})(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "40px",
    paddingBottom: "40px",
    paddingLeft: "20px",
    paddingRight: "20px",
    background: "linear-gradient(259.45deg, #16BCE1 -6.94%, #9FE8FF 104.78%)",
  },
  text: {
    display: "flex",
    justifyContent: "center",
  },
  description: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "25px",
    textAlign: "center",
    width: "1150px",
  },
  styling: {
    color: "#001A1F",
  },
}));
export const style = {};
