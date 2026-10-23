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


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Inicio />} />

        <Route path="/login" element={<InicioSesion />} />

        <Route path="/servicios" element={<Servicios />} />

        <Route path="/categorias" element={<Categorias />} />

        <Route path="*" element={<NoEncontrada />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;