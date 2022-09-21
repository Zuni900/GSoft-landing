import React from "react";
import { Grid } from "@mui/material";

import Text from "../Typography";
import { useStyles } from "./styles";

const About = () => {
  const { classes, cx } = useStyles();

  return (
    <Grid container item md={12} sm={12} xs={12} className={cx(classes.container)}>
      <Grid container item md={12} sm={12} xs={12} className={cx(classes.text)}>
        <Text variant="h5" name="Who We Are" className={cx(classes.styling)} />
      </Grid>

      <Grid container item md={12} sm={12} xs={12} className={cx(classes.text)}>
        <Text variant="h2" name="About Company" className={cx(classes.styling)} />
      </Grid>

      <Grid container item md={9} sm={12} xs={12} className={cx(classes.description)}>
        <Text
          className={cx(classes.color)}
          variant="body1"
          name="We are providing professional services of Website Development as well as Mobile App Development to Enterprises and companies. Global Software Consulting intends to be in front of the client’s needs and delivers modern solutions for modern problems of the client's business from the initial phase of scoping the requirements up to the final delivery, maintenance, and continuous upgrade."
        />
      </Grid>
    </Grid>
  );
};

export default About;
