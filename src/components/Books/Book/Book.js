import React, {useEffect, useState} from 'react';
import { NavLink } from "react-router-dom";
import { getBook } from '../../../store/actions/books'

const Book = (props) => {
  const [ loader, setLoader ] = useState(true);
  const [ book, setBook ] = useState(null);

  useEffect(() => {
    //todo: check if there book in the storage first
    fetchBook(props.id)
      .then(response => {
        setBook(response);
        setLoader(false);
      })
  }, []);

  const fetchBook = id => getBook(id)
    .then(response => {
      return response.data();
    });

  return  loader ? loader :(
    <div>
      <h1>Book</h1>
      <h2>{book.title}</h2>
      <NavLink to='/books/character/create'>Create Character</NavLink>
    </div>
  );
};

export default Book;
