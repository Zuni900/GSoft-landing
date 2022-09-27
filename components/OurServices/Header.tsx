import React from "react";
import { Grid } from "@mui/material";
import Text from "../Typography";
import Block from "../DevelopmentBlock";
import Services from "../../public/Services/Services.png";
import Header2 from "../Navbar/Header";
import { useStyles } from "./styles";
import { Box } from "@mui/material";
import Image from "next/image";
import About from "components/About";
function Header() {
  const { classes, cx } = useStyles();

  return (
    <>
      <Grid className={cx(classes.toolbar)}>
        <Header2 />

        <Grid container item md={12} sm={12} xs={12} className={cx(classes.Headings)}>
          <Text variantMapping={{ h2: "h2" }} variant="h2" name="Our Services" className={cx(classes.styling)} />

          <Text
            className={cx(classes.description)}
            variant="subtitle1"
            name="Fast, secure, stunning websites & Web Apps at unbeatable prices."
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
