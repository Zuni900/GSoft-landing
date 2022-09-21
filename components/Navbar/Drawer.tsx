import React, { useState, useCallback } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useStyles } from "./styles";
import { pages } from "./data";
import Link from "next/link";

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { classes } = useStyles();

  const onClickDrawer = useCallback(() => {
    setOpenDrawer(!openDrawer);
  }, []);
  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          sx: {
            color: "white",
            background: "#001A1F",
            top: "76px",
            width: "100%",
            height: "auto",
            boxShadow: "none",
            backgroundColor: "#001A1F",
          },
        }}
      >
        <List className={classes.drawerList}>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <Link href={page.link}>
                <ListItemText className={classes.drawerText}>
                  {page.name}
                </ListItemText>
              </Link>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        aria-label="Drawer"
        className={classes.drawerIcon}
        onClick={onClickDrawer}
      >
        {openDrawer ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
