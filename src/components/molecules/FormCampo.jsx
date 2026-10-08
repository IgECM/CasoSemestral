import Label from "../atoms/Label";
import Input from "../atoms/Input";

function FormCampo(props) {
  return (
      <div className="mb-5 text-start">
        <Label htmlFor={props.id} text={props.labelText} />
        <Input id={props.id} type={props.type} varianteInput={props.varianteInput}/>
      </div>
  );
}

export default FormCampo;