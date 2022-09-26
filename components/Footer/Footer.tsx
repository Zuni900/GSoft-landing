import React from "react";
import Questions from "./components/Questions/Questions";
import Updates from "./components/Updates/Updates";
import FooterDetails from "./components/FooterDetails/FooterDetails";
import AllRights from "./components/AllRight/AllRights";

const Footer = () => {
  return (
    <div>
      <Questions />
      <Updates />
      <FooterDetails />
      <AllRights />
    </div>
  );
};

export default Footer;
