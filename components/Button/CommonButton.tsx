import React from "react";
import { Button, TypographyProps } from "@mui/material";

interface Props extends TypographyProps {
  name: string;
}
const CommonButton = (props: Props) => {
  const { name } = props;
  return <Button {...props}>{name}</Button>;
};

export default CommonButton;
