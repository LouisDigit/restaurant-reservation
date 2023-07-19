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
    <section className="flex flex-col justify-center items-center gap-10 py-16">
      <h1 className="font-serif bg-success px-10 py-2 rounded-lg text-fontColor text-2xl g">
        {scheduleSuccess}
      </h1>
      <img
        src={booking}
        alt="table reservée"
        className="w-[200px] rounded-lg"
      />
    </section>
  );
};

export default Reserved;
