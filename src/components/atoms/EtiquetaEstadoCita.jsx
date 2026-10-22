import { etiquetaEstadoCita } from './atoms';

function EtiquetaEstadoCita(props) {
    const estado = props.estado || "Pendiente"; 
    let color = "text-bg-secondary";

    if (estado === "Pendiente") {
        color = "text-bg-warning";
    } 
    else if (estado === "Confirmada") {
        color = "text-bg-success";
    } 
    else if (estado === "Cancelada") {
        color = "text-bg-danger";
    }

    return (
        <div className={`badge ${color}`}>
            {estado}
        </div>
    );
}

export default EtiquetaEstadoCita;
