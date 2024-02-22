import "./Fild.css";

const Fild = (props) => {
  const placeholderModificada = `${props.placeholder}...`;

  const whenTyped = (event) => {
    props.whenChange(event.target.value);
  };
  return (
    <div className="fild">
      <label>{props.label}</label>
      <input
        min={props.min}
        value={props.value}
        onChange={whenTyped}
        required={props.required}
        placeholder={placeholderModificada}
        type={props.type}
      />
    </div>
  );
};

export default Fild;
