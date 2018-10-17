import * as React from 'react';
import DesktopChart from '../components/dashboard-child-components/DesktopChart';
import Summary from '../components/dashboard-child-components/Summary';
import QuickPayments from '../components/dashboard-child-components/QuickPayments';
import Products from '../components/dashboard-child-components/Products';
import SidebarHistory from '../components/dashboard-child-components/SidebarHistory';

const Desktop = () => (
    <div className="desktop__container">
        <div className="desktop__wrapper">
            <QuickPayments/>
            <Summary />
            <DesktopChart />
            <section className="desktop__content">
                <Products />
                <SidebarHistory/>
            </section>
        </div>
    </div>
);

export default Desktop;