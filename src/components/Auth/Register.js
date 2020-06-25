import React, { useRef } from 'react';
import { signUp } from '../../service/auth/auth';
import { Redirect, useHistory } from "react-router-dom";
import store from "../../store/store";
import { useDispatch } from "react-redux";
import { userLoaded } from "../../store/actions";

const Register = () => {
  const email = useRef(null);
  const password = useRef(null);

  const user = store.getState().user;
  const dispatch = useDispatch();
  let history = useHistory();

  const signUpSubmitted = event => {
    event.preventDefault();
    signUp(email.current.value, password.current.value)
      .then(response => {
        const user = response.user.toJSON();

        if (user) {
          dispatch(userLoaded(user));
          history.push('/');
        }
      })
      .catch(error => console.error('Sign Up Error: ', error));
  };

  const content = user ?
    <Redirect to="/"/> :
    (
      <div>
        <h1>
          Register
        </h1>

        <form onSubmit={signUpSubmitted}>
          <input type="email" ref={email} placeholder='email'/>
          <input type="password" ref={password} placeholder='password'/>
          <input type="submit" value='Sign Up'/>
        </form>
      </div>
    );

  return  ( content );
};

export default Register;