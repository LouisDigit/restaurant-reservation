import booking from "./../../../../assets/Booking/ImageBooking.png";
import { useAppSelector } from "../../../../store/hooks";
import { scheduleDaySuccess } from "../../../../domain/usecases/schedule-slice";
import { useEffect } from "react";
import { useAppDispatch } from "../../../../store/hooks";
import { resetSuccess } from "../../../../domain/usecases/schedule-slice";
import { useNavigate } from "react-router-dom";

const Reserved = () => {
  const scheduleSuccess = useAppSelector(scheduleDaySuccess);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!scheduleSuccess) {
      navigate("/");
    }
    return () => {
      dispatch(resetSuccess());
    };
  }, []);

  return (
    <section className="flex flex-col justify-center text-darkBg items-center gap-10 py-16">
      <div className="flex flex-col gap-3 items-center justify-center">
        <h1 className="font-serif  px-10 py-2  text-2xl ">{scheduleSuccess}</h1>
        <h2>4 rue palais Rihour, Lille 59000</h2>
        <h3>0601020399</h3>
      </div>

      <img
        src={booking}
        alt="table reservée"
        className="w-[200px] rounded-lg"
      />
    </section>
  );
};

export default Reserved;
