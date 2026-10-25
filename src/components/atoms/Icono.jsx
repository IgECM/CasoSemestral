//npm install react-icons para instalar los inconos
import { FaUser } from "react-icons/fa";

function Icono(props) {
  const IconoSeleccionado = props.icono || FaUser;

  return (
    <IconoSeleccionado
      size={props.tamano || 20}
      color={props.color || "currentColor"}
      title={props.titulo || ""}
    />
  );
}

export default Icono;
