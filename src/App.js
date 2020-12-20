import "./App.css";
import WatchList from "./Container/WatchList/WatchList";
import { Switch, Route } from "react-router-dom";
import AddPage from "./Container/AddPage/AddPage";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { appInitialize } from "./redux/actions/actionCreator";
import WatchedList from "./Container/WatchedList/WatchedList";

function App(props) {
  const { appInitialize } = props;
  useEffect(() => {
    appInitialize();
  }, [appInitialize]);
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={WatchList} />
        <Route path="/watched" exact component={WatchedList} />
        <Route path="/add" exact component={AddPage} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  appInitialize: () => {
    dispatch(appInitialize());
  },
});

export default connect(null, mapDispatchToProps)(App);
