import { Outlet } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useAppSelector } from "../../../../store/hooks";
import { authLoading } from "../../../../domain/usecases/auth-slice";
import { scheduleDayLoading } from "../../../../domain/usecases/schedule-slice";

const PublicLayout = () => {
  const authLoad = useAppSelector(authLoading);
  const scheduleLoad = useAppSelector(scheduleDayLoading);

  return (
    <>
      {authLoad || scheduleLoad ? (
        <>
          <div className="loader-content">
            <div className="spinner"></div>
          </div>
        </>
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default PublicLayout;
