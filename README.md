# CasoSemestral

Ignacio Cardenas | ig.cardenasm@duocuc.cl

Vicente Araya | vic.arayas@duocuc.cl

Tomas Gaete (Cuentas utilizadas: tomasjdjfjf, aaassa-3, aaassa-5)| toma.gaete@duocuc.cl


Se esta desarrollando el caso de la Veterinaria San Marcos.

Actualmente, la Veterinaria San Marcos opera con procesos manuales en papel para sus 25 pacientes diarios, lo que genera fichas perdidas, inasistencias del 20% por falta de recordatorios y retrasos en las consultas. Nosotros, estamos creando una solucion para todo esto. Nuestra solucion es crear una pagina web en donde se puedan pedir citas de forma completamente online. Y tambien, se puede contactar con la veterinarias por consultas o problemas. Tambien, se le notificada al usuario acerca de la cita por corre electronico

El proyecto esta estructurado de la siguiente forma:

```text
src/
│
├── assets/
│
├── components/
│   ├── atoms/
│   │   ├── Boton.jsx
│   │   ├── EtiquetaEspecie.jsx
│   │   ├── EtiquetaEstadoCita.jsx
│   │   ├── Icono.jsx
│   │   ├── Input.jsx
│   │   ├── Label.jsx
│   │   └── Selector.jsx
│   ├── molecules/
│   │   ├── CampoFormulario.jsx
│   │   ├── FilaCita.jsx
│   │   ├── FormCampo.jsx
│   │   └── SelectorFechaHora.jsx
│   ├── organism/
│   │   ├── AdminServicios.jsx
│   │   ├── FormLogin.jsx
│   │   ├── ListaCategorias.jsx
│   │   └── Navbar.jsx
│   └── templates/
│       └── PlantillaPublica.jsx
│
├── context/
│   └── serviciosContext.jsx
│
├── data/
│   └── serviciosData.js
│
├── hooks/
│   └── useTituloPagina.js
│
├── pages/
│   ├── Categorias.jsx
│   ├── Inicio.jsx
│   ├── InicioSesion.jsx
│   ├── NoEncontrada.jsx
│   └── Servicios.jsx
│
├── services/
│   └── serviciosService.js
│
└── utils/
```
Para este trabajo, se esta usando React y Bootstrap.
Para que este se ejecute, se tiene que correr:
```text
npm install

npm run dev
```
Google Drive: https://drive.google.com/drive/folders/14x75GfhqNUxgTjm7UDmeOI_G1RfBf2mU?usp=sharing
