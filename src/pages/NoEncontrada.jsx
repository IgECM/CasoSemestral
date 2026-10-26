import { useNavigate } from 'react-router-dom';
import Boton from '../components/atoms/Boton';
import PlantillaPublica from '../components/templates/PlantillaPublica';
import { useTituloPagina } from '../hooks/useTituloPagina';

function NoEncontrada(props) {
  const navigate = useNavigate();
  useTituloPagina("Página No Encontrada")

  return (
    <PlantillaPublica>
      <div className="contenedor-no-encontrada login-container">
        <h1 className="titulo-h1">
          Error 404: Pagina no encontrada
        </h1>

        <Boton
          texto="Regresar a la página principal"
          variante="primary"
          onClick={() => navigate('/')}
        />
      </div>
    </PlantillaPublica>
  );
}

export default NoEncontrada;
