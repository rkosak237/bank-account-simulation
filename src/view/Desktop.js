import * as React from 'react';
import DesktopChart from '../components/dashboard-child-components/DesktopChart';
import Summary from '../components/dashboard-child-components/Summary';
import QuickPayments from '../components/dashboard-child-components/QuickPayments';
import Products from '../components/dashboard-child-components/Products';
import SidebarHistory from '../components/dashboard-child-components/SidebarHistory';
import Header from '../components/global/Header';

const Desktop = () => (
    <div>
        <Header />
        <div className="main__container">
            <div className="main__grid">
                <QuickPayments/>
                <Summary />
                <DesktopChart />
                <section className="desktop__content">
                    <Products />
                    <SidebarHistory/>
                </section>
            </div>
        </div>
    </div>
);

export default Desktop;