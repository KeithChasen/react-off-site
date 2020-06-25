import * as firebase from "firebase";
import { firebaseConfig } from '../../config';

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export const signUp = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const signIn = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const checkAuth = (callback) =>
  auth.onAuthStateChanged(callback);

export const signOut = () => auth.signOut();
