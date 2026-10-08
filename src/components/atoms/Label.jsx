function Label(props){
    return (
        <label htmlFor={props.for} className={props.varianteLabel}>
            {props.text}
        </label>
    )
}

export default Label;