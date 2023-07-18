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
  setScheduleDay,
} from "../../../../domain/usecases/schedule-slice";

function Scheduler() {
  const dispatch = useAppDispatch();
  const showPopup = useAppSelector(scheduleDayShowPopup);

  useEffect(() => {}, [showPopup]);

  const events: object[] = [
    { title: "Midi : 15", date: "2023-07-18" },
    { title: "Soir : 4", date: "2023-07-18" },
  ];

  const schedules = [
    {
      name: "Client 1",
      dateTime: new Date("2023-07-18"),
      amount: 1,
    },
    {
      name: "Client 2",
      dateTime: new Date("2023-07-18"),
      amount: 1,
    },
    {
      name: "Client 3",
      dateTime: new Date("2023-07-18"),
      amount: 1,
    },
  ];

  const handleDateClick = (arg: any) => {
    dispatch(setScheduleDay(arg.date));
  };

  const closePopup = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      dispatch(disabledPopup());
    }
  };

  const listReservation = [
    {
      name: "Client 1",
      date: "2023-07-18T12:00:00",
      number: 2,
    },
    {
      name: "Client 2",
      date: "2023-07-18T12:30:00",
      number: 2,
    },
    {
      name: "Client 3",
      date: "2023-07-18T12:45:00",
      number: 2,
    },
  ];

  return (
    <section className="px-[10%] py-16">
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        events={events}
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
