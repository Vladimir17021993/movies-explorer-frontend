import { Link } from "react-router-dom";

function Profile() {
  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Владимир!</h1>
      <div className="profile__name">
        <p className="profile__designation">Имя</p>
        <p className="profile__value">Владимир</p>
      </div>
      <div className="profile__email">
        <p className="profile__designation">123@123.ru</p>
        <p className="profile__value">E-mail</p>
      </div>
      <nav className="profile__nav">
        <button className="profile__nav-edit" to="/">
          Редактировать
        </button>
        <Link className="profile__nav-exit" to="/">
          Выйти из аккаунта
        </Link>
      </nav>
    </section>
  );
}

export default Profile;
