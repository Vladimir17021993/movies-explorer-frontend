import card from "../images/card.jpg";

function MoviesCard() {
  return (
    <>
      <article className="movies-card">
        <img className="movies-card__img" src={card} alt="фильм" />
        <div className="movies-card__description">
          <div className="movies-card__text-container">
            <p className="movies-card__name">33 слова о дизайне</p>
            <p className="movies-card__time">1ч 47м</p>
          </div>
          <button
            className="movies-card__like movies-card__like_active"
            type="button"
          ></button>
        </div>
      </article>
      <article className="movies-card">
        <img className="movies-card__img" src={card} alt="фильм" />
        <div className="movies-card__description">
          <div className="movies-card__text-container">
            <p className="movies-card__name">33 слова о дизайне</p>
            <p className="movies-card__time">1ч 47м</p>
          </div>
          <button
            className="movies-card__like movies-card__like_active"
            type="button"
          ></button>
        </div>
      </article>
      <article className="movies-card">
        <img className="movies-card__img" src={card} alt="фильм" />
        <div className="movies-card__description">
          <div className="movies-card__text-container">
            <p className="movies-card__name">33 слова о дизайне</p>
            <p className="movies-card__time">1ч 47м</p>
          </div>
          <button className="movies-card__like" type="button"></button>
        </div>
      </article>
      <article className="movies-card">
        <img className="movies-card__img" src={card} alt="фильм" />
        <div className="movies-card__description">
          <div className="movies-card__text-container">
            <p className="movies-card__name">33 слова о дизайне</p>
            <p className="movies-card__time">1ч 47м</p>
          </div>
          <button
            className="movies-card__like movies-card__like_active"
            type="button"
          ></button>
        </div>
      </article>
    </>
  );
}

export default MoviesCard;
