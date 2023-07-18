import { scheduleDayData } from "../../../domain/usecases/schedule-slice";
import { useAppSelector } from "../../../store/hooks";
import PrimaryButton from "../Button/PrimaryButton";
import { scheduleDayShowPopup } from "../../../domain/usecases/schedule-slice";

interface PopupScheduleProps {
  closePopup: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const PopupSchedule = ({ closePopup }: PopupScheduleProps) => {
  const schedulesData = useAppSelector(scheduleDayData);
  const showPopup = useAppSelector(scheduleDayShowPopup);
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
              <tr>
                <th>Nom</th>
                <th>Date</th>
                <th>Nombre</th>
                <th>Action</th>
              </tr>
            </thead>
            {schedulesData ? (
              schedulesData.map((schedule, index) => {
                return (
                  <tr key={index}>
                    <td className="text-center">{schedule.name}</td>
                    <td className="text-center">
                      {schedule.dateTime.toString()}
                    </td>
                    <td className="text-center">{schedule.amount}</td>
                    <td className="text-center">
                      <PrimaryButton text="Supprimer" />
                    </td>
                  </tr>
                );
              })
            ) : (
              <li>Aucune réservation pour ce jour</li>
            )}
            <tbody></tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PopupSchedule;
