import {extend} from "../../utils/utils";
import settings from "../../mocks/settings";
import adaptFilmsData from "./adapt-films-data";
import {ActionCreators as AppActionCreators} from '../app-status/app-status.js';

let timer;

const initialState = {
  filmsList: [],
  promoFilm: settings.PROMO_FILM,
};

const ActionTypes = {
  LOAD_FILMS: `LOAD_FILMS`,
  SEND_REVIEW: `SEND_REVIEW`
};

const ActionCreators = {
  loadFilms: (films) => {
    return {
      type: ActionTypes.LOAD_FILMS,
      payload: films
    };
  },
  sendReview: () => {
    return {
      type: ActionTypes.SEND_REVIEW
    };
  }
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const newData = adaptFilmsData(response.data);
        dispatch(ActionCreators.loadFilms(newData));
      });
  },
  sendReview: (id, comment, rating) => (dispatch, getState, api) => {
    clearTimeout(timer);
    return api.post(`/comments/${id}`, {
      rating,
      comment
    })
      .then(() => {
        dispatch(AppActionCreators.changeFormSendingStatus());
        dispatch(ActionCreators.sendReview());
      })
      .catch((error) => {
        dispatch(AppActionCreators.changeFormSendingStatus());
        dispatch(AppActionCreators.setFormErrorMessage(error.response.data.error));
        timer = setTimeout(() => {
          dispatch(AppActionCreators.setFormErrorMessage(null));
        }, 4000);
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_FILMS:
      return extend(state, {
        filmsList: action.payload
      });
  }
  return state;
};

export {reducer, ActionCreators, ActionTypes, Operation};
