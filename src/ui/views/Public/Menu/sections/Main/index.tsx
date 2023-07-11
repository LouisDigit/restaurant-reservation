import MainImage from "./../../../../../../assets/Menu/Main.png";
import Starter1 from "./../../../../../..//assets/LandingPage/Menu/Dessert/Dessert1Image.png";
import Starter2 from "./../../../../../..//assets/LandingPage/Menu/Dessert/Dessert2Image.png";
import ItemMenu from "../../../../../components/Menu/Item";
import PrimaryButton from "../../../../../components/Button/PrimaryButton";

const Main = () => {
  const starters = [
    {
      img: Starter1,
      title: "Raw Scallops from Erquy",
      description: "Candied Jerusalem artichokes, truffle",
      price: 40,
    },
    {
      img: Starter2,
      title: "Spring Roll",
      description: "Candied Jerusalem artichokes, truffle",
      price: 20,
    },
    {
      img: Starter1,
      title: "French Onion Soup",
      description: "Candied Jerusalem artichokes, truffle",
      price: 25,
    },
    {
      img: Starter2,
      title: "Tomato Bruschetta",
      description: "Candied Jerusalem artichokes, truffle",
      price: 30,
    },
  ];
  return (
    <section className="flex md:flex-row flex-col md:px-[10%] md:items-start items-center py-24">
      <img src={MainImage} alt="main menu" className="w-[350px] h-[500px]" />
      <div className="flex flex-col px-4 md:px-16 gap-3 mt-5 md:mt-0">
        <h2 className="text-xl font-serif font-semibold mb-5">Starters</h2>
        <ul className="flex flex-col gap-2 mb-8">
          {starters.map((starter, index) => {
            return (
              <ItemMenu
                index={index}
                img={starter.img}
                title={starter.title}
                description={starter.description}
                price={starter.price}
              />
            );
          })}
        </ul>
        <PrimaryButton
          text="See all dishes"
          fontColor={"text-primaryColor"}
          fontColorHover={"hover:text-darkBg"}
          bgColor={"bg-transparent"}
          bgColorHover={"hover:bg-primaryColor"}
        />
      </div>
    </section>
  );
};

export default Main;
