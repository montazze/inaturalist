import "babel-polyfill";

// As in https://en.wikipedia.org/wiki/Thunk. This allows us to make actions
// that are functions. See http://redux.js.org/docs/advanced/AsyncFlow.html
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import React from "react";
import { render } from "react-dom";
// Provider makes the store available to all descendant components
import { Provider } from "react-redux";

import rootReducer from "./reducers/";
import App from "./components/app";
import { fetchObservations, setConfig } from "./actions/";

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
);

// Add data from HTML tags, e.g. CSRF info to authenticate all POSTs
store.dispatch( setConfig( {
  nodeApiHost: $( "[name='config:node_api_host']" ).attr( "content" ),
  csrfParam: $( "[name='csrf-param']" ).attr( "content" ),
  csrfToken: $( "[name='csrf-token']" ).attr( "content" )
} ) );

// retrieve initial set of observations
store.dispatch( fetchObservations() );

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById( "app" )
);
