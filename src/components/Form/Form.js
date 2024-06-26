import "./Form.css";
import Field from "../Field/Field";
import DropdownList from "../DropdownList/DropdownList";
import Button from "../Button/Button";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [img, setImg] = useState("");
  const [gender, setGender] = useState("");

  const whenSave = (event) => {
    let id = uuidv4();
    event.preventDefault();
    props.whenRegistered({
      id,
      name,
      year,
      img,
      gender,
      favorite: false,
    });

    setName("");
    setYear("");
    setImg("");
    setGender("");
  };

  return (
    <section className="form">
      <form onSubmit={whenSave}>
        <h2>Preencha os dados para criar o card do filme/série</h2>
        <Field
          required={true}
          label="Nome"
          placeholder="Digite o nome do filme"
          value={name}
          whenChange={(valor) => setName(valor)}
        />
        <Field
          min="0"
          type="number"
          required={true}
          label="Ano"
          placeholder="Digite o ano do filme"
          value={year}
          whenChange={(valor) => setYear(valor)}
        />
        <Field
          label="Imagem"
          placeholder="Digite o endereço da imagem do filme"
          value={img}
          whenChange={(valor) => setImg(valor)}
        />
        <DropdownList
          required={true}
          label="Gênero"
          itens={props.moviesName}
          value={gender}
          whenChange={(valor) => setGender(valor)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
