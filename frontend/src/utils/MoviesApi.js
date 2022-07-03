class MoviesApi {
  constructor({ address }) {
    this._address = address;
  }

  getMoviesList() {
    return this._get("beatfilm-movies");
  }

  _checkResponse() {
    return (res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  _get(query) {
    return fetch(this._getUrl(query)).then(this._checkResponse());
  }

  _getUrl(query) {
    return `${this._address}/${query}`;
  }
}

const moviesApi = new MoviesApi({
  address: "https://api.nomoreparties.co",
});

export default moviesApi;
