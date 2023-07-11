import imageMenu from "./../../../../../../assets/LandingPage/SpecialOfferImage.png";
import Starter1 from "./../../../../../../assets/LandingPage/Menu/Starter/Starter1Image.png";
import Starter2 from "./../../../../../../assets/LandingPage/Menu/Starter/Starter2Image.png";
import Starter3 from "./../../../../../../assets/LandingPage/Menu/Starter/Starter3Image.png";
import Starter4 from "./../../../../../../assets/LandingPage/Menu/Starter/Starter4Image.png";
import menuSeparator from "./../../../../../../assets/LandingPage/Menu/MenuSeparator.svg";
import Main1 from "./../../../../../../assets/LandingPage/Menu/Main/Main1Image.png";
import Main2 from "./../../../../../../assets/LandingPage/Menu/Main/Main2Image.png";
import Main3 from "./../../../../../../assets/LandingPage/Menu/Main/Main3Image.png";
import Main4 from "./../../../../../../assets/LandingPage/Menu/Main/Main4Image.png";
import Dessert1 from "./../../../../../..//assets/LandingPage/Menu/Dessert/Dessert1Image.png";
import Dessert2 from "./../../../../../..//assets/LandingPage/Menu/Dessert/Dessert2Image.png";
import PrimaryButton from "../../../../../components/Button/PrimaryButton";
import ItemMenu from "../../../../../components/Menu/Item";

const Menu = () => {
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
      img: Starter3,
      title: "French Onion Soup",
      description: "Candied Jerusalem artichokes, truffle",
      price: 25,
    },
    {
      img: Starter4,
      title: "Tomato Bruschetta",
      description: "Candied Jerusalem artichokes, truffle",
      price: 30,
    },
  ];

  const mains = [
    {
      img: Main1,
      title: "Grilled Salmon with Dil Sauce",
      description: "Candied Jerusalem artichokes, truffle",
      price: 40,
    },
    {
      img: Main2,
      title: "Roast Beef with Vegetable",
      description: "Candied Jerusalem artichokes, truffle",
      price: 20,
    },
    {
      img: Main3,
      title: "Marrkesh Vegetetarian Curruy",
      description: "Candied Jerusalem artichokes, truffle",
      price: 25,
    },
    {
      img: Main4,
      title: "Spicy Vegan Potato Curry",
      description: "Candied Jerusalem artichokes, truffle",
      price: 30,
    },
  ];

  const desserts = [
    {
      img: Dessert1,
      title: "Apple Pie with Cream",
      description: "Candied Jerusalem artichokes, truffle",
      price: 40,
    },
    {
      img: Dessert2,
      title: "Lemon Meringue Pie",
      description: "Candied Jerusalem artichokes, truffle",
      price: 20,
    },
  ];
  return (
    <section className="px-[10%] py-16 flex flex-col items-center md:items-start md:flex-row">
      <div className="flex flex-col w-full md:w-1/3 gap-5">
        <h3 className="uppeercase border-t border-b border-primaryColor w-fit">
          Menu
        </h3>
        <h2 className="text-xl font-serif font-semibold">
          Try Our Special Offers
        </h2>
        <p className="text-lg font-light">
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content making it look
          like readable English.{" "}
        </p>
        <img src={imageMenu} alt="menu du jour" className="w-[24rem]" />
        <PrimaryButton
          text="See all dishes"
          fontColor={"text-bgDark"}
          bgColor={"bg-transparent"}
          bgColorHover={"hover:bg-primaryColor"}
        />
      </div>
      <div className="flex flex-col px-4 md:px-16 gap-3 mt-5 md:mt-0">
        <h2 className="text-xl font-serif font-semibold mb-5">Starters</h2>
        <ul className="flex flex-col gap-2">
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
        <h2 className="text-xl font-serif font-semibold mb-5">Main Dish</h2>
        <ul className="flex flex-col gap-2">
          {mains.map((main, index) => {
            return (
              <li className="flex items-center gap-3" key={index}>
                <img src={main.img} alt={main.title} className="w-16" />
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg font-serif font-semibold">
                    {main.title}
                  </h3>
                  <p className="flex flex-col md:flex-row items-center gap-2">
                    {main.description}{" "}
                    <img src={menuSeparator} alt="separator menu" />$
                    {main.price}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        <h2 className="text-xl font-serif font-semibold mb-5">Dessert</h2>
        <ul className="flex flex-col gap-2">
          {desserts.map((dessert, index) => {
            return (
              <li className="flex items-center gap-3" key={index}>
                <img src={dessert.img} alt={dessert.title} className="w-16" />
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg font-serif font-semibold">
                    {dessert.title}
                  </h3>
                  <p className="flex flex-col md:flex-row gap-2  items-center ">
                    {dessert.description}{" "}
                    <img src={menuSeparator} alt="separator menu" />$
                    {dessert.price}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Menu;
