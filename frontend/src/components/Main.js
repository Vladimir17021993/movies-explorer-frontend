import img from "../images/Web-planet.png";
import arrow from "../images/arrow.svg";
import photo from "../images/photo.jpg";

function Main() {
  return (
    <div>
      <section className="main">
        <div className="main__info">
          <h1 className="main__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <p className="main__text">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <div className="main__link-box">
            <a
              href="https://practicum.yandex.ru/profile/web/"
              rel="noreferrer"
              target="_blank"
              className="main__link"
            >
              Узнать больше
            </a>
          </div>
        </div>
        <img className="main__img" src={img} alt="Веб-глобус" />
      </section>
      <section className="project">
        <h2 className="project__title">О проекте</h2>
        <div className="project__text">
          <div className="project__colomn">
            <p className="project__subtitle">
              Дипломный проект включал 5 этапов
            </p>
            <p className="project__info">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="project__colomn">
            <p className="project__subtitle">
              На выполнение диплома ушло 5 недель
            </p>
            <p className="project__info">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="project__scale">
          <div className="project__filled-scale">
            <div className="project__green-scale">
              <p className="project__scale-text">1 неделя</p>
            </div>
            <p className="project__signature">Back-end</p>
          </div>
          <div className="project__empty-scale">
            <div className="project__grey-scale">
              <p className="project__scale-text">4 недели</p>
            </div>
            <p className="project__signature">Front-end</p>
          </div>
        </div>
      </section>
      <section className="tech">
        <h2 className="tech__title">Технологии</h2>
        <h3 className="tech__subtitle">7 Технологий</h3>
        <p className="tech__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <div className="tech__blocks">
          <div className="tech__block">
            <p className="tech__block-text">HTML</p>
          </div>
          <div className="tech__block">
            <p className="tech__block-text">CSS</p>
          </div>
          <div className="tech__block">
            <p className="tech__block-text">JS</p>
          </div>
          <div className="tech__block">
            <p className="tech__block-text">React</p>
          </div>
          <div className="tech__block">
            <p className="tech__block-text">Git</p>
          </div>
          <div className="tech__block">
            <p className="tech__block-text">Express.js</p>
          </div>
          <div className="tech__block">
            <p className="tech__block-text">MongoDB</p>
          </div>
        </div>
      </section>
      <section className="student">
        <h2 className="student__title">Студент</h2>
        <div className="student__main">
          <div className="student__main-block">
            <ul className="student__list">
              <li className="student__subtitle">Владимир</li>
              <li className="student__about">Фронтенд-разработчик, 29 лет</li>
              <li className="student__text">
                Я родился в Жигулевске и живу в Самаре, закончил факультет
                радиотехники СГАУ. У меня есть 3 кошки. Я люблю слушать музыку,
                а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работаю
                специалистом по защите информации. После того, как пройду курс
                по веб-разработке, хочу найти работу веб-разработчиком.
              </li>
            </ul>
            <div className="student__links">
              <a
                href="https://vk.com/eximer1993"
                rel="noreferrer"
                target="_blank"
                className="student__links-main"
              >
                Facebook
              </a>
              <a
                href="https://github.com/Vladimir17021993"
                rel="noreferrer"
                target="_blank"
                className="student__links-main"
              >
                Github
              </a>
            </div>
          </div>
          <img src={photo} className="student__img" alt="Мое фото" />
        </div>
        <p className="student__portfolio">Портфолио</p>
        <div className="student__portfolio-links">
          <div className="student__link-block">
            <a
              href="https://github.com/Vladimir17021993"
              rel="noreferrer"
              target="_blank"
              className="student__link"
            >
              Статичный сайт
            </a>
            <img src={arrow} className="student__link-img" alt="Стрелочка" />
          </div>
          <div className="student__link-block">
            <a
              href="https://github.com/Vladimir17021993"
              rel="noreferrer"
              target="_blank"
              className="student__link"
            >
              Адаптивный сайт
            </a>
            <img src={arrow} className="student__link-img" alt="Стрелочка" />
          </div>
          <div className="student__link-block">
            <a
              href="https://github.com/Vladimir17021993"
              rel="noreferrer"
              target="_blank"
              className="student__link"
            >
              Одностраничное приложение
            </a>
            <img src={arrow} className="student__link-img" alt="Стрелочка" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
