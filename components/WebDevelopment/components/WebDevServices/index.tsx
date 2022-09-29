import React from "react";
import { Grid, TypographyProps } from "@mui/material";
import { StaticImageData } from "next/image";

import { useStyles } from "./styles";
import Text from "components/Typography";

interface Props extends TypographyProps {
  topHeading: string;
  heading: string;
  desc: string;
  image: StaticImageData;
}

const WebDevServices = (props: Props) => {
  const { topHeading, heading, desc, image } = props;
  const { classes, cx } = useStyles();

  return (
    <Grid
      container
      className={cx(classes.container)}
      sx={{
        backgroundImage: `url(${image?.src})`,
      }}
    >
      <Grid item md={10} lg={9} sm={12} xs={12} className={cx(classes.box)}>
        <Text name={topHeading} variant="h5" variantMapping={{ h5: "p" }} />
        <Text variant="h2" name={heading} />
        <Text className={cx(classes.text)} variant="body1" name={desc} />
      </Grid>
    </Grid>
  );
};

export default WebDevServices;
