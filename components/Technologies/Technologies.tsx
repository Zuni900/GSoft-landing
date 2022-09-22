import React from "react";
import { Grid, useTheme } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Text from "../Typography";
import { useStyles } from "./styles";
import TecBlock from "../TecBlock/TecBlock";

import node from "../../public/images/node.png";
import strapi from "../../public/images/strapi.png";
import ts from "../../public/images/ts.png";
import express from "../../public/images/express.png";
import nest from "../../public/images/nest.png";

const Technologies = () => {
  const { classes, cx } = useStyles();
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container className={cx(classes.container)}>
      <Grid container item md={10} sm={12} xs={12} className={cx(classes.box)}>
        <Grid container item md={12} sm={8} xs={8} className={cx(classes.text)}>
          <Text variant="h2" name="Technologies We Work With" />
        </Grid>

        <Grid
          container
          item
          md={12}
          sm={12}
          xs={12}
          className={cx(classes.text)}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            TabIndicatorProps={{
              style: {
                color: "white",
                backgroundColor: theme.palette.secondary.contrastText,
              },
            }}
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
