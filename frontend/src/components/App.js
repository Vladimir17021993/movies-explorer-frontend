import React, { useState, useCallback } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import * as Auth from "../utils/Auth";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import Movies from "./Movies.js";
import SavedMovies from "./SavedMovies.js";
import Profile from "./Profile.js";
import Register from "./Register.js";
import Login from "./Login.js";
import Error404 from "../utils/Error404.js";
import moviesApi from "../utils/MoviesApi";
import mainApi from "../utils/MainApi";
import ProtectedRoute from "./ProtectedRoute";
import LoginRoute from "./LoginRoute";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [appMovies, setAppMovies] = useState([]);
  const [isShort, setIsShort] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [login, setLogin] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const history = useNavigate();
  const location = useLocation();

  function handleLogin(data) {
    Auth.authorize(data.password, data.email)
      .then((data) => {
        if (!data.jwt) {
          return;
        }
        localStorage.setItem("jwt", data.jwt);
        setLogin(true);
        history("/movies");
        isAppMovies();

      })
      .catch((err) => {
        console.log(err);
        if (err === 401) {
          alert("Неверный логин или пароль");
        } else alert("Что то пошло не так, попробуйте позже");
      });
    console.log(data);
  }

  const handleRegister = (data) => {
    Auth.register(data.name, data.password, data.email)
      .then((res) => {
        if (res) {
          handleLogin(data);
        }
      })
      .catch((err) => console.log(err));
  };

  const tokenCheck = () => {
    if (!localStorage.getItem("jwt")) return;
    const jwt = localStorage.getItem("jwt");
    Auth.getContent(jwt)
      .then((data) => {
        if (!data) return;
        setCurrentUser(data.data);
        setLogin(true);
        location.pathname === "/signin" || location.pathname === "/signup"
          ? history("/movies")
          : history(location.pathname);
      })
      .catch((err) => {
        alert("Что то пошло не так, попробуйте позже");
        console.log(err);
      });
  };

  React.useEffect(() => {
    if (!login) {
      return;
    }
    mainApi.getToken();
    mainApi
      .getUserInformation()
      .then((user) => {
        setCurrentUser(user.data);
        console.log(currentUser);
      })
      .catch((error) => {
        console.log(error);
      })
      isAppMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [login]);

  function handleLogout() {
    localStorage.clear();
    history("/");
    setLogin(false);
    setAppMovies([]);
    setIsShort(false);
    setCurrentUser({});
  }

  function handleUpdateUser(data) {
    mainApi
      .setUserInfo(data.name, data.email)
      .then((userData) => {
        setCurrentUser(userData);
        alert("Данные успешно изменены");
      })
      .catch((error) => {
        alert("Что то пошло не так, попробуйте позже");
        console.log(error);
      });
  }

  const isAppMovies = useCallback(() => {
    if (localStorage.getItem("movies")) {
      setAppMovies(JSON.parse(localStorage.getItem("movies")));
    } else {
      handleMovies();
    }
  }, []);

  function handleMovies() {
    moviesApi
      .getMoviesList()
      .then((moviesList) => {
        const formattedMovies = moviesList.map((movie) => {
          return {
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: "https://api.nomoreparties.co/" + movie.image.url,
            trailerLink: movie.trailerLink,
            thumbnail:
              "https://api.nomoreparties.co/" +
              movie.image.formats.thumbnail.url,
            movieId: movie.id,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
          };
        });
        localStorage.setItem("movies", JSON.stringify(formattedMovies));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setAppMovies(JSON.parse(localStorage.getItem("movies")));
      });
  }

  function searchMovies(movies, search) {
    const result = movies.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(search.toLowerCase());
    });
    if (!isShort) {
      return result;
    } else {
      return shortMovie(result);
    }
  }

  function shortMovie(movies) {
    return movies.filter((movie) => {
      return movie.duration <= 40;
    });
  }

  function handleSaveMovie(movie) {
    mainApi
      .addMovie(movie)
      .then((savedMovie) => {
        setSavedMovies([savedMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDeleteMovie(movie) {
    const savedMovie = savedMovies.find(
      (item) => item.movieId === movie.movieId
    );
    mainApi
      .removeMovie(savedMovie)
      .then(() => {
        const tempSavedMovies = savedMovies.filter(
          (item) => item._id !== savedMovie._id
        );
        setSavedMovies(tempSavedMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function checkIsMovieSaved(movie) {
    const isSaved = savedMovies.some((item) => item.movieId === movie.movieId);
    return isSaved;
  }

  function handleMarkedMovie(movie) {
    const isSaved = checkIsMovieSaved(movie);
    if (!isSaved) {
      handleSaveMovie(movie);
    } else {
      handleDeleteMovie(movie);
    }
  }

  function handleGetSavedMovies() {
    setIsLoading(true);
    mainApi
      .getMovieList()
      .then((movies) => {
        setSavedMovies(
          movies.slice().filter((item) => item.owner === currentUser._id)
        );
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  React.useEffect(() => {
    if (login) {
      handleGetSavedMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, login]);

  React.useEffect(() => {
    tokenCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header isLogin={login} />
                <Main />
              </>
            }
          ></Route>
          <Route element={<ProtectedRoute loggedIn={login} />} path="/movies">
            <Route
              path="/movies"
              element={
                <>
                  <Header isLogin={login} />
                  <Movies
                    searchMovies={searchMovies}
                    appMovies={appMovies}
                    isShort={isShort}
                    setIsShort={setIsShort}
                    shortMovie={shortMovie}
                    setIsLoading={setIsLoading}
                    isLoading={isLoading}
                    handleSaveMovie={handleSaveMovie}
                    handleDeleteMovie={handleDeleteMovie}
                    handleMarkedMovie={handleMarkedMovie}
                    savedMovies={savedMovies}
                    checkIsMovieSaved={checkIsMovieSaved}
                  />
                </>
              }
            ></Route>
          </Route>
          <Route
            element={<ProtectedRoute loggedIn={login} />}
            path="/saved-movies"
          >
            <Route
              path="/saved-movies"
              element={
                <>
                  <Header isLogin={login} />
                  <SavedMovies
                    searchMovies={searchMovies}
                    appMovies={appMovies}
                    isShort={isShort}
                    setIsShort={setIsShort}
                    shortMovie={shortMovie}
                    setIsLoading={setIsLoading}
                    isLoading={isLoading}
                    handleSaveMovie={handleSaveMovie}
                    handleDeleteMovie={handleDeleteMovie}
                    handleMarkedMovie={handleMarkedMovie}
                    savedMovies={savedMovies}
                    checkIsMovieSaved={checkIsMovieSaved}
                  />
                </>
              }
            ></Route>
          </Route>
          <Route element={<ProtectedRoute loggedIn={login} />} path="/profile">
            <Route
              path="/profile"
              element={
                <>
                  <Header isLogin={login} />
                  <Profile
                    onUpdate={handleUpdateUser}
                    onLogout={handleLogout}
                  />
                </>
              }
            ></Route>
          </Route>
          <Route element={<LoginRoute loggedIn={login} />} path="/sign-up">
            <Route
              path="/sign-up"
              element={<Register handleRegister={handleRegister} />}
            ></Route>
          </Route>
          <Route element={<LoginRoute loggedIn={login} />} path="/sign-in">
            <Route
              path="/sign-in"
              element={<Login handleLogin={handleLogin} />}
            ></Route>
          </Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
