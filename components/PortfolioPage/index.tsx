import { NextPage } from "next";
import Head from "next/head";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material";

import WebDev from "components/WebDevelopment/components/WebDevelop";
import Menu from "./components/ProjectList";
import Technologies from "components/Home/components/Technologies/Technologies";
import Footer from "components/Footer/Footer";

import portfolio from "public/images/portfolio.png";

const Portfolio: NextPage = () => {
  const theme = useTheme();

  return (
    <Container maxWidth={false} disableGutters>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Portfolio</title>

        <meta property="og:title" content="Portfolio" key="Portfolio" name="description" />
      </Head>

      <main>
        <WebDev heading="Portfolio" desc="Our Work Speaks Itself" image={portfolio} />
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
