function Label(props){
    return (
        <label htmlFor={props.htmlFor} className={props.varianteLabel}>
            {props.texto}
        </label>
    )
}

export default Label;