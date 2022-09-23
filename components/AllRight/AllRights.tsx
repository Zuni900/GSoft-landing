import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";

import { useStyles } from "./styles";
import Text from "../Typography";

const AllRights = () => {
  const { classes, cx } = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container className={cx(classes.container)}>
      <Grid container item md={8} sm={8} xs={8} className={cx(classes.box)}>
        {isMatch ? (
          <Grid container className={cx(classes.block)}>
            <ul>
              <li>
                <Text name="Privacy policy" variant="caption" />
              </li>
            </ul>
            <ul>
              <li>
                <Text name="Terms & conditions" variant="caption" />
              </li>
            </ul>
            <Text name="©All rights reserved 2022 GCS" variant="caption" />
          </Grid>
        ) : (
          <>
            <Grid container item md={7} className={cx(classes.box)}>
              <ul>
                <li>
                  <Text name="Privacy policy" variant="caption" />
                </li>
              </ul>
              <ul>
                <li>
                  <Text name="Terms & conditions" variant="caption" />
                </li>
              </ul>

              <Text name="©All rights reserved 2022 GCS" variant="caption" />
            </Grid>
            <Text name="info@gsoftconsulting.com" variant="caption" />
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default AllRights;
