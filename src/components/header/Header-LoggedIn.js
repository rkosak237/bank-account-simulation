import * as React from 'react';
import Nav from './Nav-LoggedIn'
import AccountInfo from './AccountInfo';
import Button from '../global/Button';
import { connect } from "react-redux";
import { logOut } from '../../actions/auth';

const HeaderLoggedIn = (props) => (
  <div className="header__wrapper">
    <AccountInfo />
    <Nav />
    <div className="header__logout">
        <Button text={'Logout'}
        event={props.logOut}/>
    </div>
  </div>
);

export default connect(
  null,
  { logOut }
)(HeaderLoggedIn);
