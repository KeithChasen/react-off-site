import React, { useRef } from 'react';
import { signUp, signIn } from '../../service/auth/auth';

const Auth = () => {

  const signUpSubmitted = event => {
    event.preventDefault();
    signUp(email.current.value, password.current.value);
  };

  const signInSubmitted = event => {
    event.preventDefault();
    signIn(signInEmail.current.value, signInPassword.current.value);
  };

  const email = useRef(null);
  const password = useRef(null);

  const signInEmail = useRef(null);
  const signInPassword = useRef(null);

  return (
    <div>
      <h1>
        Auth
      </h1>

      <form onSubmit={signUpSubmitted}>
        <input type="email" ref={email} placeholder='email'/>
        <input type="password" ref={password} placeholder='password'/>
        <input type="submit" value='Sign Up'/>
      </form>

      <form onSubmit={signInSubmitted}>
        <input type="email" ref={signInEmail} placeholder='email'/>
        <input type="password" ref={signInPassword} placeholder='password'/>
        <input type="submit" value='Sign In'/>
      </form>
    </div>
  );
};

export default Auth;