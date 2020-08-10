import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/SignIn";
import Register from "./components/Register";





const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Register} />
        <Route path="/signin" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
