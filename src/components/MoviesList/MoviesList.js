import Movie from "../Movie/Movie";
import "./MoviesList.css";
import hexToRgba from "hex-to-rgba";

const MoviesList = (props) => {
  const css = { backgroundColor: hexToRgba(props.color, "0.6") };

  return props.movie.length > 0 ? (
    <section className="movies-list" style={css}>
      <input
        onChange={(event) => props.changeColor(event.target.value, props.name)}
        value={props.color}
        type="color"
        className="input-color"
      ></input>
      <h3 style={{ borderColor: props.color }}>{props.name}</h3>
      <div className="movies">
        {props.movie.map((movie) => {
          return (
            <Movie
              id={movie.id}
              backgroundColor={props.color}
              key={movie.name}
              name={movie.name}
              year={movie.year}
              img={movie.img}
              favorite={movie.favorite}
              whenDelete={props.whenDelete}
              whenFavorite={props.whenFavorite}
            />
          );
        })}
      </div>
    </section>
  ) : (
    ""
  );
};

export default MoviesList;
