import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import TarjetaCategoria from "./TarjetaCategoria";

const categoriaPrueba = {
  id: 7,
  nombre: "Vacunación",
  descripcion: "Vacunas para tu mascota.",
  servicios: [
    { id: 1, nombre: "Vacuna A", descripcion: "Descripción A", precio: 10000 },
    { id: 2, nombre: "Vacuna B", descripcion: "Descripción B", precio: 12000 },
  ],
};

describe("Pruebas unitarias molecula TarjetaCategoria", () => {
  it("7. Llama a onSeleccionar con el id de la categoria al presionar el boton", () => {
    const onSeleccionar = vi.fn();

    render(
      <TarjetaCategoria
        categoria={categoriaPrueba}
        seleccionada={false}
        onSeleccionar={onSeleccionar}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Ver servicios" }));

    expect(onSeleccionar).toHaveBeenCalledTimes(1);
    expect(onSeleccionar).toHaveBeenCalledWith(7);
    expect(screen.getByText("2 servicios")).toBeInTheDocument();
  });
});