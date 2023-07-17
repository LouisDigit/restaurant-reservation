import restaurantLogo from "../../../assets/LandingPage/restaurant-logo.svg";
import marketIcon from "./../../../assets/LandingPage/Icon/CartIcon.svg";
import instagramIcon from "./../../../assets/LandingPage/SocialMedia/InstaIcon.svg";
import facebookIcon from "./../../../assets/LandingPage/SocialMedia/FacebookIcon.svg";
import twitterIcon from "./../../../assets/LandingPage/SocialMedia/TwitterIcon.svg";
import pinterestIcon from "./../../../assets/LandingPage/SocialMedia/PinterestIcon.svg";
import menuIcon from "./../../../assets/Header/menu-burger.svg";
import PrimaryButton from "../Button/PrimaryButton";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const menuLinks = [
    {
      libelle: "Home",
      path: "/",
    },
    {
      libelle: "About",
      path: "/about",
    },
    {
      libelle: "Menu",
      path: "/menu",
    },
    {
      libelle: "Reservation",
      path: "/reservation",
    },
    {
      libelle: "Gallery",
      path: "/gallery",
    },
    {
      libelle: "Contact",
      path: "/contact",
    },
  ];

  const socialLinks = [
    {
      src: facebookIcon,
      alt: "Icone de Facebook",
    },
    {
      src: instagramIcon,
      alt: "Icone d'Instagram",
    },
    {
      src: twitterIcon,
      alt: "Icone de Twitter",
    },
    {
      src: pinterestIcon,
      alt: "Icone de Pinterest",
    },
  ];

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className=" flex flex-col w-full h-fit  pt-16 bg-darkBg">
      <div className="flex  flex-col md:flex-row gap-5 md:gap-0 justify-between items-center px-[10%] pb-16">
        <p className="border flex justify-center items-center border-primaryColor px-3 py-2 h-14 text-center text-fontColor">
          Call - 987 654 321
        </p>
        <img src={restaurantLogo} alt="Logo du restaurant" />
        <div className="flex gap-8">
          <img src={marketIcon} alt="Icon du market" />
          <PrimaryButton text="Reservation" />
        </div>
      </div>
      <div className="flex justify-end md:justify-between border-y border-fontColor md:px-0 border-opacity-50 py-5 relative">
        <ul className="hidden md:flex gap-0 md:gap-8 text-fontColor pl-[10%]">
          {menuLinks.map((link, index) => {
            return (
              <li key={index} className="cursor-pointer hover:opacity-50 ">
                <Link to={link.path} className="text-fontColor">
                  {link.libelle}
                </Link>
              </li>
            );
          })}
        </ul>
        <img
          src={menuIcon}
          alt="menu burger"
          className="block cursor-pointer md:hidden w-8 self-center mr-4"
          onClick={handleMenu}
        />
        <ul
          className={`${
            showMenu ? "flex" : "hidden"
          } bg-fontColor flex flex-col w-full text-darkBg absolute translate-y-[100%] bottom-0`}
        >
          {menuLinks.map((link, index) => {
            return (
              <li className="w-full text-center py-2 border-t border-b border-darkBg border-opacity-30">
                <Link to={link.path}>{link.libelle}</Link>
              </li>
            );
          })}
        </ul>
        <ul className="hidden md:flex gap-0 md:gap-5 pr-[10%]">
          {socialLinks.map((link, index) => {
            return (
              <li>
                <img
                  key={index}
                  className="cursor-pointer"
                  src={link.src}
                  alt={link.alt}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
