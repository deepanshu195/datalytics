import React from "react";
// import ReactDOM from "react-dom";
import {  Route, Switch, Redirect } from "react-router-dom";
import Demo from "./containers/Demo";
import Landing from "./containers/LandingPage/LandingPage";
// import Stepper from "./containers/Stepper/Stepper";
import Signin from "./components/Header/Signin/Signin";
const Router = (props) => {
  return (
    <Switch>
      <Route path="/demo" component={Demo} />
      
      {/* <Route path="/login" component={Signin} /> */}

      <Route path="/" exact component={Landing} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Router;
