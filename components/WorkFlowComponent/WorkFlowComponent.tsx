import React from "react";
import { Grid, TypographyProps } from "@mui/material";

import { useStyles } from "./styles";
import Text from "../Typography";

interface Props extends TypographyProps {
  num: string;
  name: string;
  desc: string;
}

const WorkFlowComponent = (props: Props) => {
  const { num, name, desc } = props;
  const { classes, cx } = useStyles();

  return (
    <Grid md={2.25} className={cx(classes.container)}>
      <Text variant="h5" name={num} className={cx(classes.uperText)} />
      <Text variant="body2" name={name} className={cx(classes.lowerText)} />
      <Text variant="body2" name={desc} />
    </Grid>
  );
};

export default WorkFlowComponent;
