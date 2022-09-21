import React from "react";
import { Grid, TypographyProps } from "@mui/material";
import { useStyles } from "./styles";
import Text from "../Typography";
import Image from "next/image";

interface Props extends TypographyProps {
  image: string;
  name: string;
  description: string;
}

const Block = (props: Props) => {
  const { classes, cx } = useStyles();
  const { name, description, image } = props;

  return (
    <Grid container sm={6} md={2.5} className={cx(classes.container)}>
      <Grid className={cx(classes.img)}>
        <Image src={image} alt="image" height={50} width={50} layout={"fixed"} />

        <Text className={cx(classes.styling)} variant="body1" name={name} />

        <Text variant="subtitle2" name={description} />
      </Grid>
    </Grid>
  );
};

export default Block;
