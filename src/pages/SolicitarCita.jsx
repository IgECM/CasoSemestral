import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ListaServicios from "../components/organism/ListaServicios";
import FormularioSolicitudCita from "../components/organism/FormularioSolicitudCita";
import PlantillaPublica from "../components/templates/PlantillaPublica";
import Titulo from "../components/atoms/Titulo";
import { useTituloPagina } from '../hooks/useTituloPagina';

function SolicitarCita() {
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

  useTituloPagina('Solicitar Cita')

  const guardarCita = (nuevaCita) => {
    console.log("Solicitud de cita:", nuevaCita);
  };

  return (
    <PlantillaPublica>
      <Container className="py-5 mb-5">
        
        <Titulo nivel={1} className="text-dark text-align-center pb-3" texto="Selecciona un servicio"/>

        {!servicioSeleccionado ? (
  
          <ListaServicios onSeleccionar={setServicioSeleccionado} />
        ) : (
  
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8}>

              <FormularioSolicitudCita
                servicio={servicioSeleccionado}
                onEnviar={guardarCita}
                onCancelar={() => setServicioSeleccionado(null)}
              />
            </Col>
          </Row>
        )}

      </Container>
    </PlantillaPublica>
  );
}

export default SolicitarCita;