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
    padding: "10px",
    "&:hover": {
      borderRadius: "100%",
      padding: "10px",
    },
  },
  arrowB: {
    padding: "10px",
    marginRight: "10px",
    "&:hover": {
      borderRadius: "100%",
      padding: "10px",
    },
  },
  mainCardItems: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "70px",
  },
  mainSubHeading: {},
  mainPara: {
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
    borderRadius: "7%",
    border: "1px solid",
    marginRight: "30px",
    marginTop: "20px",
    gap: "10px",
    padding: "8px",
  },
  cardIcons: {
    display: "flex",
    flexDirection: "row",
  },
}));
export const style = {};
