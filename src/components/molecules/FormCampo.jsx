import Label from "../atoms/Label";
import Input from "../atoms/Input";

function FormCampo(props) {
  return (
      <div className="mb-3 text-start">
        <Label htmlFor={props.id} text={props.labelText} varianteLabel={props.varianteLabel}/>
        <Input id={props.id} type={props.type} varianteInput={props.varianteInput}
          value={props.value} onChange={props.onChange}/>
      </div>
  );
}

export default FormCampo;