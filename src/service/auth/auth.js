import * as firebase from "firebase";
import { firebaseConfig } from '../../config'

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export const signUp = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password)
    .then(response => console.log('Sign Up Response: ', response))
    .catch(error => console.error('Sign Up Error: ', error));

export const signIn = (email, password) =>
  auth.signInWithEmailAndPassword(email, password)
    .then(response => console.log('Sign In Response: ', response))
    .catch(error => console.log('Sign In Error: ', error));

export const checkAuth = () => {
  auth.onAuthStateChanged(user => {
    if (user) {
      console.log('Logged in User: ', user)
    } else {
      console.log('No user')
    }
  });
};