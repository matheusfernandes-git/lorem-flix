import Movie from '../Movie/Movie'
import './MoviesList.css'

const MoviesList = (props) => {
    const css = { backgroundColor: props.secondaryColor }

    return (
        (props.movie.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='colaboradores'>
                {props.movie.map(movie => <Movie backgroundColor={props.primaryColor} key={movie.name} name={movie.name} year={movie.year} img={movie.img}/>)}
            </div>
        </section> 
        : ''
    )
}

export default MoviesList;