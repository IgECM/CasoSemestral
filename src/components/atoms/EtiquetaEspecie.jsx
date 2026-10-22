import { etiquetaEspecie } from './atoms';

function EtiquetaEspecie(props) {
    const especie = props.especie || "Otros";
    let color = "text-bg-secondary";

    if (especie === "Perro" || especie === "Gato") {
        color = "text-bg-primary";
    } 
    else if (especie === "Reptiles") {
        color = "text-bg-success";
    }
    else if (especie === "Aves") {
        color = "text-bg-secondary";
    }
    else if (especie === "Otros") {
        color = "text-bg-light text-dark";
    }

    return (
        <div className={`badge ${color}`}>
            {especie}
        </div>
    );
}

export default EtiquetaEspecie;