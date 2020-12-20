import classes from "./CardComponent.module.css";
import React from "react";

const CardComponent = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.Card}>
        <img
          className={classes.image}
          src={`https://tmdb.org/t/p/w200${props.item.poster_path}`}
          alt="pic"
        />
      </div>
    </div>
  );
};

export default CardComponent;
