import { NextPage } from "next";
import Head from "next/head";
import Container from "@mui/material/Container";

import About from "../About/";
import Services from "../Services";
import WorkFlow from "../WorkFlow/WorkFlow";
import Technologies from "./components/Technologies/Technologies";
import Testimonial from "../Testimonials";
import PortfolioCard from "../Portfolio";
import Footer from "components/Footer/Footer";

import Header from "../Home/components/Header";
import { useTheme } from "@emotion/react";
const Home: NextPage = () => {
  const theme = useTheme();
  return (
    <Container maxWidth={false} disableGutters>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Home</title>

        <meta
          property="og:title"
          content="Home"
          key="Home"
          name="description"
        />
      </Head>

      <Header />
      <About
        title="Who are we"
        name=" About company"
        details="We are providing professional services of Website Development as well as Mobile App Development to Enterprises and companies. Global Software Consulting intends to be in front of the client’s needs and delivers modern solutions for modern problems of the client's business from the initial phase of scoping the requirements up to the final delivery, maintenance, and continuous upgrade."
      />
      <Services />
      <Technologies />
      <WorkFlow />
      <PortfolioCard
        bgcolor={theme.palette.primary.light}
        color={theme.palette.secondary.main}
        hoverbg={theme.palette.secondary.main}
        hoverColor={theme.palette.secondary.light}
        descColor={theme.palette.success.light}
      />
      <Testimonial />
      <Footer />
    </Container>
  );
};

export default Home;
