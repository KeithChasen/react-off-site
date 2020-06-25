import * as firebase from "firebase";
import { firebaseConfig } from '../../config';

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export const signUp = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const signIn = (email, password) =>
  auth.signInWithEmailAndPassword(email, password)
    .then(response => console.log('Sign In Response: ', response))
    .catch(error => console.log('Sign In Error: ', error));

export const checkAuth = (callback) => auth.onAuthStateChanged(callback);
