import React from "react";
import { Grid } from "@mui/material";

import { style } from "./styles";
import Text from "../Typography";

const About = () => {
  return (
    <Grid container item md={12} sm={12} sx={style.container}>
      <Grid container item md={12} sm={12} sx={style.text}>
        <Text variant="subtitle2" name="Who We Are" sx={style.styling} />
      </Grid>

      <Grid container item md={12} sm={12} sx={style.text}>
        <Text variant="h5" name="About Company" sx={style.styling} />
      </Grid>

      <Grid container item md={6.5} sm={6} sx={style.description}>
        <Text
          sx={style.color}
          variant="subtitle2"
          name="We are providing professional services of Website Development as well as Mobile App Development to Enterprises and companies. Global Software Consulting intends to be in front of the client’s needs and delivers modern solutions for modern problems of the client's business from the initial phase of scoping the requirements up to the final delivery, maintenance, and continuous upgrade."
        />
      </Grid>
    </Grid>
  );
};

export default About;
