import React from "react";
import { Grid } from "@mui/material";

import { useStyles } from "./styles";
import Text from "../../../Typography";

const WebDevServices = () => {
  const { classes, cx } = useStyles();

  return (
    <Grid container className={cx(classes.container)}>
      <Grid item md={10} lg={9} sm={12} xs={12} className={cx(classes.box)}>
        <Text name="Our Services" variant="h5" variantMapping={{ h5: "p" }} />
        <Text variant="h2" name="We Provide Web Development Service" />
        <Text
          className={cx(classes.text)}
          variant="body1"
          name="We are providing professional services of Website Development as well as Mobile App Development to Enterprises and companies. Global Software Consulting intends to be in front of the client’s needs and delivers modern solutions for modern problems of the client's business from the initial phase of scoping the requirements up to the final delivery, maintenance, and continuous upgrade."
        />
      </Grid>
    </Grid>
  );
};

export default WebDevServices;
