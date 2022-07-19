import { Link } from "react-router-dom";
import React from "react";
import useFormValidator from "./Validator";

function Register(props) {
  const useFormValidation = useFormValidator();
  const { name, email, password } = useFormValidation.values;
  const { values, errors, isFormValid, resetForm } = useFormValidation;

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(evt) {
    evt.preventDefault();
    props.handleRegister({ name, email, password });
  }

  return (
    <div className="sign">
      <Link alt="Логотип" className="header__logo" to="/" />
      <form
        className="sign__content"
        name="login-form"
        noValidate
        onSubmit={handleSubmit}
      >
        <h2 className="sign__title">Добро пожаловать!</h2>
        <p className="sign__subtitle">Имя</p>
        <input
          name="name"
          type="text"
          id="name"
          minLength="2"
          maxLength="30"
          pattern={"^[a-zA-Zа-яА-ЯЁё\\s\\-]+$"}
          placeholder="введите имя"
          value={values.name || ""}
          onChange={useFormValidation.handleChange}
          required
          className="sign__text"
        />
        <span className="profile__error-text">{errors.name}</span>
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
          Зарегистрироваться
        </button>
        <div className="sign__signature">
          <p className="sign__signature-question">Уже зарегистрированны?</p>
          <Link to="/sign-in" className="sign__signature-enter">
            Войти
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
