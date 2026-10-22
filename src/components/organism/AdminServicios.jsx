import { useState, useEffect } from "react";
import { obtenerServicios, crearServicio, eliminarServicio } from "../../services/serviciosService";
import Boton from "../atoms/Boton";

function AdminServicios() {
  const [servicios, setServicios] = useState([]);
  const [codigo, setCodigo] = useState("");
  const [categoria, setCategoria] = useState("Consultas");
  const [nombre, setNombre] = useState("");
  const [especie, setEspecie] = useState("Perro / Gato");
  const [duracion, setDuracion] = useState("30 min");
  const [precio, setPrecio] = useState("");
  const [observaciones, setObservaciones] = useState("");

  useEffect(() => {
    let listaInicial = obtenerServicios();
    setServicios(listaInicial);
  }, []);

  function manejarCrear(e) {
    e.preventDefault();

    let nuevoServicio = {
      codigo: codigo,
      categoria: categoria,
      nombre: nombre,
      especie: especie,
      duracion: duracion,
      precio: Number(precio),
      observaciones: observaciones
    };

    let listaActualizada = crearServicio(nuevoServicio);

    setServicios(listaActualizada);
    setCodigo("");
    setNombre("");
    setPrecio("");
    setObservaciones("");
  }


  function manejarEliminar(id) {
    let listaActualizada = eliminarServicio(id);
    setServicios(listaActualizada);
  }



  return (
    <section className="container mt-4 mb-5">
      <h2 className="mb-4">Administración de Servicios</h2>

      <form onSubmit={manejarCrear} className="border p-4 mb-5 rounded bg-white text-start shadow-sm">
        <h4 className="mb-3">Agregar Nuevo Servicio</h4>

        <section className="mb-3">
          <label className="form-label">Código</label>
          <input 
            type="text" 
            className="form-control border border-black" 
            value={codigo} 
            onChange={(e) => setCodigo(e.target.value)} 
            required 
          />
        </section>

        <section className="mb-3">
          <label className="form-label">Categoría</label>
          <select 
            className="form-control border border-black" 
            value={categoria} 
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="Consultas">Consultas</option>
            <option value="Vacunación">Vacunación</option>
            <option value="Cirugía">Cirugía</option>
            <option value="Desparasitación">Desparasitación</option>
            <option value="Exámenes">Exámenes</option>
            <option value="Otros">Otros</option>
          </select>
        </section>

        <section className="mb-3">
          <label className="form-label">Nombre del servicio</label>
          <input 
            type="text" 
            className="form-control border border-black" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
            required 
          />
        </section>

        <section className="mb-3">
          <label className="form-label">Especie</label>
          <input 
            type="text" 
            className="form-control border border-black" 
            value={especie} 
            onChange={(e) => setEspecie(e.target.value)} 
            required 
          />
        </section>

        <section className="mb-3">
          <label className="form-label">Duración aprox.</label>
          <input 
            type="text" 
            className="form-control border border-black" 
            value={duracion} 
            onChange={(e) => setDuracion(e.target.value)} 
            required 
          />
        </section>

        <section className="mb-3">
          <label className="form-label">Precio (CLP)</label>
          <input 
            type="number" 
            className="form-control border border-black" 
            value={precio} 
            onChange={(e) => setPrecio(e.target.value)} 
            required 
          />
        </section>

        <section className="mb-3">
          <label className="form-label">Observaciones</label>
          <input 
            type="text" 
            className="form-control border border-black" 
            value={observaciones} 
            onChange={(e) => setObservaciones(e.target.value)} 
          />
        </section>

        <Boton texto="Guardar Servicio" variante="success" />
      </form>

      <h3 className="mb-3">Listado de Servicios Actuales</h3>

      <section className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Código</th>
              <th>Categoría</th>
              <th>Nombre</th>
              <th>Especie</th>
              <th>Duración</th>
              <th>Precio</th>
              <th>Observaciones</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {servicios.map(function(s) {
              return (
                <tr key={s.id}>
                  <td>{s.codigo}</td>
                  <td>{s.categoria}</td>
                  <td>{s.nombre}</td>
                  <td>{s.especie}</td>
                  <td>{s.duracion}</td>
                  <td>${s.precio}</td>
                  <td>{s.observaciones}</td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={() => manejarEliminar(s.id)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </section>
  );
}

export default AdminServicios;