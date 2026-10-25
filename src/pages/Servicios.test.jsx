
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Servicios from "./Servicios";

vi.mock("../components/templates/PlantillaPublica", () => ({
  default: ({ children }) => (
    <div data-testid="plantilla-publica">{children}</div>
  ),
}));

vi.mock("../components/atoms/Titulo", () => ({
  default: ({ texto, nivel = 1 }) => {
    const Tag = `h${nivel}`;
    return <Tag>{texto}</Tag>;
  },
}));

vi.mock("../components/atoms/Parrafo", () => ({
  default: ({ texto }) => <p>{texto}</p>,
}));

vi.mock("../components/organism/ListaCategorias", () => ({
  default: () => <div data-testid="lista-categorias">
    Lista de categorías
  </div>,
}));

describe("Pruebas unitarias de la pagina Servicios", () => {
  it("1. Renderiza la plantilla pública", () => {
    render(<Servicios />);

    expect(
      screen.getByTestId("plantilla-publica")
    ).toBeInTheDocument();
  });

  it("2. Muestra el titulo Nuestros Servicios", () => {
    render(<Servicios />);

    expect(
      screen.getByRole("heading", {
        name: "Nuestros Servicios",
      })
    ).toBeInTheDocument();
  });

  it("3. Muestra la descripcion de los servicios", () => {
    render(<Servicios />);

    expect(
      screen.getByText(
        "Encuentra la atención que necesita tu mascota."
      )
    ).toBeInTheDocument();
  });

  it("4. Muestra la lista de categorías", () => {
    render(<Servicios />);

    expect(
      screen.getByTestId("lista-categorias")
    ).toBeInTheDocument();
  });

  it("5. Contiene la seccion principal de servicios", () => {
    const { container } = render(<Servicios />);

    expect(
      container.querySelector(".categorias-section")
    ).toBeInTheDocument();
  });

  it("6. Aplica la clase de fondo de servicios", () => {
    const { container } = render(<Servicios />);

    expect(
      container.querySelector(".fondo-servicios")
    ).toBeInTheDocument();
  });

  it("7. Aplica la clase de diseño responsivo de Bootstrap", () => {
    const { container } = render(<Servicios />);

    expect(
      container.querySelector(".d-flex.flex-column")
    ).toBeInTheDocument();
  });
});
