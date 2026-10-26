import { Row, Col } from "react-bootstrap";
import servicios from "../../data/servicios";
import TarjetaServicio from "../molecules/TarjetaServicio";

function ListaServicios(props) {
  return (
    <Row className="justify-content-center g-4">
      {servicios.map((servicio) => (
        <Col xs={12} md={4} key={servicio.id}>
          <TarjetaServicio
            servicio={servicio}
            onSeleccionar={props.onSeleccionar}
          />
        </Col>
      ))}
    </Row>
  );
}

export default ListaServicios;