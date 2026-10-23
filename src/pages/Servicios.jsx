import { Container, Row, Col } from "react-bootstrap";
import { useTituloPagina } from '../hooks/useTituloPagina';

function Servicios () {
  useTituloPagina('Nuestros Servicios')

  return (
    <div>
      <h1 className="text-dark"> Nuestros Servicios</h1>
    </div>
  );
};

export default Servicios;