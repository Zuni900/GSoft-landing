import React, { useState, useCallback } from "react";
import { Drawer, IconButton, List, ListItemButton, ListItemText, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

import { useStyles } from "./styles";
import { pages } from "./data";

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { classes } = useStyles();
  const theme = useTheme();
  const paperStyle = {
    color: theme.palette.primary.light,
    background: theme.palette.secondary.light,
    top: "76px",
    width: "100%",
    height: "auto",
    boxShadow: "none",
    backgroundColor: theme.palette.secondary.light,
  };
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
          sx: paperStyle,
        }}
      >
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
      <IconButton aria-label="Drawer" className={classes.drawerIcon} onClick={onClickDrawer}>
        {openDrawer ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
