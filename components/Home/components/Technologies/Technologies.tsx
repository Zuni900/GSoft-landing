import React from "react";
import { Grid, useTheme, TypographyProps, useMediaQuery } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Text from "../../../Typography";
import { useStyles } from "./styles";
import TecBlock from "../TecBlock/TecBlock";

import node from "images/node.png";
import strapi from "images/strapi.png";
import ts from "images/ts.png";
import express from "images/express.png";
import nest from "images/nest.png";

interface Props extends TypographyProps {
  bgcolor: string;
  color: string;
  filter: string;
  tabColor: string;
}

const Technologies = (props: Props) => {
  const { bgcolor, color, filter, tabColor } = props;
  const { classes, cx } = useStyles({ tabColor });
  const [tabIndex, setTabValue] = React.useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const onChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  const TabIndicatorProps = {
    style: {
      color: theme.palette.secondary.light,
      backgroundColor: theme.palette.secondary.contrastText,
    },
  };
  return (
    <Grid container className={cx(classes.container)} style={{ backgroundColor: bgcolor, color: color }}>
      <Grid container item md={10} sm={12} xs={12} className={cx(classes.box)}>
        <Grid container item md={12} sm={8} xs={8} className={cx(classes.text)}>
          <Text variant="h2" name="Technologies We Work With" />
        </Grid>

        <Grid container item md={12} sm={12} xs={12} className={cx(classes.text)}>
          <Tabs
            value={tabIndex}
            onChange={onChangeTab}
            textColor="secondary"
            TabIndicatorProps={TabIndicatorProps}
            variant="scrollable"
            className={cx(classes.tabs)}
          >
            <Tab className={cx(classes.tab)} label="Front end" />
            <Tab className={cx(classes.tab)} label="Backend" />
            <Tab className={cx(classes.tab)} label="Mobile" />
            <Tab className={cx(classes.tab)} label="Database" />
            <Tab className={cx(classes.tab)} label="CMS" />
            <Tab className={cx(classes.tab)} label="Infra and devops" />
          </Tabs>
        </Grid>

        <Grid
          container
          item
          md={10}
          sm={12}
          xs={12}
          className={cx(classes.tec)}
          style={{ justifyContent: isMatch ? "flex-start" : "center" }}
        >
          <TecBlock image={node} name="Node js" filter={filter} />
          <TecBlock image={strapi} name="Strapi" filter={filter} />
          <TecBlock image={ts} name="Typescript" filter={filter} />
          <TecBlock image={express} name="Express" filter={filter} />
          <TecBlock image={nest} name="Nest" filter={filter} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Technologies;
