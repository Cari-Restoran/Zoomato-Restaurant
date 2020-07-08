import React from 'react';

import DescriptionRestaurant from './pages/DescriptionRestaurants/DescriptionRestaurants';
import './App.css';
import { Provider } from "react-redux";
import reducers from "./redux/reducers/";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

function App() {
  
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
          <DescriptionRestaurant/>
        </Provider>
    
      
   
  );
}

export default App;
