import React from "react";
import classes from "./Modal.module.css";
import { connect } from "react-redux";
import {
  addMovieToWatchList,
  addMovieToWatchedList,
  deleteWatchList,
  deleteWatchedList,
} from "../../redux/actions/actionCreator";

const Modal = (props) => {
  const addToListHandler = (type) => {
    if (type.toLowerCase() === "watchlist") {
      props.addMovieToWatchList(props.item, props.watchList);
      removeMovieHandler("watchlist");
    } else {
      props.addMovieToWatchedList(props.item, props.watchedList);
      removeMovieHandler("watchedlist");
    }
  };

  const removeMovieHandler = (type) => {
    //type is returned opposite from the button i.e watched for watch and vice versa
    if (type.toLowerCase() === "watchedlist") {
      props.deleteWatchList(props.item.id, props.watchList);
    } else {
      props.deleteWatchedList(props.item.id, props.watchedList);
    }
    props.modalCloseHandler();
  };

  return (
    <div className={classes.modal}>
      <div className={classes.pageContainer}>
        <span
          className={classes.close}
          onClick={() => props.modalCloseHandler()}
        >
          &times;
        </span>

        <div className={classes.container}>
          {props.item.poster_path ? (
            <img
              className={classes.image}
              src={`https://image.tmdb.org/t/p/w300${props.item.poster_path}`}
              alt="posterImage"
            />
          ) : (
            <div className={classes.image}></div>
          )}
          <div className={classes.insideContainer}>
            <span className={classes.heading}>{props.item.original_title}</span>
            <p>
              <small>{props.item.release_date}</small>
            </p>
            <br />
            <p className={classes.description}>{props.item.overview}</p>
            <br />
            <div className={classes.insideButtonDiv}>
              <button
                className={classes.insideButton}
                onClick={() => addToListHandler(props.buttonText)}
              >
                Add To {props.buttonText}
              </button>
              <button
                className={classes.insideButton}
                onClick={() => removeMovieHandler(props.buttonText)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    watchList: state.movie.watchList,
    watchedList: state.movie.watchedList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addMovieToWatchedList: (data, list) => {
    dispatch(addMovieToWatchedList(data, list));
  },
  addMovieToWatchList: (data, list) => {
    dispatch(addMovieToWatchList(data, list));
  },
  deleteWatchedList: (id, list) => {
    dispatch(deleteWatchedList(id, list));
  },
  deleteWatchList: (id, list) => {
    dispatch(deleteWatchList(id, list));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
