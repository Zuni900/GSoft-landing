import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4

export const useStyles = makeStyles({
  name: "ComponentMissionComp",
  uniqId: "missionCompComponent",
})(() => ({
  box: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: "10%",
  },
  topHeading: {
    marginTop: "6%",
  },
  text: {
    marginTop: "3%",
  },
}));
export const style = {};
