import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import InicioSesion from "./pages/InicioSesion"
import './App.css'


import { BrowserRouter, Routes, Route } from "react-router-dom";

import Categorias from "./pages/Categorias";
import NoEncontrada from './pages/NoEncontrada'


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<InicioSesion />} />

        <Route path="/categorias" element={<Categorias />} />

        <Route path="*" element={<NoEncontrada />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;