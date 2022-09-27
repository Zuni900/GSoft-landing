import { NextPage } from "next";
import Head from "next/head";
import Container from "@mui/material/Container";

import WebDev from "./components/WebDevelop";
import Offers from "./components/WebDevOffers";
import WebDevServices from "./components/WebDevServices";
import Services from "./components/WebDevMoreServices";
import PortfolioCard from "../Portfolio";
import Footer from "../Footer/Footer";

const WebDevelopment: NextPage = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Web Development</title>

        <meta property="og:title" content="Web Development" key="Web Development" name="description" />
      </Head>

      <main>
        <WebDev />
        <Offers />
        <WebDevServices />
        <Services />
        <PortfolioCard />
        <Footer />
      </main>
    </Container>
  );
};

export default WebDevelopment;
