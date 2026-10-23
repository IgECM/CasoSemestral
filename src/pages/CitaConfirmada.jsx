import React from 'react';
import { useNavigate } from 'react-router-dom';
import PlantillaPublica from '../components/templates/PlantillaPublica';
import Boton from '../components/atoms/Boton';

function CitaConf() {
  const navigate = useNavigate();

  return (
    <PlantillaPublica>
      <div className="container py-5 text-center">
        <div className="contenedor-no-encontrada login-container my-5 p-5 bg-light rounded-4 shadow-sm">
          <h1 className="titulo-h1 text-success mb-4">
            Cita fue agendada correctamente
          </h1>

          <Boton
            texto="Regresar a la página principal"
            variante="primary"
            onClick={() => navigate('/')}
          />
        </div>
      </div>
    </PlantillaPublica>
  );
}

export default CitaConf;
