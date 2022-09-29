import React, { useState } from "react";
import { Button, Tab, Tabs, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

import { useStyles } from "./styles";
import { pages } from "./data";
import DrawerComp from "./Drawer";
import Logo from "public/images/logo.png";
import Text from "components/Typography";
import ServicesTop from "components/ServicesTop";

const Header = () => {
  const router = useRouter();
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const { classes, cx } = useStyles();
  const [isShown, setIsShown] = useState(false);
  const handleClick = () => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };
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
            onChange={(e, value) => {
              setValue(value);
              console.log(value);

              if (value == 1) {
                handleClick();
              } else if (value == 2) {
                router.push("/portfolio");
              } else if (value == 0) {
                router.push("/");
              }
            }}
            TabIndicatorProps={{
              sx: { display: "none" },
            }}
          >
            {pages.map((page, index) => (
              <Tab label={page.name} key={index} className={classes.headerLabel} />
            ))}
          </Tabs>
          {isShown && <ServicesTop />}

          <Button variant="contained" className={classes.headerButton}>
            <Text variant="h6" name="Estimate Your Project" />
          </Button>
        </>
      )}
    </Toolbar>
  );
};

export default Header;
