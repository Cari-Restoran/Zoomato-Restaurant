import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
// import styled from "styled-components";

import {
  Register,
  Login,
  ListRestaurant,
  DescriptionRestaurants,
  Home,
} from "./pages";
import reducers from "./redux/reducers";
import PrivateRoute from "./helpers/PrivateRoute";

function App() {
  return (
    <Provider store={createStore(reducers, applyMiddleware(logger, thunk))}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/userPage">
            <ListRestaurant />
          </PrivateRoute>
          <PrivateRoute exact path="/restaurants/:id">
            <DescriptionRestaurants />
          </PrivateRoute>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
