import './Movie.css'

const Movie = ({ name, img, year, backgroundColor }) => {
    return (
    <div className='movie'>
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