import Input from "../atoms/Input";

import Label from "../atoms/Label";
import EtiquetaEstadoCita from "../atoms/EtiquetaEstadoCita";
import Boton from "../atoms/Boton";

function FilaCita(props) {
    return (
        <section className="row align-items-center border-bottom py-2">

            <section className="col">
                <Label text={props.fecha} />
            </section>

            <section className="col">
                <Label text={props.hora} />
            </section>

            <section className="col">
                <Label text={props.mascota} />
            </section>

            <section className="col">
                <Label text={props.veterinario} />
            </section>

            <section className="col">
                <EtiquetaEstadoCita estado={props.estado} />
            </section>

            <section className="col">
                <Boton
                    texto="Ver"
                    variante="primary"
                    onClick={props.onVer}
                />
            </section>

        </section>
    );
}

export default FilaCita;


//