import React from "react";
import { Grid, TypographyProps } from "@mui/material";
import Image, { StaticImageData } from "next/image";

import { useStyles } from "./styles";
import Text from "components/Typography";

interface Props extends TypographyProps {
  topHeading: string;
  heading: string;
  desc: string;
  image: StaticImageData;
}

const MissionComponent = (props: Props) => {
  const { topHeading, heading, desc, image } = props;
  const { classes, cx } = useStyles();

  return (
    <Grid container item md={5.5} sm={5.5} xs={12} className={cx(classes.box)}>
      <Image src={image} alt="image" layout="fixed" />
      <Text name={topHeading} variant="h5" variantMapping={{ h5: "p" }} className={cx(classes.topHeading)} />
      <Text variant="h2" name={heading} />
      <Text variant="body1" name={desc} className={cx(classes.text)} />
    </Grid>
  );
};

export default MissionComponent;
