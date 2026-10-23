function Input(props){
    return (
        <input
            id={props.id}
            name={props.name}
            type={props.type || "text"}
            className={`form-control ${props.className || ""}`}
            placeholder={props.placeholder || ""}
            value={props.value}
            onChange={props.onChange}
            required={props.required}
    />
    )
}

export default Input;