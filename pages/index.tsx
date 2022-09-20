import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/Navbar/Header";
import TopCard from "../components/TopCard/TopCard";
import About from "../components/About";
import Services from "../components/Services";
import WorkFlow from "../components/WorkFlow/WorkFlow";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <TopCard />
        <About />
        <Services />
        <WorkFlow />
      </main>
    </div>
  );
};

export default Home;
