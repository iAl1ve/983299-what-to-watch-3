import React, {memo} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';
import {func, number} from 'prop-types';
import {FilmsType} from '../../types';

const ShowMoreButton = ({shownCardsNumber, showMoreCards, filteredFilms}) => {
  const visible = shownCardsNumber <= filteredFilms.length;

  if (!visible) {
    return null;
  }

  return (
    <button className="catalog__button" type="button" onClick={showMoreCards}>
      Show more
    </button>
  );
};

ShowMoreButton.propTypes = {
  shownCardsNumber: number,
  showMoreCards: func,
  filteredFilms: FilmsType
};

const mapStateToProps = ({shownCardsNumber}) => ({
  shownCardsNumber
});

const mapDispatchToProps = (dispatch) => ({
  showMoreCards: () => {
    dispatch(ActionCreator.showMoreCards());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(ShowMoreButton));
