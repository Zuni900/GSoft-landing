import React from "react";
import { Grid, TextField, useMediaQuery, useTheme } from "@mui/material";

import Text from "../Typography";
import { useStyles } from "./styles";
import CommonButton from "../Button/CommonButton";

const Updates = () => {
  const { classes, cx } = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container className={cx(classes.container)}>
      {isMatch ? (
        <>
          <Grid container className={cx(classes.box)}>
            <Grid container item xs={11} className={cx(classes.abc)}>
              <Text variant="h4" name="Get Updates" />

              <Grid container item xs={8} sm={10} className={cx(classes.xyz)}>
                <Grid className={cx(classes.text)}>
                  <Text variant="body2" name="Sign up for the latest news on how we are shaping a new future." />
                </Grid>

                <Grid item md={5} xs={12} sm={8} className={cx(classes.grid)}>
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
        </>
      ) : (
        <Grid container className={cx(classes.box)}>
          <Grid container item md={11} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Text variant="h4" name="Get Updates" />

            <Grid container item md={9} xs={8} sm={10} className={cx(classes.block)}>
              <Grid className={cx(classes.text)}>
                <Text variant="body2" name="Sign up for the latest news on how we are shaping a new future." />
              </Grid>

              <Grid item md={5} xs={12} sm={8} className={cx(classes.grid)}>
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
      )}
    </Grid>
  );
};

export default Updates;
