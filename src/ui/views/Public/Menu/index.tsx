import Banner from "../../../components/Banner";
import Main from "./sections/Main";
import Top from "./sections/Top";
import StarterBanner from "./../../../../assets/Menu/Banner/Starter.png";
import GroupMenu from "../../../components/Menu/Group";
import Starter1 from "./../../../../assets/LandingPage/Menu/Starter/Starter1Image.png";
import Starter2 from "./../../../../assets/LandingPage/Menu/Starter/Starter2Image.png";
import Starter3 from "./../../../../assets/LandingPage/Menu/Starter/Starter3Image.png";
import Starter4 from "./../../../../assets/LandingPage/Menu/Starter/Starter4Image.png";
import StarterMainImage from "./../../../../assets/Menu/MainStarter.png";
import DessertMainImage from "./../../../../assets/Menu/MainDessert.png";
import MainImage from "./../../../../assets/Menu/Main.jpg";
import Main1 from "./../../../../assets/LandingPage/Menu/Main/Main1Image.png";
import Main2 from "./../../../../assets/LandingPage/Menu/Main/Main2Image.png";
import Main3 from "./../../../../assets/LandingPage/Menu/Main/Main3Image.png";
import Main4 from "./../../../../assets/LandingPage/Menu/Main/Main4Image.png";
import Dessert1 from "./../../../../assets/LandingPage/Menu/Dessert/Dessert1Image.png";
import Dessert2 from "./../../../../assets/LandingPage/Menu/Dessert/Dessert2Image.png";

import MainBanner from "./../../../../assets/Menu/Banner/Main.png";
import Book from "../LandingPage/sections/Book";

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
    <>
      <Top />
      <GroupMenu mainImage={StarterMainImage} itemList={starters} />
      <Banner background={StarterBanner} />
      <GroupMenu mainImage={MainImage} itemList={mains} />
      <Banner background={MainBanner} />
      <GroupMenu mainImage={DessertMainImage} itemList={desserts} />
      <Book />
    </>
  );
};

export default Menu;
