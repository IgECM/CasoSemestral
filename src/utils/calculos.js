export function calcularPrecioTotal(servicio, esFueraDeHorario) {
  let precioBase = servicio.precio;
  
  if (esFueraDeHorario === true) {
    return precioBase + 10000;
  }
  
  return precioBase;
}