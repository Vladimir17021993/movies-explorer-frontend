import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" && (
        <footer className="footer">
          <p className="footer__text">
            Учебный проект Яндекс.Практикум х BeatFilm.
          </p>
          <div className="footer__block">
            <p className="footer__date">&#64;2022</p>
            <div className="footer__links">
              <a href="https://practicum.yandex.ru" className="footer__link">
                Яндекс.Практикум
              </a>
              <a href="https://github.com/" className="footer__link">
                Github
              </a>
              <a href="http://facebook.com/" className="footer__link">
                Facebook
              </a>
            </div>
          </div>
        </footer>
      )}
      {location.pathname === "/movies" && (
        <footer className="footer">
          <p className="footer__text">
            Учебный проект Яндекс.Практикум х BeatFilm.
          </p>
          <div className="footer__block">
            <p className="footer__date">&#64;2022</p>
            <div className="footer__links">
              <a href="https://practicum.yandex.ru" className="footer__link">
                Яндекс.Практикум
              </a>
              <a href="https://github.com/" className="footer__link">
                Github
              </a>
              <a href="http://facebook.com/" className="footer__link">
                Facebook
              </a>
            </div>
          </div>
        </footer>
      )}
      {location.pathname === "/saved-movies" && (
        <footer className="footer">
          <p className="footer__text">
            Учебный проект Яндекс.Практикум х BeatFilm.
          </p>
          <div className="footer__block">
            <p className="footer__date">&#64;2022</p>
            <div className="footer__links">
              <a href="https://practicum.yandex.ru" className="footer__link">
                Яндекс.Практикум
              </a>
              <a href="https://github.com/" className="footer__link">
                Github
              </a>
              <a href="http://facebook.com/" className="footer__link">
                Facebook
              </a>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}

export default Footer;
