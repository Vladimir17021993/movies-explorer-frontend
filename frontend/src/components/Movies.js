import search from "../images/search.svg";
import searchButton from "../images/search2.svg";
import MoviesCardList from "./MoviesCardList.js";

function Movies() {
  return (
    <>
        <section className="searchForm">
            <form className="searchForm__form">
                <img src={search} alt="поиск" className="searchForm__form-img" />
                <input
                    className="searchForm__input"
                    type="text"
                    placeholder="Фильм"
                />
                <button type="submit" className="searchForm__button">
                    <img src={searchButton} alt="Кнопка «button»" className="searchForm__button-img" />
                </button>
            </form>
            <div className="searchForm__filter">
                <input type="checkbox" id="searchForm-checkbox" name="searchForm-checkbox" />
                <label htmlFor="searchForm-checkbox" data-onlabel="on" data-offlabel="off" className="searchForm__checkbox"></label>
                <p className="searchForm__checkbox-text">Короткометражки</p>
            </div>
        </section>
        <MoviesCardList />
    </>
  );
}

export default Movies;
