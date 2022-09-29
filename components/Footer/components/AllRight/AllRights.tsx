import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";

import { useStyles } from "./styles";
import Text from "components/Typography";

const AllRights = () => {
  const { classes, cx } = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container className={cx(classes.container)}>
      <Grid container item md={8} sm={8} xs={8} className={cx(classes.box)}>
        <Grid container item md={6.5} className={cx(classes.box)}>
          <Grid className={cx(classes.block)}>
            <Text name="•" variant="h6" variantMapping={{ h6: "p" }} className={cx(classes.text)} />
            <Text name="Privacy policy" variant="caption" />
          </Grid>

          <Grid className={cx(classes.block)}>
            <Text name="•" variant="h6" variantMapping={{ h6: "p" }} className={cx(classes.text)} />
            <Text name="Terms & conditions" variant="caption" />
          </Grid>

          <Text name="©All rights reserved 2022 GCS" variant="caption" />
        </Grid>
        {!isMatch ? <Text name="info@gsoftconsulting.com" variant="caption" /> : ""}
      </Grid>
    </Grid>
  );
};

export default AllRights;
