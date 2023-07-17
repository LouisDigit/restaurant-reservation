import { Routes, Route } from "react-router-dom";
import Calendar from "../../ui/views/Private/Calendar";
import PublicLayout from "../../ui/views/Public/Layout";
import Error from "../../ui/views/Public/Error";

const PrivateRouter = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index path="/calendar" element={<Calendar />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default PrivateRouter;
