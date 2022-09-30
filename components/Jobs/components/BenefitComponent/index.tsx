import React from "react";
import { Grid } from "@mui/material";
import Image, { StaticImageData } from "next/image";

import { useStyles } from "./styles";
import Text from "components/Typography";

interface Props {
  image: StaticImageData;
  text: string;
}

const BenefitComponent = (props: Props) => {
  const { classes, cx } = useStyles();
  const { image, text } = props;

  return (
    <Grid item md={4} sm={12} xs={12} className={cx(classes.container)}>
      <Image src={image} alt="image" layout="fixed" />
      <Text variant="body2" name={text} className={cx(classes.text)} />
    </Grid>
  );
};

export default BenefitComponent;
