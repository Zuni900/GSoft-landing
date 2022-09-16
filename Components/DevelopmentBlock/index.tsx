import React from "react";
import { Grid, TypographyProps } from "@mui/material";
import { style } from "./styles";
import Text from "../Typography";

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
        <img src={image} alt="image" />
      </Grid>
      <Grid container sx={style.text}>
        <Text variant="body1" name={name1} sx={{ color: "#FFFFFF" }} />
        <Text variant="body1" name={name2} sx={{ color: "#FFFFFF" }} />
      </Grid>

      <Grid>
        <Text variant="subtitle2" name={description} sx={{ color: "#FFFFFF" }} />
      </Grid>
    </Grid>
  );
};

export default Block;
