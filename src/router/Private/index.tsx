import { Routes, Route } from "react-router-dom";
import Scheduler from "../../ui/views/Private/Scheduler/index";
import PublicLayout from "../../ui/views/Public/Layout";
import Error from "../../ui/views/Public/Error";

const PrivateRouter = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index path="/scheduler" element={<Scheduler />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default PrivateRouter;
