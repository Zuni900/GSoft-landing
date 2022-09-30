import React from "react";

import { Grid } from "@mui/material";

import { useStyles } from "./styles";
import Text from "components/Typography";
import Header from "components/Navbar/Header";
import CommonButton from "components/Button/CommonButton";

const Building = () => {
  const { classes, cx } = useStyles();

  return (
    <Grid container className={cx(classes.container)}>
      <Grid container>
        <Header />
      </Grid>
      <Grid container item md={10} lg={8} sm={12} xs={12} className={cx(classes.block)}>
        <Text name="Building What's Next!" variant="h1" />
        <Grid
          container
          item
          md={10}
          sm={10}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "3%",
          }}
        >
          <Grid container item md={5} className={cx(classes.buttonGrid)}>
            <CommonButton name="16 Current Openings" variant="outlined" className={cx(classes.button)} />
          </Grid>
          <Grid container item md={3} className={cx(classes.buttonGrid)}>
            <CommonButton name="Check Status" variant="outlined" className={cx(classes.button)} />
          </Grid>
          <Grid container item md={3} className={cx(classes.buttonGrid)}>
            <CommonButton name="My Referrals" variant="outlined" className={cx(classes.button)} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Building;
