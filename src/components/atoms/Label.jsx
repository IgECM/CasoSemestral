function Label(props){
    return (
        <label for={props.for} className="form-label">
            {props.text}
        </label>
    )
}

export default Label;