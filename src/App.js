import React from 'react';

import DescriptionRestaurant from './pages/DescriptionRestaurants/DescriptionRestaurants';
import './App.css';
import { Provider } from "react-redux";
import reducers from "./redux/reducers/";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {BrowserRouter as Router , Route} from 'react-router-dom'

function App() {
  
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <Router>
          
          <Route exact path ="/restaurants/:id">

            <DescriptionRestaurant/>
          </Route>
         
        </Router>
        </Provider>
    
      
   
  );
}

export default App;
