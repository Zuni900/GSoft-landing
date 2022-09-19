import React, { useState } from "react";
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useStyles } from "../styles";
import { pages } from "./Navbardata";
import Link from "next/link";
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [active, setactive] = useState(false);
  const toggle = () => {
    setactive(!active);
  };
   const { classes } = useStyles();
  return (
    <React.Fragment>
      <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)} className={classes.drawer}>
        <List className={classes.drawerList}>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <Link href={page.link}>
                <ListItemText className={classes.drawerText}>{page.name}</ListItemText>
              </Link>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton className={classes.drawerIcon} onClick={() => setOpenDrawer(!openDrawer)}>
        {openDrawer ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
