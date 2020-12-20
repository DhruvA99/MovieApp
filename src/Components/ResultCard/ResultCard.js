import React from "react";
import classes from "./ResultCard.module.css";
import { connect } from "react-redux";

const ResultCard = (props) => {
  let movieWatchDisable = props.watchList.find(
    (movie) => movie.id === props.data.id
  )
    ? true
    : false;
  let movieWatchedDisable = props.watchedList.find(
    (movie) => movie.id === props.data.id
  )
    ? true
    : false;
  return (
    <div className={classes.resultCard}>
      <div className={classes.card}>
        {props.data.poster_path ? (
          <img
            className={classes.image}
            src={`https://tmdb.org/t/p/w200${props.data.poster_path}`}
            alt={`${props.data.movie_title}poster`}
          />
        ) : (
          <div className={classes.image}></div>
        )}
        {props.data.original_title && props.data.release_date ? (
          <div className={classes.titleDiv}>
            <span className={classes.title}>{props.data.original_title}</span>
            <span>{props.data.release_date.substring(0, 4)}</span>
            <div className={classes.buttonDiv}>
              <button
                className={classes.button}
                disabled={movieWatchDisable}
                onClick={() =>
                  props.onClickHandlerWatchList("watch", props.data)
                }
              >
                Add to WatchList
              </button>
              <button
                className={classes.button}
                disabled={movieWatchedDisable}
                onClick={() =>
                  props.onClickHandlerWatchedList("watched", props.data)
                }
              >
                Add to Watched
              </button>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  watchList: state.movie.watchList,
  watchedList: state.movie.watchedList,
});

export default connect(mapStateToProps, null)(ResultCard);
