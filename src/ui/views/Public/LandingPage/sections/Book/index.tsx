import Background from "./../../../../../../assets/LandingPage/Book/background.png";
import PrimaryButton from "../../../../../components/Button/PrimaryButton";
import InputBook from "../../../../../components/Input/InputBook";
import { useEffect, useState } from "react";
import { BookCredential } from "../../../../../../domain/entities/schedule-types";
import { useAppDispatch, useAppSelector } from "../../../../../../store/hooks";
import {
  addSchedule,
  scheduleDayLoading,
} from "../../../../../../domain/usecases/schedule-slice";
import { scheduleDaySuccess } from "../../../../../../domain/usecases/schedule-slice";

const Book = () => {
  const dispatch = useAppDispatch();
  const scheduleLoad = useAppSelector(scheduleDayLoading);
  const scheduleSuccess = useAppSelector(scheduleDaySuccess);

  useEffect(() => {}, [scheduleLoad, scheduleSuccess]);

  const [bookCredential, setBookCredential] = useState<BookCredential>({
    name: "",
    date: new Date(),
    amount: 0,
    timing: "",
    email: "",
  });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBookCredential((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addSchedule(bookCredential));
  };

  return (
    <>
      {scheduleLoad ? (
        <>
          <div className="loader-content">
            <div className="spinner"></div>
          </div>
        </>
      ) : (
        <section
          style={{ backgroundImage: `url(${Background})` }}
          className="bg-cover bg-no-repeat h-[600px] md:h-[850px]  px-4 py-5 md:px-[20%] md:py-[10%]"
        >
          <form
            onSubmit={handleSubmit}
            className="h-full w-full flex flex-col justify-center items-center px-4 md:px-[30%] gap-8 text-fontColor bg-darkBg bg-opacity-90"
          >
            <h3 className="uppeercase border-t border-b border-primaryColor w-fit ">
              Reservation
            </h3>
            {scheduleSuccess ? (
              <p className="text-white rounded-lg w-fit px-5 py-2 textcenter bg-success">
                {scheduleSuccess}
              </p>
            ) : (
              <></>
            )}
            <h2 className="text-2xl font-serif font-semibold">
              Book your table now
            </h2>
            <div className="hidden md:flex flex-col md:flex-row  gap-3">
              <InputBook
                type="text"
                required={true}
                name="name"
                placeholder="Name"
                onChange={handleInput}
              />
              <InputBook
                type="text"
                name="email"
                onChange={handleInput}
                placeholder="Email"
              />
            </div>
            <div className=" hidden md:flex flex-col md:flex-row gap-3">
              <InputBook
                type="number"
                onChange={handleInput}
                name="amount"
                placeholder="Person"
              />
              <InputBook
                required={true}
                type="time"
                name="timing"
                placeholder="Timing"
                onChange={handleInput}
              />
              <InputBook type="date" name="date" placeholder="Date" />
            </div>

            <PrimaryButton
              type="submit"
              text="See all dishes"
              bgColor={"bg-fontColor"}
              bgColorHover={"hover:bg-primaryColor"}
              borderColor={"border-white"}
              borderColorHover={"hover:border-primaryColor"}
            />
          </form>
        </section>
      )}
    </>
  );
};

export default Book;
