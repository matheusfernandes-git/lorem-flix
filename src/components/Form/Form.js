import "./Form.css"
import Fild from "../Fild/Fild"
import DropdownList from "../DropdownList/DropdownList"
import Button from "../Button/Button"
import { useState } from  'react'


const Form = (props) => {

    const [name, setName] = useState('')
    const [year, setYear] = useState('')
    const [img, setImg] = useState('')
    const [gender, setGender] = useState('')

    const whenSave = (event) => {
        event.preventDefault()
        props.whenRegistered({
            name,
            year,
            img,
            gender
        })

        setName('')
        setYear('')
        setImg('')
        setGender('')
    }

    return (
        <section className="form">
            <form onSubmit={whenSave}>
                <h2>Preencha os dados para criar o card do filme/série</h2>
                <Fild 
                    required={true}
                    label="Nome"
                    placeholder="Digite o nome do filme" 
                    value={name}
                    whenChange={valor => setName(valor)}
                />
                <Fild
                    min='0'
                    type='number'
                    required={true}
                    label="Ano"
                    placeholder="Digite o ano do filme" 
                    value={year}
                    whenChange={valor => setYear(valor)}
                />
                <Fild
                    label="Imagem"
                    placeholder="Digite o endereço da imagem do filme" 
                    value={img}
                    whenChange={valor => setImg(valor)}
                />
                <DropdownList
                    required={true}
                    label="Gênero" 
                    itens={props.moviesName}
                    value={gender}
                    whenChange={valor => setGender(valor)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form