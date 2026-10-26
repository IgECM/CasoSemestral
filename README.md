# CasoSemestral

Ignacio Cardenas | ig.cardenasm@duocuc.cl

Vicente Araya | vic.arayas@duocuc.cl

Tomas Gaete | toma.gaete@duocuc.cl

## Descripcion

Se esta desarrollando el caso de la Veterinaria San Marcos.

Actualmente, la Veterinaria San Marcos opera con procesos manuales en papel para sus 25 pacientes diarios, lo que genera fichas perdidas, inasistencias del 20% por falta de recordatorios y retrasos en las consultas. Nosotros estamos creando una solucion para todo esto: una pagina web en donde se puedan pedir citas de forma completamente online y tambien contactar con la veterinaria por consultas o problemas. Ademas, se le notificara al usuario acerca de la cita por correo electronico.

## Tecnologias

- React 19 + Vite 8
- Bootstrap 5 y React-Bootstrap
- React Router (navegacion)
- Atomic Design (atomos, moleculas, organismos, plantillas y paginas)
- Vitest + React Testing Library (pruebas unitarias y cobertura)

## Instalacion y ejecucion del proyecto

```bash
# 1. Instalar las dependencias
npm install

# 2. Ejecutar el proyecto en modo desarrollo
npm run dev
```

Vite mostrara en la consola la direccion local (por defecto `http://localhost:5173`).|

## Pruebas unitarias

Las pruebas usan **Vitest** con **React Testing Library**, en un entorno **jsdom**. La configuracion esta en `vite.config.js` (bloque `test`) y `src/setupTests.js`. Cada archivo de prueba esta junto al archivo que prueba (`Boton.jsx` -> `Boton.test.jsx`).

```bash
npm run test:run        # ejecuta todas las pruebas una vez
npm test                # modo observador (se vuelve a ejecutar al guardar)
npm run test -- --coverage   # pruebas + analisis de cobertura
```

Para ejecutar solo un archivo de pruebas:

```bash
npx vitest run src/components/atoms/Boton.test.jsx
```

### Cobertura de pruebas

`npm run test -- --coverage` muestra una tabla en la consola con el porcentaje de sentencias, ramas, funciones y lineas cubiertas por archivo, y genera un reporte navegable en `coverage/index.html` (abrirlo en el navegador).

### Informe de pruebas y cobertura

Para actualizar sus resultados con una ejecucion nueva:

```bash
npm run test:informe    # ejecuta pruebas + cobertura y guarda los resultados en coverage/

```

## Estructura del proyecto

```text
src/
├── assets/
├── components/
│   ├── atoms/          Boton, EtiquetaEstadoCita, Icono, Imagen, Input, Label, Parrafo, Titulo
│   ├── molecules/      CampoFormulario, TarjetaCategoria, TarjetaMascota, TarjetaNosotros, TarjetaServicio
│   ├── organism/       AdminServicios, Footer, FormLogin, FormularioSolicitudCita, ListaCategorias, ListaServicios, Navbar
│   └── templates/      PlantillaPublica
├── context/            serviciosContext.jsx
├── data/               categorias.js, citas.js, servicios.js
├── hooks/              useTituloPagina.js
├── pages/              Inicio, InicioSesion, MisCitas, NoEncontrada, Nosotros, Servicios, SolicitarCita
├── services/           serviciosService.js
├── utils/              calculos.js
├── App.jsx             Rutas de la aplicacion
└── setupTests.js       Configuracion global de las pruebas
```

## Documentacion

Google Drive: https://drive.google.com/drive/folders/14x75GfhqNUxgTjm7UDmeOI_G1RfBf2mU?usp=sharing
