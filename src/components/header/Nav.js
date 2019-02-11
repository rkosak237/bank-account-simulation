import * as React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <nav className="nav">
    <ul className="nav-list">
      <li className="nav-list__item">
        <NavLink className="nav__text" to="/" activeClassName="selected">
          Home
        </NavLink>
      </li>
      <li className="nav-list__item">
        <NavLink className="nav__text" to="/" activeClassName="selected">
          Product
        </NavLink>
      </li>
      <li className="nav-list__item">
        <a className="nav__text" href="#">
          Version
        </a>
      </li>
      <li className="nav-list__item">
        <NavLink className="nav__text" to="/" activeClassName="selected">
          Newsletter
        </NavLink>
      </li>
    </ul>
  </nav>
);

