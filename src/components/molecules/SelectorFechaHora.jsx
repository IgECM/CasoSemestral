import Selector from "src/components/atoms/Selector.jsx";

function SelectorFechaHora(props) {
    return (
        <div>
            <Selector
                checked={props.checked}
                onChange={props.onChange}
                label="Seleccionar fecha y hora"
            />

            {props.checked && (
                <div>
                    <label>
                        Fecha:
                        <input
                            type="date"
                            value={props.fecha}
                            onChange={props.onFechaChange}
                        />
                    </label>

                    <label>
                        Hora:
                        <input
                            type="time"
                            value={props.hora}
                            onChange={props.onHoraChange}
                        />
                    </label>
                </div>
            )}
        </div>
    );
}

export default SelectorFechaHora;
//