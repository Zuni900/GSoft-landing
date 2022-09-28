import React from "react";
import { Grid } from "@mui/material";

import { useStyles } from "./styles";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import CardI from "images/CardI.png";
import Text from "../../Typography";

interface Props {
  isMatch: boolean;
  visible: boolean;
  onClick: (value: number) => void;
  index: number;
  last: boolean;
  hoverbg: string;
  hoverColor: string;
  descColor: string;
}
function SliderCard(props: Props) {
  const { isMatch, visible, onClick, index, last, hoverbg, hoverColor, descColor } = props;
  const { classes } = useStyles();

  const goToNext = () => {
    onClick(index + 1);
  };
  const goToPrv = () => {
    onClick(index - 1);
  };
  return (
    <Grid
      className={classes.mainCardContainer}
      style={{
        width: isMatch ? "90vw" : "40vw",
        cursor: visible ? "default" : "pointer",
      }}
    >
      <Image src={CardI} alt={index.toString()} objectFit="cover" objectPosition="center" />
      {visible && (
        <>
          <Grid className={classes.mainCardItems}>
            <Text variant="h3" variantMapping={{ h3: "h1" }} name="Blend Menu" />
            <Grid
              item
              container
              style={{
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
              md={6}
            >
              {index != 0 && (
                <ArrowBackIcon
                  onClick={goToPrv}
                  className={classes.arrowB}
                  sx={{
                    "&:hover": {
                      background: hoverbg,
                      color: hoverColor,
                    },
                  }}
                />
              )}
              {!last && (
                <ArrowForwardIcon
                  onClick={goToNext}
                  className={classes.arrowF}
                  sx={{
                    "&:hover": {
                      background: hoverbg,
                      color: hoverColor,
                    },
                  }}
                />
              )}
            </Grid>
          </Grid>
          <Text
            variant="h5"
            variantMapping={{ h5: "p" }}
            className={classes.mainSubHeading}
            name="Mobile Application"
          />

          <Grid className={classes.mainCardTechnologies}>
            <Text
              variant="body1"
              variantMapping={{ body1: "p" }}
              className={classes.mainPara}
              sx={{
                color: descColor,
              }}
              name="Blend Menu is Progressive Web App which allows your guests to place orders from their smartphones without installing anything. Moreover, it allows users to scan a QR code and order, by improving guest experience and reducing costs. It’s multi tenant application which can be deployed for multiple customers(restaurants)"
            />
            <Text className={classes.technologyHeadings} variant={"body2"} name="React js " />
            <Text className={classes.technologyHeadings} variant={"body2"} name="React js " />
            <Text className={classes.technologyHeadings} variant={"body2"} name="React js " />
          </Grid>
        </>
      )}
    </Grid>
  );
}

export default SliderCard;
