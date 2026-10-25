export const RECARGO_FUERA_DE_HORARIO = 10000;

export function calcularPrecioTotal(servicio, esFueraDeHorario) {
  const precioBase = servicio.precio;

  if (esFueraDeHorario === true) {
    return precioBase + RECARGO_FUERA_DE_HORARIO;
  }

  return precioBase;
}