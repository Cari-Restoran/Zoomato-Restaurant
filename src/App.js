import React from "react";
import { Provider } from "react-redux";
import reducers from "./redux/reducers";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import "./App.css";
import ListRestaurant from "./pages/ListRestaurants/ListRestaurant";

function App() {
    return (
        <Provider store={createStore(reducers, applyMiddleware(thunk))}>
            <ListRestaurant />
        </Provider>
    );
}

export default App;
