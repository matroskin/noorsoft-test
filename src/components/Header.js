import React from 'react';
import { Nav } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header(props) {
  return (
    <div className="header">
      <Nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/info">Info</NavLink>
      </Nav>
      <h2>{props.title}</h2>
    </div>
  );
}

export default Header;
