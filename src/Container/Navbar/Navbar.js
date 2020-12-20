import React, { Component } from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {
    isModalOpen: false,
  };
  modalOpenHandler = () => {
    this.setState((prevState) => ({ isModalOpen: !prevState.isModalOpen }));
  };
  render() {
    return (
      <nav className={classes.nav}>
        <span onClick={this.modalOpenHandler} className={classes.heading}>
          {this.props.heading1}{" "}
          <span className={classes.headingText}>{this.props.heading2}</span>
        </span>
        <div
          className={`${classes.navList} ${
            this.state.isModalOpen ? classes.sideDrawer : null
          }`}
        >
          <NavLink
            className={classes.item}
            to="/"
            exact
            activeStyle={{
              fontWeight: "bold",
              color: "rgb(227, 183, 21)",
            }}
          >
            WatchList
          </NavLink>
          <NavLink
            className={classes.item}
            to="/watched"
            activeStyle={{
              fontWeight: "bold",
              color: "rgb(227, 183, 21)",
            }}
          >
            WatchedList
          </NavLink>
          <NavLink
            className={classes.item}
            to="/add"
            activeStyle={{
              fontWeight: "bold",
              color: "rgb(227, 183, 21)",
            }}
          >
            search
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default Navbar;
