import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useStyles } from "./styles";
import DrawerComp from "./Drawer";

import { pages } from "./data";
import Image from "next/image";

import Logo from "../../public/images/logo.png";
const Header = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const { classes } = useStyles();

  return (
    <React.Fragment>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Image src={Logo} alt="Logo" layout="fixed" />

          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                className={classes.headerTabs}
                value={value}
                onChange={(e, value) => setValue(value)}
                TabIndicatorProps={{
                  sx: { display: "none" },
                }}
              >
                {pages.map((page, index) => (
                  <Tab
                    label={page.name}
                    key={index}
                    className={classes.headerLabel}
                  />
                ))}
              </Tabs>
              <Button className={classes.headerButton}>
                Estimate Your Project
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
