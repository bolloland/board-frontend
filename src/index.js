import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import allReducers from './reducers'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom' 
import thunk from 'redux-thunk'

//STORE -> GLOBALIZED STATE (where all our State data is kept)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, composeEnhancers(applyMiddleware(thunk)))
// allows store to access middleWare and redux-thunk

// https://github.com/zalmoxisus/redux-devtools-extension

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
