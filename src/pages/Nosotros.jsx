import React from 'react';
import PlantillaPublica from '../components/templates/PlantillaPublica';
import Titulo from '../components/atoms/Titulo';
import Parrafo from '../components/atoms/Parrafo';
import Imagen from '../components/atoms/Imagen';
import TarjetaNosotros from '../components/molecules/TarjetaNosotros';
import { useTituloPagina } from '../hooks/useTituloPagina';

function Nosotros() {
  useTituloPagina('Nosotros')

  return (
    <PlantillaPublica>
      <div className="fuente-kumbh py-4" style={{ backgroundColor: '#DEDEDE' }}>

        <section className="container py-5 border-bottom border-black">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <Imagen
                src="/img/clinica.jpg"
                alt="Instalaciones de Veterinaria San Marcos en Rancagua"
                className="img-fluid rounded shadow-lg"
              />
            </div>

            <div className="col-lg-6 px-lg-5">
              <Titulo nivel={1} texto="Sobre Nosotros" className="text-dark fw-bold mb-4 fuente-kumbh" />
              <Parrafo
                texto="Veterinaria San Marcos es una clínica veterinaria ubicada en Rancagua, Región del Libertador General Bernardo O'Higgins. Fuimos fundados en 2009 con la misión de entregar atención de calidad y cariño a cada mascota que cruza nuestras puertas."
                className="fs-5 text-secondary mb-3"
              />
              <Parrafo
                texto="Atendemos mascotas domésticas, principalmente perros y gatos, aunque también somos especialistas en el cuidado de conejos y aves. Con un promedio de 25 pacientes al día, trabajamos incansablemente para mejorar nuestros procesos y brindarte un servicio rápido y eficiente."
                className="fs-5 text-secondary"
              />
            </div>
          </div>
        </section>


        <section className="rounded-4 p-5 text-center mt-5 shadow-sm mb-5">
          <Titulo nivel={2} texto="Conoce a Nuestro Equipo" className="mb-5 text-dark fw-bold fuente-kumbh" />
          <div className="mb-5">
            <Imagen
              src="/img/Trabajadores grupal.jpg"
              alt="Equipo de trabajo de Veterinaria San Marcos"
              className="rounded-4 shadow-sm"
              style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
            />
          </div>
        </section>


        <section className="container py-5 my-5 mx-auto">
          <div className="row g-4 justify-content-center">
            <div className="col-12 col-md-4">
              <TarjetaNosotros cantidad="3" cargo="Médicos Veterinarios" />
            </div>

            <div className="col-12 col-md-4">
              <TarjetaNosotros cantidad="1" cargo="Técnico Veterinario" />
            </div>

            <div className="col-12 col-md-4">
              <TarjetaNosotros cantidad="1" cargo="Recepcionista" />
            </div>
          </div>
        </section>

      </div>
    </PlantillaPublica>
  );
}

export default Nosotros;