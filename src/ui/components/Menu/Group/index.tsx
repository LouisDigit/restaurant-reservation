import PrimaryButton from "../../Button/PrimaryButton";
import ItemMenu from "../Item";

interface Item {
  img: string;
  title: string;
  description: string;
  price: number;
}

interface GroupMenuProps {
  mainImage: string;
  itemList: Array<Item>;
}

const GroupMenu = ({ mainImage, itemList }: GroupMenuProps) => {
  return (
    <section className="flex md:flex-row flex-col md:px-[10%] md:items-start items-center py-24">
      <img src={mainImage} alt="main menu" className="w-[350px] h-[500px]" />
      <div className="flex flex-col px-4 md:px-16 gap-3 mt-5 md:mt-0">
        <h2 className="text-xl font-serif font-semibold mb-5">Starters</h2>
        <ul className="flex flex-col gap-2 mb-8">
          {itemList.map((starter, index) => {
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

export default GroupMenu;
