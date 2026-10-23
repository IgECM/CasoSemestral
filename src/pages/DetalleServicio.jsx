import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FormularioSolicitudCita from "../components/organism/FormularioSolicitudCita";

function DetalleServicio() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const servicio = {
    nombre: "Consulta veterinaria general",
    descripcion:
      "Evaluación general de salud para perros y gatos.",
    precio: 20000,
  };

  const guardarCita = (nuevaCita) => {
    console.log("Solicitud de cita:", nuevaCita);

    // Más adelante, conectar con el archivo de datos CRUD.
  };

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          {!mostrarFormulario ? (
            <div className="card shadow-sm p-4">
              <h2 style={{color: 'black'}}>{servicio.nombre}</h2>

              <p>{servicio.descripcion}</p>

              <p>
                <strong>Precio:</strong>{" "}
                ${servicio.precio.toLocaleString("es-CL")} CLP
              </p>

              <button
                className="btn btn-primary"
                onClick={() => setMostrarFormulario(true)}
              >
                Solicitar cita
              </button>
            </div>
          ) : (
            <FormularioSolicitudCita
              servicio={servicio}
              onEnviar={guardarCita}
              onCancelar={() => setMostrarFormulario(false)}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default DetalleServicio;
