import * as React from 'react';
import HeaderLoggedIn from "./Header-LoggedIn";
// import HeaderLoggedOut from "./Header-LoggedOut";

export default () => (
  <header className="header">
    <div className="header__desktop-nav header__container">
      <HeaderLoggedIn />
    </div>
  </header>
);
