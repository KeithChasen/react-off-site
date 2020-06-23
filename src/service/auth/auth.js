import * as firebase from "firebase";
import { firebaseConfig } from '../../config'

firebase.initializeApp(firebaseConfig);

export const signUp = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(response => console.log(`Sign Up Response: ${response}`))
    .catch(error => console.error(`Sign Up Error: ${error}`));