import React, {useEffect, useState} from 'react';
import { NavLink } from "react-router-dom";
import { getBooks } from '../../../store/actions/books'
import { checkAuth } from "../../../service/auth/auth";
import { userLoaded } from "../../../store/actions";
import { useDispatch } from "react-redux";

const List = () => {
  const dispatch = useDispatch();
  const [ loader, setLoader ] = useState(true);
  const [ books, setBooks ] = useState([]);

  useEffect(() => {
    checkAuth(user => {
      if (user) {
        dispatch(userLoaded(user));
      } else {
        dispatch(userLoaded(null));
      }
      setLoader(false);
    });

    //todo: check if there books in the storage first
    fetchBooks()
      .then(response => {
        setBooks(response);
    })
  }, []);

  const bookList = books ? books.map(book =>
    ( <li id={book.id} key={book.id}>{book.data().title}</li> )
  ) : loader;

  const fetchBooks = () => getBooks()
    .then(response => {
      return response.docs;
    });

  return  loader ? loader :(
    <div>
      <h1>List</h1>
      <ul>
        { bookList }
      </ul>
      <NavLink to='/books/create'>Create Book</NavLink>
    </div>
  );
};

export default List;
