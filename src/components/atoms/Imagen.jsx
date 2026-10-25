function Imagen(props) {
  return (
    <img 
      src={props.src} 
      alt={props.alt || "Imagen"} 
      className={props.className || "img-fluid"} 
      style={props.style}
    />
  );
}

export default Imagen;