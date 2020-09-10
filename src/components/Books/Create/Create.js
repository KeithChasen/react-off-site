import React, { useRef } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { createBook, createBookSuccess } from '../../../store/actions/books'


const Create = () => {
  const title = useRef(null);
  const dispatch = useDispatch();
  let history = useHistory();

  const createBookHandler = (event) => {
    event.preventDefault();

    if (!title.current.value.length)
      return;

    createBook({ title: title.current.value })
      .then(response => {

        // console.log(response.docs, 'res create book')

        dispatch(createBookSuccess())
        history.push('/books/list');
      })
      .catch(error => {

        console.log(error, 'error create book')

        dispatch()
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
