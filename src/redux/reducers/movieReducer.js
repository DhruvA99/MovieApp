import * as actionTypes from "../actions/actionTypes";

const initialState = {
  watchList: [],
  watchedList: [],
  active: "watchList",
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.WATCHLIST_INITIALIZE:
      return {
        ...state,
        watchList: action.payload,
      };
    case actionTypes.WATCHEDLIST_INITIALIZE:
      return {
        ...state,
        watchedList: action.payload,
      };
    case actionTypes.ADD_WATCHLIST:
      return {
        ...state,
        watchList: action.payload,
      };
    case actionTypes.ADD_WATCHEDLIST:
      return {
        ...state,
        watchedList: action.payload,
      };
    case actionTypes.WATCHLIST_DELETE:
      return {
        ...state,
        watchList: action.payload,
      };
    case actionTypes.WATCHEDLIST_DELETE:
      return {
        ...state,
        watchedList: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default movieReducer;
