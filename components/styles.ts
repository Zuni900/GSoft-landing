import { Margin } from "@mui/icons-material";
import { display } from "@mui/system";
import { makeStyles } from "tss-react/mui"; 
export  const useStyles = makeStyles()((theme) => ({
  root: {
    width: "1920px",
    height: "714px",
    left: "0px",
    top: "0px",
    display: "flex",
    fontFamily: "Poppins",
  },
  appBar: {
    backgroundColor: "#001A1F",
  },
  appBarlogo: {
    height: "20px",
    width: "auto",
  },
  headerTabs: {
    color: "#ffffff",
    marginLeft: "auto",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  headerLabel: {
    color: "white",
    fontSize: "16px",
    lineHeight: "25.5px",
  },
  headerButton: {
    backgroundColor: "#16B1E1",
    color: "white",
  },
  list: {
    alignItems: "center",
    justifyContent: "center",
  },
  drawer: {
    position: "relative",
    overflow: "hidden",
    background: " #001A1F",
    color: "white",
  },
  drawerText: {
    color: "white",
    marginLeft: "auto",
    width:"142px",
    height:"45px",
    top:"102px",
    left:"20px",
fontStyle:"normal",
fontWeight:"500",
fontSize:"28px",
lineHeight:"160%",
display:"flex",
alignItems:"center",
  },
  drawerList:{
    borderTop:"1px solid #16B1E1"
  },
  drawerIcon: {
    color: "white",
    marginLeft: "auto",
  },
  class: {
    WebkitAlignItems: "",
  },
}));
  
