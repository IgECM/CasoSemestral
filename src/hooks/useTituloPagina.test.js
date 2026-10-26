import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { useTituloPagina } from "./useTituloPagina";

describe("Pruebas unitarias del hook useTituloPagina", () => {
  it("5. Actualiza el titulo del documento con el nombre de la veterinaria", () => {
    renderHook(() => useTituloPagina("Servicios"));

    expect(document.title).toBe("Servicios | Veterinaria San Marcos");
  });
});