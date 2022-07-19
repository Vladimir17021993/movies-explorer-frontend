import { Link } from "react-router-dom";
import React from "react";
import useFormValidator from "./Validator";

function Login(props) {
  const useFormValidation = useFormValidator();
  const { email, password } = useFormValidation.values;
  const { values, errors, isFormValid, resetForm } = useFormValidation;

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleLogin({ email, password });
  };

  return (
    <div className="sign">
      <Link alt="Логотип" className="header__logo" to="/" />
      <form className="sign__content" name="login-form" onSubmit={handleSubmit}>
        <h2 className="sign__title">Рады видеть!</h2>
        <p className="sign__subtitle">E-mail</p>
        <input
          name="email"
          type="email"
          id="email"
          pattern={"^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$"}
          placeholder="email@yandex.ru"
          value={values.email || ""}
          onChange={useFormValidation.handleChange}
          required
          className="sign__text"
        />
        <span className="profile__error-text">{errors.email}</span>
        <p className="sign__subtitle">Пароль</p>
        <input
          name="password"
          type="password"
          id="password"
          minLength="5"
          maxLength="22"
          placeholder="введите пароль"
          value={values.password || ""}
          onChange={useFormValidation.handleChange}
          required
          className="sign__text"
        />
        <span className="profile__error-text">{errors.password}</span>
        <button
          className={`sign__submit-button sign__submit-button_hover ${
            !isFormValid && "sign__submit-button_disabled"
          }`}
          type="submit"
          disabled={!isFormValid}
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
