function Parrafo(props) {
  return (
    <p className={props.className} style={props.style}>
      {props.texto}
    </p>
  );
}

export default Parrafo;