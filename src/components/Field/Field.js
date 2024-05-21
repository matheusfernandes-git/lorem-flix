import "./Field.css";

const Field = (props) => {
  const placeholderModificada = `${props.placeholder}...`;

  const whenTyped = (event) => {
    props.whenChange(event.target.value);
  };
  return (
    <div className="field">
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

export default Field;
