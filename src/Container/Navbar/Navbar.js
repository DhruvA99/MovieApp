import React, { Component } from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className={classes.nav}>
        <span>{this.props.heading}</span>
        <div className={classes.navList}>
          <NavLink to="/">WatchList</NavLink>
          <NavLink to="/watched">Watched</NavLink>
          <NavLink to="/add">search</NavLink>
        </div>
      </nav>
    );
  }
}

export default Navbar;
