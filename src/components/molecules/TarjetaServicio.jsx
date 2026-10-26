import Boton from "../atoms/Boton";
import Titulo from "../atoms/Titulo";
import Parrafo from "../atoms/Parrafo";

function TarjetaServicio(props) {
  return (
    <div className="card shadow-sm p-4 h-100 d-flex flex-column text-center">
      <Titulo nivel={1} className= "text-dark font-weight-bold" style={{ fontSize: '1.3rem' }} texto={props.servicio.nombre}/>
      
      <Parrafo className="flex-grow-1 mt-2 mb-3" texto={props.servicio.descripcion} style={{ fontSize: '0.95rem' }}/>

      <Parrafo className="mb-3 font-weight-bold" texto={`Precio: ${props.servicio.precio.toLocaleString("es-CL")} CLP`}/>
      
      <Boton
        variante="primary w-100 mt-auto"
        onClick={() => props.onSeleccionar(props.servicio)}
        texto="Solicitar cita"
      />
    </div>
  );
}

export default TarjetaServicio;