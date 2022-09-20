import { NextPage } from "next";
import Head from "next/head";

import About from "../components/About";
import Services from "../components/Services";

import Header from "../components/Navbar/Header";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Home</title>

        <meta
          property="og:title"
          content="Home"
          key="Home"
          name="description"
        />
      </Head>

      <main>
        <Header />
        <About />
        <Services />
      </main>
    </div>
  );
};

export default Home;
