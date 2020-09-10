import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header';
import { checkAuth } from "./service/auth/auth";
import { useDispatch } from "react-redux";
import { userLoaded } from "./store/actions";
import Loader from "./components/Loader/Loader";
import { booksRoutes } from "./routes/books";
import { authRoutes } from "./routes/auth";

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

  const content = loader ?
    <Loader/> :
    <BrowserRouter>
      <Header/>
      { booksRoutes }
      { authRoutes }
    </BrowserRouter>;

  return (
    <div className="App">
      { content }
    </div>
  );
};

export default App;
