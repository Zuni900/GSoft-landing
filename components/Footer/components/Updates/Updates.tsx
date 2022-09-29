import React from "react";
import { Grid, TextField, useMediaQuery, useTheme } from "@mui/material";

import Text from "components/Typography";
import { useStyles } from "./styles";
import CommonButton from "components/Button/CommonButton";

const Updates = () => {
  const { classes, cx } = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container className={cx(classes.container)}>
      <Grid container className={cx(classes.box)}>
        <Grid
          container
          item
          xs={11}
          className={cx(classes.block)}
          style={{
            justifyContent: isMatch ? "center" : "space-between",
          }}
        >
          <Text variant="h4" variantMapping={{ h4: "h1" }} name="Get Updates" />

          <Grid
            container
            item
            sm={10}
            md={9}
            className={cx(classes.block)}
            style={{
              justifyContent: isMatch ? "center" : "space-between",
            }}
          >
            <Grid className={cx(classes.text)}>
              <Text variant="body2" name="Sign up for the latest news on how we are shaping a new future." />
            </Grid>

            <Grid item md={5} xs={12} sm={8} className={cx(classes.grid)}>
              <TextField
                className={cx(classes.textField)}
                InputLabelProps={{
                  style: { color: theme.palette.secondary.main },
                }}
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
    </Grid>
  );
};

export default Updates;
