import menuSeparator from "./../../../../assets/LandingPage/Menu/MenuSeparator.svg";

interface ItemMenuProps {
  img: string;
  title: string;
  description: string;
  price: number;
}

const ItemMenu = ({ img, title, description, price }: ItemMenuProps) => {
  return (
    <li className="flex items-center gap-3">
      <img src={img} alt={title} className="w-16" />
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-serif font-semibold">{title}</h3>
        <p className="flex flex-col  md:flex-row gap-2  items-center ">
          {description} <img src={menuSeparator} alt="separator menu" />${price}
        </p>
      </div>
    </li>
  );
};

export default ItemMenu;
