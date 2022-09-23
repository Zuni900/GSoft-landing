import React from "react";
import { Grid, useTheme } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Text from "components/Typography";
import { useStyles } from "./styles";
import { useRef } from "react";

import {
  SnapList,
  SnapItem,
  useVisibleElements,
  useScroll,
  useDragToScroll,
  isTouchDevice,
} from "react-snaplist-carousel";

const MyItem = ({ onClick, children, visible }) => (
  <Grid
    item
    xs={12}
    md={12}
    sm={12}
    style={{
      width: "60vw",
      height: 200,
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
  const [tabIndex, setTabValue] = React.useState(0);
  const theme = useTheme();
  const onChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  const snapList = useRef(null);

  const visible = useVisibleElements(
    { debounce: 10, ref: snapList },
    ([element]) => element
  );
  const goToSnapItem = useScroll({ ref: snapList });
  const { isDragging } = useDragToScroll({ ref: snapList });

  const TabIndicatorProps = {
    style: {
      color: theme.palette.secondary.light,
      backgroundColor: theme.palette.secondary.contrastText,
    },
  };
  return (
    <Grid container className={cx(classes.container)}>
      <Grid container item md={10} sm={12} xs={12} className={cx(classes.box)}>
        <Text
          variant="h5"
          variantMapping={{
            h5: "h1",
          }}
          name="Our Work"
          textAlign={"center"}
        />
        <Text variant="h2" name="Portfolio" />

        <Grid
          container
          item
          md={12}
          sm={12}
          xs={12}
          className={cx(classes.text)}
        >
          <Tabs
            value={tabIndex}
            onChange={onChangeTab}
            textColor="secondary"
            TabIndicatorProps={TabIndicatorProps}
            variant="scrollable"
            className={cx(classes.tabs)}
          >
            <Tab className={cx(classes.tab)} label="Web Design" />
            <Tab className={cx(classes.tab)} label="Mobile App" />
            <Tab className={cx(classes.tab)} label="Web App" />
          </Tabs>
        </Grid>
      </Grid>
      <SnapList ref={snapList}>
        <SnapItem margin={{ left: "20vw", right: "15px" }} snapAlign="center">
          <MyItem onClick={() => goToSnapItem(0)} visible={visible === 0}>
            Item 0
          </MyItem>
        </SnapItem>
        <SnapItem margin={{ left: "15px", right: "15px" }} snapAlign="center">
          <MyItem onClick={() => goToSnapItem(1)} visible={visible === 1}>
            Item 1
          </MyItem>
        </SnapItem>
        <SnapItem margin={{ left: "15px", right: "15px" }} snapAlign="center">
          <MyItem onClick={() => goToSnapItem(2)} visible={visible === 2}>
            Item 2
          </MyItem>
        </SnapItem>
        <SnapItem margin={{ left: "15px", right: "15px" }} snapAlign="center">
          <MyItem onClick={() => goToSnapItem(3)} visible={visible === 3}>
            Item 3
          </MyItem>
        </SnapItem>
        <SnapItem margin={{ left: "15px", right: "20vw" }} snapAlign="center">
          <MyItem onClick={() => goToSnapItem(4)} visible={visible === 4}>
            Item 4
          </MyItem>
        </SnapItem>
      </SnapList>
    </Grid>
  );
};

export default Technologies;
