import { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Fotter";
import Form from "./components/Form/Form";
import MoviesList from "./components/MoviesList/MoviesList";
import { v4 as uuidv4 } from "uuid";
import {
  deleteFromLocalStorage,
  getFromLocalStorage,
  saveToLocalStorage,
} from "./components/utils/storage";

function App() {
  const [moviesCard, setMoviesCard] = useState([
    {
      id: uuidv4(),
      name: "Terror",
      color: "#FF4858",
    },
    {
      id: uuidv4(),
      name: "Comédia",
      color: "#FFF5D9",
    },
    {
      id: uuidv4(),
      name: "Romance",
      color: "#FDE7E8",
    },
    {
      id: uuidv4(),
      name: "Ação",
      color: "#CACACA",
    },
    {
      id: uuidv4(),
      name: "Aventura",
      color: "#D9F7E9",
    },
    {
      id: uuidv4(),
      name: "Drama",
      color: "#FFF5D9",
    },
    {
      id: uuidv4(),
      name: "Ficção científica",
      color: "#FFEEDF",
    },
  ]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(getFromLocalStorage("movies"));
    setMoviesCard(getFromLocalStorage("card"));
  }, []);

  const addNewMovie = (newMovie) => {
    //debugger;
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
    saveToLocalStorage("movies", updatedMovies);
  };

  const changeMovieColor = (color, name) => {
    const filteredMoviesColor = moviesCard.map((card) => {
      if (card.name === name) {
        /*O certo é passar o id aleatório.*/
        card.color = color;
      }
      return card;
    });
    setMoviesCard(filteredMoviesColor);
    saveToLocalStorage("card", filteredMoviesColor);
  };

  const deleteMovie = (id) => {
    const filteredMovies = movies.filter((movie) => movie.id !== id);
    setMovies(filteredMovies);
    deleteFromLocalStorage();
    saveToLocalStorage("movies", filteredMovies);
  };

  const handleFavorite = (id) => {
    const filteredMovies = movies.map((movie) => {
      if (movie.id === id) movie.favorite = !movie.favorite;
      return movie;
    });
    setMovies(filteredMovies);
    saveToLocalStorage("movies", filteredMovies);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        moviesName={moviesCard.map((card) => card.name)}
        whenRegistered={(movie) => addNewMovie(movie)}
      />
      {moviesCard.map((card) => (
        <MoviesList
          changeColor={changeMovieColor}
          key={card.name}
          name={card.name}
          color={card.color}
          movie={movies.filter((movie) => movie.gender === card.name)}
          whenFavorite={handleFavorite}
          whenDelete={deleteMovie}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
