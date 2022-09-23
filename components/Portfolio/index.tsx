import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
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
} from "react-snaplist-carousel";
import SliderCard from "./Card";

const PortfolioCard = () => {
  const { classes, cx } = useStyles();
  const [tabIndex, setTabValue] = React.useState(0);
  const theme = useTheme();
  const onChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  const snapList = useRef(null);

  const visible = useVisibleElements(
    { debounce: 10, ref: snapList },
    ([element]) => element
  );
  const goToSnapItem = useScroll({ ref: snapList });

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
      <SnapList ref={snapList} direction={"horizontal"}>
        {[0, 0, 0, 0].map((_, index) => (
          <SnapItem
            key={index}
            margin={{
              left:
                index == 0 && isMatch ? "5vw" : index == 0 ? "30vw" : "15px",
              right:
                index == 3 && isMatch ? "5vw" : index == 3 ? "30vw" : "15px",
            }}
            snapAlign="center"
          >
            <SliderCard
              onClick={goToSnapItem}
              visible={visible === index}
              isMatch={isMatch}
              index={index}
              last={index == 3}
            />
          </SnapItem>
        ))}
      </SnapList>
    </Grid>
  );
};

export default PortfolioCard;
