import React from "react";
import { Grid } from "@mui/material";

import Text from "../Typography";
import { useStyles } from "./styles";

interface Props {
  name: string;
  title: string;
  details: string;
}
const About = ({ title, name, details }: Props) => {
  const { classes, cx } = useStyles();

  return (
    <Grid container item md={12} sm={12} xs={12} className={cx(classes.container)}>
      <Grid container item md={12} sm={12} xs={12} className={cx(classes.text)}>
        <Text variant="h5" variantMapping={{ h5: "h1" }} name={title} className={cx(classes.styling)} />
      </Grid>

      <Grid container item md={12} sm={12} xs={12} className={cx(classes.text)}>
        <Text variantMapping={{ h2: "h2" }} variant="h2" name={name} className={cx(classes.styling)} />
      </Grid>

      <Grid container item md={9} sm={12} xs={12} className={cx(classes.description)}>
        <Text className={cx(classes.color)} variant="body1" name={details} />
      </Grid>
    </Grid>
  );
};

export default About;
