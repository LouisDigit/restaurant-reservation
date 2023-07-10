import React from "react";

const Footer = () => {
  return (
    <footer className="flex  flex-col md:flex-row justify-center md:justify-between items-center gap-5 md:gap-0 px-[10%] py-10 bg-darkBg text-fontColor">
      <p className="text-center md:text-start">
        © Copyright - Restaurantate | Designed by{" "}
        <span className="text-primaryColor">VictorFlow</span> Templates -
        Powered by <span className="text-primaryColor">Webflow</span>
      </p>
      <p>Styleguide / Licenses</p>
    </footer>
  );
};

export default Footer;
