import { NextPage } from "next";
import Head from "next/head";
import Container from "@mui/material/Container";
import About from "components/About";
import Services from "components/Services";
import WorkFlow from "components/WorkFlow/WorkFlow";
import Technologies from "./components/Technologies/Technologies";
import Portfolio from "components/Portfolio";
import Testimonials from "components/Testimonials";

import Header from "components/Navbar/Header";
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
        <About
          title="Who are we"
          name=" About company"
          details="We are providing professional services of Website Development as well as Mobile App Development to Enterprises and companies. Global Software Consulting intends to be in front of the client’s needs and delivers modern solutions for modern problems of the client's business from the initial phase of scoping the requirements up to the final delivery, maintenance, and continuous upgrade."
        />
        <Services />
        <Technologies />
        <WorkFlow />
        <Portfolio />
        <Testimonials />
      </main>
    </Container>
  );
};

export default Home;
