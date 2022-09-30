import React from "react";
import { Grid } from "@mui/material";

import { useStyles } from "./styles";
import MissionComponent from "../MissionComponent";

import mission from "images/mission.png";
import vision from "images/vision.png";

const Mission = () => {
  const { classes, cx } = useStyles();

  return (
    <Grid container className={cx(classes.container)}>
      <Grid container item md={10} sm={12} xs={12} className={cx(classes.box)}>
        <MissionComponent
          image={mission}
          topHeading="Work with the Tech Leader."
          heading="Our Mission"
          desc="With considerable experience in Blockchain and FinTech areas, he leads Innowise Group to reach new heights and become a leading software engineering and digital transformation company."
        />
        <MissionComponent
          image={vision}
          topHeading="What We Aspire To Be"
          heading="Our Vision"
          desc="With considerable experience in Blockchain and FinTech areas, he leads Innowise Group to reach new heights and become a leading software engineering and digital transformation company."
        />
      </Grid>
    </Grid>
  );
};

export default Mission;
