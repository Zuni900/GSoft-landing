import React from "react";
import { useStyles } from "./style";
import Text from "../Typography";
import { Grid } from "@mui/material";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Header from "components/Navbar/Header";
function ServicesTop() {
  const { classes, cx } = useStyles();
  return (
    <>
      <Grid className={cx(classes.mainGrid)}>
        <Card className={cx(classes.container)}>
          <Box className={cx(classes.cardBox)}>
            <CardContent className={cx(classes.cardcontent)}>
              <Text variant="subtitle2" name="Our Services" className={cx(classes.cardHeading)}></Text>
              <Text
                variant="caption"
                name="Leveraging cutting-edge technologies to build industry-leading digital products"
              ></Text>
            </CardContent>
          </Box>

          <Box className={cx(classes.cardBox)}>
            <CardContent className={cx(classes.cardcontent)}>
              <Text variant="subtitle2" name="Services" className={cx(classes.cardHeading)}></Text>
              <Text variant="caption" className={cx(classes.cardsubHeading)} name="web Development"></Text>
              <Text variant="caption" className={cx(classes.cardsubHeading)} name="Backend Development"></Text>
              <Text variant="caption" className={cx(classes.cardsubHeading)} name="Mobile App developtment"></Text>
              <Text variant="caption" className={cx(classes.cardsubHeading)} name="Mobile"></Text>
              <Text variant="caption" className={cx(classes.cardsubHeading)} name="Branding"></Text>{" "}
              <Text variant="caption" className={cx(classes.cardsubHeading)} name="web "></Text>
            </CardContent>
          </Box>
          <Box className={cx(classes.cardBox)}>
            <CardContent className={cx(classes.cardcontent)}>
              <Text variant="subtitle2" name="Services" className={cx(classes.cardHeading)}></Text>
              <Text
                variant="caption"
                color="text.secondary"
                name="Quality Assurance"
                className={cx(classes.cardsubHeading)}
              ></Text>
              <Text
                variant="caption"
                color="text.secondary"
                name="Quality Assurance"
                className={cx(classes.cardsubHeading)}
              ></Text>
              <Text
                variant="caption"
                color="text.secondary"
                name="Quality Assurance"
                className={cx(classes.cardsubHeading)}
              ></Text>
            </CardContent>
          </Box>
          <Box className={cx(classes.cardBoxend)}>
            <CardContent className={cx(classes.cardcontent)}>
              <Text variant="subtitle2" name="How do We work" className={cx(classes.cardHeading)}></Text>
              <Text variant="caption" className={cx(classes.cardsubHeading)} name="Discover"></Text>
              <Text variant="caption" className={cx(classes.cardsubHeading)} name="Planning and Designing"></Text>
              <Text variant="caption" className={cx(classes.cardsubHeading)} name="Development And Testing"></Text>
              <Text variant="caption" className={cx(classes.cardsubHeading)} name="Deploy AND Support"></Text>
            </CardContent>
          </Box>
        </Card>
        
      </Grid>
    </>
  );
}

export default ServicesTop;
