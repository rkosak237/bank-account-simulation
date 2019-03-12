import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { toggleNav } from '../../actions/mobileActions';


const NavMobile = ({ navIsOpen, toggleNav }) => (
    <div className={navIsOpen ? "nav-mobile nav-mobile--open" : "nav-mobile"}>
        <ul className="nav-list">
            <li className="nav-list__item">
                <NavLink className="nav__text" to="/desktop" activeClassName="selected" onClick={toggleNav}>
                    Home
                </NavLink>
            </li>
            <li className="nav-list__item">
                <NavLink className="nav__text" to="/history" activeClassName="selected" onClick={toggleNav}>
                    History
                </NavLink>
            </li>
            <li className="nav-list__item">
                <a className="nav__text" href="#">Analyse</a>
            </li>
            <li className="nav-list__item">
                <NavLink className="nav__text" to="/calendar" activeClassName="selected" onClick={toggleNav}>
                    Calendar
                </NavLink>
            </li>
            <li className="nav-list__item">
                <NavLink className="nav__text" to="/transfer" activeClassName="selected" onClick={toggleNav}>
                    Transfer
                </NavLink>
            </li>
        </ul>
        <div className="nav-mobile__bg" />
    </div>
);

const mapStateToProps = (state) => ({
    navIsOpen: state.mobile.navIsOpen
});

export default connect(
    mapStateToProps, { toggleNav }
)(NavMobile);