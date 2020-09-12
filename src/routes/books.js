import { Route, Switch } from "react-router-dom";
import List from "../components/Books/List/List";
import Create from "../components/Books/Create/Create";
import Book from "../components/Books/Book/Book";
import React from "react";
import { checkAndRedirect } from "../utils/utils";

export const booksRoutes =
  <Switch>
    <Route path="/books/list">
        { () => checkAndRedirect(<List/>) }
    </Route>
    <Route path="/books/create">
        { () => checkAndRedirect(<Create/>) }
    </Route>
    <Route
      path="/books/:id"
      render={
          props => checkAndRedirect(<Book id={props.match.params.id} />)
      }
    >
    </Route>

    <Route path="/book/$id/characters">
    </Route>

    <Route path="/book/$id/characters/$id">
    </Route>
  </Switch>;
