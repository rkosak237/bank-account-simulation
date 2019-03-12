import * as React from 'react';
import NavMobile from './NavMobile';
import NavDesktop from './NavDesktop';


export default () => (
    <nav className="nav">
        <NavDesktop />
        <NavMobile />
    </nav>
);
