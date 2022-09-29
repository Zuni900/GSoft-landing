import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentMenu",
  uniqId: "menuComponent",
})((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "5%",
    paddingBottom: "6%",
    background: theme.palette.primary.light,
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
  },
  txtGrid: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5%",
  },
  tag: {
    border: "1px solid",
    paddingTop: "1%",
    paddingBottom: "1%",
    paddingLeft: "4%",
    marginLeft: "1%",
    marginRight: "1%",
    marginTop: "2%",
    marginBottom: "2%",
    paddingRight: "4%",
    borderRadius: "8%",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.light,
  },
  tabsGrid: {
    display: "flex",
    justifyContent: "center",
  },
  tabs: {
    "& .MuiTab-root.Mui-selected": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.light,
      borderRadius: "100px",
    },
  },
  tab: {
    color: theme.palette.success.light,
    textTransform: "none",
  },
}));
export const style = {};
