function FormCampo(props) {
  return (
      <div className="mb-3">
        <Label for={props.id} text={props.labelText} />
        <Input id={props.id} type={props.type} />
      </div>
  );
}

export default FormCampo;