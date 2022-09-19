import React from "react";
import { Grid, TypographyProps } from "@mui/material";
import { style } from "./styles";
import Text from "../Typography";
import Image from "next/image";

interface Props extends TypographyProps {
  image: string;
  name1: string;
  name2: string;
  description: string;
}

const Block = (props: Props) => {
  const { name1, name2, description, image } = props;
  return (
    <Grid container md={2.5} sx={style.container}>
      <Grid>
        <Image src={image} alt="image" width={80} height={80} />
      </Grid>
      <Grid container sx={style.text}>
        <Text sx={style.styling} variant="body1" name={name1} />
        <Text sx={style.styling} variant="body1" name={name2} />
      </Grid>

      <Grid>
        <Text sx={style.color} variant="subtitle2" name={description} />
      </Grid>
    </Grid>
  );
};

export default Block;
