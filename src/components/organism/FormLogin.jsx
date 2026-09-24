import Boton from "../atoms/Boton";
import FormCampo from "../molecules/FormCampo";

function FormLogin() {
    return (
      <form className="FormLogin">

        <h2>Iniciar Sesión</h2>

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

        <Boton text="Iniciar Sesión" />
      </form>
    )
  
}

export default FormLogin;