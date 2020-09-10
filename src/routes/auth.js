import { Route, Switch } from "react-router-dom";
import Main from "../components/Main/Main";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import React from "react";
import { checkAndRedirect } from "../utils/utils";

export const authRoutes =
  <Switch>
    <Route exact path="/">
      { () => checkAndRedirect(<Main/>) }
    </Route>
    <Route path="/login">
      { () => checkAndRedirect(<Login/>, false) }
    </Route>
    <Route path="/register">
      { () => checkAndRedirect(<Register/>, false) }
    </Route>
  </Switch>;
