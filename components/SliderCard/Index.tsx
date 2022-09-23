import React from "react";
import { Grid } from "@mui/material";

import { useStyles } from "./styles";
import Text from "../Typography";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
function SliderCard() {
  const { classes } = useStyles();
  return (
    <Grid className={classes.mainCardContainer}>
      <Image src="/cardimage/image.png" width="500px" height="500px" layout="fixed"></Image>

      <Grid className={classes.mainCardItems}>
        <Text className={classes.mainCardHeading} name="Blend Menu" />
        <Grid>
          <ArrowForwardIcon className={classes.arrowF} />
          <ArrowBackIcon className={classes.arrowB} />
        </Grid>
      </Grid>
      <Text className={classes.mainSubHeading} name="Mobile Application" />

      <Grid className={classes.mainCardTechonlogies}>
        <Text
          className={classes.mainPara}
          name="Blend Menu is Progressive Web App which allows your guests to place orders from their smartphones without installing anything. Moreover, it allows users to scan a QR code and order, by improving guest experience and reducing costs. It’s multi tenant application which can be deployed for multiple customers(restaurants)"
        />
        <Text className={classes.technologyHeadings} name="React js " />
        <Text className={classes.technologyHeadings} name="React js " />
        <Text className={classes.technologyHeadings} name="NOde js " />
        <Text className={classes.technologyHeadings} name="express js " />
        <Text className={classes.technologyHeadings} name="flutter  " />
        <Text className={classes.technologyHeadings} name="React n " />
        <Text className={classes.technologyHeadings} name="React js " />{" "}
        <Text className={classes.technologyHeadings} name="React js " />
        <Text className={classes.technologyHeadings} name="React js " />
        <Text className={classes.technologyHeadings} name="NOde js " />
        <Text className={classes.technologyHeadings} name="express js " />
        <Text className={classes.technologyHeadings} name="flutter  " />
        <Text className={classes.technologyHeadings} name="React Nativw " />
        <Text className={classes.technologyHeadings} name="React js " />
      </Grid>
    </Grid>
  );
}

export default SliderCard;
