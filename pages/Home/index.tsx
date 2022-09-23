import { NextPage } from "next";
import Head from "next/head";
import Container from "@mui/material/Container";

import TopCard from "../Home/components/Header/Header";
import About from "../../components/About";
import Services from "../../components/Services";
import WorkFlow from "../../components/WorkFlow/WorkFlow";
import Technologies from "./components/Technologies/Technologies";
import SliderCard from "components/SliderCard/Index";
const Home: NextPage = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Home</title>

        <meta property="og:title" content="Home" key="Home" name="description" />
      </Head>

      <main>
        <TopCard />
        <About />
        <Services />
        <Technologies />
        <WorkFlow />
        <SliderCard />
      </main>
    </Container>
  );
};

export default Home;
