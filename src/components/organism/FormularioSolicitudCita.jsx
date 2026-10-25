import { useState } from "react";
import CampoFormulario from "../molecules/CampoFormulario";
import Label from "../atoms/Label";
import Boton from "../atoms/Boton";

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

      <p className="text-muted mb-3">
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
            varianteLabel="form-label text-start d-block fw-semibold"
            value={formulario.nombre}
            onChange={actualizarCampo}
            required
          />
        </div>

        <div className="col-12 col-md-6">
          <CampoFormulario
            name="apellidos"
            label="Apellidos"
            varianteLabel="form-label text-start d-block fw-semibold"
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
            varianteLabel="form-label text-start d-block fw-semibold"
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
            varianteLabel="form-label text-start d-block fw-semibold"
            placeholder="Ingresa el nombre de tu mascota"
            value={formulario.mascota}
            onChange={actualizarCampo}
            required
          />
        </div>

        <div className="col-12 col-md-4">
          <Label htmlFor="especie" varianteLabel="form-label text-start d-block fw-semibold" texto="Especie" />
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
          <Label htmlFor="fecha" varianteLabel="form-label text-start d-block fw-semibold" texto="Fecha de la cita"/>
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

        <div className="col-12 col-md-6 my-3">
          <Label htmlFor="hora" varianteLabel="form-label text-start d-block fw-semibold" texto="Ingresa la hora preferida"/>
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
          <Label htmlFor="motivo" varianteLabel="form-label text-start d-block fw-semibold" texto="Ingresa el motivo de la consulta"/>
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
          <Boton texto="Enviar Solicitud"/>

          <Boton
            type="button"
            variante="outline-secondary"
            texto="Cancelar"
            onClick={onCancelar}
          />
        </div>
      </div>
    </form>
  );
}

export default FormularioSolicitudCita;