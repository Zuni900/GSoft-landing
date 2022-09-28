import { NextPage } from "next";
import Head from "next/head";
import Container from "@mui/material/Container";

import { theme } from "../../styles/theme/defalutTheme";
import WebDev from "../WebDevelopment/components/WebDevelop";
import Offers from "../WebDevelopment/components/WebDevOffers";
import WebDevServices from "../WebDevelopment/components/WebDevServices";
import Services from "../WebDevelopment/components/WebDevMoreServices";
import WorkFlow from "../WebDevelopment/components/WorkFlow";
import WhyUs from "../WebDevelopment/components/WhyUs";
import PortfolioCard from "../Portfolio";
import Footer from "../Footer/Footer";

import webDesignbg from "../../public/images/webDesignbg.png";
import webDesignServices from "../../public/images/webDesignServices.png";
import webDesignServices2 from "../../public/images/webDesignServices2.png";
import designS1 from "../../public/images/designS1.png";
import designS2 from "../../public/images/designS2.png";
import designS3 from "../../public/images/designS3.png";

const WebDesign: NextPage = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Web Design</title>

        <meta property="og:title" content="Web Design" key="Web Design" name="description" />
      </Head>

      <main>
        <WebDev
          heading="Web Design"
          desc="Fast, secure, stunning websites & Web Apps at unbeatable prices."
          image={webDesignbg}
        />
        <Offers
          topHeading="Our Services"
          heading="What We Offer"
          desc="We are providing professional services of Website Development as well as Mobile App Development to Enterprises and companies. Global Software Consulting intends to be in front of the client’s needs and delivers modern solutions for modern problems of the client's business from the initial phase of scoping the requirements up to the final delivery, maintenance, and continuous upgrade."
          image={webDesignServices}
        />
        <WebDevServices
          topHeading="Our Services"
          heading="We Provide Web Design Service"
          desc="We are providing professional services of Website Development as well as Mobile App Development to Enterprises and companies. Global Software Consulting intends to be in front of the client’s needs and delivers modern solutions for modern problems of the client's business from the initial phase of scoping the requirements up to the final delivery, maintenance, and continuous upgrade."
          image={webDesignServices2}
        />
        <Services
          topHeading="Our Services"
          heading="We Provide Web Design Service"
          c1Heading="Classified Website Design Service"
          c1Desc="We understand your passion and help your business reach its true potential. Whether you are a small business or a corporate business stop worrying and get ready to reach the top of the industry with our up-to-date SEO, innovative designing, and irresistible marketing."
          c1Point1="Top rank SEO website to generate more and more credible leads."
          c1Point2="Dedicated and passionate account manager."
          c1Point3="Latest SEO trends and marketing strategies."
          c1Point4="Monthly reporting and critical analysis."
          c1Image={designS1}
          c2Heading="eCommerce Website Design Service"
          c2Desc="We understand your passion and help your business reach its true potential. Whether you are a small business or a corporate business stop worrying and get ready to reach the top of the industry with our up-to-date SEO, innovative designing, and irresistible marketing."
          c2Point1="Top rank SEO website to generate more and more credible leads."
          c2Point2="Dedicated and passionate account manager."
          c2Point3="Latest SEO trends and marketing strategies."
          c2Point4="Monthly reporting and critical analysis."
          c2Image={designS2}
          c3Heading="Web Design in React JS"
          c3Desc="We understand your passion and help your business reach its true potential. Whether you are a small business or a corporate business stop worrying and get ready to reach the top of the industry with our up-to-date SEO, innovative designing, and irresistible marketing."
          c3Point1="Top rank SEO website to generate more and more credible leads."
          c3Point2="Dedicated and passionate account manager."
          c3Point3="Latest SEO trends and marketing strategies."
          c3Point4="Monthly reporting and critical analysis."
          c3Image={designS3}
        />
        <WorkFlow />
        <WhyUs />
        <PortfolioCard
          bgcolor={theme.palette.secondary.main}
          color={theme.palette.secondary.light}
          hoverbg={theme.palette.secondary.light}
          hoverColor={theme.palette.secondary.main}
          descColor={theme.palette.error.light}
        />
        <Footer />
      </main>
    </Container>
  );
};

export default WebDesign;
