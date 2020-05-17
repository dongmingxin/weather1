import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { Provider } from "react-redux";

import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./redux/reducers";

const composeEnhancers = composeWithDevTools({});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
ReactDOM.render((
  <Provider store={store}>
    <App />
  </ Provider>
  ),
  document.getElementById('root')
);


