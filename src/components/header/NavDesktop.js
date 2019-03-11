import * as React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
    <div className="nav__desktop">
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
                <a className="nav__text" href="#">Analyse</a>
            </li>
            <li className="nav-list__item">
                <NavLink className="nav__text" to="/calendar" activeClassName="selected">
                    Calendar
                </NavLink>
            </li>
            <li className="nav-list__item">
                <NavLink className="nav__text" to="/transfer" activeClassName="selected">
                    Transfer
                </NavLink>
            </li>
        </ul>
    </div>
);
