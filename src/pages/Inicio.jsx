import { Container, Row, Col } from "react-bootstrap";
import { useTituloPagina } from '../hooks/useTituloPagina';
import Navbar from "../components/organism/Navbar";
import Footer from "../components/organism/Footer";

function Inicio () {
  useTituloPagina('Inicio')

  return (
    <div>
      <Navbar />
      <h1 className="text-dark">Página de Inicio</h1>
      <Footer />
    </div>
  );
};

export default Inicio;