import React from "react";
import { Grid, useTheme } from "@mui/material";

import Text from "components/Typography";
import { useStyles } from "./styles";
import { useRef } from "react";

import {
  SnapList,
  SnapItem,
  useVisibleElements,
  useScroll,
} from "react-snaplist-carousel";
import Card from "./Card";
const MyItem = ({
  onClick,
  children,
  visible,
}: {
  onClick: () => void;
  children: React.ReactNode;
  visible: boolean;
}) => (
  <Grid
    item
    xs={12}
    md={12}
    sm={12}
    style={{
      width: "40vw",

      background: visible ? "#bce6fe" : "#cccccc",
      cursor: visible ? "default" : "pointer",
    }}
    onClick={onClick}
  >
    {children}
  </Grid>
);
const Technologies = () => {
  const { classes, cx } = useStyles();

  const snapList = useRef(null);

  const visible = useVisibleElements(
    { debounce: 10, ref: snapList },
    ([element]) => element
  );
  const goToSnapItem = useScroll({ ref: snapList });
  const theme = useTheme();

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
        <Text
          variant="h2"
          name="What Our Clients Say"
          color={theme.palette.secondary.light}
        />
      </Grid>
      <SnapList direction={"horizontal"} ref={snapList}>
        <SnapItem margin={{ left: "30vw", right: "15px" }} snapAlign="center">
          <MyItem onClick={() => goToSnapItem(0)} visible={visible === 0}>
            <Card />
          </MyItem>
        </SnapItem>
        <SnapItem margin={{ left: "15px", right: "15px" }} snapAlign="center">
          <MyItem onClick={() => goToSnapItem(1)} visible={visible === 1}>
            <Card />
          </MyItem>
        </SnapItem>
        <SnapItem margin={{ left: "15px", right: "15px" }} snapAlign="center">
          <MyItem onClick={() => goToSnapItem(2)} visible={visible === 2}>
            <Card />
          </MyItem>
        </SnapItem>
        <SnapItem margin={{ left: "15px", right: "15px" }} snapAlign="center">
          <MyItem onClick={() => goToSnapItem(3)} visible={visible === 3}>
            <Card />
          </MyItem>
        </SnapItem>
        <SnapItem margin={{ left: "15px", right: "30vw" }} snapAlign="center">
          <MyItem onClick={() => goToSnapItem(4)} visible={visible === 4}>
            <Card />
          </MyItem>
        </SnapItem>
      </SnapList>
    </Grid>
  );
};

export default Technologies;
