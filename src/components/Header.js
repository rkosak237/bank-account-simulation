import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <div className="header__desktop-nav">
            <NavLink to="/" activeClassName="is-active">Header</NavLink>
        </div>
    </header>
);
export default Header;