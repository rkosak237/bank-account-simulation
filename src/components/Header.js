import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className="header">
        <div className="header__desktop-nav header__container">
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
                            <span className="settings__box">Mail</span>
                            <span className="settings__box">Sett</span>
                        </div>
                    </div>
                </div>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <a className="nav__text" href="#">Home</a>
                        </li>
                        <li className="nav-list__item">
                            <a className="nav__text" href="#">Analyse</a>
                        </li>
                        <li className="nav-list__item">
                            <a className="nav__text" href="#">Plan</a>
                        </li>
                        <li className="nav-list__item">
                            <a className="nav__text" href="#">Earn</a>
                        </li>
                        <li className="nav-list__item">
                            <a className="nav__text" href="#">Search</a>
                        </li>
                    </ul>
                </nav>
                <div className="header__logout">
                    <p>Logout</p>
                </div>
            </div>
        </div>
    </header>
);
export default Header;
/* <NavLink to="/" activeClassName="is-active">Header</NavLink> */