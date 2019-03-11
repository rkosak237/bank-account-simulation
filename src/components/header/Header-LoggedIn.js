import * as React from 'react';
import NavLoggedIn from './NavLoggedIn'
import AccountInfo from './AccountInfo';
import { connect } from "react-redux";
import { logOut } from '../../actions/auth';
import LogoutBtn from '../global/LogoutBtn';


const HeaderLoggedIn = (props) => (
  <div className="header__wrapper">
    <button className="btn__mobile"></button>
    <AccountInfo />
    <NavLoggedIn />
    <LogoutBtn />
  </div>
);

export default connect(
  null,
  { logOut }
)(HeaderLoggedIn);
