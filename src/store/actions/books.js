import { storage }  from '../../service/init'

export const createBook = (data) => {
  return storage.collection('books').add({
    ...data
  })
};

export const getBooks = () => {
  return storage.collection('books').get();
};