import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from "./components/Main/Main";
import Auth from "./components/Auth/Auth";

const App = props =>  {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route path="/auth">
            <Auth/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
