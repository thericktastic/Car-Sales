import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

// reducers
import { partReducer } from "./reducers/reducer";

// components
import App from "./App";

// styling
import "bulma/css/bulma.css";
import "./styles.scss";

// Step 1 - create a store and connect it to our app
// Use createStore function and pass it the reducer
const store = createStore(partReducer);
console.log("This is store.getState in App.js: ", store.getState());

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
