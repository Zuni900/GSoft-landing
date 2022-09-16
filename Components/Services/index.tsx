import React from "react";
import { Grid } from "@mui/material";

import { style } from "./styles";
import Text from "../Typography";
import Block from "../DevelopmentBlock";

// import image from "../../public/images/WebDev.png";

const Services = () => {
  return (
    <Grid container sx={style.container}>
      <Grid container sx={style.text}>
        <Text variant="h5" name="Our 360° Services" sx={{ color: "#001A1F", fontWeight: 600 }} />
      </Grid>
      <Grid container item md={10} sx={style.description}>
        <Block
          image="../../public/images/WebDev.png"
          name1="Web"
          name2="Development"
          description="We offers top-quality development services and uses excellent frameworks to develop user-friendly app interfaces."
        />
        <Block
          image="../../public/images/WebDev.png"
          name1="Backend"
          name2="Development"
          description="We offers top-quality development services and uses excellent frameworks to develop user-friendly app interfaces."
        />
        <Block
          image="../../public/images/WebDev.png"
          name1="Mobile"
          name2="Development"
          description="We offers top-quality development services and uses excellent frameworks to develop user-friendly app interfaces."
        />
        <Block
          image="../../public/images/WebDev.png"
          name1="Web"
          name2="Design"
          description="We offers top-quality development services and uses excellent frameworks to develop user-friendly app interfaces."
        />
      </Grid>
    </Grid>
  );
};

export default Services;
