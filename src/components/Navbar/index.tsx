import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss'

function Navbar() {
  return (
    <div id="navbar" className={"navbar"}>
      <nav id="top-navbar">
        <ul className={"navList"}>
          <Link to="/">
            <li className={"navItem"}>
              Calculadora
            </li>
          </Link>
          <Link to="/tutorial">
            <li className={"navItem"}>
              Como Usar
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
