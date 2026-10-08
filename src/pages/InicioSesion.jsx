import { Container, Row, Col } from "react-bootstrap";
import FormLogin from "../components/organism/FormLogin";

function InicioSesion(props) {
  return (
    <Container fluid className=" login-container d-flex flex-column align-items-center justify-content-center min-vh-100">
      <Row className="w-100 justify-content-center mw-100 ">
          <Col xs={12} md={6} lg={4} className="login-columna">
            <FormLogin />
          </Col>
      </Row>
    </Container>
  );
}

export default InicioSesion;