import React, { useEffect, useState } from 'react';
import { getCharacter, updateCharacter } from '../../store/actions/characters'

const Character = (props) => {
  const [ loader, setLoader ] = useState(true);
  const [ editMode, setEditMode ] = useState(false);
  const [ name, setName ] = useState('');
  const [ bookid, setBookId ] = useState('');

  const [ showAddBlock, toggleShowAddBlock] = useState(false);

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

  const addBlock = () => {
    //todo: adds new block of text about character
    // input:title, textarea:info
    // {id, title, info}


    // check textarea already added to form (button should be disabled)
    // ...

    toggleShowAddBlock(true);

  };

  const saveNewBlock = e => {
    e.preventDefault();
    console.log('saved');
    toggleShowAddBlock(false)
  };

  const newBlock = (
    <form onSubmit={saveNewBlock}>
      <label htmlFor="new-block-title"></label>
      <input id="new-block-title" type="text"/>

      <label htmlFor="new-block-body">New Block Body:</label>
      <textarea name="new-block-body" id="new-block-body" cols="30" rows="10"></textarea>

      <button>Save</button>
    </form>
  );

  const editCharacter = (
    <div>
      <h1>Edit Character</h1>
      <form id='edit-character' onSubmit={update}>
        <label htmlFor="char-name">Name:</label>
        <input
          id='char-name'
          type="text"
          placeholder="Character's name"
          value={ name }
          onChange={e => setName(e.target.value)}
        />

        <ul>
          {/* todo: add list of blocks*/}
        </ul>

        <button>Update</button>
      </form>

      { showAddBlock ? newBlock : null }
      { showAddBlock ? null : (<button onClick={() => toggleShowAddBlock(true)}>Add Block</button>) }

    </div>
  );

  return  loader ? loader : editMode ? editCharacter : characterPage;
};

export default Character;
