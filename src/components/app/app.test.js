import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const promoFilm = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014,
};

const films = [
  {
    id: 0,
    title: `The Grand Budapest Hotel`,
    previewImage: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Drama`,
    releaseDate: 2014,
    posterImage: `the-grand-budapest-hotel-poster.jpg`,
    backgroundImage: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 8.9,
    ratingCount: 240,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege. Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Wes Andreson`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`]
  },
  {
    id: 1,
    title: `Bohemian Rhapsody`,
    previewImage: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Comedy`,
    releaseDate: 2011,
    posterImage: `the-grand-budapest-hotel-poster.jpg`,
    backgroundImage: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 8,
    ratingCount: 1240,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    director: `director2`,
    starring: [`actor`, `Edward Norton`, `Jude Law`, `Willem Dafoe`]
  },
  {
    id: 2,
    title: `Macbeth`,
    previewImage: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Horror`,
    releaseDate: 2010,
    posterImage: `the-grand-budapest-hotel-poster.jpg`,
    backgroundImage: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 7,
    ratingCount: 40,
    description: `Cras aliquet varius magna, non porta ligula feugiat eget.`,
    director: `director3`,
    starring: [`Bill Murray`, `actor`, `Jude Law`, `Willem Dafoe`]
  },
  {
    id: 3,
    title: `Aviator`,
    previewImage: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Comedy`,
    releaseDate: 2012,
    posterImage: `the-grand-budapest-hotel-poster.jpg`,
    backgroundImage: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 1.9,
    ratingCount: 2240,
    description: `Fusce tristique felis at fermentum pharetra.`,
    director: `director4`,
    starring: [`Bill Murray`, `Edward Norton`, `actor`, `Willem Dafoe`]
  },
  {
    id: 4,
    title: `We need to talk about Kevin`,
    previewImage: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Crime`,
    releaseDate: 2013,
    posterImage: `the-grand-budapest-hotel-poster.jpg`,
    backgroundImage: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 2.9,
    ratingCount: 20,
    description: `Aliquam id orci ut lectus varius viverra.`,
    director: `director5`,
    starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `actor`]
  },
  {
    id: 5,
    title: `What We Do in the Shadows`,
    previewImage: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Drama`,
    releaseDate: 2000,
    posterImage: `the-grand-budapest-hotel-poster.jpg`,
    backgroundImage: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 5.9,
    ratingCount: 240,
    description: `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    director: `director6`,
    starring: [`actor`, `actor2`, `Jude Law`, `Willem Dafoe`]
  },
  {
    id: 6,
    title: `Revenant`,
    previewImage: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Comedy`,
    releaseDate: 2001,
    posterImage: `the-grand-budapest-hotel-poster.jpg`,
    backgroundImage: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 4.9,
    ratingCount: 245,
    description: `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    director: `director7`,
    starring: [`Bill Murray`, `actor`, `actor2`, `Willem Dafoe`]
  },
  {
    id: 7,
    title: `Johnny English`,
    previewImage: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Sci-Fi`,
    releaseDate: 2004,
    posterImage: `the-grand-budapest-hotel-poster.jpg`,
    backgroundImage: `bg-the-grand-budapest-hotel.jpg`,
    ratingScore: 8.7,
    ratingCount: 2440,
    description: `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    director: `director8`,
    starring: [`Bill Murray`, `Edward Norton`, `actor`, `actor2`]
  },
];

it(`App render correct`, () => {
  const tree = renderer
    .create(<App title={promoFilm.title} genre={promoFilm.genre} releaseDate={promoFilm.releaseDate} films={films} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
