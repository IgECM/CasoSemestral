import {
  FaStethoscope,
  FaSyringe,
  FaPaw,
  FaHospital,
} from "react-icons/fa";

const categorias = [
  {
    id: 1,
    nombre: "Consultas",
    icono: FaStethoscope,
    descripcion: "Atención veterinaria general.",
    servicios: [
      {
        id: 101,
        nombre: "Consulta general",
        descripcion: "Evaluación del estado de salud.",
        precio: 20000,
      },
      {
        id: 102,
        nombre: "Control veterinario",
        descripcion: "Seguimiento de la salud de tu mascota.",
        precio: 15000,
      },
    ],
  },
  {
    id: 2,
    nombre: "Vacunación",
    icono: FaSyringe,
    descripcion: "Vacunas para tu mascota.",
    servicios: [
      {
        id: 201,
        nombre: "Vacunación canina",
        descripcion: "Vacunación para perros según evaluación.",
        precio: 18000,
      },
      {
        id: 202,
        nombre: "Vacunación felina",
        descripcion: "Vacunación para gatos según evaluación.",
        precio: 18000,
      },
    ],
  },
  {
    id: 3,
    nombre: "Desparasitación",
    icono: FaPaw,
    descripcion: "Prevención de parásitos.",
    servicios: [
      {
        id: 301,
        nombre: "Desparasitación",
        descripcion: "Tratamiento según las necesidades de la mascota.",
        precio: 12000,
      },
    ],
  },
  {
    id: 4,
    nombre: "Cirugía menor",
    icono: FaHospital,
    descripcion: "Procedimientos veterinarios.",
    servicios: [
      {
        id: 401,
        nombre: "Evaluación preoperatoria",
        descripcion: "Evaluación previa a un procedimiento.",
        precio: 25000,
      },
    ],
  },
];

export default categorias;