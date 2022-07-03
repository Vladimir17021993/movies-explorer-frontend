import React from "react";
import useFormValidator from "./Validator";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Profile(props) {
  const useFormValidation = useFormValidator();
  const { values, errors, isFormValid, resetForm, handleChange } =
    useFormValidation;
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(currentUser.name);
  const [email, setEmail] = React.useState(currentUser.email);

  function handleSubmitForm(evt) {
    evt.preventDefault();
    if (
      isFormValid ||
      currentUser.name === values.name ||
      currentUser.email === values.email
    ) {
      props.onUpdate({ name, email });
      resetForm();
    }
    return;
  }

  return (
    <form className="profile" noValidate onSubmit={handleSubmitForm}>
      <h1 className="profile__title">Привет, {currentUser.name}!</h1>
      <div className="profile__name">
        <p className="profile__designation">Имя</p>
        <input
          id="profileName"
          type="text"
          name="name"
          pattern={"^[a-zA-Zа-яА-ЯЁё\\s\\-]+$"}
          value={values.name || name}
          minLength="2"
          maxLength="30"
          disabled=""
          onChange={(e) => {
            handleChange(e);
            setName(e.target.value);
          }}
          className="profile__value"
        />
      </div>
      <span className="profile__error-text">{errors.name}</span>
      <div className="profile__email">
        <p className="profile__designation">E-mail</p>
        <input
          className="profile__value"
          id="profileEmail"
          type="email"
          name="email"
          pattern={"^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$"}
          value={email}
          onChange={(e) => {
            handleChange(e);
            setEmail(e.target.value);
          }}
        />
      </div>
      <span className="profile__error-text">{errors.email}</span>
      <nav className="profile__nav">
        <button
          className={`profile__nav-edit ${
            (!isFormValid ||
              currentUser.name === values.name ||
              currentUser.email === values.email) &&
            "profile__nav-edit_disabled"
          }`}
          type="submit"
          disabled={
            !isFormValid ||
            currentUser.name === values.name ||
            currentUser.email === values.email
          }
        >
          Редактировать
        </button>
        <button
          type="button"
          onClick={props.onLogout}
          className="profile__nav-exit"
          to="/"
        >
          Выйти из аккаунта
        </button>
      </nav>
    </form>
  );
}

export default Profile;
