import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentWebDevOffers",
  uniqId: "webDevOffersComponent",
})((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "70px",
    paddingBottom: "70px",
    paddingLeft: "20px",
    paddingRight: "20px",
    background: theme.palette.primary.light,
  },
  block: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    marginRight: "4%",
  },
  text: {
    marginTop: "5%",
  },
}));
export const style = {};
