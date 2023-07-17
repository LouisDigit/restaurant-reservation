import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./ui/views/Private/Dashboard";
import LandingPage from "./ui/views/Public/LandingPage";
import AboutUs from "./ui/views/Public/AboutUs";
import PublicLayout from "./ui/views/Public/Layout";
import Menu from "./ui/views/Public/Menu";
import Reservation from "./ui/views/Public/Reservation";
import Gallery from "./ui/views/Public/Gallery";
import Contact from "./ui/views/Public/Contact";
import Login from "./ui/views/Public/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login-admin" element={<Login />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/user" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
