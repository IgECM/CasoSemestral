import { useState } from "react";
import { citasIniciales } from "../data/citas";
import Boton from "../components/atoms/Boton";

function MisCitas() {
  const [citas, setCitas] = useState(() => {
    const guardadas = localStorage.getItem("citas");

    return guardadas
      ? JSON.parse(guardadas)
      : citasIniciales;
  });

  const [filtro, setFiltro] = useState("Todas");

  function cancelarCita(id) {
    const confirmar = window.confirm(
      "¿Deseas cancelar esta cita?"
    );

    if (!confirmar) return;

    const actualizadas = citas.map((cita) =>
      cita.id === id
        ? { ...cita, estado: "Cancelada" }
        : cita
    );

    setCitas(actualizadas);

    localStorage.setItem(
      "citas",
      JSON.stringify(actualizadas)
    );
  }

  const citasFiltradas = citas.filter((cita) => {
    if (filtro === "Todas") return true;

    if (filtro === "Pendientes") {
      return cita.estado === "Pendiente";
    }

    if (filtro === "Confirmadas") {
      return cita.estado === "Confirmada";
    }

    if (filtro === "Historial") {
      return ["Completada", "Cancelada"].includes(
        cita.estado
      );
    }

    return true;
  });

  return (
    <main className="container py-4">
      <div className="mis-citas-encabezado mb-4">
        <h1 className="titulo-h1">Mis citas</h1>

        <p className="text-secondary">
          Consulta y administra las citas de tus mascotas.
        </p>
      </div>

      <div className="d-flex flex-wrap gap-2 mb-4">
        {[
          "Todas",
          "Pendientes",
          "Confirmadas",
          "Historial",
        ].map((opcion) => (
          <Boton
            key={opcion}
            texto={opcion}
            variante={
              filtro === opcion
                ? "primary"
                : "outline-primary"
            }
            onClick={() => setFiltro(opcion)}
          />
        ))}
      </div>

      <div className="row g-3">
        {citasFiltradas.length > 0 ? (
          citasFiltradas.map((cita) => (
            <div className="col-12 col-lg-6" key={cita.id}>
              <article className="card h-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start gap-2 mb-3">
                    <h2 className="h5 mb-0">
                      {cita.servicio}
                    </h2>

                    <span
                      className={`badge ${
                        cita.estado === "Confirmada"
                          ? "text-bg-success"
                          : cita.estado === "Pendiente"
                          ? "text-bg-warning"
                          : cita.estado === "Cancelada"
                          ? "text-bg-danger"
                          : "text-bg-secondary"
                      }`}
                    >
                      {cita.estado}
                    </span>
                  </div>

                  <p className="mb-2">
                    <strong>Mascota:</strong>{" "}
                    {cita.mascota}
                  </p>

                  <p className="mb-2">
                    <strong>Fecha:</strong>{" "}
                    {cita.fecha}
                  </p>

                  <p className="mb-2">
                    <strong>Hora:</strong>{" "}
                    {cita.hora}
                  </p>

                  <p className="mb-3">
                    <strong>Veterinario:</strong>{" "}
                    {cita.veterinario}
                  </p>

                  {["Pendiente", "Confirmada"].includes(
                    cita.estado
                  ) && (
                    <Boton
                      texto="Cancelar cita"
                      variante="outline-danger"
                      onClick={() => cancelarCita(cita.id)}
                    />
                  )}
                </div>
              </article>
            </div>
          ))
        ) : (
          <div className="col-12">
            <div className="alert alert-light border">
              No hay citas para mostrar en esta categoría.
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default MisCitas;