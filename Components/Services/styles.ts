import { makeStyles } from "tss-react/mui" // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentServices",
  uniqId: "servicesComponent",
})((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px",
    background: "linear-gradient(259.45deg, #16BCE1 -6.94%, #9FE8FF 104.78%)",
  },
  text: {
    display: "flex",
    justifyContent: "center",
  },
  description: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
    textAlign: "center",
  },
  styling: {
    color: "#001A1F",
    fontWeight: 600,
  },
  color: {
    color: "pink",
  },
}))
export const style = {}
