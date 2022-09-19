

import { Margin } from "@mui/icons-material"
import { display } from "@mui/system"
import { makeStyles } from "tss-react/mui"
export const useStyles = makeStyles()((theme) => ({
  root: {
    width: "1920px",
    height: "714px",
    left: "0px",
    top: "0px",
    display: "flex",
    fontFamily: "Poppins",
  },
  appBar: {
    backgroundColor: theme.palette.secondary.main,
  },
  appBarlogo: {
    height: "20px",
    width: "auto",
  },
  headerTabs: {
    color: theme.palette.secondary.light,
    marginLeft: "auto",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  headerLabel: {
    color: theme.palette.secondary.light,
    fontSize: "16px",
    lineHeight: "25.5px",
  },
  headerButton: {
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.light,
  },
  list: {
    alignItems: "center",
    justifyContent: "center",
  },
  drawer: {
    color: theme.palette.secondary.main,

    top: "56px",
    height: "auto",
    width: "100%",
  },
  drawerText: {
    color: theme.palette.secondary.light,
    marginLeft: "auto",
    width: "142px",
    height: "45px",
    top: "102px",
    left: "20px",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "28px",
    lineHeight: "160%",
    display: "flex",
    alignItems: "center",
  },
  drawerList: {
    borderTop: "1px solid #16B1E1",
  },
  drawerIcon: {
    color: theme.palette.secondary.light,
    marginLeft: "auto",
  },
}))


