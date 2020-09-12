import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header';
import { checkAuth } from "./service/auth/auth";
import { useDispatch } from "react-redux";
import { userLoaded } from "./store/actions";
import Loader from "./components/Loader/Loader";
import { booksRoutes } from "./routes/books";
import { authRoutes } from "./routes/auth";
import { accountRoutes } from "./routes/account";

const App = () =>  {
  const dispatch = useDispatch();
  const [ loader, setLoader ] = useState(true);
  const [ isAuth, setIsAuth ] = useState(false);

  useEffect(() => {
    checkAuth(user => {
      if (user) {
        dispatch(userLoaded(user));
        setIsAuth(true);
      } else {
        dispatch(userLoaded(null));
        setIsAuth(false);
      }
      setLoader(false);
    });
  });

  const content = loader ?
    <Loader/> :
    <BrowserRouter>
      <Header isAuth={isAuth} />
      { booksRoutes }
      { accountRoutes }
      { authRoutes }
    </BrowserRouter>;

  return (
    <div className="App">
      { content }
    </div>
  );
};

export default App;
