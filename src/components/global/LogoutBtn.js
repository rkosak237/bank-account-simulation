import * as React from 'react';
import { connect } from "react-redux";
import { logOut } from '../../actions/auth';

//svg icon
import { LogOut } from '../../assets/svgInTag/svg';

const LogoutBtn = (props) => (
    <button
        className="btn-logout"
        onClick={props.logOut}>
        <LogOut
            classes={`btn-logout__icon`}/>
    </button>
);

export default connect(
    null,
    { logOut }
)(LogoutBtn);
