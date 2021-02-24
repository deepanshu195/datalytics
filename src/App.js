import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import Router from "./router";

class App extends Component {
	render() {
		return <Router />;
	}
}

export default App;
