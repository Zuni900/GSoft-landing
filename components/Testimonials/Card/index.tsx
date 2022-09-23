import React from "react";
import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import { useStyles } from "./styles";
import Text from "components/Typography";
import Image from "next/image";
import Testimonal from "images/Testimonal.png";
import Card from "@mui/material/Card";
import { Avatar } from "@mui/material";

function Testimonial() {
  const { classes } = useStyles();

  return (
    <Box className={classes.box}>
      <Grid item md={12} sm={12} xs={12} className={classes.grid}>
        <Grid item md={12} sm={12} xs={12} className={classes.gridCard}>
          <Card className={classes.card}>
            <CardContent>
              <Image
                src={Testimonal}
                alt="Card Image"
                width="200"
                height="170"
              ></Image>
            </CardContent>
            <CardContent>
              <Text
                name="Blend Menu is Progressive Web App which allows your guests to place orders from their smartphones without installing anything. Moreover, it allows users to scan a QR code and order"
                variant="caption"
                className={classes.headerCard}
              />
            </CardContent>
          </Card>
          <Grid className={classes.dot1}></Grid>
          <Grid className={classes.dot2}></Grid>
          <Avatar
            alt="Name"
            src="/images/AvatarP.png"
            className={classes.avatar}
          />
          <Text
            name="Marck Jack"
            variant="overline"
            className={classes.bottomHeader}
          />
          <Text
            name="Ceo"
            variant="subtitle2"
            variantMapping={{ subtitle2: "p" }}
            className={classes.bottomHeader}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Testimonial;
