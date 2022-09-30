import React from "react";
import { Grid, TypographyProps } from "@mui/material";
import Image, { StaticImageData } from "next/image";

import { useStyles } from "./styles";
import Text from "components/Typography";

interface Props extends TypographyProps {
  image: StaticImageData;
  name: string;
  title: string;
  desc: string;
}

const LeadershipComponent = (props: Props) => {
  const { image, name, title, desc } = props;
  const { classes, cx } = useStyles();

  return (
    <Grid container item md={3.85} sm={5.5} xs={12} className={cx(classes.container)}>
      <Grid className={cx(classes.box)}>
        <Image src={image} alt="image" layout="fixed" />
        <Grid className={cx(classes.text)}>
          <Text name={name} variant="h4" variantMapping={{ h4: "p" }} />
          <Text name={title} variant="h5" variantMapping={{ h5: "p" }} className={cx(classes.title)} />
        </Grid>
      </Grid>
      <Text name={desc} variant="h6" variantMapping={{ h6: "p" }} className={cx(classes.desc)} />
    </Grid>
  );
};

export default LeadershipComponent;
