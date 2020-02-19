import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import settings from "./mocks/settings";
import filmsList from './mocks/films';

const init = () => {
  ReactDOM.render(
      <App filmsList={filmsList}
        promoFilm={settings.PROMO_FILM}/>,
      document.getElementById(`root`)
  );
};

init();
