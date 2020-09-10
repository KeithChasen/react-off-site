import store from "../store/store";
import { Redirect } from "react-router-dom";
import React from "react";

export const checkAndRedirect = (component, shouldBeAuth = true) => {
  const user = store.getState().user;

  if (shouldBeAuth)
    return user ? component : <Redirect to="/login"/>;

  return !user ? component : <Redirect to="/"/>;
};
