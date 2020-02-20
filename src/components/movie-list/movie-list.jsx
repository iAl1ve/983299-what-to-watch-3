import React from "react";
import PropTypes from 'prop-types';
import MovieCard from "../movie-card/movie-card.jsx";

class MovieList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {activeCard: {}};
    this.timerId = null;
    this.HOVER_DELAY = 1000;

    this._handleMovieCardOut = this._handleMovieCardOut.bind(this);
    this._handleMovieCardOver = this._handleMovieCardOver.bind(this);
  }

  _handleMovieCardOver(card) {
    this.timerId = setTimeout(() => {
      this.setState({
        activeCard: card,
      });
    }, this.HOVER_DELAY);
  }

  _handleMovieCardOut() {
    clearTimeout(this.timerId);
    this.setState({
      activeCard: {},
    });
  }

  componentWillUnmount() {
    clearTimeout(this.timerId);
  }

  render() {
    const {filmsList, onMovieCardClick} = this.props;
    const {activeCard} = this.state;
    return (
      filmsList.map((el) => {
        return (
          <MovieCard
            key={el.id}
            film={el}
            onFilmMouseOut={this._handleMovieCardOut}
            onFilmMouseOver={this._handleMovieCardOver}
            onMovieCardClick={onMovieCardClick}
            activeCard={activeCard}
          />
        );
      })
    );
  }
}

MovieList.propTypes = {
  filmsList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    imgSrc: PropTypes.string,
    id: PropTypes.id,
  })).isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};

export default MovieList;
