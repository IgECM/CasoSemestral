import React from 'react';
import Boton from '../atoms/Boton';
import Icono from '../atoms/Icono';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Veterinaria San Marcos</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/nosotros">Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/servicios">Servicios</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Citas
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/miscitas">Mis citas</a></li>
                <li><a className="dropdown-item" href="#">Solicitar Cita</a></li>
              </ul>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <a href="/login" className="text-decoration-none text-dark d-flex align-items-center gap-2 custom-login-link">
              <Icono tamano={22} color="#858383" />
              <span className="fw-medium">Iniciar Sesión</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;