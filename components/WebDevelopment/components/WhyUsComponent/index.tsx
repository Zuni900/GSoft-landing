import React from "react";
import { Grid, TypographyProps } from "@mui/material";
import Image, { StaticImageData } from "next/image";

import Text from "../../../Typography";
import { useStyles } from "./styles";

interface Props extends TypographyProps {
  image: StaticImageData;
  heading: string;
  desc: string;
}

const WhyUsComponent = (props: Props) => {
  const { image, heading, desc } = props;
  const { classes, cx } = useStyles();

  return (
    <Grid container item md={12} className={cx(classes.container)}>
      <Image src={image} alt="img" layout="fixed" />
      <Text name={heading} variant="h5" variantMapping={{ h5: "h2" }} className={cx(classes.text)} />
      <Text name={desc} variant="body2" variantMapping={{ body2: "p" }} />
    </Grid>
  );
};

export default WhyUsComponent;
