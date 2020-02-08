import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import {promoFilm, films} from "../../mockData";

it(`Should Render WelcomeScreen correctly`, () => {
  const tree = renderer
    .create(<App
      promoFilm={promoFilm}
      films={films}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
