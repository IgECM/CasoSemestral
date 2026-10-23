import { useState } from "react";
import CampoFormulario from "../molecules/CampoFormulario";

function FormularioSolicitudCita({ servicio, onCancelar, onEnviar }) {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellidos: "",
    correo: "",
    mascota: "",
    especie: "Perro",
    fecha: "",
    hora: "",
    motivo: "",
  });

  const [error, setError] = useState("");
  const [citaEnviada, setCitaEnviada] = useState(null);

  const hoy = new Date().toLocaleDateString("en-CA");

  const actualizarCampo = (e) => {
    const { name, value } = e.target;

    setFormulario((anterior) => ({
      ...anterior,
      [name]: value,
    }));

    setError("");
  };

  const enviarFormulario = (e) => {
    e.preventDefault();

    // Evitar fechas pasadas
    if (formulario.fecha < hoy) {
      setError("Selecciona una fecha válida.");
      return;
    }

    const nuevaCita = {
      id: Date.now(),
      ...formulario,
      servicio:
        typeof servicio === "string"
          ? servicio
          : servicio?.nombre || "Consulta veterinaria",
      estado: "Pendiente",
    };

    if (onEnviar) {
      onEnviar(nuevaCita);
    }

    setCitaEnviada(nuevaCita);
  };

  if (citaEnviada) {
    return (
      <div className="card shadow-sm p-4">
        <div className="alert alert-success">
          <h4>¡Solicitud enviada!</h4>
          <p>
            Tu solicitud de cita quedó registrada en esta sesión.
          </p>
        </div>

        <h5>Resumen de la solicitud</h5>

        <p>
          <strong>Servicio:</strong> {citaEnviada.servicio}
        </p>
        <p>
          <strong>Mascota:</strong> {citaEnviada.mascota}
        </p>
        <p>
          <strong>Fecha:</strong> {citaEnviada.fecha}
        </p>
        <p>
          <strong>Hora:</strong> {citaEnviada.hora}
        </p>
        <p>
          <strong>Estado:</strong> {citaEnviada.estado}
        </p>

        <button
          type="button"
          className="btn btn-primary"
          onClick={onCancelar}
        >
          Volver al servicio
        </button>
      </div>
    );
  }

  return (
    <form
      className="card shadow-sm p-4"
      onSubmit={enviarFormulario}
    >
      <h3 className="mb-3">Solicitar una cita</h3>

      <p className="text-muted">
        Servicio:{" "}
        {typeof servicio === "string"
          ? servicio
          : servicio?.nombre || "Consulta veterinaria"}
      </p>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <div className="row g-3">
        <div className="col-12 col-md-6">
    <CampoFormulario
      name="nombre"
      label="Nombre del dueño"
      placeholder="Ingresa tu nombre"
      value={formulario.nombre}
      onChange={actualizarCampo}
      required
    />
  </div>

  <div className="col-12 col-md-6">
    <CampoFormulario
      name="apellidos"
      label="Apellidos"
      placeholder="Ingresa tus apellidos"
      value={formulario.apellidos}
      onChange={actualizarCampo}
      required
    />
  </div>

  <div className="col-12">
    <CampoFormulario
      name="correo"
      label="Correo electrónico"
      type="email"
      placeholder="ejemplo@correo.com"
      value={formulario.correo}
      onChange={actualizarCampo}
      required
    />
  </div>

  <div className="col-12">
    <CampoFormulario
      name="mascota"
      label="Nombre de la mascota"
      placeholder="Ingresa el nombre de tu mascota"
      value={formulario.mascota}
      onChange={actualizarCampo}
      required
    />
  </div>

        <div className="col-12 col-md-4">
          <label htmlFor="especie" className="form-label">
            Especie
          </label>
          <select
            id="especie"
            name="especie"
            className="form-select"
            value={formulario.especie}
            onChange={actualizarCampo}
            required
          >
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
            <option value="Otra">Otra</option>
          </select>
        </div>

        <div className="col-12 col-md-6">
          <label htmlFor="fecha" className="form-label">
            Fecha de la cita
          </label>
          <input
            id="fecha"
            name="fecha"
            type="date"
            className="form-control"
            min={hoy}
            value={formulario.fecha}
            onChange={actualizarCampo}
            required
          />
        </div>

        <div className="col-12 col-md-6">
          <label htmlFor="hora" className="form-label">
            Hora preferida
          </label>
          <select
            id="hora"
            name="hora"
            className="form-select"
            value={formulario.hora}
            onChange={actualizarCampo}
            required
          >
            <option value="">Selecciona una hora</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
          </select>
        </div>

        <div className="col-12">
          <label htmlFor="motivo" className="form-label">
            Motivo de la consulta
          </label>
          <textarea
            id="motivo"
            name="motivo"
            className="form-control"
            rows="3"
            value={formulario.motivo}
            onChange={actualizarCampo}
            placeholder="Describe brevemente el motivo de la cita"
            required
          />
        </div>

        <div className="col-12 d-flex flex-wrap gap-2">
          <button type="submit" className="btn btn-primary">
            Enviar solicitud
          </button>

          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={onCancelar}
          >
            Cancelar
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormularioSolicitudCita;