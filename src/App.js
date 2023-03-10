import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Fotter';
import Form from './components/Form/Form';
import MoviesList from './components/MoviesList/MoviesList';
import { v4 as uuidv4 } from 'uuid';  /*Importando um id aleatório pra passar nas keys*/

function App() {

  const [moviesCard, setMoviesCard] = useState([
    {
      id: uuidv4(),
      name: 'Terror',
      color: '#FF4858'
    },
    {
      id: uuidv4(),
      name: 'Comédia',
      color: '#FFF5D9'
    },
    {
      id: uuidv4(),
      name: 'Romance',
      color: '#FDE7E8'
    },
    {
      id: uuidv4(),
      name: 'Ação',
      color: '#CACACA'
    },
    {
      id: uuidv4(),
      name: 'Aventura',
      color: '#D9F7E9'
    },
    {
      id: uuidv4(),
      name: 'Drama',
      color: '#FFF5D9'
    },
    {
      id: uuidv4(),
      name: 'Ficção científica',
      color: '#FFEEDF'
    }
  ])

  const [movies, setMovies] = useState([])

  const addNewMovie = (movie) => {
    debugger
    setMovies([...movies, movie])
  }

  function deleteMovie(event){
    setMovies(movies)
  }

  function changeMovieColor(color, name){
    setMoviesCard(moviesCard.map(card => {
      if(card.name === name){      /*O certo é passar o id aleatório.*/
        card.color = color;
      }
      return card;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form moviesName={moviesCard.map(card => card.name)} whenRegistered={movie => addNewMovie(movie)}/>

      {moviesCard.map(card => 
        <MoviesList
          changeColor={changeMovieColor}
          key={card.name} 
          name={card.name} 
          color={card.color} 
          movie={movies.filter(movie => movie.gener === card.name)}
          whenDelete={deleteMovie}
        />
      )}   

      <Footer/>

    </div>
  );
}

export default App;
