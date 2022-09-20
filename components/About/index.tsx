import React from "react";
import { Grid } from "@mui/material";

import Text from "../Typography";
import { useStyles } from "./styles";

const About = () => {
  const { classes, cx } = useStyles();

  return (
    <Grid container item md={12} sm={12} className={cx(classes.container)}>
      {/* <Grid
        sx={{
          width: "1150px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      > */}
      <Grid container item md={12} sm={12} className={cx(classes.text)}>
        <Text variant="subtitle2" name="Who We Are" className={cx(classes.styling)} />
      </Grid>

      <Grid container item md={12} sm={12} className={cx(classes.text)}>
        <Text variant="h5" name="About Company" className={cx(classes.styling)} />
      </Grid>

      <Grid container item md={7} sm={6} className={cx(classes.description)}>
        <Text
          className={cx(classes.color)}
          variant="subtitle2"
          name="We are providing professional services of Website Development as well as Mobile App Development to Enterprises and companies. Global Software Consulting intends to be in front of the client’s needs and delivers modern solutions for modern problems of the client's business from the initial phase of scoping the requirements up to the final delivery, maintenance, and continuous upgrade."
        />
      </Grid>
      {/* </Grid> */}
    </Grid>
  );
};

export default About;
