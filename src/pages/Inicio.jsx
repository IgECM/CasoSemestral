import React from 'react';
import PlantillaPublica from '../components/templates/PlantillaPublica';
import Titulo from '../components/atoms/Titulo';
import Parrafo from '../components/atoms/Parrafo';
import Boton from '../components/atoms/Boton';
import Imagen from '../components/atoms/Imagen';
import TarjetaMascota from '../components/molecules/TarjetaMascota';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaCat, FaPaw, FaDog } from "react-icons/fa";
import Icono from "../components/atoms/Icono";
import { useNavigate } from 'react-router-dom';
import { useTituloPagina } from '../hooks/useTituloPagina';

function Inicio() {
  const navigate = useNavigate();
  useTituloPagina('Inicio')

  return (
    <PlantillaPublica>

      <section className="inicio-gif-container">
        <div className="inicio-overlay"></div>

        <div className="container py-5 inicio-content fuente-kumbh">
          <Parrafo className="text-uppercase fw-semibold mb-1" texto="Clínica Veterinaria San Marcos" style={{ letterSpacing: '2px' }} />
          <Titulo nivel={1} texto="BIENVENIDOS" className="display-3 fw-bold text-white mb-3 fuente-kumbh" />
          <Parrafo className="fs-4 fw-medium text-light mb-4" texto="ATENCIÓN INTEGRAL Y CARIÑO PARA TUS MASCOTAS" />

          <div className="d-flex justify-content-center gap-3">
            <Boton
              texto="Solicitar Cita"
              variante="light fw-bold px-4 py-2 rounded-pill shadow-sm"
              onClick={() => navigate('/solicitar-cita')}
            />
            <Boton
              texto="Nuestros Servicios"
              variante="light fw-bold text-dark px-4 py-2 rounded-pill shadow-sm"
              onClick={() => navigate('/servicios')}
            />
          </div>
        </div>
      </section>


      <section className="py-5 text-white text-center fuente-kumbh seccion-urgencia" style={{ backgroundColor: '#ff7b82' }}>
        <div className="m-4 justify-content-center">
          <Parrafo className="fw-bold fs-5 text-uppercase mb-3" texto="En caso de urgencia, dirigirse a nuestra sucursal en Rancagua" style={{ letterSpacing: '1px' }} />
          <a
            href="https://www.google.com/maps/search/?api=1&query=Rancagua"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light fw-bold px-4 py-2 rounded-pill shadow-sm"
          >
            Ver Ubicación
          </a>
        </div>
      </section>


      <section className="seccion-veterinaria-contexto fuente-kumbh">
        <Imagen
          src="/img/gato-izq-inicio.png"
          alt="Gato decorativo Izquierda"
          className="img-mascota-izq d-none d-lg-block"
        />

        <div className="container text-center px-4" style={{ maxWidth: '700px' }}>
          <Titulo nivel={2} texto="VETERINARIA SAN MARCOS" className="fw-bold text-dark mb-4 fuente-kumbh" style={{fontSize: '30px'}}/>  
          <Parrafo
            texto="En nuestra clínica, nos dedicamos apasionadamente al cuidado y bienestar de tus compañeros peludos. Somos un equipo comprometido de profesionales dedicados a proporcionar la mejor atención médica y amorosa a tus mascotas."
            className="text-secondary mb-3"
          />
          <Parrafo
            texto="En nuestra veterinaria, no solo nos preocupamos por la salud física de tus mascotas, sino también por su bienestar emocional. Nuestro objetivo es crear un ambiente cálido y acogedor donde tanto tú como tus amigos peludos se sientan cómodos y seguros."
            className="text-secondary"
          />
        </div>

        <Imagen
          src="/img/perro-der-inicio.png"
          alt="Perro decorativo Derecha"
          className="img-mascota-der d-none d-lg-block"
        />
      </section>


      <section className="bloque-fondo fuente-kumbh">
        <div className="container py-4">
          <div className="row g-4 text-center">

            <div className="col-md-4">
              <div className="fs-1 mb-2">
                <Icono icono={FaCat} tamano={30} />
              </div>
              <Titulo nivel={3} texto="Nuestra Misión" className="h5 fw-bold mb-3" />
              <Parrafo texto="Somos un equipo comprometido con la salud de tu mascota, con diversas especialidades brindando la mejor atención integral." className="small text-light" />
            </div>

            <div className="col-md-4">
              <div className="fs-1 mb-2">
                <Icono icono={FaPaw} tamano={30} />
              </div>
              <Titulo nivel={3} texto="¿Quiénes Somos?" className="h5 fw-bold mb-3" />
              <Parrafo texto="Somos un equipo formado por grandes profesionales comprometidos con la salud de tu mascota." className="small text-light" />
            </div>

            <div className="col-md-4">
              <div className="fs-1 mb-2">
                <Icono icono={FaDog} tamano={35} />
              </div>
              <Titulo nivel={3} texto="Nuestro Objetivo" className="h5 fw-bold mb-3" />
              <Parrafo texto="Nuestra meta es ser el centro veterinario de excelencia, reconocido por la calidad de nuestro equipo profesional." className="small text-light" />
            </div>

          </div>
        </div>
      </section>


      <section className="seccion-categorias p-5 fuente-kumbh">
        <div className="container text-center p-5">

          <div className="mb-5">
            <Titulo nivel={2} texto="NUESTRAS CATEGORÍAS" className="fw-bold text-dark fuente-kumbh" style={{fontSize: '30px'}} />
            <Parrafo texto="Explora las áreas de atención y especialidades pensadas para cada tipo de mascota" className="text-secondary " />
          </div>

          <div className="row g-4 justify-content-center">

            <TarjetaMascota
              diseñoTarjetaMascota="card p-4 shadow-sm h-100 d-flex flex-column text-center tarjeta-categoria"
              scrTarjetaMascota="/img/gatoTarjetaMascota.png"
              diseñoImagen="rounded-circle shadow-sm object-fit-cover border border-dark border-2"
              styleImagen={{ width: '80px', height: '80px' }}
              nivelTitulo={4}
              nombreTitulo="Felinos"
              diseñoTituloTarjetaMascota="fw-bold mb-2 text-dark"
              parrafoTarjetaMascota="Atención especializada en un ambiente tranquilo y adaptado para reducir su estrés."
              diseñoParrafo="text-secondary small mb-4"
            />

            <TarjetaMascota
              diseñoTarjetaMascota="card p-4 shadow-sm h-100 d-flex flex-column text-center tarjeta-categoria"
              scrTarjetaMascota="/img/perroTarjetaMascota.png"
              diseñoImagen="rounded-circle shadow-sm object-fit-cover border border-dark border-2"
              styleImagen={{ width: '80px', height: '80px' }}
              nivelTitulo={4}
              nombreTitulo="Caninos"
              diseñoTituloTarjetaMascota="fw-bold mb-2 text-dark"
              parrafoTarjetaMascota="Medicina preventiva, planes de vacunación y controles generales para perros."
              diseñoParrafo="text-secondary small mb-4"
            />

            <TarjetaMascota
              diseñoTarjetaMascota="card p-4 shadow-sm h-100 d-flex flex-column text-center tarjeta-categoria "
              scrTarjetaMascota="/img/conejoYLoroTarjetaMascota.png"
              diseñoImagen="rounded-circle shadow-sm object-fit-cover border border-dark border-2"
              styleImagen={{ width: '80px', height: '80px' }}
              nivelTitulo={4}
              nombreTitulo="Exóticos y Otros"
              diseñoTituloTarjetaMascota="fw-bold mb-2 text-dark"
              parrafoTarjetaMascota="Cuidados específicos y asesoría en tenencia responsable para conejos y aves."
              diseñoParrafo="text-secondary small mb-4"
            />

          </div>
        </div>
      </section>


      <section className="seccion-visitanos-y-mapa py-5 fuente-kumbh">
        <div className="container text-center">

          <div className="mb-3">
            <Titulo nivel={2} texto="VISÍTANOS" className="fw-bold text-dark mb-2 fuente-kumbh" style={{fontSize: '30px' }}/>
            <Parrafo texto="¡Visítanos y descubre por qué somos la mejor opción para el cuidado de tu mascota!" className="text-secondary" />
          </div>

          <div className="card p-4 shadow-sm tarjeta-mapa">

            <div className="mb-4">
              <iframe
                title="Ubicación Veterinaria San Marcos"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52823.83884838333!2d-70.77989861628424!3d-34.15938959333225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96634367bdef13d3%3A0xd973fc8366ad54f7!2sRancagua%2C%20O'Higgins!5e0!3m2!1ses-419!2scl!4v1792800341838!5m2!1ses-419!2scl"
                className="mapa-iframe"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>


            <div className="row text-start align-items-center g-3">
              <div className="col-12 col-md-6 d-flex align-items-start">
                <div className="fs-3 me-3 text-primary">
                  <Icono icono={FaMapMarkerAlt} tamano={24} />
                </div>
                <div>
                  <Titulo nivel={6}  texto= "Sucursal Principal:" className="fw-bold mb-1"/>
                  <Parrafo texto= "Rancagua, Región de O'Higgins" className="text-secondary small mb-0"/>
                </div>
              </div>

              <div className="col-12 col-md-6 d-flex flex-column text-md-end">
                <div className="d-flex align-items-center justify-content-md-end mb-1">
                  <span className="small text-secondary me-2">Teléfono: (+56) 9 6121 6356</span>
                  <span className="text-primary">
                    <Icono icono={FaPhoneAlt} tamano={18} />
                  </span>
                </div>

                <div className="d-flex align-items-center justify-content-md-end">
                  <span className="small text-secondary me-2">Atención 24 Horas</span>
                  <span className="text-primary">
                    <Icono icono={FaClock} tamano={18} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PlantillaPublica>
  );
}

export default Inicio;