function Input(props){
    return (
        <input 
            id={props.id}
            type={props.type}
            className={props.varianteInput}
        />
    )
}

export default Input;