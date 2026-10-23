import { useNavigate } from 'react-router-dom';
import Boton from '../components/atoms/Boton';

function CitaConf(props) {
  const navigate = useNavigate();

  return (//style={{ color: 'black'}}
    <div className="contenedor-no-encontrada login-container">
      <h1 className="titulo-h1">
        Cita fue agendada correctamente
      </h1>

      <Boton
        texto="Regresar a la página principal"
        variante="primary"
        onClick={() => navigate('/')}
      />
    </div>
  );
}

export default CitaConf;
