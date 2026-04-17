import React from "react";
import ProductLinks from "./Links/ProductLinks";
import CompanyLinks from "./Links/CompanyLinks";
import ResourcesLinks from "./Links/ResourcesLinks";
import SocialLinks from "./Links/SocialLinks";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <div id="footer" className="pt-30 pb-20 bg-[#101727]">
      <div className="max-w-[80%] mx-auto flex justify-between flex-wrap gap-10">
        <div>
          <h3 className="text-white mb-4 text-4xl font-extrabold">DigiTools</h3>
          <p className="text-white opacity-80 font-normal">
            Premium digital tools for creators, <br />professionals, and businesses.
            Work smarter <br />with our suite of powerful tools.
          </p>
        </div>
        <ProductLinks />
        <CompanyLinks />
        <ResourcesLinks />
        <SocialLinks />
      </div>
    </div>
  );
};

export default Footer;