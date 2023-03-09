import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Fotter';
import Form from './components/Form/Form';
import MoviesList from './components/MoviesList/MoviesList';

function App() {

  const moviesCard = [
    {
      name: 'Terror',
      primaryColor: '#3B3936',
      secondaryColor: '#FF4858'
    },
    {
      name: 'Comédia',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Romance',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'Ação',
      primaryColor: '#878787',
      secondaryColor: '#CACACA'
    },
    {
      name: 'Aventura',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Drama',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Ficção científica',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    }
  ]

  const [movies, setMovies] = useState([])

  const addNewMovie = (movie) => {
    debugger
    setMovies([...movies, movie])
  }

  return (
    <div className="App">
      <Banner />
      <Form moviesName={moviesCard.map(card => card.name)} whenRegistered={movie => addNewMovie(movie)}/>

      {moviesCard.map(card => <MoviesList
        key={card.name} 
        name={card.name} 
        primaryColor={card.primaryColor} 
        secondaryColor={card.secondaryColor} 
        movie={movies.filter(movie => movie.gener === card.name)}
      />)}   

      <Footer/>

    </div>
  );
}

export default App;
