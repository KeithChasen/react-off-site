import { storage }  from '../../service/init'

export const getCharacters = bookId => {
  return storage
    .collection('books')
    .doc(bookId)
    .collection('characters')
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
