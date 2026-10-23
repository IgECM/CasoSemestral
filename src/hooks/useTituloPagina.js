import { useEffect } from 'react'


export function useTituloPagina(titulo) {
  useEffect(() => {
    document.title = `${titulo} | Veterinaria San Marcos`
  }, [titulo])
}