import React from 'react';
import { Redirect } from "react-router-dom";
import store from "../../store/store";

const Main = () => {
  const user = store.getState().user;

  const content = user ? <div><h1>Main</h1></div> : <Redirect to="/login"/>;

  return ( content )
};

export default Main;