import React from "react";
import { Grid, useTheme } from "@mui/material";
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

const Technologies = () => {
  const { classes, cx } = useStyles();
  const [tabIndex, setTabValue] = React.useState(0);
  const theme = useTheme();
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
    <Grid container className={cx(classes.container)}>
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

        <Grid container item md={10} sm={10} xs={8} className={cx(classes.tec)}>
          <TecBlock image={node} width="86px" height="24px" name="Node js" />
          <TecBlock image={strapi} width="48px" height="48px" name="Strapi" />
          <TecBlock image={ts} width="48px" height="48px" name="Typescript" />
          <TecBlock image={express} width="48px" height="48px" name="Express" />
          <TecBlock image={nest} width="48px" height="48px" name="Nest" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Technologies;
