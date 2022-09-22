import React from "react";
import { Grid, Box, TextField } from "@mui/material";

import Text from "../Typography";
import { useStyles } from "./styles";
import CommonButton from "../Button/CommonButton";

const Updates = () => {
  const { classes, cx } = useStyles();

  return (
    <Grid container className={cx(classes.container)}>
      <Grid container item md={11.75} className={cx(classes.box)}>
        <Text variant="h4" name="Get Updates" />

        <Grid container xs={8} sm={10} className={cx(classes.box)}>
          <Grid container item md={6} className={cx(classes.text)}>
            <Text variant="body2" name="Sign up for the latest news on how we are shaping a new future." />
          </Grid>

          <Grid item md={6} xs={10} sm={8} className={cx(classes.grid)}>
            <TextField
              className={cx(classes.textField)}
              id="outlined-basic"
              size="small"
              label="Enter your email"
              variant="outlined"
            />
            <CommonButton variant="contained" name="Subcribe" className={cx(classes.button)} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Updates;
