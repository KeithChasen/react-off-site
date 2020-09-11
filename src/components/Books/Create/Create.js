import React, { useRef } from 'react';
import { useHistory } from "react-router-dom";
import { createBook } from '../../../store/actions/books'


const Create = () => {
  const title = useRef(null);
  let history = useHistory();

  const createBookHandler = (event) => {
    event.preventDefault();

    if (!title.current.value.length)
      return;

    createBook({ title: title.current.value })
      .then(response => {
        if (response.id) {
          history.push('/books/list');
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
      <h1>Create Book</h1>
      <form onSubmit={createBookHandler}>
        <input type="text" ref={title} placeholder='Title'/>
        <button>Create</button>
      </form>
    </div>
  );
};

export default Create;
