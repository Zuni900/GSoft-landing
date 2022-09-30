import { NextPage } from "next";
import Head from "next/head";
import Container from "@mui/material/Container";

import Building from "./components/TopComponent";
import Description from "components/Description";
import NeedToKnow from "./components/NeedToKnow";
import Job from "./components/Job";
import Benefits from "./components/Benefit";
import Footer from "components/Footer/Footer";

const Jobs: NextPage = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Jobs</title>

        <meta property="og:title" content="Jobs" key="Jobs" name="description" />
      </Head>

      <main>
        <Building />
        <Description
          title="Careers"
          name="It's not just a job, it’s an adventure!"
          details="We build jobs that allow your imaginations to enter the world of infinite possibilities! We are best at what we do in the market because of the eager beavers working at ibex. We not only guarantee our people the best learning environment but we are also going to make sure that you make some great memories and build strong relationships here. If you want to build your career around one of the biggest organizations in the world then, we are what you are looking for!"
        />
        <NeedToKnow />
        <Job />
        <Benefits />
        <Footer />
      </main>
    </Container>
  );
};

export default Jobs;
