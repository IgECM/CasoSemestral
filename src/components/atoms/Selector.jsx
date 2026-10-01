function Selector (props)  {
    return (
        <label>
        <input 
            type="checkbox" 
            checked={props.checked}
            onChange={props.onChange}
        />
        <span>{props.label}</span>
        </label>
    )
}

export default Selector
