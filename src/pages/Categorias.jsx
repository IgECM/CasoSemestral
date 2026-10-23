import { Container } from "react-bootstrap";
import ListaCategorias from "../components/organism/ListaCategorias";
import "../App.css";

function Categorias() {
  return (
    <Container className="categorias-container py-5">
      <header className="text-center mb-5">
        <p className="text-primary fw-semibold mb-2">
          VETERINARIA SAN MARCOS
        </p>

        <h1 className="fw-bold titulo-h1">
          Categorías de servicios
        </h1>

        <p className="text-muted">
          Encuentra la atención que necesita tu mascota.
        </p>
      </header>

      <ListaCategorias />
    </Container>
  );
}

export default Categorias;
