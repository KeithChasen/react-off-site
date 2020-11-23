import { Route, Switch } from "react-router-dom";
import Account from "../components/Account/Account";
import React from "react";
import { checkAndRedirect } from "../utils/utils";

export const accountRoutes =
  <Switch>
    <Route path="/account">
      { () => checkAndRedirect(<Account/>) }
    </Route>

    {/*<Route path="/account">*/}
    {/*  { () => checkAndRedirect(<Account/>) }*/}
    {/*</Route>*/}
  </Switch>;
