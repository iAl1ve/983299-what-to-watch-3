import React from "react";
import renderer from "react-test-renderer";
import MovieReviews from "./movie-reviews.jsx";

const mock = {
  film: {
    title: `Some Title`,
    genre: `Comedy`,
    releaseYear: 2015,
    imgSrc: `Some Path`,
    bgSrc: `iSome Path`,
    posterSrc: `Some Path`,
    ratingScore: 8.7,
    ratingCount: 230,
    description: [
      `Some description`,
    ],
    director: `Some cool directot`,
    starring: [`Actor1`, `Actor2`],
    id: 2,
    videoSrc: `Some Path`,
    filmDuration: 99,
    reviews: [
      {
        rating: 8.1,
        reviewText: `Description`,
        reviewer: `Kate Muiry`,
        reviewDate: `2016-12-25`,
      },
      {
        rating: 8.1,
        reviewText: `Description`,
        reviewer: `Kate Muiry`,
        reviewDate: `2016-12-25`,
      },
      {
        rating: 8.1,
        reviewText: `Description`,
        reviewer: `Kate Muiry`,
        reviewDate: `2016-12-25`,
      },
      {
        rating: 8.1,
        reviewText: `Description`,
        reviewer: `Kate Muiry`,
        reviewDate: `2016-12-25`,
      },
      {
        rating: 8.1,
        reviewText: `Description`,
        reviewer: `Kate Muiry`,
        reviewDate: `2016-12-25`,
      }
    ]
  },
};

it(`<MovieReviews /> should render correctly`, () => {
  const {film} = mock;
  const tree = renderer
    .create(<MovieReviews film={film}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
