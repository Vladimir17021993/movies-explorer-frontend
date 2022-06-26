import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error">
      <h1 className="error__title">404</h1>
      <p className="error__text">Страница не найдена</p>
      <Link to="/" className="error__back">
        Назад
      </Link>
    </div>
  );
}

export default Error;
