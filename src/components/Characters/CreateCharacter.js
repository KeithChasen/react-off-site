import React, { useRef } from 'react';
import { createCharacter } from '../../store/actions/characters'
import { useHistory } from "react-router-dom";

const CreateCharacter = (props) => {
  const name = useRef(null);
  let history = useHistory();

  const createBookHandler = (event) => {
    event.preventDefault();

    if (!name.current.value.length)
      return;

    createCharacter({ name: name.current.value, bookid: props.bookid })
      .then(response => {
        if (response.id) {
          history.push(`/books/${props.bookid}`);
        } else {
          //todo: show error
          console.log('show error book wasn\'t created')
        }
      })
      .catch(error => {
        //todo: log error
        console.log(error, 'error create book')
      })
  };

  return (
    <div>
      <h1>Create Character</h1>
      <form onSubmit={createBookHandler}>
        <input type="text" ref={name} placeholder='Name'/>
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateCharacter;
