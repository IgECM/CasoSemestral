import { etiquetaEspecie } from './atoms';

function EtiquetaEspecie(props) {
    const etiqueta = useAtomValue(etiquetaEspecie);
    let color = "text-bg-secondary";

    if (etiqueta === "Perro") {
        color = "text-bg-primary";
    } 
    else if (etiqueta === "Gato") {
        color = "text-bg-primary";
    } 
    else if (etiqueta === "Reptiles") {
        color = "text-bg-success";
    }
    else if (etiqueta === "Aves") {
        color = "text-bg-secondary";
    }
    else if (etiqueta === "Otros") {
        color = "text-bg-light";
    }

    return (
        <div className={"badge " + color}>
            {etiqueta}
        </div>
    );
}