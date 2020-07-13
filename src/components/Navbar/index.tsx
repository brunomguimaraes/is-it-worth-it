import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss'

function Navbar() {
  return (
    <div id="navbar" className={"navbar"}>
      <nav id="top-navbar">
        <ul className={"navList"}>
          <li className={"navItem"}>
            <Link to="/">
              Calculadora
          </Link>
          </li>
          <li className={"navItem"}>
            <Link to="/tutorial">
              Como Usar
          </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
