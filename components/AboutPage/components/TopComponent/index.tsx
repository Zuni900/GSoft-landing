import React from "react";
import { Grid, TypographyProps } from "@mui/material";
import { StaticImageData } from "next/image";

import { useStyles } from "./styles";
import Text from "components/Typography";
import Header from "components/Navbar/Header";

interface Props extends TypographyProps {
  heading: string;
  desc: string;
  image: StaticImageData;
}

const AboutComponent = (props: Props) => {
  const { heading, desc, image } = props;
  const { classes, cx } = useStyles();

  return (
    <Grid
      container
      className={cx(classes.container)}
      sx={{
        backgroundImage: `url(${image?.src})`,
      }}
    >
      <Grid container>
        <Header />
      </Grid>
      <Grid container item md={9} sm={12} xs={12} className={cx(classes.box)}>
        <Grid container item md={9} className={cx(classes.box)}>
          <Text variant="h1" name={heading} />
          <Text variant="subtitle1" name={desc} variantMapping={{ subtitle1: "p" }} className={cx(classes.text)} />
          <Grid container item md={5} sm={12} xs={12} xl={4} className={cx(classes.button)}>
            <Text
              variant="h6"
              variantMapping={{
                h6: "p",
              }}
              name="Let's discuss your project"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutComponent;
