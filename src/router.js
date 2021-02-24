import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Demo from "./containers/Demo";

const Router = (props) => {
	return (
		<Switch>
			<Route path="/demo" component={Demo} />
		</Switch>
	);
};

export default Router;
