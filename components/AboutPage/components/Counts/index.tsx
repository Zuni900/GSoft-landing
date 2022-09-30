import React from "react";
import { Grid } from "@mui/material";
import Image from "next/image";

import { useStyles } from "./styles";
import CountsComponent from "../CountsComponents";
import count from "images/count.png";

const Counts = () => {
  const { classes, cx } = useStyles();

  return (
    <Grid container className={cx(classes.container)}>
      <Grid container item md={10} className={cx(classes.block)}>
        <Image src={count} alt="image" objectFit="cover" objectPosition="center" layout="fixed" />
        <Grid container item lg={5} md={10} sm={10} className={cx(classes.box)}>
          <CountsComponent count="960+" title="Happy Clients" />
          <CountsComponent count="2360+" title="Projects" />
          <CountsComponent count="3470+" title="Hours of Support" />
          <CountsComponent count="25+" title="Talented Gsoftians" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Counts;
