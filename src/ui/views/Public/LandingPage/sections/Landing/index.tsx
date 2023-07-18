import landingImage from "./../../../../../../assets/LandingPage/RestaurantView.png";
import PrimaryButton from "../../../../../components/Button/PrimaryButton";

const Landing = () => {
  return (
    <>
      <section className="flex flex-col  md:flex-row w-full bg-darkBg">
        <div className="flex flex-col text-fontColor justify-center items-center  w-full md:w-1/2 px-[10%] pt-16 md:py-0">
          <h1 className=" text-4xl text-center md:text-7xl font-bold font-serif mb-3">
            Welcome to Restaurantate
          </h1>
          <p className="text-md font-light mb-5">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy .
          </p>
          <PrimaryButton
            text="View Menu"
            fontColor={"text-fontColor"}
            bgColor={"bg-transparent"}
            bgColorHover={"hover:bg-primaryColor"}
          />
        </div>
        <div className=" w-full md:w-1/2 pt-10">
          <img
            src={landingImage}
            alt="restaurant"
            className="mb-2rem md:mb-[-9rem]"
          />
        </div>
      </section>
    </>
  );
};

export default Landing;
