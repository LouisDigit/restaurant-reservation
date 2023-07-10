import imgAboutUs from "./../../../../../../assets/AboutUs/imageAboutUs.png";
import background from "./../../../../../../assets/AboutUs/background.png";
import InfoIcon1 from "./../../../../../../assets/AboutUs/Infos/InfoIcon1.svg";
import InfoIcon2 from "./../../../../../../assets/AboutUs/Infos/InfoIcon2.svg";
import InfoIcon3 from "./../../../../../../assets/AboutUs/Infos/InfoIcon3.svg";
import InfoIcon4 from "./../../../../../../assets/AboutUs/Infos/InfoIcon4.svg";

const Main = () => {
  const infos = [
    {
      logo: InfoIcon1,
      title: "Fresh Product",
      description:
        "Professional consider everyone probls small niche friendly.",
    },
    {
      logo: InfoIcon2,
      title: "Skilled Chefs",
      description:
        "Professional consider everyone probls small niche friendly.",
    },
    {
      logo: InfoIcon3,
      title: "Drinks & Juices",
      description:
        "Professional consider everyone probls small niche friendly.",
    },
    {
      logo: InfoIcon4,
      title: "Vegan Cuisine",
      description:
        "Professional consider everyone probls small niche friendly.",
    },
  ];
  return (
    <section className="bg-fontColor pt-24">
      <div className="flex px-[10%]">
        <div className="w-1/2 flex flex-col justify-center gap-8">
          <h3 className="uppeercase border-t border-b border-primaryColor w-fit">
            About Us
          </h3>
          <h2 className="text-3xl font-serif font-semibold">
            Quality and Tradition
          </h2>
          <p>
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content gfshere making
            look like readable English. Many desktop publishing packages.
          </p>
        </div>
        <img
          src={imgAboutUs}
          alt="about us exemple"
          className="w-[700px] h-[650px]"
        />
      </div>

      <ul
        className="w-full flex flex-row items-center justify-center gap-12 mt-8 px-[10%] py-16"
        style={{ backgroundImage: `url(${background})` }}
      >
        {infos.map((info, index) => {
          return (
            <li
              key={index}
              className="flex flex-col gap-2 text-fontColor items-center justify-center"
            >
              <img src={info.logo} alt={info.title} />
              <h3 className="font-serif text-xl ">{info.title}</h3>
              <p className="text-center font-light text-sm">
                {info.description}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Main;
