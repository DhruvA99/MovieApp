import React, { Component } from "react";
import { connect } from "react-redux";
import CardComponent from "../../Components/CardComponent/CardComponent";
import Navbar from "../Navbar/Navbar";
import classes from "./WatchedList.module.css";
import { deleteWatchedList } from "../../redux/actions/actionCreator";
import Modal from "../../Components/Modal/Modal";

class WatchedList extends Component {
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
      <p className={classes.emptyText}>No Movies in your WatchedList!</p>
    );
    if (this.props.watchedList.length !== 0) {
      list = this.props.watchedList.map((item) => {
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
        <Navbar heading1="Watched" heading2="List" />
        <div className={classes.movieList}>
          {list}
          {this.state.infoContainer ? (
            <Modal
              item={this.state.modalData}
              modalCloseHandler={this.modalCloseHandler}
              buttonText="WatchList"
            />
          ) : null}
        </div>
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
