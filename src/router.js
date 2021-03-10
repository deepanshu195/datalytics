import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Demo from "./containers/Demo";
import Landing from "./containers/LandingPage/LandingPage";
import Stepper from "./containers/Stepper/Stepper";
import Signin from "./components/Header/Signin/Signin";
const Router = (props) => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/demo" component={Demo} />
      <Route path="/stepper" component={Stepper} />
      
      <Route path="/login" component={Signin} />
    </Switch>
  );
};

export default Router;
