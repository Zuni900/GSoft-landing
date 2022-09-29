import React from "react";
import Questions from "components/Footer/components/Questions/Questions";
import Updates from "components/Footer/components/Updates/Updates";
import FooterDetails from "components/Footer/components/FooterDetails/FooterDetails";
import AllRights from "components/Footer/components/AllRight/AllRights";

const Footer = () => {
  return (
    <>
      <Questions />
      <Updates />
      <FooterDetails />
      <AllRights />
    </>
  );
};

export default Footer;
