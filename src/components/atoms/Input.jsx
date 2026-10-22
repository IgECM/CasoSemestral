function Input(props){
    return (
        <input 
            id={props.id}
            type={props.type}
            className={props.varianteInput}
            value={props.value}
            onChange={props.onChange}
        />
    )
}

export default Input;