import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";

import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import { useStyles } from "./styles";
import Text from "components/Typography";
import Image from "next/image";
import Testimonal from "images/Testimonal.png";
import Card from "@mui/material/Card";
import { Avatar } from "@mui/material";
import { TypographyProps } from "@mui/material";

interface Props extends TypographyProps {
  visible: boolean;
  onClick: () => void;
}

function Testimonial(props: Props) {
  const { classes } = useStyles();
  const { visible, onClick } = props;
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      onClick={onClick}
      className={classes.box}
      style={{
        width: isMatch ? "90vw" : "33vw",
      }}
    >
      <Grid item md={12} sm={12} xs={12} className={classes.grid}>
        <Grid item md={12} sm={12} xs={12} className={classes.gridCard}>
          <Card
            className={classes.card}
            style={{
              background: visible ? theme.palette.error.main : theme.palette.success.dark,
              width: visible ? "96%" : "88%",
              height: visible ? "270px" : "197px",
            }}
          >
            <CardContent>
              <Image src={Testimonal} alt="Card Image" layout="fixed"></Image>
            </CardContent>
            <CardContent>
              <Text
                variantMapping={{ subtitle2: "p" }}
                name="Blend Menu is Progressive Web App which allows your guests to place orders from their smartphones without installing anything. Moreover, it allows users to scan a QR code and order"
                variant="subtitle2"
                className={classes.headerCard}
              />
            </CardContent>
          </Card>
          <Grid className={classes.dot1}></Grid>
          <Grid className={classes.dot2}></Grid>
          <Avatar alt="Name" src="/images/AvatarP.png" className={classes.avatar} />
          <Text name="Marck Jack" variant="overline" className={classes.bottomHeader} />
          <Text name="Ceo" variant="h5" variantMapping={{ h5: "p" }} className={classes.bottomHeader} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Testimonial;
