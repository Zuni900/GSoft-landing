import React from "react";
import { Grid } from "@mui/material";

import { useStyles } from "./styles";
import Text from "components/Typography";

interface Props {
  step: string;
  title: string;
  desc: string;
}

const Steps = (props: Props) => {
  const { classes, cx } = useStyles();
  const { step, title, desc } = props;

  return (
    <Grid container className={cx(classes.container)}>
      <Text variant="h5" variantMapping={{ h5: "p" }} name={step} />
      <Text variant="h2" name={title} />
      <Text variant="h6" variantMapping={{ h6: "p" }} name={desc} />
    </Grid>
  );
};

export default Steps;
