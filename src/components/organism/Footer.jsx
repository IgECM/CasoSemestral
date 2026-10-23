import { Container } from 'react-bootstrap'
import React from 'react';

function Footer(props) {
  return (
    <footer className="vsm-footer py-4 mt-auto bg-dark text-white">
      <div className="container d-flex flex-column flex-md-row justify-content-between gap-3">
        <div>
          <strong>Veterinaria San Marcos</strong>
          <div className="small opacity-75">Cuidando mascotas en Rancagua desde 2009</div>
        </div>
        <ul className="list-unstyled small mb-0">
          <li>Rancagua, Región de O'Higgins</li>
          <li>+56 9 0000 0000</li>
          <li>contacto@vetsanmarcos.cl</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;