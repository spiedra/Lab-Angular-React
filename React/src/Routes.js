import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Views components
import Home from "./Views/Home/Home";
import Login from "./Views/LogIn/Login";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home/:userName" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
