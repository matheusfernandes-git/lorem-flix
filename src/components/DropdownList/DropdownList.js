import './DropdownList.css'

const DropdownList = (props) => {
    return (
        <div className='Dropdown-List'>
            <label>{props.label}</label>
            <select onChange={event => props.whenChange(event.target.value)} required={props.required} value={props.value}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropdownList