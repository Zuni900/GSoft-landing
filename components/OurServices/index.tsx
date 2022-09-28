import React from "react";
import { Grid } from "@mui/material";
import Text from "../Typography";
import Header from "../Navbar/Header";
import { useStyles } from "./styles";
import About from "components/About";
import Services from "./Servicescom";
function Index() {
  const { classes, cx } = useStyles();

  return (
    <>
      <Grid className={cx(classes.toolbar)}>
        <Header />

        <Grid container item md={12} sm={12} xs={12} className={cx(classes.Headings)}>
          <Text variantMapping={{ h2: "h2" }} variant="h2" name="Our Services" className={cx(classes.styling)} />

          <Text
            className={cx(classes.description)}
            variant="subtitle1"
            name="Fast, secure, stunning websites & Web Apps at unbeatable prices."
          />
        </Grid>
      </Grid>
      <About
        title="Our Services"
        name=" What We Offer"
        details="We are providing professional services of Website Development as well as Mobile App Development to Enterprises and companies. Global Software Consulting intends to be in front of the client’s needs and delivers modern solutions for modern problems of the client's business from the initial phase of scoping the requirements up to the final delivery, maintenance, and continuous upgrade."
      ></About>
<Services />
    </>
  );
}

export default Index;
