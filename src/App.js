import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-multi-carousel/lib/styles.css";
import { Route, Routes } from "react-router-dom";
// import Admin from "containers/AdminPage";
import Home from "containers/Home";
import NotFound from "containers/NotFound404";
import { PrimaryLayoutAdmin } from "components/Layout";
import Dashboard from "containers/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="Home" element={<Home />} />{" "}
      <Route path="/" element={<PrimaryLayoutAdmin />}>
        <Route index element={<Dashboard />} />{" "}
      </Route>{" "}
      <Route path="*" element={<NotFound />} />{" "}
    </Routes>
  );
}

export default App;
