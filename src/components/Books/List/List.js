import React from 'react';
import { NavLink, Redirect } from "react-router-dom";
import store from "../../../store/store";

const List = () => {
  const user = store.getState().user;

  const component =  (
    <div>
      <h1>List</h1>
      <ul>
        <li>Book 1</li>
      </ul>
      <NavLink to='/book/create'>Create Book</NavLink>
    </div>
  );

  const content = user ?

     component :

    <Redirect to="/login"/>;

  return ( content )
};

export default List;
