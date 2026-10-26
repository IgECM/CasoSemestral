import { Container } from "react-bootstrap";
import PlantillaPublica from "../components/templates/PlantillaPublica";
import ListaCategorias from "../components/organism/ListaCategorias";
import Titulo from "../components/atoms/Titulo";
import Parrafo from "../components/atoms/Parrafo";
import { useTituloPagina } from '../hooks/useTituloPagina';
import "../App.css";

function Servicios() {
  
  useTituloPagina('Servicios')

  return (
    <PlantillaPublica>
      <main className="fuente-kumbh pb-4" style={{ backgroundColor: '#DEDEDE' }}>
        <section className="categorias-section py-0">
        
          <div className="fondo-servicios mb-5 d-flex flex-column justify-content-center text-white">
            <Titulo nivel={1} texto="Nuestros Servicios" className="fw-bold text-white mb-2" />
            <Parrafo texto="Encuentra la atención que necesita tu mascota." className="text-light" />
          </div>

          <Container className="servicios-container pb-5 mb-5">
            <ListaCategorias />
          </Container>

        </section>
      </main>
    </PlantillaPublica>
  );
}

export default Servicios;