import LocationLogo from "./../../../../../../assets/Contact/LocationLogo.svg";
import EmailLogo from "./../../../../../../assets/Contact/MailLogo.svg";
import CallLogo from "./../../../../../../assets/Contact/CallLogo.svg";
import FacebookLogo from "./../../../../../../assets/LandingPage/SocialMedia/FacebookIcon.svg";
import TwitterLogo from "./../../../../../../assets/LandingPage/SocialMedia/TwitterIcon.svg";
import InstagramLogo from "./../../../../../../assets/LandingPage/SocialMedia/InstaIcon.svg";
import PinterestLogo from "./../../../../../../assets/LandingPage/SocialMedia/PinterestIcon.svg";
import InputBook from "../../../../../components/Input/InputBook";
import TextArea from "../../../../../components/Input/TextArea";
import PrimaryButton from "../../../../../components/Button/PrimaryButton";

const Main = () => {
  const listContact = [
    {
      image: LocationLogo,
      text: "Riverside 25, San Francisco, California",
      title: "location",
    },
    { image: EmailLogo, text: "evanmattew@mail.com", title: "email" },
    { image: CallLogo, text: "800 - 234 - 567", title: "call" },
  ];

  const listSocialMedia = [
    FacebookLogo,
    TwitterLogo,
    InstagramLogo,
    PinterestLogo,
  ];
  return (
    <section className="flex md:flex-row flex-col md:gap-3 gap-10  py-16 px-3 md:px-[10%] w-full items-center justify-center">
      <div className="flex flex-col gap-3 bg-infosBg px-8 py-5 w-full md:w-2/6">
        <h2 className="text-xl font-serif">Contact information</h2>
        <p className="text-sm">
          Bring the table winwin survival strateges ensure proactive domination
          the end of the day going real times multiple touchpoints.
        </p>
        <ul className="flex flex-col gap-5 items-left">
          {listContact.map((item, index) => {
            return (
              <li className="flex gap-3" key={index}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 rounded-full h-12 p-3 bg-darkBg"
                />
                {item.text}
              </li>
            );
          })}
        </ul>
        <ul className="flex gap-5 mt-5">
          {listSocialMedia.map((item, index) => {
            return (
              <li key={index} className="cursor-pointer">
                <img
                  src={item}
                  alt="logoSocialMedia"
                  className="w-12 h-12 rounded-full bg-darkBg p-2"
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex w-full md:w-3/6 px-0 md:px-16 flex-col gap-3">
        <h3 className="uppercase border-t border-b border-primaryColor w-fit">
          Mail us
        </h3>
        <h2 className="font-serif text-xl font-light md:mb-0 mb-5">
          Have a question ?
        </h2>
        <form className="flex flex-col md:gap-5 gap-8 items-center md:items-baseline">
          <div className="flex md:gap-3 gap-3 md:flex-row flex-col justify-between">
            <InputBook type="text" placeholder="Name" border="dark" />
            <InputBook type="text" placeholder="Email" border="dark" />
          </div>
          <div className="flex md:gap-3 gap-3 md:flex-row flex-col  justify-between">
            <InputBook type="text" placeholder="Subject" border="dark" />
            <InputBook type="text" placeholder="Phone" border="dark" />
          </div>
          <TextArea border="dark" placeholder="Message" />
          <PrimaryButton text="Send" />
        </form>
      </div>
    </section>
  );
};

export default Main;
