import React, { useRef } from 'react';
import { signUp } from '../../service/auth/auth';

const Auth = () => {

  const signUpSubmitted = event => {
    event.preventDefault();

    console.log(`Email: ${email.current.value}, Password: ${password.current.value}`)

    signUp(email.current.value, password.current.value);
  };

  const email = useRef(null);
  const password = useRef(null);

  return (
    <div>
      <h1>
        Auth
      </h1>

      <form onSubmit={signUpSubmitted}>
        <input type="email" ref={email} placeholder='email'/>
        <input type="password" ref={password} placeholder='password'/>
        <input type="submit"/>
      </form>
    </div>
  );
};

export default Auth;