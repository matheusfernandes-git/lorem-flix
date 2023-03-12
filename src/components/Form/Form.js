import "./Form.css"
import TextFild from "../TextFild/TextFild"
import DropdownList from "../DropdownList/DropdownList"
import Button from "../Button/Button"
import { useState } from  'react'


const Form = (props) => {

    const [name, setName] = useState('')
    const [year, setYear] = useState('')
    const [img, setImg] = useState('')
    const [gener, setGener] = useState('')

    const whenSave = (event) => {
        event.preventDefault()
        props.whenRegistered({
            name,
            year,
            img,
            gener
        })

        setName('')
        setYear('')
        setImg('')
        setGener('')
    }

    return (
        <section className="form">
            <form onSubmit={whenSave}>
                <h2>Preencha os dados para criar o card do filme/série</h2>
                <TextFild 
                    required={true}
                    label="Nome"
                    placeholder="Digite o nome do filme" 
                    value={name}
                    whenChange={valor => setName(valor)}
                />
                <TextFild
                    min='0'
                    type='number'
                    required={true}
                    label="Ano"
                    placeholder="Digite o ano do filme" 
                    value={year}
                    whenChange={valor => setYear(valor)}
                />
                <TextFild
                    label="Imagem"
                    placeholder="Digite o endereço da imagem do filme" 
                    value={img}
                    whenChange={valor => setImg(valor)}
                />
                <DropdownList
                    required={true}
                    label="Gênero" 
                    itens={props.moviesName}
                    value={gener}
                    whenChange={valor => setGener(valor)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form