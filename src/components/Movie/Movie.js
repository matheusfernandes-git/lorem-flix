import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./Movie.css";

const Movie = ({
  name,
  img,
  year,
  backgroundColor,
  whenDelete,
  whenFavorite,
  favorite,
  id,
}) => {
  const propsFavorite = {
    size: 25,
    onClick: () => {
      whenFavorite(id);
    },
  };

  return (
    <div className="movie">
      {
        <AiFillCloseCircle
          size={25}
          className="delete"
          onClick={() => whenDelete(id)}
        />
      }
      <div className="cabecalho" style={{ backgroundColor: backgroundColor }}>
        <img src={img} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{year}</h5>
        <div className="favorite">
          {favorite ? (
            <AiFillHeart {...propsFavorite} color="#ff0000" />
          ) : (
            <AiOutlineHeart {...propsFavorite} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Movie;
