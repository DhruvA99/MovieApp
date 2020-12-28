import React, { Component } from "react";
import CardComponent from "../../Components/CardComponent/CardComponent";
import Navbar from "../Navbar/Navbar";
import classes from "./WatchList.module.css";
import { connect } from "react-redux";
import Modal from "../../Components/Modal/Modal";

class WatchList extends Component {
  state = {
    infoContainer: false,
    modalData: null,
  };
  modalCloseHandler = () => {
    this.setState({ infoContainer: false });
  };

  infoClickHandler = (item) => {
    this.setState({
      infoContainer: true,
      modalData: item,
    });
  };
  render() {
    let list = (
      <p className={classes.emptyText}> No Movies in your WatchList!</p>
    );
    if (this.props.watchList.length !== 0) {
      list = this.props.watchList.map((item) => {
        return (
          <div className={classes.card} key={item.id}>
            <div className={classes.CardComponent}>
              <CardComponent item={item} />
            </div>

            <div className={`${classes.buttonDiv} ${classes.visible}`}>
              <div
                className={classes.button}
                onClick={() => this.infoClickHandler(item)}
              >
                <i className="fa fa-info-circle fa-3x"></i>
              </div>
            </div>
          </div>
        );
      });
    }
    return (
      <div>
        <Navbar heading1="Watch" heading2="List" />
        <div className={classes.movieList}>
          {list}
          {this.state.infoContainer ? (
            <Modal
              item={this.state.modalData}
              modalCloseHandler={this.modalCloseHandler}
              buttonText="WatchedList"
            />
          ) : null}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  watchList: state.movie.watchList,
});

export default connect(mapStateToProps, null)(WatchList);
