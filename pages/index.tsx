import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Navbar/Header";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
      
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
      </main>
    </div>
  );
};

export default Home;
