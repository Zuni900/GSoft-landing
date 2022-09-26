import { NextPage } from "next";
import Head from "next/head";
import Container from "@mui/material/Container";

import Header from "components/Home/components/Header";
import About from "components/About";
import Services from "components/Services";
import WorkFlow from "components/WorkFlow/WorkFlow";
import Technologies from "./components/Technologies/Technologies";
import Testimonial from "components/Testimonials";
import PortfolioCard from "components/Portfolio";
import Footer from "../Footer/Footer";
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
        <PortfolioCard />
        <Testimonial />
        <Footer />
      </main>
    </Container>
  );
};

export default Home;
