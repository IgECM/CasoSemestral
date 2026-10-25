function Footer() {
  return (
    <footer className="footer-personalizado bg-dark text-white text-center">
      <div className="container d-flex justify-content-between align-items-center gap-3">
        <div>
          <strong>Veterinaria San Marcos</strong>
          <div className="small opacity-75">Cuidando mascotas en Rancagua desde 2009</div>
        </div>
        <ul className="list-unstyled small">
          <li className="p-2">Rancagua, Región de O'Higgins</li>
          <li className="p-2">+56 9 0000 0000</li>
          <li className="p-2">contacto@vetsanmarcos.cl</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;