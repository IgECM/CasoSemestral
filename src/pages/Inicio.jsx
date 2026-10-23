import { Container, Row, Col } from "react-bootstrap";
import { useTituloPagina } from '../hooks/useTituloPagina';

function Inicio () {
  useTituloPagina('Inicio')

  return (
    <div>
      <h1 className="text-dark">Página de Inicio</h1>
    </div>
  );
};

export default Inicio;