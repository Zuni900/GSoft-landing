import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentServices",
  uniqId: "servicesComponent",
})((theme) => ({
  mainCardContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  arrowF: {
    marginRight: "30px",
    padding: "2px",
    "&:hover": {
      background: theme.palette.secondary.main,
      borderRadius: "100%",
      padding: "2px",
      color: theme.palette.secondary.light,
    },
  },
  arrowB: {
    padding: "2px",
    "&:hover": {
      background: theme.palette.secondary.main,
      borderRadius: "100%",
      padding: "2px",
      color: theme.palette.secondary.light,
    },
  },
  mainCardItems: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "70px",
  },
  mainCardHeading: {
    color: theme.palette.secondary.main,
  },
  mainSubHeading: {},
  mainPara: {
    color: theme.palette.success.light,
    marginTop: "30px",
  },
  mainCardTechnologies: {
    display: "flex",

    flexDirection: "row",
    flexWrap: "wrap",
  },
  technologyHeadings: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.light,
    height: "24px",
    fontSize: "12px",
    borderRadius: "2px",
    marginRight: "30px",
    marginTop: "20px",
    gap: "10px",
    paddingLeft: "8px",
    paddingTop: "3px",
    paddingBottom: "3px",
    paddingRight: "8px",
  },
  cardIcons: {
    display: "flex",
    flexDirection: "row",
  },
}));
export const style = {};
