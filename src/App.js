import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-multi-carousel/lib/styles.css";
import { Route, Routes } from "react-router-dom";
import Admin from 'containers/AdminPage';
import Home from "containers/Home";

function App() {
  return (
    <Routes>
    <Route path="Home" element={<Home/>} />
    <Route path="/" element={<Admin/>} />
  </Routes>  );
}

export default App;
