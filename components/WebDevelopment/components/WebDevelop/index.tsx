import React from "react";
import { Grid } from "@mui/material";

import { useStyles } from "./styles";
import Text from "../../../Typography";
import Header from "../../../Navbar/Header";

const WebDev = () => {
  const { classes, cx } = useStyles();

  return (
    <Grid container className={cx(classes.container)}>
      <Grid container>
        <Header />
      </Grid>
      <Grid container item md={10} lg={8} sm={12} xs={12} className={cx(classes.block)}>
        <Text name="Web Developmemnt" variant="h1" />
        <Text
          variant="subtitle1"
          variantMapping={{ subtitle1: "p" }}
          name="Fast, secure, stunning websites & Web Apps at unbeatable prices."
        />
      </Grid>
    </Grid>
  );
};

export default WebDev;
