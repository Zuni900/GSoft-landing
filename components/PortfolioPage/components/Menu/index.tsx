import React from "react";
import { Grid } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { useStyles } from "./styles";
import MenuComponent from "../MenuComponent";
import menu1 from "../../../../public/images/menu1.png";
import menu2 from "../../../../public/images/menu2.png";
import menu3 from "../../../../public/images/menu3.png";
import Text from "../../../Typography";

const Menu = () => {
  const { classes, cx } = useStyles();
  const [tabIndex, setTabValue] = React.useState(0);

  const onChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const TabIndicatorProps = {
    style: {
      display: "none",
    },
  };

  return (
    <Grid container className={cx(classes.container)}>
      <Grid container item md={12} sm={12} xs={12} className={cx(classes.tabsGrid)}>
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
      <Grid container item md={10.5} sm={9} xs={12} className={cx(classes.box)}>
        <MenuComponent
          image={menu1}
          text={
            <Grid container item md={9} xs={12} sm={12} className={cx(classes.txtGrid)}>
              <Text variant="caption" name="React js" className={cx(classes.tag)} />
              <Text variant="caption" name="Next js" className={cx(classes.tag)} />
              <Text variant="caption" name="Nest js" className={cx(classes.tag)} />
            </Grid>
          }
        />
        <MenuComponent
          image={menu2}
          text={
            <Grid container item md={12} xs={12} sm={12} className={cx(classes.txtGrid)}>
              <Text variant="caption" name="React Native" className={cx(classes.tag)} />
              <Text variant="caption" name="React js" className={cx(classes.tag)} />
              <Text variant="caption" name="Next js" className={cx(classes.tag)} />
              <Text variant="caption" name="Nest js" className={cx(classes.tag)} />
              <Text variant="caption" name="MYSQL" className={cx(classes.tag)} />
              <Text variant="caption" name="Mongose" className={cx(classes.tag)} />
              <Text variant="caption" name="React Gatsby" className={cx(classes.tag)} />
              <Text variant="caption" name="Node js" className={cx(classes.tag)} />
            </Grid>
          }
        />
        <MenuComponent
          image={menu3}
          text={
            <Grid container item md={10} xs={12} sm={12} className={cx(classes.txtGrid)}>
              <Text variant="caption" name="React Native" className={cx(classes.tag)} />
              <Text variant="caption" name="React js" className={cx(classes.tag)} />
              <Text variant="caption" name="Next js" className={cx(classes.tag)} />
              <Text variant="caption" name="Nest js" className={cx(classes.tag)} />
              <Text variant="caption" name="MYSQL" className={cx(classes.tag)} />
              <Text variant="caption" name="Mongose" className={cx(classes.tag)} />
            </Grid>
          }
        />
        <MenuComponent
          image={menu1}
          text={
            <Grid container item md={9} xs={12} sm={12} className={cx(classes.txtGrid)}>
              <Text variant="caption" name="React js" className={cx(classes.tag)} />
              <Text variant="caption" name="Next js" className={cx(classes.tag)} />
              <Text variant="caption" name="Nest js" className={cx(classes.tag)} />
            </Grid>
          }
        />
        <MenuComponent
          image={menu2}
          text={
            <Grid container item md={10} xs={12} sm={12} className={cx(classes.txtGrid)}>
              <Text variant="caption" name="React Native" className={cx(classes.tag)} />
              <Text variant="caption" name="React js" className={cx(classes.tag)} />
              <Text variant="caption" name="Next js" className={cx(classes.tag)} />
              <Text variant="caption" name="Nest js" className={cx(classes.tag)} />
              <Text variant="caption" name="MYSQL" className={cx(classes.tag)} />
              <Text variant="caption" name="Mongose" className={cx(classes.tag)} />
              <Text variant="caption" name="React Gatsby" className={cx(classes.tag)} />
              <Text variant="caption" name="Node js" className={cx(classes.tag)} />
            </Grid>
          }
        />
        <MenuComponent
          image={menu3}
          text={
            <Grid container item md={10} xs={12} sm={12} className={cx(classes.txtGrid)}>
              <Text variant="caption" name="React Native" className={cx(classes.tag)} />
              <Text variant="caption" name="React js" className={cx(classes.tag)} />
              <Text variant="caption" name="Next js" className={cx(classes.tag)} />
              <Text variant="caption" name="Nest js" className={cx(classes.tag)} />
              <Text variant="caption" name="MYSQL" className={cx(classes.tag)} />
              <Text variant="caption" name="Mongose" className={cx(classes.tag)} />
            </Grid>
          }
        />
        <MenuComponent
          image={menu1}
          text={
            <Grid container item md={9} xs={12} sm={12} className={cx(classes.txtGrid)}>
              <Text variant="caption" name="React js" className={cx(classes.tag)} />
              <Text variant="caption" name="Next js" className={cx(classes.tag)} />
              <Text variant="caption" name="Nest js" className={cx(classes.tag)} />
            </Grid>
          }
        />
        <MenuComponent
          image={menu2}
          text={
            <Grid container item md={10} xs={12} sm={12} className={cx(classes.txtGrid)}>
              <Text variant="caption" name="React Native" className={cx(classes.tag)} />
              <Text variant="caption" name="React js" className={cx(classes.tag)} />
              <Text variant="caption" name="Next js" className={cx(classes.tag)} />
              <Text variant="caption" name="Nest js" className={cx(classes.tag)} />
              <Text variant="caption" name="MYSQL" className={cx(classes.tag)} />
              <Text variant="caption" name="Mongose" className={cx(classes.tag)} />
              <Text variant="caption" name="React Gatsby" className={cx(classes.tag)} />
              <Text variant="caption" name="Node js" className={cx(classes.tag)} />
            </Grid>
          }
        />
        <MenuComponent
          image={menu3}
          text={
            <Grid container item md={10} xs={12} sm={12} className={cx(classes.txtGrid)}>
              <Text variant="caption" name="React Native" className={cx(classes.tag)} />
              <Text variant="caption" name="React js" className={cx(classes.tag)} />
              <Text variant="caption" name="Next js" className={cx(classes.tag)} />
              <Text variant="caption" name="Nest js" className={cx(classes.tag)} />
              <Text variant="caption" name="MYSQL" className={cx(classes.tag)} />
              <Text variant="caption" name="Mongose" className={cx(classes.tag)} />
            </Grid>
          }
        />
        <MenuComponent
          image={menu1}
          text={
            <Grid container item md={9} xs={12} sm={12} className={cx(classes.txtGrid)}>
              <Text variant="caption" name="React js" className={cx(classes.tag)} />
              <Text variant="caption" name="Next js" className={cx(classes.tag)} />
              <Text variant="caption" name="Nest js" className={cx(classes.tag)} />
            </Grid>
          }
        />
        <MenuComponent
          image={menu2}
          text={
            <Grid container item md={10} xs={12} sm={12} className={cx(classes.txtGrid)}>
              <Text variant="caption" name="React Native" className={cx(classes.tag)} />
              <Text variant="caption" name="React js" className={cx(classes.tag)} />
              <Text variant="caption" name="Next js" className={cx(classes.tag)} />
              <Text variant="caption" name="Nest js" className={cx(classes.tag)} />
              <Text variant="caption" name="MYSQL" className={cx(classes.tag)} />
              <Text variant="caption" name="Mongose" className={cx(classes.tag)} />
              <Text variant="caption" name="React Gatsby" className={cx(classes.tag)} />
              <Text variant="caption" name="Node js" className={cx(classes.tag)} />
            </Grid>
          }
        />
        <MenuComponent
          image={menu3}
          text={
            <Grid container item md={10} xs={12} sm={12} className={cx(classes.txtGrid)}>
              <Text variant="caption" name="React Native" className={cx(classes.tag)} />
              <Text variant="caption" name="React js" className={cx(classes.tag)} />
              <Text variant="caption" name="Next js" className={cx(classes.tag)} />
              <Text variant="caption" name="Nest js" className={cx(classes.tag)} />
              <Text variant="caption" name="MYSQL" className={cx(classes.tag)} />
              <Text variant="caption" name="Mongose" className={cx(classes.tag)} />
            </Grid>
          }
        />
      </Grid>
    </Grid>
  );
};

export default Menu;
