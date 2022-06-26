import search from "../images/search.svg";
import searchButton from "../images/search2.svg";
import MoviesCardList from "./MoviesCardList.js";

function Movies() {
  return (
    <>
      <section className="search-form">
        <form className="search-form__form">
          <img src={search} alt="поиск" className="search-form__form-img" />
          <input
            className="search-form__input"
            type="text"
            placeholder="Фильм"
          />
          <button type="submit" className="search-form__button">
            <img
              src={searchButton}
              alt="Кнопка «button»"
              className="search-form__button-img"
            />
          </button>
        </form>
        <div className="search-form__filter">
          <input
            type="checkbox"
            id="searchForm-checkbox"
            name="searchForm-checkbox"
          />
          <label
            htmlFor="searchForm-checkbox"
            data-onlabel="on"
            data-offlabel="off"
            className="search-form__checkbox"
          ></label>
          <p className="search-form__checkbox-text">Короткометражки</p>
        </div>
      </section>
      <MoviesCardList />
    </>
  );
}

export default Movies;
