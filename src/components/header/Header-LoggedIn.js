import * as React from 'react';
import NavLoggedIn from './NavLoggedIn'
import AccountInfo from './AccountInfo';
import { connect } from "react-redux";
import { logOut } from '../../actions/auth';
import LogoutBtn from '../global/LogoutBtn';
import BurgerMenu from './BurgerMenu';


const HeaderLoggedIn = (props) => (
  <div className="header__wrapper">
    <BurgerMenu/>
    <AccountInfo />
    <NavLoggedIn />
    <LogoutBtn />
  </div>
);

export default connect(
  null,
  { logOut }
)(HeaderLoggedIn);
