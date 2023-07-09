import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./ui/views/Private/Dashboard";
import LandingPage from "./ui/views/Public/LandingPage";
function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<LandingPage />} />
        </Routes>
        <Routes>
          <Route path="/user" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
