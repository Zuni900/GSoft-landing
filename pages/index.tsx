import type { NextPage } from "next";
import Head from "next/head";

import About from "../Components/About";
import Services from "../Components/Services";
import Header from "../Components/Navbar/Header";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
      
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header/>
        {/* <p>Get started by editing </p> */}
        <About />
        <Services />
      </main>
    </div>
  )
}

export default Home
