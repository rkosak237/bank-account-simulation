import * as React from 'react';
import Nav from './Nav-LoggedIn'
import { Link } from "react-router-dom";
import AccountInfo from './AccountInfo';

export default () => (
  <div className="header__wrapper">
    <AccountInfo />
    <Nav />
    <div className="header__logout">
      <Link to="/">
        <button className="btn">Logout</button>
      </Link>
    </div>
  </div>
);