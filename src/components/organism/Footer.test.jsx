/*npx vitest run*/
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Pruebas unitarias del organismo Footer", () => {
  it("1. Renderiza el pie de pagina", () => {
    render(<Footer />);

    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("2. Muestra el nombre de la veterinaria", () => {
    render(<Footer />);

    expect(
      screen.getByText("Veterinaria San Marcos")
    ).toBeInTheDocument();
  });

  it("3. Muestra la informacion sobre la veterinaria", () => {
    render(<Footer />);

    expect(
      screen.getByText("Cuidando mascotas en Rancagua desde 2009")
    ).toBeInTheDocument();
  });

  it("4. Muestra la ubicacion", () => {
    render(<Footer />);

    expect(
      screen.getByText("Rancagua, Región de O'Higgins")
    ).toBeInTheDocument();
  });

  it("5. Muestra el telefono de contacto", () => {
    render(<Footer />);

    expect(
      screen.getByText("+56 9 0000 0000")
    ).toBeInTheDocument();
  });

  it("6. Muestra el correo electronico", () => {
    render(<Footer />);

    expect(
      screen.getByText("contacto@vetsanmarcos.cl")
    ).toBeInTheDocument();
  });

  it("7. Aplica las clases CSS del pie de página", () => {
    render(<Footer />);

    const footer = screen.getByRole("contentinfo");

    expect(footer).toHaveClass("footer-personalizado");
    expect(footer).toHaveClass("bg-dark");
    expect(footer).toHaveClass("text-white");
  });

  it("8. Muestra los datos de contacto en una lista", () => {
    render(<Footer />);

    const lista = screen.getByRole("list");

    expect(lista).toBeInTheDocument();
    expect(lista.children).toHaveLength(3);
  });
});
