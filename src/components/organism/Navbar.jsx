import React from 'react';
import Icono from '../atoms/Icono';

function Navbar(props) {
  // Esta función intercepta el clic: cancela la recarga natural del <a> 
  // y le avisa a la PlantillaPublica hacia dónde debe navegar.
  function ir(evento, ruta) {
    evento.preventDefault();
    if (props.onNavegar) {
      props.onNavegar(ruta);
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom border-dark border-1 sticky-top">
      <div className="container-fluid">
        
        <a className="navbar-brand" href="/" onClick={(e) => ir(e, '/')}>
          Veterinaria San Marcos
        </a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/" onClick={(e) => ir(e, '/')}>
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/nosotros" onClick={(e) => ir(e, '/nosotros')}>
                Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/servicios" onClick={(e) => ir(e, '/servicios')}>
                Servicios
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Citas
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/miscitas" onClick={(e) => ir(e, '/miscitas')}>
                    Mis citas
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/solicitar-cita" onClick={(e) => ir(e, '/solicitar-cita')}>
                    Solicitar Cita
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          
          <div className="d-flex align-items-center">
            <a href="/login" onClick={(e) => ir(e, '/login')} className="text-decoration-none text-dark d-flex align-items-center gap-2 custom-login-link">
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