/* eslint-disable no-underscore-dangle */
import 'babel-polyfill';
import jQuery from 'jquery';
import Tether from 'tether';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import App from './app';
import helloReducer from './reducer/hello';
import { APP_CONTAINER_SELECTOR } from '../shared/config';
import { isProd } from '../shared/util';

// import bootstrap
window.jQuery = jQuery;
window.Tether = Tether;
require('bootstrap');

let reduxDevToolsExtCompose = null;
if (!isProd) {
  reduxDevToolsExtCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const composeEnhancers = reduxDevToolsExtCompose || compose;

const store = createStore(combineReducers({
  hello: helloReducer,
}), composeEnhancers(applyMiddleware(thunkMiddleware)));

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR);

const wrapApp = (AppComponent, reduxStore) =>
  <Provider store={reduxStore}>
    <BrowserRouter>
      <AppContainer>
        <AppComponent />
      </AppContainer>
    </BrowserRouter>
  </Provider>;

ReactDOM.render(wrapApp(App, store), rootEl);

if (module.hot) {
  module.hot.accept('./app', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./app').default;
    ReactDOM.render(wrapApp(NextApp, store), rootEl);
  });
}
