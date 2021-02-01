import { storage }  from '../../service/init'

export const getCharacters = bookId => {
  return storage
    .collection('characters')
    .where('bookid', '==', bookId)
    .get();
};

export const getCharacter = id => {
  return storage.collection('characters').doc(id).get();
};

export const createCharacter = data => {
  return storage.collection('characters').add({
    ...data
  });
};

export const updateCharacter = (data, id) => {
  return storage.collection('characters')
    .doc(id)
    .set(data)
};
