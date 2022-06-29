import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="sign">
      <Link alt="Логотип" className="header__logo" to="/" />
      <form className="sign__content" name="login-form">
        <h2 className="sign__title">Рады видеть!</h2>
        <p className="sign__subtitle">E-mail</p>
        <input
          type="email"
          id="logininput"
          className="sign__text"
          placeholder="Email"
          name="email"
          required
        />
        <p className="sign__subtitle">Пароль</p>
        <input
          type="password"
          id="passwordinput"
          className="sign__text"
          placeholder="Пароль"
          name="password"
          required
        />
        <button
          className="sign__submit-button sign__submit-button_hover"
          type="submit"
        >
          Войти
        </button>
        <div className="sign__signature">
          <p className="sign__signature-question">Еще не зарегистрированны?</p>
          <Link to="/sign-up" className="sign__signature-enter">
            Регистрация
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
