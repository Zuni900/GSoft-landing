import React, { useRef } from "react";
import { Grid, useTheme, useMediaQuery } from "@mui/material";
import { SnapList, SnapItem, useVisibleElements, useScroll } from "react-snaplist-carousel";

import { useStyles } from "./styles";
import Card from "./Card";
import Text from "components/Typography";

const Technologies = () => {
  const { classes, cx } = useStyles();

  const snapList = useRef(null);

  const visible = useVisibleElements({ debounce: 10, ref: snapList }, ([element]) => element);
  const goToSnapItem = useScroll({ ref: snapList });
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container className={cx(classes.container)}>
      <Grid container item md={10} sm={12} xs={12} className={cx(classes.box)}>
        <Text
          variant="h5"
          variantMapping={{
            h5: "h1",
          }}
          name="Testimonials"
          textAlign={"center"}
          color={theme.palette.secondary.light}
        />
        <Text variant="h2" name="What Our Clients Say" color={theme.palette.secondary.light} />
      </Grid>
      <SnapList direction={"horizontal"} ref={snapList}>
        {[0, 0, 0, 0, 0].map((_, index) => (
          <SnapItem
            key={index}
            margin={{
              left: index == 0 && isMatch ? "5vw" : index == 0 ? "30vw" : "0px",
              right: index == 3 && isMatch ? "5vw" : index == 3 ? "30vw" : "0px",
            }}
            snapAlign="center"
          >
            <Card visible={visible === index || isMatch} onClick={() => goToSnapItem(index)} />
          </SnapItem>
        ))}
      </SnapList>
    </Grid>
  );
};

export default Technologies;
