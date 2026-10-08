import Label from "../atomos/Label";
import Input from "../atomos/Input";
import EtiquetaEstadoCita from "../atomos/EtiquetaEstadoCita";
import Boton from "../atomos/Boton";

function FilaCita(props) {
    return (
        <div className="row align-items-center border-bottom py-2">

            <div className="col">
                <Label text={props.fecha} />
            </div>

            <div className="col">
                <Label text={props.hora} />
            </div>

            <div className="col">
                <Label text={props.mascota} />
            </div>

            <div className="col">
                <Label text={props.veterinario} />
            </div>

            <div className="col">
                <EtiquetaEstadoCita />
            </div>

            <div className="col">
                <Boton
                    texto="Ver"
                    variante="primary"
                    onClick={props.onVer}
                />
            </div>

        </div>
    );
}

export default FilaCita;
//