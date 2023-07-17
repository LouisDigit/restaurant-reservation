import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useAppDispatch } from "./store/hooks";
import { useEffect } from "react";
import { auth } from ".";
import { setLogin } from "./domain/usecases/auth-slice";
import PublicRouter from "./router/Public";
import PrivateRouter from "./router/Private";
import AuthGuard from "./infrastructure/Auth/AuthGuard";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          setLogin({
            username: user.displayName,
            email: user.email,
            id: user.uid,
          })
        );
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRouter />} />
        <Route
          path="/user/*"
          element={
            <AuthGuard>
              <PrivateRouter />
            </AuthGuard>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
