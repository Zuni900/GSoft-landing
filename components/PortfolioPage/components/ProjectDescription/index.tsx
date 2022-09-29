import React from "react";
import { Grid, TypographyProps } from "@mui/material";
import Image, { StaticImageData } from "next/image";

import { useStyles } from "./styles";
import Text from "../../../Typography";

interface Props extends TypographyProps {
  image: StaticImageData;
  text: object;
}

const MenuComponent = (props: Props) => {
  const { image, text } = props;
  const { classes, cx } = useStyles();

  return (
    <Grid container item md={3.85} className={cx(classes.container)}>
      <Grid container className={cx(classes.style)}>
        <Image src={image} alt="image" objectFit="cover" objectPosition="center" />
      </Grid>
      <Grid className={cx(classes.box)}>
        <Text variant="h3" name="Blend Menu" variantMapping={{ h3: "h1" }} />
        <Text variant="h5" name="Mobile Application" variantMapping={{ h5: "p" }} className={cx(classes.text)} />
      </Grid>
      <Text
        className={cx(classes.desc)}
        variant="body1"
        name="Blend Menu is Progressive Web App which allows your guests to place orders from their smartphones without installing anything. Moreover, it allows users to scan a QR code and order"
      />
      <Grid container className={cx(classes.style)}>
        {text}
      </Grid>
    </Grid>
  );
};

export default MenuComponent;
