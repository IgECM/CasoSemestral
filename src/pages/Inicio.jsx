import React from 'react';
import PlantillaPublica from '../components/templates/PlantillaPublica';
import Titulo from '../components/atoms/Titulo';
import Parrafo from '../components/atoms/Parrafo';
import Boton from '../components/atoms/Boton';
import { useNavigate } from 'react-router-dom';
import { FaSection } from 'react-icons/fa6';

function Inicio() {
  const navigate = useNavigate();

  return (
    <PlantillaPublica>
      <section className="inicio-gif-container">
        <div className="inicio-overlay"></div>

        <div className="container py-5 inicio-content">
          <p className="text-uppercase fw-semibold mb-2" style={{ letterSpacing: '2px' }}>
            Clínica Veterinaria San Marcos
          </p>
          <Titulo nivel={1} texto="BIENVENIDOS" className="display-3 fw-bold text-white mb-3" />
          <p className="fs-4 fw-medium text-light mb-4">
            ATENCIÓN INTEGRAL Y CARIÑO PARA TUS MASCOTAS
          </p>
          
          <div className="d-flex justify-content-center gap-3">
            <Boton 
              texto="Solicitar Cita" 
              variante="lg px-4 fw-bold" 
              onClick={() => navigate('/solicitar-cita')}
            />
            <Boton 
              texto="Nuestros Servicios" 
              variante="lg px-4 fw-bold" 
              onClick={() => navigate('/servicios')}
            />
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN DE URGENCIAS */}
      <div className="py-5 text-white text-center" style={{ backgroundColor: '#ff7b82' }}>
        <div className="container">
          <p className="fw-bold fs-5 text-uppercase mb-3" style={{ letterSpacing: '1px' }}>
            En caso de urgencia, dirigirse a nuestra sucursal en Rancagua
          </p>
          <Boton 
            texto="VER UBICACIÓN" 
            variante="light" 
            className="fw-bold text-dark px-4 py-2 rounded-pill shadow-sm"
            onClick={() => navigate('/contacto')} 
          />
        </div>
      </div>
    </PlantillaPublica>
  );
}

export default Inicio;