function Label(props){
    return (
        <label htmlFor={props.for} className="form-label">
            {props.text}
        </label>
    )
}

export default Label;