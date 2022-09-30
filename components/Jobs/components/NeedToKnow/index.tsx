import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

import { useStyles } from "./styles";
import Text from "components/Typography";

import needToKnow from "images/needToKnow.png";
import man from "images/man.png";

const NeedToKnow = () => {
  const { classes, cx } = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      className={cx(classes.container)}
      sx={{
        backgroundImage: `url(${needToKnow?.src})`,
        justifyContent: isMatch ? "flex-start" : "center",
        paddingTop: isMatch ? "40px" : 0,
        paddingBottom: isMatch ? "40px" : 0,
      }}
    >
      <Grid container item md={5} sm={9} xs={7}>
        <Text variant="h2" name="Everything You Need to Know!" />
      </Grid>
      {isMatch ? "" : <Image src={man} alt="image" objectFit="cover" objectPosition="center" />}
    </Grid>
  );
};

export default NeedToKnow;
