import { useState } from "react";
import Boton from "../atoms/Boton";
import CampoFormulario from "../molecules/CampoFormulario";
import { useNavigate } from 'react-router-dom';

function FormLogin() {
  const [esRegistro, setEsRegistro] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  const navigate = useNavigate();

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
      setTimeout(() => {
        navigate('/');
      }, 1000);
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
        <CampoFormulario
          name="nombre"
          label="Nombre"
          varianteLabel="form-label text-start d-block fw-semibold"
          placeholder="Ingresa tu nombre completo"
          value={nombre}
          onChange={guardarNombre}
          required
        />
      )}

      <CampoFormulario
        name="email"
        type="email"
        label="Correo Electronico"
        varianteLabel="form-label text-start d-block fw-semibold"
        placeholder="ejemplo@correo.com"
        value={email}
        onChange={guardarEmail}
        required
      />

      <CampoFormulario
        campoFormulario="mb-5"
        name="password"
        type="password"
        label="Contraseña"
        varianteLabel="form-label text-start d-block fw-semibold"
        placeholder="Ingresa tu contraseña"
        value={password}
        onChange={guardarPassword}
        required
      />

      <section className="d-grid gap-2 mb-3 mt-4">
        <Boton
          texto={textoBoton}
        />
      </section>

      <section className="text-center">
        <Boton
          texto={textoEnlace}
          type="button"
          variante="link text-decoration-none p-0"
          onClick={cambiarModo}
        />
      </section>
    </form>
  );
}

export default FormLogin;