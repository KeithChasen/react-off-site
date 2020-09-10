import React, {useEffect, useState} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import Main from "./components/Main/Main";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Header from './components/Header/Header';
import { checkAuth } from "./service/auth/auth";
import { useDispatch } from "react-redux";
import { userLoaded } from "./store/actions";
import Loader from "./components/Loader/Loader";
import List from "./components/Books/List/List";
import Create from "./components/Books/Create/Create";
import store from "./store/store";

const App = () =>  {
  const dispatch = useDispatch();
  const [ loader, setLoader ] = useState(true);

  useEffect(() => {
    checkAuth(user => {
      if (user) {
        dispatch(userLoaded(user));
      } else {
        dispatch(userLoaded(null));
      }
      setLoader(false);
    });
  });

  const checkAndRedirect = (component, shouldBeAuth = true) => {
    const user = store.getState().user;

    if (shouldBeAuth)
      return user ? component : <Redirect to="/login"/>;

    return !user ? component : <Redirect to="/"/>;
  };

  const booksRoutes =
    <Switch>
      <Route path="/books/list">
        { () => checkAndRedirect(<List/>) }
      </Route>
      <Route path="/books/create">
        { () => checkAndRedirect(<Create/>) }
      </Route>

      <Route path="/book/$id">
      </Route>

      <Route path="/book/$id/characters">
      </Route>

      <Route path="/book/$id/characters/$id">
      </Route>
    </Switch>;

  const content = loader ?
    <Loader/> :
    <BrowserRouter>
      <Header/>
      { booksRoutes }
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
      </Switch>
    </BrowserRouter>;

  return (
    <div className="App">
      { content }
    </div>
  );
};

export default App;
