import React, { useState, useEffect, useCallback } from "react";
import MoviesCard from "./MoviesCard.js";
import { useLocation } from "react-router-dom";

function MoviesCardList(props) {
  const checkIsMovieSaved = props.checkIsMovieSaved ;
  const handleMarkedMovie = props.handleMarkedMovie ;
  const isShort = props.isShort
  const Movies = props.movies
  const shortMovie=props.shortMovie
  const location = useLocation();
  const [cardsShow, setCardsShow] = useState(0);
  const [typeMovies, setTypeMovies] = useState([]);

  const cards = () => {
    if (window.innerWidth >= 1024) {
      setCardsShow(12);
    } else if (window.innerWidth >= 768) {
      setCardsShow(8);
    } else {
      setCardsShow(5);
    }
  };

  useEffect(() => {
    cards();
  }, []);

  const moviesType = useCallback(() => {
    isShort ? setTypeMovies(shortMovie(Movies)) : setTypeMovies(Movies);
  }, [shortMovie, Movies, isShort]);

  useEffect(() => {
    moviesType();
  }, [moviesType]);

  function clickButton() {
    if (window.innerWidth >= 1050) {
      setCardsShow(cardsShow + 3);
      if (cardsShow > typeMovies.length) {
        let invisibleCards = cardsShow - typeMovies.length;
        setCardsShow(cardsShow - invisibleCards);
      }
    } else {
      setCardsShow(cardsShow + 2);
      if (cardsShow > typeMovies.length) {
        let invisibleCards = cardsShow - typeMovies.length;
        setCardsShow(cardsShow - invisibleCards);
      }
    }
  }

  return (
    <>
      {location.pathname === "/movies" && (
        <div>
          {typeMovies.length === 0 ? (
            <div className="search-form__empty-block">
              <p className="search-form__empty-text">Ничего не найдено</p>
            </div>
          ) : (
            <section className="movies-cardlist">
              <div className="movies-cardlist__cards">
                {typeMovies
                  .map((movie) => {
                    return (
                      <MoviesCard
                        {...movie}
                        key={movie.movieId}
                        movie={movie}
                        checkIsMovieSaved={checkIsMovieSaved}
                        handleMarkedMovie={handleMarkedMovie}
                      />
                    );
                  })
                  .slice(0, cardsShow)}
              </div>
              {typeMovies.length > cardsShow && (
                <button
                  className="movies-cardlist__button"
                  onClick={clickButton}
                >
                  Ещё
                </button>
              )}
            </section>
          )}
        </div>
      )}
      {location.pathname === "/saved-movies" && (
        <div>
            <section className="movies-cardlist">
              <div className="movies-cardlist__cards">
                {typeMovies
                  .map((movie) => {
                    return (
                      <MoviesCard
                        {...movie}
                        key={movie.movieId}
                        movie={movie}
                        checkIsMovieSaved={checkIsMovieSaved}
                        handleMarkedMovie={handleMarkedMovie}
                      />
                    );
                  })}
              </div>
            </section>
        </div>
      )}
    </>
  );
}

export default MoviesCardList;
