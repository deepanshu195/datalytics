import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { rootReducer } from "./store";
import { Provider } from "react-redux";

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
ReactDOM.render(
  <BrowserRouter>
    <Provider store={createStoreWithMiddleware(rootReducer)}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
