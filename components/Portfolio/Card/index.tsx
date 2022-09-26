import React from "react";
import { Grid } from "@mui/material";

import { useStyles } from "./styles";
import Text from "components/Typography";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import CardI from "images/CardI.png";
interface Props {
  isMatch: boolean;
  visible: boolean;
  onClick: (value: number) => void;
  index: number;
  last: boolean;
}
function SliderCard(props: Props) {
  const { isMatch, visible, onClick, index, last } = props;
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
      <Image
        src={CardI}
        alt={index.toString()}
   
        priority
        objectPosition="center"
      
      
      />
      {visible && (
        <>
          <Grid className={classes.mainCardItems}>
            <Text
              variant="h3"
              variantMapping={{ h3: "h1" }}
              className={classes.mainCardHeading}
              name="Blend Menu"
            />
            <Grid
              item
              container
              style={{
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
              md={6}
            >
              {!last && (
                <ArrowForwardIcon
                  onClick={goToNext}
                  className={classes.arrowF}
                />
              )}
              {index != 0 && (
                <ArrowBackIcon onClick={goToPrv} className={classes.arrowB} />
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
              variant="h6"
              variantMapping={{ h6: "p" }}
              className={classes.mainPara}
              name="Blend Menu is Progressive Web App which allows your guests to place orders from their smartphones without installing anything. Moreover, it allows users to scan a QR code and order, by improving guest experience and reducing costs. It’s multi tenant application which can be deployed for multiple customers(restaurants)"
            />
            <Text
              className={classes.technologyHeadings}
              variant={"body2"}
              name="React js "
            />
            <Text
              className={classes.technologyHeadings}
              variant={"body2"}
              name="React js "
            />
            <Text
              className={classes.technologyHeadings}
              variant={"body2"}
              name="React js "
            />
          </Grid>
        </>
      )}
    </Grid>
  );
}

export default SliderCard;
