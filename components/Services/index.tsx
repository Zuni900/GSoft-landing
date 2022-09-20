import React from "react";
import { Grid } from "@mui/material";

import { useStyles } from "./styles";
import Text from "../Typography";
import Block from "../DevelopmentBlock";
import WebDev from "../../public/images/WebDev.png";
import AppDev from "../../public/images/AppDev.png";
import BackendDev from "../../public/images/BackendDev.png";
import WebDesign from "../../public/images/WebDesign.png";

const Services = () => {
  const { classes, cx } = useStyles();

  return (
    <Grid container className={cx(classes.container)}>
      <Grid container className={cx(classes.text)}>
        <Text
          variant="h5"
          name="Our 360° Services"
          className={cx(classes.styling)}
        />
      </Grid>
      <Grid container item md={10} className={cx(classes.description)}>
        <Block
          name1="Web Development"
          image={WebDev}
          description="We offers top-quality development services and uses excellent frameworks to develop user-friendly app interfaces."
        />
        <Block
          image={BackendDev}
          name1="Backend Development"
          description="We offers top-quality development services and uses excellent frameworks to develop user-friendly app interfaces."
        />
        <Block
          image={AppDev}
          name1="Mobile Development"
          description="We offers top-quality development services and uses excellent frameworks to develop user-friendly app interfaces."
        />
        <Block
          image={WebDesign}
          name1="Web Design"
          description="We offers top-quality development services and uses excellent frameworks to develop user-friendly app interfaces."
        />
      </Grid>
    </Grid>
  );
};

export default Services;
