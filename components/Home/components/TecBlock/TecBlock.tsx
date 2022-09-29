import React from "react";
import { Grid, TypographyProps } from "@mui/material";
import Image, { StaticImageData } from "next/image";

import { useStyles } from "./styles";
import Text from "../../../Typography";

interface Props extends TypographyProps {
  image: StaticImageData;
  name: string;
  filter: string;
}

const TecBlock = (props: Props) => {
  const { classes, cx } = useStyles();
  const { image, name, filter } = props;

  return (
    <Grid
      container
      sx={{ marginBottom: "10px", ml: "10px", mr: "10px", justifyContent: "center" }}
      item
      md={2}
      sm={2}
      xs={3}
    >
      <Grid className={cx(classes.container)}>
        <Image alt="img" src={image} layout="fixed" style={{ filter: filter }} />
        <Text variant="h5" variantMapping={{ h5: "p" }} name={name} sx={{ marginTop: "20px" }} />
      </Grid>
    </Grid>
  );
};

export default TecBlock;
