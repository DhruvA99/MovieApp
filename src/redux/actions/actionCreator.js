import * as actionTypes from "./actionTypes";

export const appInitialize = () => (dispatch) => {
  if (localStorage.getItem("watchList")) {
    const ls = localStorage.getItem("watchList");
    dispatch({
      type: actionTypes.WATCHLIST_INITIALIZE,
      payload: JSON.parse(ls),
    });
  }

  if (localStorage.getItem("watchedList")) {
    const ls = localStorage.getItem("watchedList");
    dispatch({
      type: actionTypes.WATCHEDLIST_INITIALIZE,
      payload: JSON.parse(ls),
    });
  }
};

export const addMovieToWatchList = (data, list) => (dispatch) => {
  const newList = [...list, data];
  localStorage.setItem("watchList", JSON.stringify(newList));
  dispatch({ type: actionTypes.ADD_WATCHLIST, payload: newList });
};

export const addMovieToWatchedList = (data, list) => (dispatch) => {
  const newList = [...list, data];
  localStorage.setItem("watchedList", JSON.stringify(newList));
  dispatch({ type: actionTypes.ADD_WATCHEDLIST, payload: newList });
};

export const deleteWatchList = (id, list) => (dispatch) => {
  const newList = list.filter((movie) => id !== movie.id);
  localStorage.setItem("watchList", JSON.stringify(newList));
  dispatch({ type: actionTypes.WATCHLIST_DELETE, payload: newList });
};
export const deleteWatchedList = (id, list) => (dispatch) => {
  const newList = list.filter((movie) => id !== movie.id);
  localStorage.setItem("watchedList", JSON.stringify(newList));
  dispatch({ type: actionTypes.WATCHEDLIST_DELETE, payload: newList });
};
