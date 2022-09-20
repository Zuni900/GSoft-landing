import React from "react";
import { Grid, TypographyProps } from "@mui/material";
import { useStyles } from "./styles";
import Text from "../Typography";
import Image, { StaticImageData } from "next/image";

interface Props extends TypographyProps {
  image: StaticImageData;
  name1: string;
  description: string;
}

const Block = (props: Props) => {
  const { classes, cx } = useStyles();
  const { name1, description, image } = props;

  return (
    <Grid container item sm={6} md={2.5} className={cx(classes.container)}>
      <Grid>
        <Image src={image} alt="image" layout="fixed" />
      </Grid>

      <Grid container className={cx(classes.text)}>
        <Text
          className={cx(classes.styling)}
          variant="h5"
          align="center"
          display="block"
          name={name1}
        />
      </Grid>

      <Grid>
        <Text variant="body1" name={description} />
      </Grid>
    </Grid>
  );
};

export default Block;
