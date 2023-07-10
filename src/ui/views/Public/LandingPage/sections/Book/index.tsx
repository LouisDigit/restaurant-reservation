import Background from "./../../../../../../assets/LandingPage/Book/background.png";
import PrimaryButton from "../../../../../components/Button/PrimaryButton";
import InputBook from "../../../../../components/Input/InputBook";
const Book = () => {
  return (
    <section
      style={{ backgroundImage: `url(${Background})` }}
      className="bg-cover bg-no-repeat h-[600px] md:h-[850px]  px-4 py-5 md:px-[20%] md:py-[10%]"
    >
      <form className="h-full w-full flex flex-col justify-center items-center px-4 md:px-[30%] gap-8 text-fontColor bg-darkBg bg-opacity-90">
        <h3 className="uppeercase border-t border-b border-primaryColor w-fit ">
          Reservation
        </h3>
        <h2 className="text-2xl font-serif font-semibold">
          Book your table now
        </h2>
        <div className="hidden md:flex flex-col md:flex-row  gap-3">
          <InputBook type="text" name="name" placeholder="Name" />
          <InputBook type="text" name="email" placeholder="Email" />
        </div>
        <div className=" hidden md:flex flex-col md:flex-row gap-3">
          <InputBook type="text" name="person" placeholder="Person" />
          <InputBook type="text" name="timing" placeholder="Timing" />
          <InputBook type="text" name="date" placeholder="Date" />
        </div>
        <div className="flex md:hidden flex-col gap-3">
          <InputBook type="text" name="name" placeholder="Name" />
          <InputBook type="text" name="email" placeholder="Email" />
          <InputBook type="text" name="person" placeholder="Person" />
          <InputBook type="text" name="timing" placeholder="Timing" />
          <InputBook type="text" name="date" placeholder="Date" />
        </div>
        <PrimaryButton
          text="See all dishes"
          bgColor={"bg-fontColor"}
          bgColorHover={"hover:bg-primaryColor"}
          borderColor={"border-white"}
          borderColorHover={"hover:border-primaryColor"}
        />
      </form>
    </section>
  );
};

export default Book;
