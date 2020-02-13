import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card";
import {film} from "../../test-data";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should pass data to handler on hover`, () => {
  const onHover = jest.fn();
  const movieCard = shallow(
      <MovieCard
        film={film}
        onHover={() => onHover(film)}
      />
  );

  movieCard.simulate(`mouseover`);

  expect(onHover.mock.calls.length).toBe(1);
  expect(onHover.mock.calls[0][0]).toMatchObject(film);
});
