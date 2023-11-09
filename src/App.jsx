import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./app/components/utils/Navbar/Navbar";
import Contacto from "./app/pages/Contacto";
import Home from "./app/pages/Home";
import Nosotros from "./app/pages/Nosotros";
import Servicios from "./app/pages/Servicios";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
    </>
  );
}

export default App;
