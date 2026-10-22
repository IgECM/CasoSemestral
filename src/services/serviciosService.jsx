import { serviciosIniciales } from "../data/serviciosData";

export function obtenerServicios() {
  let datosGuardados = localStorage.getItem("servicios");
  
  if (datosGuardados === null) {
    localStorage.setItem("servicios", JSON.stringify(serviciosIniciales));
    return serviciosIniciales;
  }
  
  return JSON.parse(datosGuardados);
}

export function guardarServicios(servicios) {
  localStorage.setItem("servicios", JSON.stringify(servicios));
}

export function crearServicio(nuevoServicio) {
  let lista = obtenerServicios();
  let servicioConId = {
    ...nuevoServicio,
    id: Date.now()
  };
  
  lista.push(servicioConId);
  guardarServicios(lista);
  return lista;
}

export function actualizarServicio(id, datosNuevos) {
  let lista = obtenerServicios();
  let listaActualizada = lista.map(function(servicio) {
    if (servicio.id === id) {
      return { ...servicio, ...datosNuevos };
    }
    return servicio;
  });
  
  guardarServicios(listaActualizada);
  return listaActualizada;
}

export function eliminarServicio(id) {
  let lista = obtenerServicios();
  let listaFiltrada = lista.filter(function(servicio) {
    return servicio.id !== id;
  });
  
  guardarServicios(listaFiltrada);
  return listaFiltrada;
}