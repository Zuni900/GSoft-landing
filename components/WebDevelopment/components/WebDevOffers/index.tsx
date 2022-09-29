import React from "react";
import { Grid, useMediaQuery, useTheme, TypographyProps } from "@mui/material";
import Image, { StaticImageData } from "next/image";

import { useStyles } from "./styles";
import Text from "components/Typography";

interface Props extends TypographyProps {
  topHeading: string;
  heading: string;
  desc: string;
  image: StaticImageData;
}

const Offers = (props: Props) => {
  const { topHeading, heading, desc, image } = props;
  const { classes, cx } = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container className={cx(classes.container)}>
      <Grid container item md={12} lg={11} className={cx(classes.block)}>
        <Grid item md={6} lg={6} className={cx(classes.box)}>
          <Text name={topHeading} variantMapping={{ h5: "p" }} variant="h5" />
          <Text variant="h2" name={heading} />
          <Text className={cx(classes.text)} variant="body1" name={desc} />
        </Grid>
        {isMatch ? (
          ""
        ) : (
          <Grid container item md={5}>
            <Image src={image} alt="image" layout="fixed" />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default Offers;
