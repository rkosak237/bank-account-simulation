import * as React from 'react';
import HeaderLoggedIn from "./Header-LoggedIn";
import HeaderLoggedOut from "./Header-LoggedOut";
import { connect } from 'react-redux';

const Header = ({ auth }) => (
  <header className="header">
    <div className="header__desktop-nav header__container">
      {auth.uid ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
    </div>
  </header>
);

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  };
}

export default connect(mapStateToProps)(Header);