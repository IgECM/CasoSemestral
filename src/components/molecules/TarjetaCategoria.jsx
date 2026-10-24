import Icono from "../atoms/Icono";
import Boton from "../atoms/Boton";


function TarjetaCategoria({
  categoria,
  seleccionada,
  onSeleccionar,
}) {
  return (
    <div
      className={`card h-100 ${
        seleccionada ? "border-primary" : ""
      }`}
    >
      <div className="card-body d-flex flex-column">
        <div className="text-center mb-3">
  <Icono
    icono={categoria.icono}
    tamano={40}
    color="#3bbcb3"
    titulo={categoria.nombre}
  />
</div>

        <h5 className="card-title">
          {categoria.nombre}
        </h5>

        <p className="card-text">
          {categoria.descripcion}
        </p>

        <p className="text-muted">
          {categoria.servicios.length} servicios
        </p>

        <div className="mt-auto">
          <Boton
            texto={
              seleccionada
                ? "Categoría seleccionada"
                : "Ver servicios"
            }
            variante={seleccionada ? "success" : "primary"}
            className={!seleccionada ? "btn-personalizado-servicios" : ""}
            onClick={() => onSeleccionar(categoria.id)}
          />
        </div>
      </div>
    </div>
  );
}

export default TarjetaCategoria;
