import React, { useState } from "react";
import { AppBar, Button, Tab, Tabs, Toolbar,  useMediaQuery, useTheme } from "@mui/material";
import { useStyles } from "./styles";
import DrawerComp from "./Drawer";
import Link from "next/link";
import { pages } from "./Navbardata";
import Image from "next/image";
const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(isMatch);
 const { classes} = useStyles();

  return (
    <React.Fragment>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Link href="/">
            <Image src="/c.png" alt="Logo" width={140} height={35} />
          </Link>

          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs className={classes.headerTabs} value={value} onChange={(e, value) => setValue(value)}>
                {" "}
                {pages.map((page, index) => (
                  <Link href={page.link} key={index} className={classes.headerLabel}>
                    <Tab label={page.name} className={classes.headerLabel} />
                  </Link>
                ))}
              </Tabs>
              <Button className={classes.headerButton}>Estimate Your Project</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
