import { NextPage } from "next";
import Head from "next/head";
import Container from "@mui/material/Container";

import WebDev from "../WebDevelopment/components/WebDevelop";
import Technologies from "../Home/components/Technologies/Technologies";
import Footer from "../Footer/Footer";

import portfolio from "../../public/images/portfolio.png";

const Portfolio: NextPage = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Portfolio</title>

        <meta property="og:title" content="Portfolio" key="Portfolio" name="description" />
      </Head>

      <main>
        <WebDev heading="Portfolio" desc="Our Work Speaks Itself" image={portfolio} />
        <Technologies />
        <Footer />
      </main>
    </Container>
  );
};

export default Portfolio;
