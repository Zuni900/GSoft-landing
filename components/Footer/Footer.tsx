import React from "react";
import Questions from "../Questions/Questions";
import Updates from "../Updates/Updates";
import FooterDetails from "../FooterDetails/FooterDetails";
import AllRights from "../AllRight/AllRights";

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
