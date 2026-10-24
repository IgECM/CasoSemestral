import React from 'react';
import { useNavigate } from 'react-router-dom';
import Titulo from '../atoms/Titulo';
import Parrafo from '../atoms/Parrafo';
import Imagen from '../atoms/Imagen';

function TarjetaMascota(props) {
  const navigate = useNavigate();

  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className={props.diseñoTarjetaMascota}>
        
        <div className="mb-3 d-flex flex-column align-items-center justify-content-center">
          <Imagen 
            src={props.scrTarjetaMascota} 
            alt={props.nombreTitulo} 
            className={props.diseñoImagen} 
            style={props.styleImagen} 
          />
        </div>

        <Titulo nivel={props.nivelTitulo} texto={props.nombreTitulo} className={props.diseñoTituloTarjetaMascota} />
        <Parrafo texto={props.parrafoTarjetaMascota} className={props.diseñoParrafo} />
      </div>
    </div>
  );
}

export default TarjetaMascota;