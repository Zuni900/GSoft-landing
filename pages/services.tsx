import React from "react";
import { Container, Grid, useTheme } from "@mui/material";
import Text from "components/Typography";
import Header from "components/Navbar/Header";
import { useStyles } from "styles/services";
import Description from "components/Description";
import Services from "components/Services/components/ServicesBlock";
import Facilities from "components/WebDevelopment/components/Facilities";
import Footer from "components/Footer/Footer";
import Head from "next/head";
import PortfolioCard from "components/Portfolio";
function ServicesPage() {
  const theme = useTheme();
  const { classes, cx } = useStyles();

  return (
    <Container maxWidth={false} disableGutters>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Services</title>

        <meta property="og:title" content="Services" key="Services" name="description" />
      </Head>
      <Grid className={cx(classes.toolbar)}>
        <Header />

        <Grid container item md={12} sm={12} xs={12} className={cx(classes.Headings)}>
          <Text variantMapping={{ h2: "h2" }} variant="h2" name="Our Services" className={cx(classes.styling)} />

          <Text
            variantMapping={{
              subtitle1: "p",
            }}
            className={cx(classes.description)}
            variant="subtitle1"
            name="Fast, secure, stunning websites & Web Apps at unbeatable prices."
          />
        </Grid>
      </Grid>
      <Description
        title="Our Services"
        name=" What We Offer"
        details="We are providing professional services of Website Development as well as Mobile App Development to Enterprises and companies. Global Software Consulting intends to be in front of the client’s needs and delivers modern solutions for modern problems of the client's business from the initial phase of scoping the requirements up to the final delivery, maintenance, and continuous upgrade."
      />
      <Services />
      <Facilities />
      <PortfolioCard
        bgcolor={theme.palette.secondary.main}
        color={theme.palette.secondary.light}
        hoverbg={theme.palette.secondary.light}
        hoverColor={theme.palette.secondary.main}
        descColor={theme.palette.error.light}
        tabColor={theme.palette.secondary.light}
      />
      <Footer />
    </Container>
  );
}

export default ServicesPage;
