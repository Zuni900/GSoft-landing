import React, { useState } from "react";
import { Button, Tab, Tabs, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

import { useStyles } from "./styles";
import { pages } from "./data";
import DrawerComp from "./Drawer";
import Logo from "../../public/images/logo.png";
import Text from "../Typography";

const Header = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const { classes, cx } = useStyles();

  return (
    <Toolbar className={cx(classes.toolbar)}>
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
              <Tab label={page.name} key={index} className={classes.headerLabel} />
            ))}
          </Tabs>
          <Button variant="contained" className={classes.headerButton}>
            <Text variant="h6" name="Estimate Your Project" />
          </Button>
        </>
      )}
    </Toolbar>
  );
};

export default Header;
