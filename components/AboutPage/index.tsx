import { NextPage } from "next";
import { useTheme } from "@mui/material";
import Head from "next/head";
import Container from "@mui/material/Container";

import AboutComponent from "components/AboutPage/components/TopComponent";
import Offers from "components/WebDevelopment/components/WebDevOffers";
import Mission from "./components/Mission";
import Counts from "./components/Counts";
import Leadership from "./components/Leadership";
import PortfolioCard from "components/Portfolio";
import Technologies from "components/Testimonials";
import Footer from "components/Footer/Footer";

import aboutbg from "images/aboutbg.png";
import aboutOffers from "images/aboutOffers.png";

const About: NextPage = () => {
  const theme = useTheme();

  return (
    <Container maxWidth={false} disableGutters>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>About</title>

        <meta property="og:title" content="About" key="About" name="description" />
      </Head>

      <main>
        <AboutComponent
          heading="About"
          desc="Gsoft is a software and mobile app development company
          with a world-class team of talented data scientists, developers, designers and engineers"
          image={aboutbg}
        />
        <Offers
          topHeading="Work with the Tech Leader."
          heading="Goft brings ideas to life, leveraging modern technologies."
          desc="Gsoft started its journey in 2008 with a team of seven. Today, it has grown into a full-cycle, mobile-first software development company, with the highest team satisfaction in the industry, independent analyst recognition, and an ever-growing list of delighted clients who work with us again and again. We are proud to have worked with Estee Lauder, Clinique, Engro, Swatch Group, Politico, and OOMCO. We have helped dozens of startups with modern technologies."
          image={aboutOffers}
        />
        <Mission />
        <Counts />
        <Leadership />
        <PortfolioCard
          bgcolor={theme.palette.primary.light}
          color={theme.palette.secondary.main}
          hoverbg={theme.palette.secondary.main}
          hoverColor={theme.palette.secondary.light}
          descColor={theme.palette.success.light}
          tabColor={theme.palette.success.light}
        />
        <Technologies />
        <Footer />
      </main>
    </Container>
  );
};

export default About;
