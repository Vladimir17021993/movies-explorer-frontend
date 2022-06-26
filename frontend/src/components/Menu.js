import { Link } from "react-router-dom";
import account from "../images/account.svg";

function Menu() {
  return (
    <nav role="navigation" className="header__burger">
      <div id="menuToggle" className="header__burger-box">
        <input type="checkbox" className="header__burger-input" />
        <span className="header__burger-span"></span>
        <span className="header__burger-span"></span>
        <span className="header__burger-span"></span>
        <div className="header__burger-background">
          <ul id="menu" className="header__burger-list">
            <Link to="/" className="header__burger-link">
              <li>Главная</li>
            </Link>
            <Link to="/movies" className="header__burger-link">
              <li>Фильмы</li>
            </Link>
            <Link to="/saved-movies" className="header__burger-link">
              <li>Сохранённые фильмы</li>
            </Link>
            <div className="header__burger-account">
              <Link to="/profile" className="header__burger-link">
                <li>Аккаунт</li>
              </Link>
              <img src={account} alt="аккаунт" className="header__movies-img" />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
