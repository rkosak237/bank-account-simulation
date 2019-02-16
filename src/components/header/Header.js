import * as React from 'react';
import HeaderLoggedIn from "./Header-LoggedIn";
// import HeaderLoggedOut from "./Header-LoggedOut";
import { connect } from 'react-redux';

const Header = () => (
  <header className="header">
    <div className="header__desktop-nav header__container">
     <HeaderLoggedIn />
    </div>
  </header>
);

const AuthHeader = ({ auth }) => auth.uid ? <Header /> : (<div></div>);

const mapStateToProps = (state) => ({
    auth: state.firebase.auth
});

export default connect(mapStateToProps)(AuthHeader);