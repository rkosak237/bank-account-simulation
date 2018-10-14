import * as React from 'react';
import DashboardChart from '../components/dashboard-child-components/dashboardChart';
import Summary from '../components/dashboard-child-components/Summary';
import QuickPayments from '../components/dashboard-child-components/QuickPayments';
import Products from '../components/dashboard-child-components/Products';
import SidebarHistory from '../components/dashboard-child-components/SidebarHistory';

const Dashboard = () => (
    <div className="main__container">
        <div className="dashboard__wrapper">
            <QuickPayments/>
            <Summary />
            <DashboardChart />
            <section className="content">
                <Products />
                <SidebarHistory/>
            </section>
        </div>
    </div>
);

export default Dashboard;