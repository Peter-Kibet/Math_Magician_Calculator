import React from 'react';
import { Link } from 'react-router-dom';
import './navigationMenu.scss';

function NavigationMenu() {
  return (
    <nav>
      <h1>Math Magicians</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
