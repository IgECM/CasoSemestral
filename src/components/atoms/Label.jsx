function Label(props){
    return (
        <label htmlFor={props.for} className="form-label fw-semibold">
            {props.text}
        </label>
    )
}

export default Label;