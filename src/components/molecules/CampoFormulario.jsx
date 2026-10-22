import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Icono from "../atoms/Icono";

function CampoFormulario(props) {
  return (
    <div className="campo-formulario">
      <Label texto={props.label} />

      <div className="campo-formulario-input">
        {props.icono && (
          <Icono
            tipo={props.icono}
            tamano={20}
          />
        )}

        <Input
          type={props.type || "text"}
          placeholder={props.placeholder || ""}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
}

export default CampoFormulario;
