import React, { useRef } from 'react';
import { signUp } from '../../service/auth/auth';
import { Redirect } from "react-router-dom";
import store from "../../store/store";

const Register = () => {
  const email = useRef(null);
  const password = useRef(null);

  const user = store.getState().user;

  if (user) {
    return <Redirect to="/"/>
  }

  const signUpSubmitted = event => {
    event.preventDefault();
    signUp(email.current.value, password.current.value)
      .then(response => console.log('Sign Up Response: ', response))
      .catch(error => console.error('Sign Up Error: ', error));
  };

  return (
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
};

export default Register;