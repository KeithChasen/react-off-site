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

const App = () =>  {

  const dispatch = useDispatch();
  const [ loader, setLoader ] = useState(true);

  checkAuth(user => {
    if (user) {
      dispatch(userLoaded(user));
    }
    setLoader(false);
  });

  const content = loader ?
    <Loader/> :
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
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
