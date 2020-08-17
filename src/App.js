import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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

const App = () =>  {

  const dispatch = useDispatch();
  const [ loader, setLoader ] = useState(true);

  checkAuth(user => {
    if (user) {
      dispatch(userLoaded(user));
    }
    setLoader(false);
  });

  const booksRoutes =
    <Switch>
      <Route path="/books/list">
        <List/>
      </Route>
      <Route path="/book/create">
        <Create/>
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
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>

        { booksRoutes }

        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
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
