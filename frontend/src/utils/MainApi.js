class MainApi {
  constructor({ address }) {
    this._address = address;
  }

  getToken = () => {
    return `Bearer ${localStorage.getItem("jwt")}`;
  };

  getUserInformation() {
    return this._get("users/me");
  }

  getMovieList() {
    return this._get("movies");
  }

  setUserInfo(name, email) {
    return this._set("users/me", "PATCH", { name, email });
  }

  addMovie(movie) {
    return this._set("movies", "POST", {
      country: movie.country || "unknow",
      director: movie.director || "unknow",
      duration: movie.duration || 0,
      year: movie.year || 0,
      description: movie.description || "unknow",
      image: movie.image || "unknow",
      trailerLink: movie.trailerLink || "unknow",
      thumbnail: movie.thumbnail || "unknow",
      movieId: movie.movieId,
      nameRU: movie.nameRU || "unknow",
      nameEN: movie.nameEN || "unknow",
    });
  }

  removeMovie(movie) {
    return this._set(`movies/${movie._id}`, "DELETE");
  }

  _checkResponse() {
    return (res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  _get(query) {
    const options = {
      headers: {
        authorization: this.getToken(),
      },
    };

    return fetch(this._getUrl(query), options).then(this._checkResponse());
  }

  _set(query, method, body) {
    const options = {
      method,
      headers: {
        authorization: this.getToken(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    return fetch(this._getUrl(query), options).then(this._checkResponse());
  }
  _getUrl(query) {
    return `${this._address}/${query}`;
  }
}

const mainApi = new MainApi({
  address: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  },
});

export default mainApi;
