import Boton from "../atoms/Boton";
import FormCampo from "../molecules/FormCampo";

function FormLogin() {
    return (
      <form className="FormLogin w-auto p-3 border-0 shadow-sm rounded-3 bg-white ">

        <h2 className="mb-5 mt-3 fs-3" style={{ color: 'black' }}>Iniciar Sesión</h2>

        <FormCampo 
          id="email"
          type="email"
          labelText="Correo Electronico"
        />

        <FormCampo 
          id="contraseña"
          type="password"
          labelText="Contraseña"
        />

        <Boton texto="Iniciar Sesión" />
      </form>
    )
  
}

export default FormLogin;