import React from "react";
import { Grid } from "@mui/material";

import { useStyles } from "./styles";
import Text from "../Typography";

const Questions = () => {
  const { classes, cx } = useStyles();

  return (
    <Grid container className={cx(classes.container)}>
      <Text variant="h2" name="Frequently Ask Questions" />
    </Grid>
  );
};

export default Questions;
