import { NextPage } from "next";
import Head from "next/head";
import Container from "@mui/material/Container";
// import { useTheme } from "@mui/material";

import AboutComponent from "components/AboutPage/components/TopComponent";
import Footer from "components/Footer/Footer";
import aboutbg from "images/aboutbg.png";

const About: NextPage = () => {
  //   const theme = useTheme();

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
        <Footer />
      </main>
    </Container>
  );
};

export default About;
