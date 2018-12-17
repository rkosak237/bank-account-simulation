import * as React from 'react';
import Nav from './Nav'

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
                <Nav />
                <div className="header__logout">
                    <p>Logout</p>
                </div>
            </div>
        </div>
    </header>
);
export default Header;