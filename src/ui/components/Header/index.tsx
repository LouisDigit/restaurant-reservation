import restaurantLogo from "../../../assets/LandingPage/restaurant-logo.svg";
import marketIcon from "./../../../assets/LandingPage/Icon/CartIcon.svg";
import instagramIcon from "./../../../assets/LandingPage/SocialMedia/InstaIcon.svg";
import facebookIcon from "./../../../assets/LandingPage/SocialMedia/FacebookIcon.svg";
import twitterIcon from "./../../../assets/LandingPage/SocialMedia/TwitterIcon.svg";
import pinterestIcon from "./../../../assets/LandingPage/SocialMedia/PinterestIcon.svg";

const Header = () => {
  return (
    <header className=" flex flex-col w-full h-fit  pt-16 bg-darkBg">
      <div className="flex justify-between items-center px-[10%] pb-16">
        <p className="border flex justify-center items-center border-primaryColor px-3 py-2 h-14 text-center text-fontColor">
          Call - 987 654 321
        </p>
        <img src={restaurantLogo} alt="Logo du restaurant" />
        <div className="flex gap-8">
          <img src={marketIcon} alt="Icon du market" />
          <button className="bg-primaryColor text-darkBg px-8 py-3 h-14">
            Reservation
          </button>
        </div>
      </div>
      <div className="flex justify-between border-y border-fontColor border-opacity-50 py-5">
        <ul className="flex gap-8 text-fontColor pl-[10%]">
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservation</li>
          <li>Gallery</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <ul className="flex gap-3 pr-[10%]">
          <li>
            <img src={instagramIcon} alt="Icone d'instagram" />
          </li>
          <li>
            <img src={facebookIcon} alt="Icone de facebook" />
          </li>
          <li>
            <img src={twitterIcon} alt="Icone de twitter" />
          </li>
          <li>
            <img src={pinterestIcon} alt="Icone de pinterest" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
