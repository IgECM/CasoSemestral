import { useState } from "react";
import Boton from "../atoms/Boton";
import FormCampo from "../molecules/FormCampo";

function FormLogin() {
  const [esRegistro, setEsRegistro] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  function cambiarModo() {
    setEsRegistro(!esRegistro);
    setMensaje("");
  }

  function guardarEmail(e) {
    setEmail(e.target.value);
  }

  function guardarPassword(e) {
    setPassword(e.target.value);
  }

  function guardarNombre(e) {
    setNombre(e.target.value);
  }

  function manejarEnvio(e) {
    e.preventDefault();

    if (email === "") {
      setMensaje("Escribe tu correo:");
      return;
    }

    if (password === "") {
      setMensaje("Escribe tu contraseña:");
      return;
    }

    if (esRegistro === true) {
      if (nombre === "") {
        setMensaje("Escribe tu nombre:");
        return;
      }
      
      setMensaje("Usuario registrado correctamente");
      setEsRegistro(false);
    } else {
      setMensaje("Has iniciado sesión con éxito");
    }
  }

  let titulo = "Iniciar Sesión";
  let textoBoton = "Iniciar Sesión";
  let textoEnlace = "Regístrate aqui";

  if (esRegistro === true) {
    titulo = "Crear Cuenta";
    textoBoton = "Registrarse";
    textoEnlace = "Inicia Sesión aqui";
  }

  return (
    <form onSubmit={manejarEnvio} className="FormLogin w-auto p-4 border-0 shadow-sm rounded-3 bg-white">
      <h2 className="mb-4 mt-2 fs-3 text-dark">{titulo}</h2>

      {mensaje !== "" && (
        <section className="alert alert-info py-2" role="alert">
          {mensaje}
        </section>
      )}

      {esRegistro === true && (
        <FormCampo 
          id="nombre"
          type="text"
          labelText="Nombre"

          varianteInput="form-control border border-black"
          varianteLabel="form-label"
          
          value={nombre}
          onChange={guardarNombre}
        />
      )}

      <FormCampo 
        id="email"
        type="email"

        labelText="Correo Electrónico"

        varianteInput="form-control border border-black"
        varianteLabel="form-label"

        value={email}
        onChange={guardarEmail}
      />

      <FormCampo 
        id="contrasena"
        type="password"
        labelText="Contraseña"

        varianteInput="form-control border border-black"
        varianteLabel="form-label"

        value={password}
        onChange={guardarPassword}
      />

      <section className="d-grid gap-2 mb-3 mt-4">
        <Boton texto={textoBoton} variante="primary" />
      </section>

      <section className="text-center">
        <button
          type="button"
          className="btn btn-link text-decoration-none p-0"
          onClick={cambiarModo}
        >
          {textoEnlace}
        </button>
      </section>
    </form>
  );
}

export default FormLogin;