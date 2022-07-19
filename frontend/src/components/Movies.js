import React, { useState, useEffect, useCallback } from "react";

import searchImg from "../images/search.svg";
import searchButton from "../images/search2.svg";
import MoviesCardList from "./MoviesCardList.js";
import Preloader from "./Preloader";
import useFormValidator from "./Validator.js";


function Movies(props) {
  const handleSaveMovie = props.handleSaveMovie;
  const handleDeleteMovie = props.handleDeleteMovie;
  const handleMarkedMovie = props.handleMarkedMovie;
  const checkIsMovieSaved = props.checkIsMovieSaved;
  const appMovies = props.appMovies;
  const searchMovies = props.searchMovies;
  const shortMovie = props.shortMovie;
  const setIsShort = props.setIsShort;
  const setIsLoading = props.setIsLoading;
  const [search, setSearch] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const [movies, setMovies] = useState([]);
  const [firstLook, setFirstLook] = useState(true);
  const useFormValidation = useFormValidator();
  const { searchValue } = useFormValidation.values;
  const { errors, isFormValid, resetForm, setValues } = useFormValidation;

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(evt) {
    evt.preventDefault();
    setSearch(searchValue);
    setIsLoading(true);
    setFirstLook(false);
  }

  const getCheckbox = useCallback(() => {
    const lastCheckbox = localStorage.getItem("checkbox");
    if (lastCheckbox === "true") {
      return true;
    } else {
      return false;
    }
  }, []);

  const handleSearch = useCallback(() => {
    if (search.length > 0) {
      setMovies(searchMovies(appMovies, search));
      setIsEmpty(false);
      localStorage.setItem("search", search);
    }
    setIsLoading(false);
  }, [appMovies, search, searchMovies, setIsLoading]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  function changeMoviesType(e) {
    setIsShort(!props.isShort);
    localStorage.setItem("checkbox", JSON.stringify(!props.isShort));
  }

  const storageMovies = useCallback(() => {
    const lastSearch = localStorage.getItem("search");
    if (lastSearch && isEmpty) {
      const longMovies = searchMovies(appMovies, lastSearch);
      const shortMovies = shortMovie(longMovies);
      if (getCheckbox()) {
        setMovies(shortMovies);
        setIsShort(true);
      } else {
        setMovies(longMovies);
        setIsShort(false);
      }
    }
  }, [appMovies, shortMovie, getCheckbox, searchMovies, isEmpty, setIsShort]);

  useEffect(() => {
    storageMovies();
  }, [storageMovies]);

  useEffect(() => {
      const searchValue = localStorage.getItem("search");

      if (searchValue) {
        setValues({ searchValue });
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  return (
    <div className="search-form__container">
      <section className="search-form">
        <form className="search-form__form" onSubmit={handleSubmit}>
          <img src={searchImg} alt="поиск" className="search-form__form-img" />
          <input
            className="search-form__input"
            type="text"
            name="searchValue"
            id="searchValue"
            placeholder={"Фильм"}
            onChange={useFormValidation.handleChange}
            value={searchValue || ""}
            required
          />
          <button type="submit" className="search-form__button">
            <img
              src={searchButton}
              alt="Кнопка «button»"
              className="search-form__button-img"
              disabled={!isFormValid}
            />
          </button>
        </form>
        <p className="search-form__error">{errors.searchValue}</p>
        <div className="search-form__filter">
          <label className="checkbox">
            <input
              className={`checkbox__checkbox ${
                props.isShort ? "checkbox__checkbox_active" : ""
              }`}
              type="checkbox"
              name="short"
              id="short"
              onClick={changeMoviesType}
            />
            <span className="checkbox__slider" />
          </label>
          <p className="search-form__checkbox-text">Короткометражки</p>
        </div>
      </section>
      {props.isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={movies}
          isShort={props.isShort}
          shortMovie={props.shortMovie}
          handleSaveMovie={handleSaveMovie}
          handleDeleteMovie={handleDeleteMovie}
          handleMarkedMovie={handleMarkedMovie}
          checkIsMovieSaved={checkIsMovieSaved}
          firstLook={firstLook}
        />
      )}
    </div>
  );
}

export default Movies;
