import * as React from 'react';
import { connect } from "react-redux";
import { toggleNav } from '../../actions/mobileActions';

const BurgerMenu = ({toggleNav}) => (
    <button
        className="btn__mobile"
        onClick={toggleNav}>
    </button>
);

export default connect(
    null,
    { toggleNav }
)(BurgerMenu);
