import React, {useEffect, useState} from 'react';
import { NavLink } from "react-router-dom";
import { getBook } from '../../../store/actions/books'
import { getCharacters } from '../../../store/actions/characters'

const Book = (props) => {
  const [ loader, setLoader ] = useState(true);
  const [ book, setBook ] = useState(null);
  const [ characters, setCharacters ] = useState(null);

  useEffect(() => {
    fetchBook(props.id)
      .then(response => {
        setBook(response);
        setLoader(false);
      });

    fetchCharacters(props.id)
      .then(response => {
        const characters = response.map(character => ({
            ...character.data(),
            id: character.id
          }));

        setCharacters(characters);
      });
  }, []);

  const fetchCharacters = bookId =>
    getCharacters(bookId)
    .then(response => {
      return response.docs;
    });

  const fetchBook = id => getBook(id)
    .then(response => {
      return response.data();
    });

  const charactersList =
    characters ?
    characters.map(character =>
      <NavLink to={`/characters/${character.id}`} key={character.id}>
        {character.name}
      </NavLink>
    ) :
    null;

  return  loader ? loader :(
    <div>
      <h1>Book</h1>
      <h2>{book.title}</h2>
      <NavLink to={`/books/${props.id}/characters/create`}>
        Create Character
      </NavLink>
      <div>
        <h3>Characters</h3>
        <ul>{ charactersList}</ul>
      </div>
    </div>
  );
};

export default Book;
