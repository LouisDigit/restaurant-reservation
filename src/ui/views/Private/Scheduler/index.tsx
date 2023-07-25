import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import PopupSchedule from "../../../components/PopupSchedule";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  disabledPopup,
  scheduleDayShowPopup,
  getScheduleDay,
  scheduleDaySuccess,
} from "../../../../domain/usecases/schedule-slice";
import SuccessMessage from "../../../components/SuccessMessage";

function Scheduler() {
  const dispatch = useAppDispatch();
  const showPopup = useAppSelector(scheduleDayShowPopup);
  const success = useAppSelector(scheduleDaySuccess);

  useEffect(() => {}, [showPopup, success]);

  const handleDateClick = (arg: any) => {
    dispatch(getScheduleDay(arg.date));
  };

  const closePopup = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      dispatch(disabledPopup());
    }
  };

  return (
    <section className="px-[10%] py-16">
      {success ? <SuccessMessage text={success} /> : <></>}
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        dateClick={handleDateClick}
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
        }}
        height={"75vh"}
      />
      <PopupSchedule closePopup={closePopup} />
    </section>
  );
}

export default Scheduler;
