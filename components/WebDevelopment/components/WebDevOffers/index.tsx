import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

import { useStyles } from "./styles";
import Text from "../../../Typography";
import webDevServices from "../../../../public/images/webDevServices.png";

const Offers = () => {
  const { classes, cx } = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container className={cx(classes.container)}>
      <Grid container item md={12} lg={11} className={cx(classes.block)}>
        <Grid item md={6} lg={6} className={cx(classes.box)}>
          <Text name="Our Services" variantMapping={{ h5: "p" }} variant="h5" />
          <Text variant="h2" name="What We Offer" />
          <Text
            className={cx(classes.text)}
            variant="body1"
            name="We are providing professional services of Website Development as well as Mobile App Development to Enterprises and companies. Global Software Consulting intends to be in front of the client’s needs and delivers modern solutions for modern problems of the client's business from the initial phase of scoping the requirements up to the final delivery, maintenance, and continuous upgrade."
          />
        </Grid>
        {isMatch ? (
          ""
        ) : (
          <Grid container item md={5}>
            <Image src={webDevServices} alt="image" layout="fixed" />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default Offers;
