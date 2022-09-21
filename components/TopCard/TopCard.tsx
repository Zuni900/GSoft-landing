import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

import Text from "../Typography";
import { useStyles } from "./styles";
import CommonButton from "../Button/CommonButton";
import amico from "../../public/images/amico.png";
import Header from "../Navbar/Header";

const TopCard = () => {
  const theme = useTheme();
  const { classes, cx } = useStyles();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Grid container item md={12} sm={12} xs={12} className={cx(classes.container)}>
      <Header />
      <Grid item md={10.5} sm={12} xs={12} className={cx(classes.box)}>
        <Grid item md={12} sm={12} xs={12}>
          <Grid container item md={12} sm={12} xs={12} className={cx(classes.typo)}>
            <Text variant="h1" name="We're" />
            <Text className={cx(classes.gsoft)} variant="h1" name=" Gsoft," />
          </Grid>

          <Text variant="h1" name="Best Digital Partner" />

          <Text
            variant="subtitle1"
            className={cx(classes.desc)}
            name="Fast, secure, stunning websites & Web Apps at unbeatable prices."
          />

          <Grid container item md={7} sm={12} xs={12} className={cx(classes.button)}>
            <Text variant="h6" name="Let's discuss your project" />
          </Grid>
        </Grid>

        {!isMatch ? (
          <Grid md={4.5} sx={{ marginLeft: "5px", marginTop: "51px" }}>
            <Image src={amico} alt="image" width="404.21px" height="379.14px" layout={"fixed"} />
          </Grid>
        ) : (
          ""
        )}
      </Grid>
    </Grid>
  );
};

export default TopCard;
