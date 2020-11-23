import { storage }  from '../../service/init'

export const updateAccount = (id, updateObject) => {
  return storage.collection('users').doc(id).set(updateObject);
};

export const getAccount = (id) => {
  return storage.collection('users').doc(id).get();
};