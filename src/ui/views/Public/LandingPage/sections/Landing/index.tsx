import React from "react";
import Header from "../../../../../components/Header";
import landingImage from "./../../../../../../assets/LandingPage/RestaurantView.png";

const Landing = () => {
  return (
    <>
      <Header />
      <section className="flex flex-row w-full bg-darkBg">
        <div className="flex flex-col text-fontColor justify-center w-1/2 px-[10%]">
          <h1 className=" text-7xl font-bold font-serif mb-3">
            Welcome to Restaurantate
          </h1>
          <p className="text-md font-light mb-5">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy .
          </p>
          <button className="border-primaryColor border w-fit text-fontColor px-8 py-3 h-14 hover:bg-primaryColor hover:text-darkBg ease-in-out duration-300">
            View Menu
          </button>
        </div>
        <div className="w-1/2 pt-10">
          <img src={landingImage} alt="restaurant" className="mb-[-9rem]" />
        </div>
      </section>
    </>
  );
};

export default Landing;
