import * as firebase from "firebase";
import { firebaseConfig } from '../../config'

firebase.initializeApp(firebaseConfig);

export const signUp = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(response => console.log('Sign Up Response: ', response))
    .catch(error => console.error('Sign Up Error: ', error));

export const signIn = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(response => console.log('Sign In Response: ', response))
    .catch(error => console.log('Sign In Error: ', error));
