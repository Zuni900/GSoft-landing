import React from "react";
import { Grid, TypographyProps } from "@mui/material";

import { useStyles } from "./styles";
import Text from "../../../Typography";
import Header from "../../../Navbar/Header";
import { StaticImageData } from "next/image";

interface Props extends TypographyProps {
  heading: string;
  desc: string;
  image: StaticImageData;
}

const WebDev = (props: Props) => {
  const { heading, desc, image } = props;
  const { classes, cx } = useStyles();

  return (
    <Grid container className={cx(classes.container)} sx={{ backgroundImage: `url(${image?.src})` }}>
      <Grid container>
        <Header />
      </Grid>
      <Grid container item md={10} lg={8} sm={12} xs={12} className={cx(classes.block)}>
        <Text name={heading} variant="h1" />
        <Text variant="subtitle1" variantMapping={{ subtitle1: "p" }} name={desc} />
      </Grid>
    </Grid>
  );
};

export default WebDev;
