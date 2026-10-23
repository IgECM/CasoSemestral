import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import InicioSesion from "./pages/InicioSesion";
import Servicios from "./pages/Servicios";
import Categorias from "./pages/Categorias";
import NoEncontrada from './pages/NoEncontrada';
import DetalleServicio from './pages/DetalleServicio'
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

        <Route path="/categorias" element={<Categorias />} />

        <Route path="/detalle" element={<DetalleServicio />} />

        <Route path="/confirm" element={<CitaConf />} />

        <Route path="/miscitas" element={<MisCitas />} />

        <Route path="*" element={<NoEncontrada />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;