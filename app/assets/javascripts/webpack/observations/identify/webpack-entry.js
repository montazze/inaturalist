// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from '../../test';
// console.log("[DEBUG] document.getElementById('app'): ", document.getElementById('app'))
// ReactDOM.render(<App />, document.getElementById('app'));

// var CommentBox = React.createClass({
//   render: function() {
//     return (
//       <div className="commentBox">
//         Hello, world! I am a CommentBox.
//       </div>
//     );
//   }
// });
// ReactDOM.render(
//   <CommentBox />,
//   document.getElementById('content')
// );
// console.log("[DEBUG] foo");
import "babel-polyfill";
import thunkMiddleware from "redux-thunk";
// import loggerMiddleware from "redux-logger";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/";
import App from "./components/App";
import { fetchObservations } from "./actions/";

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
);
// const store = createStore( rootReducer );

store.dispatch( fetchObservations() ).then( () =>
  console.log( store.getState() )
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById( "root" )
);
