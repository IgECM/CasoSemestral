import React from 'react';

function Titulo(props) {
  const Etiqueta = `h${props.nivel || 1}`;
  
  return (
    <Etiqueta className={props.className} style={props.style}>
      {props.texto}
    </Etiqueta>
  );
}

export default Titulo;