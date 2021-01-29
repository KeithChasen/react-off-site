import React, { useEffect, useState } from 'react';
import { getCharacter } from '../../store/actions/characters'

const Character = (props) => {
  const [ loader, setLoader ] = useState(true);
  const [ character, setCharacter ] = useState(null);
  const [ editMode, setEditMode ] = useState(false);

  useEffect(() => {
    //todo: check if there book in the storage first
    fetchCharacter(props.id)
      .then(response => {
        console.log(response, 'character')

        setCharacter(response);
        setLoader(false);
      })
  }, []);

  const fetchCharacter = id => getCharacter(id)
    .then(response => {
      return response.data();
    });

  const getCharacterInfo = id => {

  };

  const addBlock = () => {
    //todo: adds new block of text about character
    // input:title, textarea:info
    // {id, title, info}
  };

  const characterPage = (
    <div>
      <h1>Character</h1>
      <h2>{character.name}</h2>
      <button onClick={() => setEditMode(true)}>Edit</button>
    </div>
  );

  const editCharacter = (
    <div>
      <h1>Edit Character</h1>
      <h2>{character.name}</h2>
      <button onClick={() => setEditMode(false)}>Save</button>
    </div>
  );

  return  loader ? loader : editMode ? editCharacter : characterPage;
};

export default Character;
