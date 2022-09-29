import React from "react";
import { Grid, useMediaQuery, useTheme, TypographyProps } from "@mui/material";
import {
  SnapList,
  SnapItem,
  useVisibleElements,
  useScroll,
} from "react-snaplist-carousel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useRef } from "react";

import { useStyles } from "./styles";
import SliderCard from "./Card";
import Text from "../Typography";
import { theme } from "../../styles/theme/defalutTheme";

interface Props extends TypographyProps {
  bgcolor: string;
  color: string;
  hoverbg: string;
  hoverColor: string;
  descColor: string;
}

const PortfolioCard = (props: Props) => {
  const { bgcolor, color, hoverbg, hoverColor, descColor } = props;
  const { classes, cx } = useStyles();

  const [tabIndex, setTabValue] = React.useState(0);
  const themes = useTheme();
  const onChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const isMatch = useMediaQuery(themes.breakpoints.down("sm"));

  const snapList = useRef(null);

  const visible = useVisibleElements(
    { debounce: 10, ref: snapList },
    ([element]) => element
  );
  const goToSnapItem = useScroll({ ref: snapList });

  const TabIndicatorProps = {
    style: {
      color: theme.palette.secondary.light,
      background: theme.palette.secondary.contrastText,
    },
  };
  return (
    <Grid
      container
      className={cx(classes.container)}
      style={{ backgroundColor: bgcolor, color: color }}
    >
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
            TabIndicatorProps={TabIndicatorProps}
            allowScrollButtonsMobile={true}
            variant="scrollable"
            className={cx(classes.tabs)}
          >
            <Tab
              className={cx(classes.tab)}
              label="Web Design"
              style={{
                color: color,
              }}
            />
            <Tab
              className={cx(classes.tab)}
              style={{
                color: color,
              }}
              label="Mobile App"
            />
            <Tab
              className={cx(classes.tab)}
              label="Web App"
              style={{
                color: color,
              }}
            />
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
              visible={visible === index || isMatch}
              isMatch={isMatch}
              index={index}
              last={index == 3}
              hoverbg={hoverbg}
              hoverColor={hoverColor}
              descColor={descColor}
            />
          </SnapItem>
        ))}
      </SnapList>
    </Grid>
  );
};

export default PortfolioCard;
