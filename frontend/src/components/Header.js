import account from "../images/account.svg";
import {useLocation, Link} from 'react-router-dom';
import Menu from "./Menu.js";

function Header() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && (
        <header className="header">
          <Link alt="Логотип" className="header__logo" to="/" />
          <div className="header__sign">
            <Link className="header__signup" to="/sign-up">
              <p className="header__signup-text">Регистрация</p>
            </Link>
            <Link className="header__signin" to="/sign-in">
              <p className="header__signin-text">Войти</p>
            </Link>
          </div>
        </header>
      )}
      {location.pathname === "/movies" && (
        <header className="header header__movies">
          <Link alt="Логотип" className="header__logo" to="/" />
          <nav className="header__movies-block">
            <Link className="header__movies-nav" to="/movies">
              Фильмы
            </Link>
            <Link className="header__movies-nav" to="/saved-movies">
              Сохранённые фильмы
            </Link>
          </nav>
          <nav className="header__movies-account">
            <Link className="header__movies-nav" to="/movies">
              Аккаунт
            </Link>
            <img src={account} alt="аккаунт" className="header__movies-img" />
          </nav>
          <Menu />
        </header>
      )}
      {location.pathname === "/saved-movies" && (
        <header className="header header__movies">
          <Link alt="Логотип" className="header__logo" to="/" />
          <nav className="header__movies-block">
            <Link className="header__movies-nav" to="/movies">
              Фильмы
            </Link>
            <Link className="header__movies-nav" to="/saved-movies">
              Сохранённые фильмы
            </Link>
          </nav>
          <nav className="header__movies-account">
            <Link className="header__movies-nav" to="/movies">
              Аккаунт
            </Link>
            <img src={account} alt="аккаунт" className="header__movies-img" />
          </nav>
          <Menu />
        </header>
      )}
      {location.pathname === "/profile" && (
        <header className="header header__movies">
          <Link alt="Логотип" className="header__logo" to="/" />
          <nav className="header__movies-block">
            <Link className="header__movies-nav" to="/movies">
              Фильмы
            </Link>
            <Link className="header__movies-nav" to="/saved-movies">
              Сохранённые фильмы
            </Link>
          </nav>
          <nav className="header__movies-account">
            <Link className="header__movies-nav" to="/movies">
              Аккаунт
            </Link>
            <img src={account} alt="аккаунт" className="header__movies-img" />
          </nav>
          <Menu />
        </header>
      )}
    </>
  );
}

export default Header;
