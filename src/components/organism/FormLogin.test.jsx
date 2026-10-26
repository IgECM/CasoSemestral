import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import FormLogin from "./FormLogin";

// Mock de react-router-dom: el formulario usa useNavigate para ir al inicio
const navegarMock = vi.hoisted(() => vi.fn());

vi.mock("react-router-dom", () => ({
  useNavigate: () => navegarMock,
}));

describe("Pruebas unitarias organismo FormLogin", () => {
  it("8. Muestra un mensaje de error y no navega si se envia sin correo", () => {
    render(<FormLogin />);

    const botonIngresar = screen.getByRole("button", { name: "Iniciar Sesión" });
    fireEvent.submit(botonIngresar.closest("form"));

    expect(screen.getByRole("alert")).toHaveTextContent("Escribe tu correo:");
    expect(navegarMock).not.toHaveBeenCalled();
  });
});