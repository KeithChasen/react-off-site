import React from 'react';
import { NavLink, Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { signOut } from '../../service/auth/auth';
import { useDispatch } from "react-redux";
import {userLoaded} from "../../store/actions";

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

const Header = ({ isAuth }) => {
  const dispatch = useDispatch();
  let history = useHistory();

  const logOut = () => {
    signOut()
      .then(() => {
        dispatch(userLoaded(null));
        history.push('/login');
      })
      .catch(error => console.log('Sign out Error: ', error))
  };

  const headerLinks = isAuth ?

    <HeaderList>
      <HeaderListItem>
        <NavLink exact to='/'>Home</NavLink>
      </HeaderListItem>
      <HeaderListItem>
        <NavLink exact to='/books/list'>List</NavLink>
      </HeaderListItem>
      <HeaderListItem>
        <Link to='#' onClick={ logOut }>Logout</Link>
      </HeaderListItem>
    </HeaderList> :

    <HeaderList>
      <HeaderListItem>
        <NavLink to='/register'>Register</NavLink>
      </HeaderListItem>
      <HeaderListItem>
        <NavLink to='/login'>Login</NavLink>
      </HeaderListItem>
    </HeaderList>;

  return (
    <div>
      { headerLinks }
    </div>
  );
};

export default Header;
