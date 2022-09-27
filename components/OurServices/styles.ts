import { makeStyles } from "tss-react/mui"; // "tss-react/mui-compat" if your project is using Typescript < 4.4
import Services from "../../public/Services/Services.png";

console.log(Services, "servicesss");
export const useStyles = makeStyles({
  name: "ComponentTec",
  uniqId: "tecComponent",
})((theme) => ({
  
  toolbar: {
    margin: "0px",

    backgroundImage: `url(${Services?.src})`,
    backgroundSize: "fit",
backgroundPosition:"center",
    opacity: "1",
    width: "100%",
    backgroundRepeat: "no-repeat",

    height: "50vh",

   
  },

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    paddingTop: "70px",
    paddingBottom: "70px",
    paddingLeft: "20px",
    paddingRight: "20px",
    backgroundColor: theme.palette.primary.light,
  },
  Headings: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "60px",
  },
  description: {
    marginTop: "20px",
    display: "flex",
    alignItems:"center",
    justifyContent:"center",
    width:"706px",
    textAlign:"center",
    color: theme.palette.secondary.light,
  },
  styling: {
    color: theme.palette.secondary.light,
  },
}));
export const style = {};
