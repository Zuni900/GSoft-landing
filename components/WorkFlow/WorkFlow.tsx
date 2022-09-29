import React from "react";
import { Grid } from "@mui/material";

import { useStyles } from "./styles";
import WorkFlowComponent from "components/WorkFlowComponent/WorkFlowComponent";

const WorkFlow = () => {
  const { classes, cx } = useStyles();

  return (
    <Grid container item md={12} sm={12} xs={12} className={cx(classes.container)}>
      <Grid container item md={10} sm={12} xs={12} className={cx(classes.grid)}>
        <WorkFlowComponent
          num="01"
          name="Discover"
          desc="The discovery phase aims to create a shared understanding of your product vision and objectives through detailed research, discussion, and analysis of your idea."
        />
        <WorkFlowComponent
          num="02"
          name="Planning & Design"
          desc="We understand how essential it is to invest time and effort in creating a great user experience."
        />
        <WorkFlowComponent
          num="03"
          name="Development & Testing"
          desc="We start by Sprint planning; a key part of our Agile working methodology, which allows us to retain focus on critical work & test at each stage of development."
        />
        <WorkFlowComponent
          num="04"
          name="Deploy & Support"
          desc="Launching a product is just the start of the journey and from day one your users will be offering their opinions and demanding the next big feature."
        />
      </Grid>
    </Grid>
  );
};

export default WorkFlow;
