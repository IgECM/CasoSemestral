import { Container, Row, Col } from "react-bootstrap";
import ListaCategorias from "../components/organism/ListaCategorias";

function Categorias(props) {
  return (
    <Container fluid className="categorias-container min-vh-100">
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <ListaCategorias />
        </Col>
      </Row>
    </Container>
  );
}

export default Categorias;