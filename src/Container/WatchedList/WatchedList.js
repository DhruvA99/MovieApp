import React, { Component } from "react";
import { connect } from "react-redux";
import CardComponent from "../../Components/CardComponent/CardComponent";
import Navbar from "../Navbar/Navbar";
import classes from "./WatchedList.module.css";
import { deleteWatchedList } from "../../redux/actions/actionCreator";

class WatchedList extends Component {
  render() {
    let list = <p>No Movies in your List</p>;
    if (this.props.watchedList.length !== 0) {
      list = this.props.watchedList.map((item) => {
        return (
          <div className={classes.card}>
            <CardComponent key={item.id} item={item} />
            <div className={classes.buttonDiv}>
              <div
                className={classes.button}
                onClick={() =>
                  this.props.deleteWatchedList(item.id, this.props.watchedList)
                }
              >
                <i className="fa fa-ban fa-2x"></i>
              </div>
              <div
                className={classes.button}
                onClick={() =>
                  this.props.deleteWatchedList(item.id, this.props.watchedList)
                }
              >
                <i className="fa fa-info-circle fa-2x"></i>
              </div>
            </div>
          </div>
        );
      });
    }
    return (
      <div>
        <Navbar heading="WatchedList" />
        <div className={classes.movieList}>{list}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  watchedList: state.movie.watchedList,
});

const mapDispatchToProps = (dispatch) => ({
  deleteWatchedList: (id, list) => {
    dispatch(deleteWatchedList(id, list));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WatchedList);
