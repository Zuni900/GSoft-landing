import React from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";

import { useStyles } from "./styles";
import Text from "../../../Typography";
import Image from "next/image";

import fb from "../../../../public/images/fb.png";
import insta from "../../../../public/images/insta.png";
import linkedIn from "../../../../public/images/linkedIn.png";
import twiter from "../../../../public/images/twiter.png";
import ball from "../../../../public/images/ball.png";
import be from "../../../../public/images/be.png";
import up from "../../../../public/images/Up.png";

const FooterDetails = () => {
  const { classes, cx } = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container className={cx(classes.container)}>
      <Grid container item md={10} className={cx(classes.box)}>
        <Grid item md={2.5} sm={5} xs={12} className={cx(classes.block)}>
          <Text variant="h4" variantMapping={{ h4: "body1" }} name="COMPANY" className={cx(classes.heading)} />
          <Text variant="body2" name="About" className={cx(classes.text)} />
          <Text variant="body2" name="Meet Our Team" className={cx(classes.text)} />
          <Text variant="body2" name="Life at GSC" className={cx(classes.text)} />
          <Text variant="body2" name="Contact us" className={cx(classes.text)} />
          <Text variant="body2" name="Careers" className={cx(classes.text)} />
        </Grid>

        <Grid item md={2.5} sm={5} xs={12} className={cx(classes.block)}>
          <Text variant="h4" variantMapping={{ h4: "body1" }} name="SERVICES" className={cx(classes.heading)} />
          <Text variant="body2" name="Web Development" className={cx(classes.text)} />
          <Text variant="body2" name="Mobile Development" className={cx(classes.text)} />
          <Text variant="body2" name="Backend Development" className={cx(classes.text)} />
          <Text variant="body2" name="Web Design" className={cx(classes.text)} />
          <Text variant="body2" name="Mobile App Design" className={cx(classes.text)} />
          <Text variant="body2" name="Quality Assurance" className={cx(classes.text)} />
          <Text variant="body2" name="DevOps" className={cx(classes.text)} />
          <Text variant="body2" name="Cloud Services" className={cx(classes.text)} />
        </Grid>

        <Grid item md={4} sm={5} xs={12} className={cx(classes.block)}>
          <Text variant="h4" variantMapping={{ h4: "body1" }} name="TECHNOLOGIES" className={cx(classes.heading)} />
          <Grid container item xs={7} sm={12} md={8} className={cx(classes.tecBlock)}>
            <Text variant="body2" name="React Native" className={cx(classes.technologies)} />
            <Text variant="body2" name="React js" className={cx(classes.technologies)} />
            <Text variant="body2" name="Next js" className={cx(classes.technologies)} />
            <Text variant="body2" name="Nest js" className={cx(classes.technologies)} />
            <Text variant="body2" name="Node js" className={cx(classes.technologies)} />
            <Text variant="body2" name="MYSQL" className={cx(classes.technologies)} />
            <Text variant="body2" name="React Gatsby" className={cx(classes.technologies)} />
            <Text variant="body2" name="Mongose" className={cx(classes.technologies)} />
          </Grid>
        </Grid>

        <Grid item md={2.5} sm={5} xs={12} className={cx(classes.block)}>
          <Text variant="h4" variantMapping={{ h4: "body1" }} name="OFFICES" className={cx(classes.heading)} />
          <Text variant="body2" name="United Kingdom" className={cx(classes.text)} />
          <Text variant="body2" name="Australia" className={cx(classes.text)} />
          <Text variant="body2" name="Pakistan" className={cx(classes.text)} />
        </Grid>
      </Grid>

      <Grid
        container
        item
        md={10}
        sx={{ display: "flex", justifyContent: "space-between", marginTop: "2%", alignItems: "center" }}
      >
        <Grid container item md={3.5} sm={5} sx={{ display: "flex", justifyContent: "space-between" }}>
          <Image alt="img" src={fb} width="32px" height="32px" layout="fixed" />
          <Image alt="img" src={insta} width="32px" height="32px" layout="fixed" />
          <Image alt="img" src={linkedIn} width="32px" height="32px" layout="fixed" />
          <Image alt="img" src={twiter} width="32px" height="32px" layout="fixed" />
          <Image alt="img" src={ball} width="32px" height="32px" layout="fixed" />
          <Image alt="img" src={be} width="32px" height="32px" layout="fixed" />
        </Grid>
        {!isMatch ? <Image alt="img" src={up} width="48px" height="48px" layout="fixed" /> : ""}
      </Grid>
    </Grid>
  );
};

export default FooterDetails;
