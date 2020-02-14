import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import films from "./mocks/films";

const promoFilm = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014,
};

const init = () => {
  ReactDOM.render(
      <App title={promoFilm.title}
        genre={promoFilm.genre}
        releaseDate={promoFilm.releaseDate}
        films={films} />,
      document.querySelector(`#root`)
  );
};

init();
