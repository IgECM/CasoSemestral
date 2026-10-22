import { createContext, useState, useEffect } from "react";
import { obtenerServicios, crearServicio, actualizarServicio, eliminarServicio } from "../services/serviciosService";

export const ServiciosContext = createContext();

export function ServiciosProvider(props) {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    let datos = obtenerServicios();
    setServicios(datos);
  }, []);

  function agregarNuevoServicio(nuevo) {
    let actualizada = crearServicio(nuevo);
    setServicios(actualizada);
  }

  function modificarServicio(id, datosNuevos) {
    let actualizada = actualizarServicio(id, datosNuevos);
    setServicios(actualizada);
  }

  function borrarServicio(id) {
    let actualizada = eliminarServicio(id);
    setServicios(actualizada);
  }

  return (
    <ServiciosContext.Provider value={{ servicios, agregarNuevoServicio, modificarServicio, borrarServicio }}>
      {props.children}
    </ServiciosContext.Provider>
  );
}