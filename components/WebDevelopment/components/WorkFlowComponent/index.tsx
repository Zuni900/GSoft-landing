import React from "react";
import { Grid, useMediaQuery, useTheme, TypographyProps } from "@mui/material";

import { useStyles } from "./styles";
import Text from "components/Typography";

interface Props extends TypographyProps {
  num: string;
  dash: string;
  name: string;
  desc: string;
}

const WorkFlowComponent = (props: Props) => {
  const { num, dash, name, desc } = props;
  const { classes, cx } = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Grid
      container
      item
      lg={2.75}
      md={5.75}
      sm={5.75}
      xs={12}
      className={cx(classes.container)}
      style={{ textAlign: isMatch ? "center" : "start" }}
    >
      <Grid container className={cx(classes.block)} style={{ justifyContent: isMatch ? "center" : "flex-start" }}>
        <Text
          variant="overline"
          variantMapping={{
            overline: "h1",
          }}
          name={num}
          className={cx(classes.uperText)}
        />
        <Text variant="body1" name={dash} />
      </Grid>

      <Text
        variant="h5"
        variantMapping={{
          h5: "p",
        }}
        name={name}
        className={cx(classes.lowerText)}
      />
      <Text variant="body2" name={desc} />
    </Grid>
  );
};

export default WorkFlowComponent;
