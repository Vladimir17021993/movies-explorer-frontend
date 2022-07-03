import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function MoviesCard(props) {
  const checkIsMovieSaved = props.checkIsMovieSaved;
  const handleMarkedMovie = props.handleMarkedMovie;
  const [isMarked, setIsMarked] = useState(false);
  const location = useLocation()

  const isMovieSaved = checkIsMovieSaved(props.movie);

  const handleMarkMovieCard = () => {
    setIsMarked(!isMarked);
    handleMarkedMovie(props.movie);
  };

  useEffect(() => {
    if (isMovieSaved) {
      setIsMarked(true);
    } else {
      setIsMarked(false);
    }
  }, [isMovieSaved]);
  return (
    <>
      <article className="movies-card">
        <a href={props.movie.trailerLink} target="_blank" rel="noreferrer">
          <img
            className="movies-card__img"
            alt={props.image.name}
            src={props.image}
          />
        </a>
        <div className="movies-card__description">
          <div className="movies-card__text-container">
            <p className="movies-card__name">{props.nameRU}</p>
            <p className="movies-card__time">{props.duration}м</p>
          </div>
          {location.pathname === "/saved-movies" ? (
            <button
              className="movies-card__like movies-card__like-delete"
              type="button"
              onClick={handleMarkMovieCard}
            ></button>
          ) : location.pathname === "/movies" && isMarked ? (
            <button
              className="movies-card__like movies-card__like_active"
              type="button"
              onClick={handleMarkMovieCard}
            ></button>
          ) : (
            <button
              className="movies-card__like"
              type="button"
              onClick={handleMarkMovieCard}
            ></button>
          )}
        </div>
      </article>
    </>
  );
}

export default MoviesCard;
