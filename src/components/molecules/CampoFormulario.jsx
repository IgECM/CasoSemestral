
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Icono from "../atoms/Icono";

function CampoFormulario(props) {
  const id = props.id || props.name;

  return (
    <div className="campo-formulario ">
      <Label
        texto={props.label}
        htmlFor={id}
      />

      <div className="campo-formulario-input">
        {props.icono && (
          <Icono tipo={props.icono} tamano={20} />
        )}

        <Input
          id={id}
          name={props.name}
          type={props.type || "text"}
          placeholder={props.placeholder || ""}
          value={props.value}
          onChange={props.onChange}
          required={props.required}
        />
      </div>
    </div>
  );
}

export default CampoFormulario;
