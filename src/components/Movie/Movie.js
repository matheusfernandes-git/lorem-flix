import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'; /*Importando icones*/
import './Movie.css'

const Movie = ({ name, img, year, backgroundColor, whenDelete, favorite, whenFavorite, id}) => {

    function favorite(){
        whenFavorite(id);
    }

    const propsFavorite = {
        size: 25,
        onClick: favorite
    }

    return (
    <div className='movie'>
        {/* {<AiFillCloseCircle 
            size={25}
            className='delete'
            onClick={() => whenDelete(movie.id)}
        />} */}
        <div className='cabecalho' style={{ backgroundColor: backgroundColor }}>
            <img src={img} alt={name}/>
        </div>
        <div className='footer'>
            <h4>{name}</h4>
            <h5>{year}</h5>
            <div className='favorite'>
                {favorite
                    ? <AiFillHeart {...propsFavorite} color='#ff0000'/> //Ternário
                    : <AiOutlineHeart {...propsFavorite}/>  //spred ...
                }
            </div>
        </div> 
    </div>)
}

export default Movie