import React from 'react';
import { Redirect } from "react-router-dom";
import store from "../../../store/store";

const List = () => {
  const user = store.getState().user;

  const content = user ? <div><h1>List</h1></div> : <Redirect to="/login"/>;

  return ( content )
};

export default List;
