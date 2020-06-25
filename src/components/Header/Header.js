import React from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
      </HeaderList>
    </div>
  );
};

export default Header;