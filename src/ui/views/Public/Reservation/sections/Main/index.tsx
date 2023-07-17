import PrimaryButton from "../../../../../components/Button/PrimaryButton";
import InputBook from "../../../../../components/Input/InputBook";
import BookingImage from "./../../../../../../assets/Booking/ImageBooking.png";
const Main = () => {
  return (
    <section className="flex md:gap-0 gap-10 flex-col md:flex-row px-0 md:px-[10%] py-16 items-center">
      <div className="flex flex-col gap-3 w-full md:w-1/2 px-5">
        <h3 className="uppeercase border-t border-b border-primaryColor w-fit text-xl">
          Réserver
        </h3>
        <p className="text-sm">
          The people, food and the prime locations make Rodich the perfect place
          good friends & family to come together and have great time.
        </p>
        <form className="flex flex-col md:grid md:grid-cols-2 grid-rows-3 gap-5 mb-5">
          <InputBook type="text" placeholder="Name" border="dark" />
          <InputBook type="text" placeholder="Email" border="dark" />
          <InputBook type="text" placeholder="Phone" border="dark" />
          <InputBook type="text" placeholder="Date" border="dark" />
          <InputBook type="text" placeholder="Time" border="dark" />
          <InputBook type="text" placeholder="Person" border="dark" />
        </form>
        <PrimaryButton text="Réserver une table" />
      </div>
      <div className="flex md:w-1/2 w-full items-center justify-center">
        <img
          src={BookingImage}
          alt="main reservation"
          className="w-[250px] h-[450px] md:w-[350px] md:h-[500px] mx-center"
        />
      </div>
    </section>
  );
};

export default Main;
