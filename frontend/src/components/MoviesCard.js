import card from "../images/card.jpg";

function MoviesCard() {
    return (
        <>
        <article className="moviesCard">
            <img
            className="moviesCard__img"
            src={card}
            alt="фильм"
            />
            <div className="moviesCard__description">
            <div className="moviesCard__text-container">
                <p className="moviesCard__name">33 слова о дизайне</p>
                <p className="moviesCard__time">1ч 47м</p>
            </div>
            <button
                className="moviesCard__like moviesCard__like_active"
                type="button"
                ></button>
            </div>
        </article>
        <article className="moviesCard">
            <img
            className="moviesCard__img"
            src={card}
            alt="фильм"
            />
            <div className="moviesCard__description">
            <div className="moviesCard__text-container">
                <p className="moviesCard__name">33 слова о дизайне</p>
                <p className="moviesCard__time">1ч 47м</p>
            </div>
            <button
                className="moviesCard__like moviesCard__like_active"
                type="button"
                ></button>
            </div>
        </article>
        <article className="moviesCard">
            <img
            className="moviesCard__img"
            src={card}
            alt="фильм"
            />
            <div className="moviesCard__description">
            <div className="moviesCard__text-container">
                <p className="moviesCard__name">33 слова о дизайне</p>
                <p className="moviesCard__time">1ч 47м</p>
            </div>
            <button
                className="moviesCard__like"
                type="button"
                ></button>
            </div>
        </article>
        <article className="moviesCard">
            <img
            className="moviesCard__img"
            src={card}
            alt="фильм"
            />
            <div className="moviesCard__description">
            <div className="moviesCard__text-container">
                <p className="moviesCard__name">33 слова о дизайне</p>
                <p className="moviesCard__time">1ч 47м</p>
            </div>
            <button
                className="moviesCard__like moviesCard__like_active"
                type="button"
                ></button>
            </div>
        </article>
    </>
      
    );
  }
  
  export default MoviesCard;