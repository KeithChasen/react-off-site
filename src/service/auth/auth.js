import { auth } from '../init'

//todo: expand that with collections for storing firstName and lastName
export const signUp = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const signIn = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const checkAuth = (callback) =>
  auth.onAuthStateChanged(callback);

export const signOut = () => auth.signOut();
