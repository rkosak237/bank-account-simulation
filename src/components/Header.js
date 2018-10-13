import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <div className="header__desktop-nav header__container">
            <div className="header__wrapper">
                <div className="header__account">
                    <div className="company__logo">
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
                <nav className="menu">
                    <a className="menu__element"href="#">Home</a>
                    <a className="menu__element"href="#">Analyse</a>
                    <a className="menu__element"href="#">Plan</a>
                    <a className="menu__element"href="#">Earn</a>
                    <a className="menu__element"href="#">Search</a>
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