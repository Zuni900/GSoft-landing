import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface Props extends ButtonProps {
  name: string;
}
const CommonButton = (props: Props) => {
  const { name } = props;
  return <Button {...props}>{name}</Button>;
};

export default CommonButton;
