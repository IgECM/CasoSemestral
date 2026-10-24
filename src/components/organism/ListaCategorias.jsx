import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import categorias from "../../data/categorias";
import TarjetaCategoria from "../molecules/TarjetaCategoria";

function ListaCategorias() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] =
    useState(null);

  const categoriaActual = categorias.find(
    (categoria) => categoria.id === categoriaSeleccionada
  );

  return (
    <>
      <Row className="g-4 py-5">
        {categorias.map((categoria) => (
          <Col xs={12} sm={6} lg={3} key={categoria.id}>
            <TarjetaCategoria
              categoria={categoria}
              seleccionada={
                categoria.id === categoriaSeleccionada
              }
              onSeleccionar={setCategoriaSeleccionada}
            />
          </Col>
        ))}
      </Row>

      {categoriaActual && (
        <section className="mt-5">
          <h2 className="h4 mb-3">
            Servicios de {categoriaActual.nombre}
          </h2>

          <Row className="g-3">
            {categoriaActual.servicios.map((servicio) => (
              <Col xs={12} md={6} key={servicio.id}>
                <div className="card h-100">
                  <div className="card-body">
                    <h3 className="h5">
                      {servicio.nombre}
                    </h3>

                    <p>{servicio.descripcion}</p>

                    <p className="fw-bold">
                      ${servicio.precio.toLocaleString("es-CL")}
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </section>
      )}
    </>
  );
}

export default ListaCategorias;
