import React from "react";
import { Grid } from "@mui/material";
import Image from "next/image";

import { useStyles } from "./styles";
import Steps from "../Steps";

import job from "images/job.png";

const Job = () => {
  const { classes, cx } = useStyles();

  return (
    <Grid className={cx(classes.container)}>
      <Grid container item md={11} sm={12} xs={12}>
        <Image src={job} alt="image" objectFit="cover" objectPosition="center" />
        <Grid container item md={5.5} className={cx(classes.box)}>
          <Steps
            step="Step 1"
            title="Make or Break Round"
            desc="At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim."
          />
          <Steps
            step="Step 2"
            title="Show Us What You Got"
            desc="At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim."
          />
          <Steps
            step="Step 3"
            title="The Lightning Round"
            desc="At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim."
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Job;
