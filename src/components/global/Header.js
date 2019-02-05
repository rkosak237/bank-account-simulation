import * as React from 'react';
import Nav from './Nav'
import { NavLink, Link } from "react-router-dom";
import { EnvelopeIcon, SettingsIcon } from "../../assets/svgInTag/svg";

const iconSize = '2rem';

const Header = () => (
  <header className="header">
    <div className="header__desktop-nav header__container">
      {
      // <div className="header__wrapper">
      //     <nav className="nav">
      //       <ul className="nav-list">
      //         <li className="nav-list__item">
      //           <NavLink className="nav__text" to="/" activeClassName="selected">
      //             Home
      //           </NavLink>
      //         </li>
      //         <li className="nav-list__item">
      //           <a className="nav__text" href="#">Product</a>
      //         </li>
      //         <li className="nav-list__item">
      //           <a className="nav__text" href="#">Pricing</a>
      //         </li>
      //         <li className="nav-list__item">
      //           <NavLink className="nav__text" to="/login" activeClassName="selected">
      //             Login
      //           </NavLink>
      //         </li>
      //       </ul>
      //     </nav>
      // </div>
      }
      <div className="header__wrapper">
        <div className="header__account">
          <div className="header__logo">
            <p>Logo</p>
          </div>
          <div className="account__profile-img">
            <p>profile IMG</p>
          </div>
          <div className="account__user">
            <h3>John Doe</h3>
            <div className="account__settings">
              <EnvelopeIcon className="settings__box" size={iconSize} />
              <SettingsIcon className="settings__box" size={iconSize} />
            </div>
          </div>
        </div>
        <Nav />
        <div className="header__logout">
          <Link to="/">
            <button className="btn">Logout</button>
          </Link>
        </div>
      </div>
    </div>
  </header>
);
export default Header;