import { Container, Row, Col } from "react-bootstrap";
import ListaCategorias from "../components/organism/ListaCategorias";

function Categorias() {
    return (
        <Container fluid className="categorias-container min-vh-100">

            <Row className="justify-content-center">
                <Col xs={12} className="text-center">
                    <h1>Categorías</h1>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col xs={12} md={10} lg={8}>
                    <ListaCategorias />
                </Col>
            </Row>

        </Container>
    );
}

export default Categorias;