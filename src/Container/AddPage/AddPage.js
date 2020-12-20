import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import classes from "./AddPage.module.css";
import ResultCard from "../../Components/ResultCard/ResultCard";
import {
  addMovieToWatchList,
  addMovieToWatchedList,
} from "../../redux/actions/actionCreator";
import Navbar from "../Navbar/Navbar";

class AddPage extends Component {
  state = {
    searchQuery: "",
    list: [],
  };

  onChangeHandler = (e) => {
    e.preventDefault();
    this.setState({ searchQuery: e.target.value });
    // if search box is not empty
    if (e.target.value) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
        )
        .then((res) => this.setState({ list: res.data.results }))
        .catch((err) => console.log(err));
    }
    //if the search box is empty
    else {
      this.setState({ list: [] });
    }
  };

  onClickHandler = (i, data) => {
    if (i === "watched") {
      this.props.addMovieToWatchedList(data, this.props.watchedList);
    } else {
      this.props.addMovieToWatchList(data, this.props.watchList);
    }
  };

  render() {
    return (
      <div className={classes.addPage}>
        <Navbar heading="Search" />
        <div className={classes.container}>
          <div className={classes.inputDiv}>
            <input
              type="text"
              placeholder="Search"
              className={classes.Input}
              value={this.state.searchQuery}
              onChange={this.onChangeHandler}
            />
          </div>
          <div className={classes.resultList}>
            {this.state.list.length > 0 && (
              <div className={classes.searchDropdown}>
                {this.state.list.map((item) => (
                  <ResultCard
                    key={item.id}
                    data={item}
                    onClickHandlerWatchedList={this.onClickHandler}
                    onClickHandlerWatchList={this.onClickHandler}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

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
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPage);
