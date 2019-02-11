import * as React from 'react';
import Nav from './Nav'
import { Link } from "react-router-dom";

export default () => (
  <div className="header__wrapper">
    <Nav />
    <div className="header__logout">
      <Link to="/login">
        <button className="btn">Login</button>
      </Link>
    </div>
  </div>
);