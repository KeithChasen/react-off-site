import React from 'react';
import { NavLink, Redirect } from "react-router-dom";
import store from "../../../store/store";

const List = () => {
  const user = store.getState().user;

  const component =  (
    <div>
      <h1>Create Book</h1>
      <form>
        <input type="text" placeholder='Title'/>
        <button>Create</button>
      </form>
    </div>
  );

  const content = user ?

    component :

    <Redirect to="/login"/>;

  return ( content )
};

export default List;
