import {
  deleteSchedule,
  scheduleDayData,
} from "../../../domain/usecases/schedule-slice";
import { useAppSelector } from "../../../store/hooks";
import PrimaryButton from "../Button/PrimaryButton";
import { scheduleDayShowPopup } from "../../../domain/usecases/schedule-slice";
import { useAppDispatch } from "../../../store/hooks";
import ErrorMessage from "../ErrorMessage";

interface PopupScheduleProps {
  closePopup: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const PopupSchedule = ({ closePopup }: PopupScheduleProps) => {
  const schedulesData = useAppSelector(scheduleDayData);
  const showPopup = useAppSelector(scheduleDayShowPopup);
  const dispatch = useAppDispatch();

  const handleDeleteSchedule = (id: string) => {
    dispatch(deleteSchedule(id));
  };

  return (
    <>
      <div
        className={`${
          showPopup ? "visible" : "hidden"
        }  h-screen w-screen  top-0 fixed left-0 flex items-center justify-center bg-darkBg bg-opacity-70 z-10`}
        onClick={closePopup}
      >
        <div className="bg-infosBg px-5 py-3">
          <table className="border-separate border-spacing-2">
            <thead>
              {schedulesData.length ? (
                <tr>
                  <th>Nom</th>
                  <th>Date</th>
                  <th>Heure</th>
                  <th>Nombre</th>
                  <th>Action</th>
                </tr>
              ) : (
                <></>
              )}
            </thead>
            <tbody>
              {schedulesData.length ? (
                schedulesData.map((schedule, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-center">{schedule.name}</td>
                      <td className="text-center">{schedule.date}</td>
                      <td className="text-center">{schedule.time}</td>
                      <td className="text-center">{schedule.amount}</td>
                      <td className="text-center">
                        <PrimaryButton
                          text="Supprimer"
                          onClick={() => handleDeleteSchedule(schedule.id)}
                        />
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td>
                    <ErrorMessage text="Aucune réservation à ce jour." />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PopupSchedule;
