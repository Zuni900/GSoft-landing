import { NextPage } from "next";
import Head from "next/head";
import Container from "@mui/material/Container";

import WebDev from "components/WebDevelopment/components/WebDevelop";
import Offers from "components/WebDevelopment/components/WebDevOffers";
import WebDevServices from "components/WebDevelopment/components/WebDevServices";
import Services from "components/WebDevelopment/components/WebDevMoreServices";
import WorkFlow from "components/WebDevelopment/components/WorkFlow";
import Facilities from "components/WebDevelopment/components/Facilities";
import PortfolioCard from "components/Portfolio";
import Footer from "components/Footer/Footer";

import webDevelop from "images/webDevelop.png";
import webDevServices from "images/webDevServices.png";
import services from "images/services.png";
import s1 from "images/s1.png";
import s2 from "images/s2.png";
import s3 from "images/s3.png";
import { useTheme } from "@mui/material";

const WebDevelopment: NextPage = () => {
  const theme = useTheme();
  return (
    <Container maxWidth={false} disableGutters>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Web Development</title>

        <meta property="og:title" content="Web Development" key="Web Development" name="description" />
      </Head>

      <main>
        <WebDev
          heading="Web Developmemnt"
          desc="Fast, secure, stunning websites & Web Apps at unbeatable prices."
          image={webDevelop}
        />
        <Offers
          topHeading="Our Services"
          heading="What We Offer"
          desc="We are providing professional services of Website Development as well as Mobile App Development to Enterprises and companies. Global Software Consulting intends to be in front of the client’s needs and delivers modern solutions for modern problems of the client's business from the initial phase of scoping the requirements up to the final delivery, maintenance, and continuous upgrade."
          image={webDevServices}
        />
        <WebDevServices
          topHeading="Our Services"
          heading="We Provide Web Development Service"
          desc="We are providing professional services of Website Development as well as Mobile App Development to Enterprises and companies. Global Software Consulting intends to be in front of the client’s needs and delivers modern solutions for modern problems of the client's business from the initial phase of scoping the requirements up to the final delivery, maintenance, and continuous upgrade."
          image={services}
        />
        <Services
          topHeading="Our Services"
          heading="We Provide Web Development Service"
          c1Heading="Classified Website Development Service"
          c1Desc="We understand your passion and help your business reach its true potential. Whether you are a small business or a corporate business stop worrying and get ready to reach the top of the industry with our up-to-date SEO, innovative designing, and irresistible marketing."
          c1Point1="Top rank SEO website to generate more and more credible leads."
          c1Point2="Dedicated and passionate account manager."
          c1Point3="Latest SEO trends and marketing strategies."
          c1Point4="Monthly reporting and critical analysis."
          c1Image={s1}
          c2Heading="eCommerce Website Development Service"
          c2Desc="We understand your passion and help your business reach its true potential. Whether you are a small business or a corporate business stop worrying and get ready to reach the top of the industry with our up-to-date SEO, innovative designing, and irresistible marketing."
          c2Point1="Top rank SEO website to generate more and more credible leads."
          c2Point2="Dedicated and passionate account manager."
          c2Point3="Latest SEO trends and marketing strategies."
          c2Point4="Monthly reporting and critical analysis."
          c2Image={s2}
          c3Heading="Web Development in React JS"
          c3Desc="We understand your passion and help your business reach its true potential. Whether you are a small business or a corporate business stop worrying and get ready to reach the top of the industry with our up-to-date SEO, innovative designing, and irresistible marketing."
          c3Point1="Top rank SEO website to generate more and more credible leads."
          c3Point2="Dedicated and passionate account manager."
          c3Point3="Latest SEO trends and marketing strategies."
          c3Point4="Monthly reporting and critical analysis."
          c3Image={s3}
        />
        <WorkFlow />
        <Facilities />
        <PortfolioCard
          bgcolor={theme.palette.secondary.main}
          color={theme.palette.secondary.light}
          hoverbg={theme.palette.secondary.light}
          hoverColor={theme.palette.secondary.main}
          descColor={theme.palette.error.light}
          tabColor={theme.palette.secondary.light}
        />
        <Footer />
      </main>
    </Container>
  );
};

export default WebDevelopment;
