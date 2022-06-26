import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import Movies from "./Movies.js";
import SavedMovies from "./SavedMovies.js";
import Profile from "./Profile.js";
import Register from "./Register.js";
import Login from "./Login.js";
import Error404 from "../utils/Error404.js";

function App() {
  return (
    <div className="page__container">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/saved-movies" element={<SavedMovies />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/sign-up" element={<Register />}></Route>
        <Route path="/sign-in" element={<Login />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
