import {Link} from 'react-router-dom';

function Register() {
    return (
        <div className="sign">
            <Link alt="Логотип" className="header__logo" to="/" />
            <form className="sign__content" name="login-form">
            <h2 className="sign__title">Добро пожаловать!</h2>
            <p className="sign__subtitle">Имя</p>
            <input
                type="name"
                id="nameinput"
                className="sign__text"
                placeholder="Name"
                name="name"
                required
            />
            <p className="sign__subtitle">E-mail</p>
            <input
                type="email"
                id="logininput"
                className="sign__text"
                placeholder="Email"
                name="email"
                required
            />
            <p className="sign__subtitle">пароль</p>
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
                Зарегистрироваться
            </button>
            <div className="sign__signature">
                <p className="sign__signature-question">Уже зарегистрированны?</p>
                <Link to="/sign-in" className="sign__signature-enter">Войти</Link>
            </div>
            </form>
      </div>
    );
  }
  
  export default Register;
  