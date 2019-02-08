import * as React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <nav className="nav">
    <ul className="nav-list">
      <li className="nav-list__item">
        <NavLink className="nav__text" to="/desktop" activeClassName="selected">
          Home
        </NavLink>
      </li>
      <li className="nav-list__item">
        <NavLink className="nav__text" to="/history" activeClassName="selected">
          History
        </NavLink>
      </li>
      <li className="nav-list__item">
        <a className="nav__text" href="#">
          Analyse
        </a>
      </li>
      <li className="nav-list__item">
        <NavLink className="nav__text" to="/plan" activeClassName="selected">
          Plan
        </NavLink>
      </li>
      <li className="nav-list__item">
        <NavLink
          className="nav__text"
          to="/transfer"
          activeClassName="selected"
        >
          Transfer
        </NavLink>
      </li>
      <li className="nav-list__item">
        <a className="nav__text" href="#">
          Search
        </a>
      </li>
    </ul>
  </nav>
);

