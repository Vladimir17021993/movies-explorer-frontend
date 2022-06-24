import MoviesCard from "./MoviesCard.js";
import {useLocation} from 'react-router-dom';

function MoviesCardList() {

    const location = useLocation();

    return (
      <section className="moviesCardList">
        <div className="moviesCardList__cards">
            <MoviesCard />
        </div>
        {location.pathname === "/movies" && (
            <button className="moviesCardList__button">Ещё</button>
        )}
      </section>
    );
  }
  
  export default MoviesCardList;