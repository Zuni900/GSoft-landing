import { NextPage } from "next";
import Head from "next/head";
import Container from "@mui/material/Container";

import Header from "./components/Header";
import About from "../About/";
import Services from "../Services";
import WorkFlow from "../WorkFlow/WorkFlow";
import Technologies from "./components/Technologies/Technologies";
import Testimonial from "../Testimonials";
import PortfolioCard from "../Portfolio";
import Footer from "../Footer/Footer";
import Portfolio from "components/Portfolio";
import Testimonials from "components/Testimonials";
import { theme } from "../../styles/theme/defalutTheme";

const Home: NextPage = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Home</title>

        <meta property="og:title" content="Home" key="Home" name="description" />
      </Head>

      <main>
        <Header />
        <About />
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
        <Portfolio />
        <Testimonials />
      </main>
    </Container>
  );
};

export default Home;