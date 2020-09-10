import React, { useRef } from 'react';
import { signIn } from '../../service/auth/auth';
import { userLoaded } from "../../store/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


const Login = () => {
  const email = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();
  let history = useHistory();


  const signInSubmitted = event => {
    event.preventDefault();
    signIn(email.current.value, password.current.value)
      .then(response => {
        const user = response.user.toJSON();

        if (user) {
          dispatch(userLoaded(user));
          history.push('/');
        }
      })
      .catch(error => console.log('Sign In Error: ', error));
  };

  return (
    <div>
      <h1>
        Login
      </h1>
      <form onSubmit={signInSubmitted}>
        <input type="email" ref={email} placeholder='email'/>
        <input type="password" ref={password} placeholder='password'/>
        <input type="submit" value='Sign In'/>
      </form>
    </div>
  );
};

export default Login;