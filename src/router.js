import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Demo from "./containers/Demo";
import Landing from "./containers/LandingPage/LandingPage";
import Stepper from "./containers/Stepper/Stepper";

const Router = (props) => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/demo" component={Demo} />
      <Route path="/stepper" component={Stepper} />
    </Switch>
  );
};

export default Router;
