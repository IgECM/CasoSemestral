import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import InicioSesion from "./pages/InicioSesion";
import Servicios from "./pages/Servicios";
import NoEncontrada from './pages/NoEncontrada';
import SolicitarCita from './pages/SolicitarCita'
import CitaConf from './pages/CitaConfirmada'
import MisCitas from './pages/MisCitas'
import Nosotros from './pages/Nosotros'


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Inicio />} />

        <Route path="/login" element={<InicioSesion />} />

        <Route path="/nosotros" element={<Nosotros />} />

        <Route path="/servicios" element={<Servicios />} />

        <Route path="/solicitar-cita" element={<SolicitarCita />} />

        <Route path="/confirm" element={<CitaConf />} />

        <Route path="/miscitas" element={<MisCitas />} />

        <Route path="*" element={<NoEncontrada />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;