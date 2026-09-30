function Input(props){
    return (
        <input 
            id={props.id}
            type={props.type}
            className="form-control border border-black"
        />
    )
}

export default Input;