import React from 'react';
import './Header.css';

function Header(props) {
  return (
    <div className="header">
      <h2>{props.title}</h2>
    </div>
  );
}

export default Header;
