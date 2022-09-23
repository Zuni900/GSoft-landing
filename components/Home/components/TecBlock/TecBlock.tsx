import React from "react";
import { Grid, TypographyProps } from "@mui/material";
import Image, { StaticImageData } from "next/image";

import { useStyles } from "./styles";
import Text from "components/Typography";

interface Props extends TypographyProps {
  image: StaticImageData;
  width: string;
  height: string;
  name: string;
}

const TecBlock = (props: Props) => {
  const { classes, cx } = useStyles();
  const { image, name } = props;

  return (
    <Grid className={cx(classes.container)}>
      <Image alt="img" src={image} layout="fixed" />
      <Text variant="h5" variantMapping={{ h5: "p" }} name={name} />
    </Grid>
  );
};

export default TecBlock;
