import { Container, Row, Col } from "react-bootstrap";
import FormLogin from "../components/organism/FormLogin";

function InicioSesion(props) {
  return (
    <Container>
      <Row>
        {props.inicio.map((m) => (
          <Col key={m.id} xs={12} md={6} lg={4} className="mb-3">
            <FormLogin/>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default InicioSesion;