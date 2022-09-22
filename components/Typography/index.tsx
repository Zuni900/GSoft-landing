import React from "react";
import { Typography, TypographyProps } from "@mui/material";

interface Props extends TypographyProps {
  name: string;
}

const Text = (props: Props) => {
  const { name } = props;
  return <Typography {...props}>{name}</Typography>;
};

export default Text;
