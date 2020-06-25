import React from 'react';
import {NavLink, Link, useHistory} from "react-router-dom";
import styled from "styled-components";
import { signOut } from '../../service/auth/auth';
import { userLogOut } from "../../store/actions";
import { useDispatch } from "react-redux";

const HeaderList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`;

const HeaderListItem = styled.li`
  float: left;
  
  a {
    display: block;
    color: white;
    text-decoration: none;
    text-align: center;
    padding: 14px 16px
  }
`;


const Header = () => {
  const dispatch = useDispatch();
  let history = useHistory();

  const logOut = () => {
    signOut()
      .then(() => {
        dispatch(userLogOut());
        history.push('/login');
      })
      .catch(error => console.log('Sign out Error: ', error))
  };

  return (
    <div>
      <HeaderList>
        <HeaderListItem>
          <NavLink exact to='/'>Home</NavLink>
        </HeaderListItem>
        <HeaderListItem>
          <NavLink to='/register'>Register</NavLink>
        </HeaderListItem>
        <HeaderListItem>
          <NavLink to='/login'>Login</NavLink>
        </HeaderListItem>
        <HeaderListItem>
          <Link to='#' onClick={ logOut }>Logout</Link>
        </HeaderListItem>
      </HeaderList>
    </div>
  );
};

export default Header;
