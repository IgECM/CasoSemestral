import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import MisCitas from "./MisCitas";

vi.mock("../components/templates/PlantillaPublica", () => ({
  default: ({ children }) => <div>{children}</div>,
}));

describe("Pruebas unitarias de la pagina MisCitas", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("10. Cancela una cita al confirmar y guarda el nuevo estado en localStorage", () => {
    // Mock: el usuario acepta el mensaje de confirmacion
    const confirmMock = vi.spyOn(window, "confirm").mockReturnValue(true);

    render(<MisCitas />);

    // Datos simulados: 2 citas se pueden cancelar (Pendiente y Confirmada)
    expect(screen.getAllByRole("button", { name: "Cancelar cita" })).toHaveLength(2);

    fireEvent.click(screen.getAllByRole("button", { name: "Cancelar cita" })[0]);

    expect(confirmMock).toHaveBeenCalledTimes(1);
    expect(screen.getByText("Cancelada")).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: "Cancelar cita" })).toHaveLength(1);

    const guardadas = JSON.parse(localStorage.getItem("citas"));
    expect(guardadas.find((cita) => cita.id === 1).estado).toBe("Cancelada");
  });
});
