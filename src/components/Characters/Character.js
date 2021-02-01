import React, { useEffect, useState } from 'react';
import { getCharacter, updateCharacter } from '../../store/actions/characters'

const Character = (props) => {
  const [ loader, setLoader ] = useState(true);
  const [ editMode, setEditMode ] = useState(false);
  const [ name, setName ] = useState('');
  const [ bookid, setBookId ] = useState('');

  useEffect(() => {
    //todo: check if there book in the storage first
    fetchCharacter(props.id)
      .then(response => {
        console.log(response);
        setName(response.name);
        setBookId(response.bookid);
        setLoader(false);
      })
  }, []);

  const fetchCharacter = id => getCharacter(id)
    .then(response => {
      return response.data();
    });

  const addBlock = () => {
    //todo: adds new block of text about character
    // input:title, textarea:info
    // {id, title, info}
  };

  const characterPage = name ? (
    <div>
      <h1>Character</h1>
      <h2>{name}</h2>
      <button onClick={() => setEditMode(true)}>Edit</button>
    </div>
  ) : null;

  const update = event => {
    event.preventDefault();

    if (!name.length)
      return;

    updateCharacter({ name, bookid }, props.id)
      .then(() => {
        setEditMode(false)
      })
      .catch(error => {
        console.log(`Error: ${error}`)
      });

    setEditMode(false);
  };

  const editCharacter = (
    <div>
      <h1>Edit Character</h1>
      <form onSubmit={update}>
        <input
          type="text"
          placeholder="Character's name"
          value={ name }
          onChange={e => setName(e.target.value)}
        />
        <button>Update</button>
      </form>
    </div>
  );

  return  loader ? loader : editMode ? editCharacter : characterPage;
};

export default Character;
