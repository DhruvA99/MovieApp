import React, { Component } from "react";
import CardComponent from "../../Components/CardComponent/CardComponent";
import Navbar from "../Navbar/Navbar";
import classes from "./WatchList.module.css";
import { connect } from "react-redux";

class WatchList extends Component {
  render() {
    let list = <p>No Movies in your List</p>;
    if (this.props.watchList.length !== 0) {
      list = this.props.watchList.map((item) => {
        return (
          <div className={classes.card}>
            <CardComponent key={item.id} item={item} />
          </div>
        );
      });
    }
    return (
      <div>
        <Navbar heading="WatchList" />
        <div className={classes.movieList}>{list}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  watchList: state.movie.watchList,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(WatchList);
