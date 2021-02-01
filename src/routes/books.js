import { Route, Switch } from "react-router-dom";
import List from "../components/Books/List/List";
import Create from "../components/Books/Create/Create";
import Book from "../components/Books/Book/Book";
import React from "react";
import { checkAndRedirect } from "../utils/utils";
import Character from "../components/Characters/Character";
import CreateCharacter from "../components/Characters/CreateCharacter";

export const booksRoutes =
  <Switch>
    <Route path="/books/list">
        { () => checkAndRedirect(<List/>) }
    </Route>
    <Route path="/books/create">
        { () => checkAndRedirect(<Create/>) }
    </Route>

    <Route
      path="/books/:id/characters/create"
      render={
        props => checkAndRedirect(<CreateCharacter bookid={props.match.params.id} />)
      }
    >
    </Route>

    <Route
      path="/characters/:id"
      render={
        props => checkAndRedirect(<Character id={props.match.params.id}/>)
      }
    >
    </Route>

    <Route
      path="/books/:id"
      render={
        props => checkAndRedirect(<Book id={props.match.params.id} />)
      }
    >
    </Route>
  </Switch>;
