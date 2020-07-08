import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
// import styled from "styled-components";

import { Register, Login, ListRestaurant } from "./pages";
import reducers from "./redux/reducers";

function App() {
  return (
    <Provider store={createStore(reducers, applyMiddleware(logger, thunk))}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/userPage">
            <ListRestaurant />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
