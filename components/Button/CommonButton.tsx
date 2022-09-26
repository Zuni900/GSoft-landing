import React from "react";
import { Button, ButtonProps, Typography } from "@mui/material";

interface Props extends ButtonProps {
  name: string;
}
const CommonButton = (props: Props) => {
  const { name } = props;
  return (
    <Button {...props}>
      <Typography variant="h6" variantMapping={{ h6: "body1" }}>
        {name}
      </Typography>
    </Button>
  );
};

export default CommonButton;
