import React from "react";
import { Grid, useMediaQuery, useTheme, Typography } from "@mui/material";
import Image from "next/image";

import Text from "../Typography";
import { useStyles } from "./styles";
import amico from "../../public/images/amico.png";
import Header from "../Navbar/Header";

const TopCard = () => {
  const theme = useTheme();
  const { classes, cx } = useStyles();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Grid
      container
      item
      md={12}
      sm={12}
      xs={12}
      className={cx(classes.container)}
    >
      <Header />
      <Grid item md={10.5} sm={12} xs={12} className={cx(classes.box)}>
        <Grid item md={12} sm={12} xs={12}>
          <Grid
            container
            item
            md={12}
            sm={12}
            xs={12}
            className={cx(classes.typo)}
          >
            <Typography variant="h1">
              {"We're "}
              <Typography
                className={cx(classes.gsoft)}
                variant="h1"
                variantMapping={{ h1: "span" }}
              >
                Gsoft
              </Typography>
              <br></br>Best Digital Partner
            </Typography>
          </Grid>

          <Text
            variant="subtitle1"
            variantMapping={{
              subtitle1: "p",
            }}
            className={cx(classes.desc)}
            name="Fast, secure, stunning websites & Web Apps at unbeatable prices."
          />

          <Grid
            container
            item
            md={7}
            sm={12}
            xs={12}
            xl={4}
            className={cx(classes.button)}
          >
            <Text
              variant="h6"
              variantMapping={{
                h6: "p",
              }}
              name="Let's discuss your project"
            />
          </Grid>
        </Grid>

        {!isMatch && (
          <Grid item md={4.5}>
            <Image
              src={amico}
              alt="image"
              width="404.21px"
              height="379.14px"
              layout={"fixed"}
            />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default TopCard;
