import { NextPage } from "next";
import Head from "next/head";
import Container from "@mui/material/Container";

import { theme } from "../../styles/theme/defalutTheme";
import WebDev from "../WebDevelopment/components/WebDevelop";
import Menu from "./components/ProjectList";
import Technologies from "../Home/components/Technologies/Technologies";
import Footer from "../Footer/Footer";

import portfolio from "../../public/images/portfolio.png";

const Portfolio: NextPage = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Portfolio</title>

        <meta
          property="og:title"
          content="Portfolio"
          key="Portfolio"
          name="description"
        />
      </Head>

      <main>
        <WebDev
          heading="Portfolio"
          desc="Our Work Speaks Itself"
          image={portfolio}
        />
        <Menu />
        <Technologies
          bgcolor={theme.palette.secondary.main}
          color={theme.palette.secondary.light}
          filter="brightness(0) invert(1)"
          tabColor={theme.palette.secondary.light}
        />
        <Footer />
      </main>
    </Container>
  );
};

export default Portfolio;
