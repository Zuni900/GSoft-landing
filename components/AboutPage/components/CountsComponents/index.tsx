import React from "react";
import { Grid, TypographyProps } from "@mui/material";

import { useStyles } from "./styles";
import Text from "components/Typography";

interface Props extends TypographyProps {
  count: string;
  title: string;
}

const CountsComponent = (props: Props) => {
  const { count, title } = props;
  const { classes, cx } = useStyles();

  return (
    <Grid container item md={6} sm={6} className={cx(classes.container)}>
      <Text variant="h2" name={count} />
      <Text variant="h5" name={title} variantMapping={{ h5: "p" }} />
    </Grid>
  );
};

export default CountsComponent;
