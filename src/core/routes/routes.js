import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "pages";
import Login from "pages/Login";
import Welcome from "pages/Welcome";
import SignUp from "pages/Signup";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(props) => <Welcome {...props} />} />
        <Route
          exact
          path="/dashboard"
          render={(props) => <Home {...props} />}
        />
        <Route path="/login" render={(props) => <Login {...props} />} />
        <Route path="/signup" render={(props) => <SignUp {...props} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
