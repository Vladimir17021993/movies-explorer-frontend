import MoviesCard from "./MoviesCard.js";
import Preloader from "./Preloader.js";
import { useLocation } from "react-router-dom";

function MoviesCardList() {
  const location = useLocation();

  return (
    <section className="movies-cardlist">
      <div className="movies-cardlist__cards">
        <MoviesCard />
      </div>
      {location.pathname === "/movies" && (
        <button className="movies-cardlist__button">Ещё</button>
      )}
      <Preloader />
    </section>
  );
}

export default MoviesCardList;
