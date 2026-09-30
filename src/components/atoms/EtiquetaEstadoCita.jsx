import { etiquetaEstadoCita } from './atomos';

function EtiquetaEstadoCita(props) {
    const etiqueta = useAtomValue(etiquetaEstadoCita);
    let color = "text-bg-secondary";

    if (etiqueta === "Pendiente") {
        color = "text-bg-warning";
    } 
    else if (etiqueta === "Confirmada") {
        color = "text-bg-success";
    } 
    else if (etiqueta === "Cancelada") {
        color = "text-bg-danger";
    }

    return (
        <div className={"badge " + color}>
            {etiqueta}
        </div>
    );
}