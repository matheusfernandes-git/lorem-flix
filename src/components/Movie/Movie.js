import { AiFillCloseCircle } from 'react-icons/ai'; /*Importanto o icone de deletar*/
import './Movie.css'

const Movie = ({ name, img, year, backgroundColor, whenDelete, props}) => {
    return (
    <div className='movie'>
        <AiFillCloseCircle 
            size={25}
            className='delete'
            onClick={() => whenDelete(props.id)}
        />
        <div className='cabecalho' style={{ backgroundColor: backgroundColor }}>
            <img src={img} alt={name}/>
        </div>
        <div className='footer'>
            <h4>{name}</h4>
            <h5>{year}</h5>
        </div>
    </div>)
}

export default Movie