//npm install react-icons
//React icons instalado para este atomo
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
