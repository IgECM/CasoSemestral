
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Boton from "./Boton";

describe("Pruebas unitarias atomo Boton", () => {

  it("1. Muestra texto recibido por props", () => {
    render(<Boton texto="Guardar" />);

    expect(
      screen.getByRole("button", { name: "Guardar" })
    ).toBeInTheDocument();
  });

  it("2. Utiliza variante primary por defecto", () => {
    render(<Boton texto="Ingresar" />);

    expect(
      screen.getByRole("button", { name: "Ingresar" })
    ).toHaveClass("btn-primary");
  });

  it("3. Aplicar la variante recibida por props", () => {
    render(<Boton texto="Eliminar" variante="danger" />);

    expect(
      screen.getByRole("button", { name: "Eliminar" })
    ).toHaveClass("btn-danger");
  });

  it("4. Ejecuta onClick al presionar el boton", () => {
    const funcionClick = vi.fn();

    render(
      <Boton texto="Guardar" onClick={funcionClick} />
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Guardar" })
    );

    expect(funcionClick).toHaveBeenCalledTimes(1);
  });

  it("5. No ejecuta onClick antes de presionar boton", () => {
    const funcionClick = vi.fn();

    render(
      <Boton texto="Guardar" onClick={funcionClick} />
    );

    expect(funcionClick).not.toHaveBeenCalled();
  });

  it("6. Conserva el texto cuando se utiliza otra variante", () => {
    render(
      <Boton texto="Cancelar" variante="secondary" />
    );

    const boton = screen.getByRole("button", {
      name: "Cancelar",
    });

    expect(boton).toHaveTextContent("Cancelar");
    expect(boton).toHaveClass("btn-secondary");
  });

  it("7. Renderiza un botón HTML", () => {
    render(<Boton texto="Continuar" />);

    expect(
      screen.getByRole("button", { name: "Continuar" }).tagName
    ).toBe("BUTTON");
  });
});
