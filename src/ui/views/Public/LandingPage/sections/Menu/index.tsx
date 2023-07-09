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
  return (
    <section className="px-[10%] py-16 flex">
      <div className="flex flex-col w-1/3 gap-5">
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
        <button className="bg-fontColor w-fit text-darkBg px-8 py-3 h-14 hover:bg-primaryColor ease-in-out duration-300 border border-primaryColor font-serif font-medium">
          See all dishes
        </button>
      </div>
      <div className="flex flex-col px-16 gap-3">
        <h2 className="text-xl font-serif font-semibold mb-5">Starters</h2>
        <ul className="flex flex-col gap-8">
          {starters.map((starter, index) => {
            return (
              <li className="flex items-center gap-3" key={index}>
                <img src={starter.img} alt={starter.title} className="w-16" />
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg font-serif font-semibold">
                    {starter.title}
                  </h3>
                  <p className="flex gap-2">
                    {starter.description}{" "}
                    <img src={menuSeparator} alt="separator menu" />$
                    {starter.price}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
        <h2 className="text-xl font-serif font-semibold mb-5">Main Dish</h2>
        <ul className="flex flex-col gap-8">
          {mains.map((main, index) => {
            return (
              <li className="flex items-center gap-3" key={index}>
                <img src={main.img} alt={main.title} className="w-16" />
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg font-serif font-semibold">
                    {main.title}
                  </h3>
                  <p className="flex gap-2">
                    {main.description}{" "}
                    <img src={menuSeparator} alt="separator menu" />$
                    {main.price}
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
