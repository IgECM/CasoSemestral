function Boton(props) {
  const variante = props.variante || "primary";
  return (
    <button className={`btn btn-${variante}`} onClick={props.onClick}>
      {props.texto}
    </button>
  );
}

export default Boton;