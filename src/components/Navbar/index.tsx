import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CartIcon } from '../../assets/cartIcon.svg'

import './styles.scss'

function Navbar() {
  return (
    <div id="navbar" className={"navbar"}>
      <nav id="top-navbar">
        <ul className={"navList"}>
          <li className={"navItem"}>
            <Link to="/">
              <CartIcon />
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
