import './TextFild.css'

const TextFild = (props) => {

    const placeholderModificada = `${props.placeholder}...` 
    
    const whenTyped = (event) => {
        props.whenChange(event.target.value);
    }

    return (
        <div className="text-fild">
            <label>
                {props.label}
            </label>
            <input value={props.value} onChange={whenTyped} required={props.required} placeholder={placeholderModificada} type={props.type}/>
        </div>
    )
}

export default TextFild
