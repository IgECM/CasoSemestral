import { Container, Row, Col } from "react-bootstrap";
import FormLogin from "../components/organism/FormLogin";

function InicioSesion(props) {
  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100">
      <Row className="w-100 justify-content-center ">
          <Col key={FormLogin.id} xs={12} md={6} lg={4} className="mb-3">
            <FormLogin/>
          </Col>
      </Row>
    </Container>
  );
}

export default InicioSesion;